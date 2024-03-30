import { Type } from 'class-transformer';
import {
  IsAlpha,
  IsArray,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { Types } from 'mongoose';
import { TransactionDto } from 'src/transactions/dtos/transaction.dto';
import { IsPaymentPeriod } from 'src/validators/is-payment-period.validator';
import { IsSex } from 'src/validators/is-sex.validator';

export class PatchEmployeeDto {
  @IsMongoId()
  @IsNotEmpty()
  employeeId: Types.ObjectId;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  phoneNumber: string;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  salary: number;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsSex()
  sex: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @IsPaymentPeriod()
  paymentPeriod: string;
}
