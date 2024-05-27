import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmptyObject,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { FetchRecordsDto } from 'src/dtos/fetch-records.dto';
import { UsersSearchQuery } from './users-search-query.dto';
import { UsersSearchQueryIn } from 'src/types/users';

export class FetchUsersDto extends FetchRecordsDto {
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => UsersSearchQuery)
  searchQuery?: UsersSearchQueryIn;

  @IsBoolean()
  includeRoles: boolean;
}
