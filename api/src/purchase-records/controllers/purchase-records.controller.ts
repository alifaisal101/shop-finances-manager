import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PurchaseRecordsService } from '../services/purchase-records.service';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostPurchaseRecord } from '../dtos/req/post-purchase-record.dto';
import { PatchPurchaseRecord } from '../dtos/req/patch-purchase-record.dto';
import { Types } from 'mongoose';
import { isMongoId } from 'class-validator';

@Controller('purchase-records')
export class PurchaseRecordsController {
  constructor(private purchaseRecordsSrv: PurchaseRecordsService) {}

  @Post('fetch-records')
  async fetchRecords(@Body() body: FetchRecordsDto) {
    return await this.purchaseRecordsSrv.findAll(body);
  }

  @Post('add-record')
  async addRecord(@Body() body: PostPurchaseRecord) {
    return await this.purchaseRecordsSrv.create(body);
  }

  @Patch('modify-record')
  async modifyRecord(@Body() body: PatchPurchaseRecord) {
    return await this.purchaseRecordsSrv.update(body);
  }

  @Delete('delete-record/:recordId')
  async deleteRecord(@Param('recordId') recordId: string) {
    try {
      if (!recordId || !isMongoId(recordId)) {
        throw new Error('Invalid recordId');
      }
    } catch (err) {
      throw new BadRequestException(err);
    }

    return await this.purchaseRecordsSrv.delete(new Types.ObjectId(recordId));
  }
}
