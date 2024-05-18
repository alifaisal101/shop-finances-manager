import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsAlpha,
  IsAlphanumeric,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateUserDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsMongoId()
  @IsNotEmpty()
  roleId: Types.ObjectId;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  phoneNumber?: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

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

export class RegisterUsersDto {
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  @ArrayMinSize(1, { message: 'At least one user must be provided' })
  users: CreateUserDto[];
}
