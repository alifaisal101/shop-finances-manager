import { Body, Controller, Get, Post } from '@nestjs/common';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { TransactionsService } from '../services/transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsSrv: TransactionsService) {}
}
