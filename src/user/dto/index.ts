import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  firstName: string;
  @IsString()
  secondName: string;
  @IsString()
  email: string;
  @IsString()
  phone: string;
  @IsString()
  password: string;
}
export class SignInUserDTO {
  @IsString()
  email: string;
  @IsString()
  password: string;
}
