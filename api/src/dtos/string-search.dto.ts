import { IsNotEmpty, IsString } from 'class-validator';

export class StringSearchDto {
  @IsNotEmpty()
  @IsString()
  searchString: string;

  @IsNotEmpty()
  @IsString()
  searchType: string;
}
