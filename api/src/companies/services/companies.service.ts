import { Types } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CompaniesService {
  async delete(companyId: Types.ObjectId) {}
}
