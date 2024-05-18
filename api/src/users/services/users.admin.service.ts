import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class UsersAdminService {
  constructor(private usersSrv: UsersService) {}
}
