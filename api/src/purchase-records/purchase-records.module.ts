import { Module } from '@nestjs/common';
import { PurchaseRecordsController } from './controllers/purchase-records.controller';
import { PurchaseRecordsService } from './services/purchase-records.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PurchaseRecord,
  PurchaseRecordSchema,
} from './entities/purchase-records.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PurchaseRecord.name, schema: PurchaseRecordSchema },
    ]),
  ],
  controllers: [PurchaseRecordsController],
  providers: [PurchaseRecordsService],
})
export class PurchaseRecordsModule {}
