import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create-user')
  createUsers(@Body() dto: CreateUserDTO) {
    return this.userService.createUser(dto);
  }

  @Get('get-user')
  getUsers() {
    return this.userService.getUsers('Giorno');
  }
}
