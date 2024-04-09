import { IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  firstName: string;
  @IsString()
  secondName: string;
  @IsString()
  email: string;
  @IsString()
  phone: number;
  @IsString()
  password: string;
}
