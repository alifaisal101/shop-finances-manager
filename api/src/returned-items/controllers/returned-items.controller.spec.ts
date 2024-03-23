import { Test, TestingModule } from '@nestjs/testing';
import { ReturnedItemsController } from './returned-items.controller';

describe('ReturnedItemsController', () => {
  let controller: ReturnedItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReturnedItemsController],
    }).compile();

    controller = module.get<ReturnedItemsController>(ReturnedItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
