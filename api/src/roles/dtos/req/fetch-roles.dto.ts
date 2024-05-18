import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmptyObject,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { RolesSearchQueryIn } from 'src/types/roles';
import { RolesSearchQuery } from './roles-search-query.dto';

export class FetchRolesDto extends FetchRecordsDto {
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => RolesSearchQuery)
  searchQuery?: RolesSearchQueryIn;

  @IsOptional()
  @IsBoolean()
  includeUsers: boolean;
}
