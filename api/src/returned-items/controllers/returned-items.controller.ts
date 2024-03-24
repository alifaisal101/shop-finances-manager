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
import { ReturnedItemsService } from '../services/returned-items.service';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostReturnedItemsDto } from '../dtos/req/post-returned-items.dto';
import { PatchReturnedItemsDto } from '../dtos/req/patch-returned-items.dto';
import { isMongoId } from 'class-validator';

@Controller('returned-items')
export class ReturnedItemsController {
  constructor(private returnedItemsSrv: ReturnedItemsService) {}

  @Post('fetch-returns')
  async fetchReturns(@Body() body: FetchRecordsDto) {
    return await this.returnedItemsSrv.findAll(body);
  }

  @Post('add-return')
  async addReturn(@Body() body: PostReturnedItemsDto) {
    return await this.returnedItemsSrv.create(body);
  }

  @Patch('modify-return')
  async modifyReturn(@Body() body: PatchReturnedItemsDto) {
    return await this.returnedItemsSrv.update(body);
  }

  @Delete('delete-return/:returnItemsId')
  async deleteReturn(@Param('returnItemsId') returnItemsId: string) {
    try {
      if (!returnItemsId || !isMongoId(returnItemsId)) {
        throw new Error('Invalid returnItemsId');
      }
    } catch (err) {
      throw new BadRequestException(err);
    }

    return await this.returnedItemsSrv.delete(
      new Types.ObjectId(returnItemsId),
    );
  }
}
