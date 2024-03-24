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
import { IsMongoId } from 'class-validator';
import { isMongoId } from 'validator';
import { CompaniesService } from '../services/companies.service';

@Controller('companies')
export class CompaniesController {
  constructor(private companiesSrv: CompaniesService) {}
  @Post('fetch-companies')
  fetchCompanies(@Body() body: FetchRecordsDto) {}

  @Post('add-company')
  addCompany(@Body() body: PostCompanyDto) {}

  @Patch('modify-company')
  modifyCompany(@Body() body: PatchCompanyDto) {}

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
