import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.module';
import { CreateUserDTO } from "./dto/intex";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}
  async hashPassword(password) {
    return bcrypt.hash(password, 10);
  }
  async createUser(dto): Promise<CreateUserDTO> {
    dto.password = await this.hashPassword(dto.password);
    await this.userRepository.create(dto);
    return dto;
  }
}
