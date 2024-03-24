import { Types } from 'mongoose';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { PostCompanyDto } from '../dtos/req/post-company.dto';
import { PatchCompanyDto } from '../dtos/req/patch-company.dto';
import { isMongoId } from 'validator';
import { CompaniesService } from '../services/companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesSrv: CompaniesService) {}
  @Post('fetch-companies')
  async fetchCompanies(@Body() body: FetchRecordsDto) {
    return await this.companiesSrv.findAll(body);
  }

  @Post('add-company')
  async addCompany(@Body() body: PostCompanyDto) {
    return await this.companiesSrv.create(body);
  }

  @Patch('modify-company')
  async modifyCompany(@Body() body: PatchCompanyDto) {
    return await this.companiesSrv.update(body);
  }

  @Delete('delete-company/:companyId')
  async deleteCompany(@Param('companyId') companyId: string) {
    try {
      if (!companyId || !isMongoId(companyId)) {
        throw new Error('Invalid CompanyId');
      }
    } catch (err) {
      throw new BadRequestException(err);
    }

    return await this.companiesSrv.delete(new Types.ObjectId(companyId));
  }
}
