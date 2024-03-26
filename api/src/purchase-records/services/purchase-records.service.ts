import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  PurchaseRecord,
  PurchaseRecordDocument,
} from '../entities/purchase-records.entity';
import { Model, Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostPurchaseRecord } from '../dtos/req/post-purchase-record.dto';
import { PatchPurchaseRecord } from '../dtos/req/patch-purchase-record.dto';
import { CompaniesService } from 'src/companies/services/companies.service';
import { TransactionsService } from 'src/transactions/services/transactions.service';

@Injectable()
export class PurchaseRecordsService {
  constructor(
    @InjectModel(PurchaseRecord.name)
    private purchaseRecordModel: Model<PurchaseRecordDocument>,
    private companiesSrv: CompaniesService,
    private transactionsSrv: TransactionsService,
  ) {}

  async findAll(options: FetchRecordsDto) {
    const page = options.page || 1;
    const recordsPerPage = options.recordsPerPage || 10;
    const skip = (page - 1) * recordsPerPage;

    try {
      return await this.purchaseRecordModel
        .find()
        .skip(skip)
        .limit(recordsPerPage);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to fetch purchase records.',
      );
    }
  }

  private async create(purchaseRecord: PurchaseRecord) {
    try {
      return await this.purchaseRecordModel.create(purchaseRecord);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create a purchase record.',
      );
    }
  }

  private async update(newPurchaseRecord: PatchPurchaseRecord) {
    const purchaseRecordId = newPurchaseRecord.purchaseRecordId;
    delete newPurchaseRecord.purchaseRecordId;

    try {
      return await this.purchaseRecordModel.findByIdAndUpdate(
        purchaseRecordId,
        { ...newPurchaseRecord, updatedAt: new Date() },
      );
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to update the purchase record.',
      );
    }
  }

  private async delete(purchaseRecordId: Types.ObjectId) {
    try {
      return await this.purchaseRecordModel.findByIdAndDelete(purchaseRecordId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete the purchase record.',
      );
    }
  }

  async addRecord(purchaseRecord: PostPurchaseRecord) {
    if (purchaseRecord.companyId) {
      throw new BadRequestException();
    }

    const company =
      (await this.companiesSrv.findById(purchaseRecord.companyId)) || false;

    if (!company) {
      throw new BadRequestException();
    }

    const purchaseRecordTransactions = purchaseRecord.transactions.map(
      (transaction) => {
        return {
          ...transaction,
          section: 'purchaseRecords',
          type: 'expense',
          companyName: company.name,
        };
      },
    );
    const addTransactionResults = await this.transactionsSrv.addTransactions(
      purchaseRecordTransactions,
    );

    delete purchaseRecord.transactions;
    const purchaseRecordResult = await this.create({
      ...purchaseRecord,
      transactions: addTransactionResults.transactionsResult.map((t) => t._id),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    company.purchaseRecords.push(purchaseRecordResult._id);

    try {
      await company.save();
      return {
        company,
        purchaseRecord: purchaseRecordResult,
        transactions: addTransactionResults.transactionsResult,
      };
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to add purchaseRecord to the company.',
      );
    }
  }
}
