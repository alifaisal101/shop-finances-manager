import { IsDate } from 'class-validator';

export class PostFetchChartsDataDto {
  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;
}
