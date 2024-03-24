import { Module } from '@nestjs/common';
import { ReturnedItemsController } from './controllers/returned-items.controller';
import { ReturnedItemsService } from './services/returned-items.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ReturnedItem,
  ReturnedItemSchema,
} from './entities/returned-items.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ReturnedItem.name, schema: ReturnedItemSchema },
    ]),
  ],
  controllers: [ReturnedItemsController],
  providers: [ReturnedItemsService],
})
export class ReturnedItemsModule {}
