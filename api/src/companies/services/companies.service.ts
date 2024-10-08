import { Model, Types } from 'mongoose';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company, CompanyDocument } from '../entities/companies.entity';
import { PostCompanyDto } from '../dtos/req/post-company.dto';
import { PatchCompanyDto } from '../dtos/req/patch-company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
  ) {}
  async findById(companyId: Types.ObjectId) {
    try {
      return await this.companyModel.findById(companyId);
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to fetch company.');
    }
  }

  async findAll(options: FetchRecordsDto) {
    const page = options.page || 1;
    const recordsPerPage = options.recordsPerPage || 10;
    const skip = (page - 1) * recordsPerPage;

    try {
      return await this.companyModel.find().skip(skip).limit(recordsPerPage);
    } catch (err) {
      throw new InternalServerErrorException(err, 'Failed to fetch companies.');
    }
  }

  async create(company: PostCompanyDto) {
    try {
      return await this.companyModel.create(company);
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
      return await this.companyModel.findByIdAndUpdate(companyId, newCompany);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to update the company.',
      );
    }
  }

  async delete(companyId: Types.ObjectId) {
    try {
      return await this.companyModel.findByIdAndDelete(companyId);
    } catch (err) {
      throw new InternalServerErrorException(
        err,
        'Failed to delete the company.',
      );
    }
  }
}
