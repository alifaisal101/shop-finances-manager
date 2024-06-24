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
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Types } from 'mongoose';
import { IsFullName } from 'src/validators/is-fullname-validator';

export class CreateUserDto {
  @MaxLength(26)
  @MinLength(3)
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
  @IsFullName()
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
