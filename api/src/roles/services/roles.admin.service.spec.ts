import { Test, TestingModule } from '@nestjs/testing';
import { RolesAdminService } from './roles.admin.service';

describe('RolesAdminService', () => {
  let service: RolesAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesAdminService],
    }).compile();

    service = module.get<RolesAdminService>(RolesAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
