import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseRecordsController } from './purchase-records.controller';

describe('PurchaseRecordsController', () => {
  let controller: PurchaseRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseRecordsController],
    }).compile();

    controller = module.get<PurchaseRecordsController>(PurchaseRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
