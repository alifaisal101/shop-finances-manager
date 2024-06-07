import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { Types } from 'mongoose';

export class RemoveUsersDto {
  @IsArray()
  @ValidateNested()
  @Type(() => Types.ObjectId)
  usersIds: Types.ObjectId[];
}
