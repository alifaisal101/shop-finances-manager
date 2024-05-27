import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { Types } from 'mongoose';

export class RemoveRolesDto {
  @IsArray()
  @ValidateNested()
  @Type(() => Types.ObjectId)
  rolesIds: Types.ObjectId[];
}
