import { Model, Types } from 'mongoose';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company, CompanyDocument } from '../entities/companies.enetity';
import { PostCompanyDto } from '../dtos/req/post-company.dto';
import { PatchCompanyDto } from '../dtos/req/patch-company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}
  async findAll(options: FetchRecordsDto) {
    const page = options.page || 1;
    const recordsPerPage = options.recordsPerPage || 10;
    const skip = (page - 1) * recordsPerPage;

    try {
      await this.companyModel.find().skip(skip).limit(recordsPerPage);
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to fetch companies.');
    }
  }

  async create(company: PostCompanyDto) {
    try {
      await this.companyModel.create(company);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to create a company.',
      );
    }
  }

  async update(newCompany: PatchCompanyDto) {
    const companyId = newCompany.companyId;
    delete newCompany.companyId;

    try {
      await this.companyModel.findByIdAndUpdate(companyId, newCompany);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to update the company.',
      );
    }
  }

  async delete(companyId: Types.ObjectId) {
    try {
      await this.companyModel.findByIdAndDelete(companyId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete the company.',
      );
    }
  }
}
