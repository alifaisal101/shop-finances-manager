import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsOptional,
  IsString,
  Validate,
  ValidateNested,
} from 'class-validator';
import { PermissionArrayValidator } from 'src/decorators/validators/permissions-validator.decorator';

export class UpdateSingleRoleDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  role: string;

  @IsOptional()
  @IsString()
  description?: string;

  @ArrayMinSize(1, { message: 'At least one permission must be provided' })
  @IsArray()
  @Validate(PermissionArrayValidator)
  permissions: string[];
}

export class UpdateRolesDto {
  @ValidateNested({ each: true })
  @Type(() => UpdateSingleRoleDto)
  @ArrayMinSize(1, { message: 'At least one role must be provided' })
  roles: UpdateSingleRoleDto[];
}
