import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
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
import { CreatePurchaseRecordDto } from '../dtos/create-purchase-record.dto';

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

  private async findById(purchaseRecordId: Types.ObjectId) {
    try {
      return this.purchaseRecordModel.findById(purchaseRecordId);
    } catch (err) {
      throw new InternalServerErrorException('Failed to find purchaseRecord');
    }
  }

  private async create(purchaseRecord: CreatePurchaseRecordDto) {
    try {
      return await this.purchaseRecordModel.create({
        ...purchaseRecord,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
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

    let paidTo = 0;
    const purchaseRecordTransactions = purchaseRecord.transactions.map(
      (transaction) => {
        paidTo += transaction.amount;
        return {
          ...transaction,
          section: 'purchaseRecords',
          type: 'expense',
          companyName: company.name,
        };
      },
    );

    let debt = purchaseRecord.price - paidTo;

    const addTransactionResults = await this.transactionsSrv.addTransactions(
      purchaseRecordTransactions,
    );

    delete purchaseRecord.transactions;
    const purchaseRecordResult = await this.create({
      ...purchaseRecord,
      paidTo,
      debt,
      transactions: addTransactionResults.transactionsResult.map((t) => t._id),
    });

    company.purchaseRecords.push(purchaseRecordResult._id);
    company.totalDebt += debt;
    company.totalPaidTo += paidTo;

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

  async modifyPurchaseRecord(newPurchaseRecord: PatchPurchaseRecord) {
    const purchaseRecord =
      (await this.findById(newPurchaseRecord.purchaseRecordId)) || false;

    if (!purchaseRecord) {
      throw new NotFoundException('No purchaseRecord was found.');
    }

    const company =
      (await this.companiesSrv.findById(purchaseRecord.companyId)) || false;
    if (!company) {
      throw new InternalServerErrorException(
        'No company associated with purchaseRe.0cord was found. This is an unexpected behavior. Something went wrong.',
      );
    }

    let addedDebt = 0;
    let addedPaidTo = 0;

    // New Transactions
    if (newPurchaseRecord?.newTransactions?.length > 0) {
      const newPurchaseRecordTransactions =
        newPurchaseRecord.newTransactions.map((transaction) => {
          addedPaidTo += transaction.amount;
          return {
            ...transaction,
            section: 'purchaseRecords',
            type: 'expense',
            companyName: company.name,
          };
        });

      const addTransactionResults = await this.transactionsSrv.addTransactions(
        newPurchaseRecordTransactions,
      );

      const addedTransactionsIds = addTransactionResults.transactionsResult.map(
        (t) => t._id,
      );
      purchaseRecord.transactions.concat(addedTransactionsIds);
    }

    // Modified Transactions

    if (newPurchaseRecord?.modifiedTransactions?.length > 0) {
      const modifiedTransactionsResult = [];
      for (let i = 0; i < newPurchaseRecord.modifiedTransactions.length; i++) {
        const modifiedTransaction = newPurchaseRecord.modifiedTransactions[i];
        const transactionDb = await this.transactionsSrv.findById(
          modifiedTransaction.transactionId,
        );
        addedPaidTo = modifiedTransaction.amount - transactionDb.amount;
        modifiedTransactionsResult.push(
          this.transactionsSrv.modifyTransaction(modifiedTransaction),
        );
      }
    }

    // Removed Transactions
    if (newPurchaseRecord?.removedTransactions?.length > 0) {
      const removedTransactionsIds = [];

      for (let i = 0; i < newPurchaseRecord.removedTransactions.length; i++) {
        const transactionToRemoveId = newPurchaseRecord.removedTransactions[i];
        const transactionDb = await this.transactionsSrv.findById(
          transactionToRemoveId,
        );

        removedTransactionsIds.push(transactionToRemoveId);
        addedPaidTo -= transactionDb.amount;
      }
      const removedTransactionsResult =
        await this.transactionsSrv.removeTransactions(
          newPurchaseRecord.removedTransactions,
        );

      purchaseRecord.transactions = purchaseRecord.transactions.filter(
        (transactionId) => !removedTransactionsIds.includes(transactionId),
      );
    }

    if (newPurchaseRecord.price) {
      addedDebt = newPurchaseRecord.price - purchaseRecord.price;
      purchaseRecord.price = newPurchaseRecord.price;
    }

    purchaseRecord.debt += addedDebt;
    purchaseRecord.paidTo += addedPaidTo;

    if (newPurchaseRecord.number) {
      purchaseRecord.number = newPurchaseRecord.number;
    }

    if (newPurchaseRecord.paymentType) {
      purchaseRecord.paymentType = newPurchaseRecord.paymentType;
    }

    if (newPurchaseRecord.recordDate) {
      purchaseRecord.recordDate = newPurchaseRecord.recordDate;
    }

    try {
      return await purchaseRecord.save();
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to modify purchaseRecord.',
      );
    }
  }

  async removePurchaseRecord(
    purchaseRecordId: Types.ObjectId,
    deleteAllRelatedTransactions: boolean,
  ) {
    try {
      const purchaseRecord =
        await this.purchaseRecordModel.findById(purchaseRecordId);

      if (deleteAllRelatedTransactions) {
        this.transactionsSrv.removeTransactions(purchaseRecord.transactions);
      }

      return await this.delete(purchaseRecord._id);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to find purchaseRecord.',
      );
    }
  }
}
