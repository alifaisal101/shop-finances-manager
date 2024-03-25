import { IsDate, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';
import { IsTransactionType } from 'src/validators/is-transaction-type.validator';

export class AddTransactionDto {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  amount: number;

  @IsString()
  @IsNotEmpty()
  section: string;

  @IsString()
  @IsNotEmpty()
  @IsTransactionType()
  type: string;

  @IsString()
  @IsNotEmpty()
  companyName?: string;

  @IsDate()
  transactionDate: Date;
}
