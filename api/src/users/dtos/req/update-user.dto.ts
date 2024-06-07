import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsAlphanumeric,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Types } from 'mongoose';

export class UpdateUserDto {
  @IsMongoId()
  @IsNotEmpty()
  _id: Types.ObjectId;

  @IsOptional()
  @IsAlphanumeric()
  @IsNotEmpty()
  @IsString()
  username?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  password?: string;

  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  roleId?: Types.ObjectId;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  fullName?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  workShift?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  photoUrl?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  notes?: string;
}

export class UpdateUsersDto {
  @ValidateNested({ each: true })
  @Type(() => UpdateUserDto)
  @ArrayMinSize(1, { message: 'At least one user must be provided' })
  users: UpdateUserDto[];
}
