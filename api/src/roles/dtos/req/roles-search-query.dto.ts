import { Type } from 'class-transformer';
import { IsNotEmptyObject, IsOptional, ValidateNested } from 'class-validator';
import { DateSearchDto } from 'src/dtos/date-search.dto';
import { StringSearchDto } from 'src/dtos/string-search.dto';
import { DateSearchIn, StringSearchIn } from 'src/types/search-query';

export class RolesSearchQuery {
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => StringSearchDto)
  name?: StringSearchIn;
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => StringSearchDto)
  description?: StringSearchIn;
  @IsOptional()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => DateSearchDto)
  createdAt?: DateSearchIn;
}
