import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: 'A valid role required' })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
