import { Test, TestingModule } from '@nestjs/testing';
import { OtherSpendingsController } from './other-spendings.controller';

describe('OtherSpendingsController', () => {
  let controller: OtherSpendingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OtherSpendingsController],
    }).compile();

    controller = module.get<OtherSpendingsController>(OtherSpendingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
