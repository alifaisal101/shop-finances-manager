import { Module } from '@nestjs/common';
import { SubscriptionsService } from './services/subscriptions.service';
import { SubscriptionsController } from './controllers/subscriptions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Subscription,
  SubscriptionSchema,
} from './entities/subscriptions.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Subscription.name, schema: SubscriptionSchema },
    ]),
  ],
  providers: [SubscriptionsService],
  controllers: [SubscriptionsController],
})
export class SubscriptionsModule {}
