import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Param,
  Post,
} from '@nestjs/common';
import { BudgetsService } from '../services/budgets.service';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { isMongoId } from 'class-validator';
import { Types } from 'mongoose';

@Controller('budgets')
export class BudgetsController {
  constructor(private budgetSrv: BudgetsService) {}

  @Post('fetch-budgets')
  async fetchBudgets(@Body() body: FetchRecordsDto) {
    return await this.budgetSrv.fetchBudgets(body);
  }

  @Delete('delete-budget/:budgetId')
  async deleteBudget(@Param('budgetId') budgetId: string) {
    try {
      if (!budgetId || !isMongoId(budgetId)) {
        throw new Error('Invalid BudgetId');
      }
    } catch (err) {
      throw new BadRequestException(err);
    }

    return await this.budgetSrv.deleteBudget(new Types.ObjectId(budgetId));
  }
}
