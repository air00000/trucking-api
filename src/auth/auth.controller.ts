import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDTO, SignInUserDTO } from '../user/dto';
import { AuthUserResponse } from './response';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  register(@Body() dto: CreateUserDTO) {
    return this.authService.signUpUser(dto);
  }

  @Post('signin')
  login(@Body() dto: SignInUserDTO): Promise<AuthUserResponse> {
    return this.authService.signInUser(dto);
  }
}
