import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class DateSearchDto {
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @IsDate()
  @IsNotEmpty()
  endDate: Date;

  @IsNotEmpty()
  @IsString()
  searchType: string;
}
