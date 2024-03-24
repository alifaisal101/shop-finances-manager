import { Types } from 'mongoose';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EarningsService } from '../services/earnings.service';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostEarningsDto } from '../dtos/req/post-earnings.dto';
import { PatchEarningsDto } from '../dtos/req/patch-earnings.dto';
import { isMongoId } from 'class-validator';

@Controller('earnings')
export class EarningsController {
  constructor(private earningSrv: EarningsService) {}

  @Post('fetch-earnings')
  async fetchEarnings(@Body() body: FetchRecordsDto) {
    return await this.earningSrv.findAll(body);
  }

  @Post('add-earning')
  async addEarning(@Body() body: PostEarningsDto) {
    return await this.earningSrv.create(body);
  }

  @Patch('modify-earning')
  async modifyEarning(@Body() body: PatchEarningsDto) {
    return await this.earningSrv.update(body);
  }

  @Delete('delete-earning')
  async deleteEarning(@Param() earningId: string) {
    try {
      if (!earningId || !isMongoId(earningId)) {
        throw new Error('Invalid EarningId');
      }
    } catch (err) {
      throw new BadRequestException(err);
    }

    return await this.earningSrv.delete(new Types.ObjectId(earningId));
  }
}
