import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserEntity } from './models/user.module';
import { CreateUserDTO } from './dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserEntity) private readonly userRepository: typeof UserEntity,
  ) {}
  async hashPassword(password) {
    return bcrypt.hash(password, 10);
  }
  async findUserByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
  async createUser(dto): Promise<CreateUserDTO> {
    dto.password = await this.hashPassword(dto.password);
    const newUser = {
      firstName: dto.firstName,
      username: dto.username,
      email: dto.email,
      password: dto.password,
      phone: dto.phone,
    };
    await this.userRepository.create(newUser);
    return dto;
  }

  async getUsers(firstName: string): Promise<UserEntity[]> {
    return this.userRepository.findAll({ where: { firstName } });
  }
}
