import { Module } from '@nestjs/common';
import { PurchaseRecordsController } from './controllers/purchase-records.controller';
import { PurchaseRecordsService } from './services/purchase-records.service';

@Module({
  controllers: [PurchaseRecordsController],
  providers: [PurchaseRecordsService]
})
export class PurchaseRecordsModule {}
