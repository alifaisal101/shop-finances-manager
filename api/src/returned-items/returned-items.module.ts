import { Module } from '@nestjs/common';
import { ReturnedItemsController } from './controllers/returned-items.controller';
import { ReturnedItemsService } from './services/returned-items.service';

@Module({
  controllers: [ReturnedItemsController],
  providers: [ReturnedItemsService]
})
export class ReturnedItemsModule {}
