import { Test, TestingModule } from '@nestjs/testing';
import { OtherSpendingsService } from './other-spendings.service';

describe('OtherSpendingsService', () => {
  let service: OtherSpendingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OtherSpendingsService],
    }).compile();

    service = module.get<OtherSpendingsService>(OtherSpendingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
