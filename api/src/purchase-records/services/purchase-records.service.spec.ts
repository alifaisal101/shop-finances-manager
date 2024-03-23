import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseRecordsService } from './purchase-records.service';

describe('PurchaseRecordsService', () => {
  let service: PurchaseRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseRecordsService],
    }).compile();

    service = module.get<PurchaseRecordsService>(PurchaseRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
