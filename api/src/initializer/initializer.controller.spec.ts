import { Test, TestingModule } from '@nestjs/testing';
import { InitializerController } from './initializer.controller';

describe('InitializerController', () => {
  let controller: InitializerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InitializerController],
    }).compile();

    controller = module.get<InitializerController>(InitializerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
