import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class ObjectIdSearchDto {
  @IsNotEmpty()
  @IsMongoId()
  searchString: Types.ObjectId;

  @IsNotEmpty()
  @IsString()
  searchType: string;
}
