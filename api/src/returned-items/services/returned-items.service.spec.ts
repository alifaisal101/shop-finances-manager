import { Test, TestingModule } from '@nestjs/testing';
import { ReturnedItemsService } from './returned-items.service';

describe('ReturnedItemsService', () => {
  let service: ReturnedItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReturnedItemsService],
    }).compile();

    service = module.get<ReturnedItemsService>(ReturnedItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
