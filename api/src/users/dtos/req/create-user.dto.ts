import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateUserDto {
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
