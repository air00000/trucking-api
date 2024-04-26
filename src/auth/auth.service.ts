import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateUserDTO, SignInUserDTO } from '../user/dto';
import { AppError } from '../common/constants/errors';
import * as bcrypt from 'bcrypt';
import { AuthUserResponse } from './response';
import { UserEntity } from '../user/models/user.module';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signUpUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
    const existUser = await this.userService.findUserByEmail(dto.email);
    if (existUser) throw new BadRequestException(AppError.USER_EXIST);
    return this.userService.createUser(dto);
  }

  async signInUser(dto: SignInUserDTO): Promise<AuthUserResponse> {
    const existUser: UserEntity = await this.userService.findUserByEmail(
      dto.email,
    );
    if (!existUser) throw new BadRequestException(AppError.USER_NOT_EXIST);
    const validatePassword = await bcrypt.compare(
      dto.password,
      existUser.password,
    );
    if (!validatePassword) throw new BadRequestException(AppError.WRONG_DATA);
    return new AuthUserResponse(
      existUser.firstName,
      existUser.secondName,
      existUser.password,
      existUser.email,
      existUser.phone,
    );
  }
}
