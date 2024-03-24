import { IsDate, IsNumber, Min } from 'class-validator';

export class TransactionDto {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(0)
  amount: number;

  @IsDate()
  transactionDate: Date;
}
