import { Types } from 'mongoose';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { OtherSpendingsService } from './../services/other-spendings.service';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostOtherSpendingDto } from '../dtos/req/post-other-spendings.dto';
import { PatchOtherSpendingDto } from '../dtos/req/patch-other-spendings.dto';
import { isMongoId } from 'class-validator';

@Controller('other-spendings')
export class OtherSpendingsController {
  constructor(private otherSpendingSrv: OtherSpendingsService) {}

  @Post('fetch-spendings')
  async fetchSpendings(@Body() body: FetchRecordsDto) {
    return await this.otherSpendingSrv.findAll(body);
  }

  @Post('add-spending')
  async addSpending(@Body() body: PostOtherSpendingDto) {
    // return await this.otherSpendingSrv.create(body);
  }

  @Patch('modify-spending')
  async modifySpending(@Body() body: PatchOtherSpendingDto) {
    // return await this.otherSpendingSrv.update(body);
  }

  @Delete('delete-spending/:spendingId')
  async deleteSpending(@Param('spendingId') spendingId: string) {
    try {
      if (!spendingId || !isMongoId(spendingId)) {
        throw new Error('Invalid spending id');
      }

      // return await this.otherSpendingSrv.delete(new Types.ObjectId(spendingId));
    } catch (err) {
      throw new BadRequestException(err);
    }
  }
}
