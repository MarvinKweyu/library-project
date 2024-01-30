import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// so that not all fields are required

export class UpdateUserDto extends PartialType(CreateUserDto) {}
