import { IsBoolean, IsNumber, IsOptional, Max, Min } from 'class-validator';

export class FetchRecordsDto {
  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(5)
  @Max(50)
  recordsPerPage?: number;

  @IsOptional()
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(1)
  page?: number;

  @IsOptional()
  @IsBoolean()
  all?: boolean;
}
