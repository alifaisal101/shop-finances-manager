import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';
import { TransactionDto } from 'src/transactions/dtos/transaction.dto';

export class PostEarningsDto {
  @IsDate()
  earningDate: Date;

  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  amount: number;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsArray()
  @ValidateNested()
  @Type(() => TransactionDto)
  transactions: TransactionDto[];
}
