import { Module } from '@nestjs/common';
import { EarningsController } from './controllers/earnings.controller';
import { EarningsService } from './services/earnings.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Earnings, EarningsSchema } from './entities/earnings.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Earnings.name, schema: EarningsSchema },
    ]),
  ],
  controllers: [EarningsController],
  providers: [EarningsService],
})
export class EarningsModule {}
