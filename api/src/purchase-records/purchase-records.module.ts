import { Module } from '@nestjs/common';
import { PurchaseRecordsController } from './controllers/purchase-records.controller';
import { PurchaseRecordsService } from './services/purchase-records.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PurchaseRecord,
  PurchaseRecordSchema,
} from './entities/purchase-records.entity';
import { CompaniesService } from 'src/companies/services/companies.service';
import { TransactionsService } from 'src/transactions/services/transactions.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PurchaseRecord.name, schema: PurchaseRecordSchema },
    ]),
    CompaniesService,
    TransactionsService,
  ],
  controllers: [PurchaseRecordsController],
  providers: [PurchaseRecordsService],
})
export class PurchaseRecordsModule {}
