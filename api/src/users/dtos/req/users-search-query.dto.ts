import { Type } from 'class-transformer';
import { IsNotEmptyObject, IsOptional, ValidateNested } from 'class-validator';
import { DateSearchDto } from 'src/dtos/date-search.dto';
import { ObjectIdSearchDto } from 'src/dtos/objectid-search.dto';
import { StringSearchDto } from 'src/dtos/string-search.dto';
import {
  DateSearchIn,
  ObjectIdIn,
  StringSearchIn,
} from 'src/types/search-query';

export class UsersSearchQuery {
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => StringSearchDto)
  username?: StringSearchIn;
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => ObjectIdSearchDto)
  roleId?: ObjectIdIn;
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => StringSearchDto)
  phoneNumber?: StringSearchIn;
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => StringSearchDto)
  fullName?: StringSearchIn;
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => StringSearchDto)
  notes?: StringSearchIn;
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => StringSearchDto)
  workShift?: StringSearchIn;
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => DateSearchDto)
  createdAt?: DateSearchIn;
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => DateSearchDto)
  updatedAt?: DateSearchIn;
}
