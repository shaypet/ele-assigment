import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  register(RegisterDto: RegisterDto) {
    return this.usersService.create(RegisterDto);
  }

  login(loginDto: LoginDto) {}

  logout() {}
}
