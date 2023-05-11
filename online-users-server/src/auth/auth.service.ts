import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/schemas/user.schema';
import { Response } from 'express';
import { SiteException } from 'src/exception/site.exception';
import { SiteErrorDictionary } from 'src/dictionaries/site-error.dictionary';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  register(RegisterDto: RegisterDto) {
    return this.usersService.create(RegisterDto);
  }

  async login(loginDto: LoginDto, response: Response) {
    const user: User = await this.usersService.getUserByEmail(loginDto.Email);

    if (!user)
      throw new SiteException(SiteErrorDictionary.LOGIN_INFO_INCORRECT);

    const isMatch = await bcrypt.compare(loginDto.Password, user.Password);

    if (!isMatch)
      throw new SiteException(SiteErrorDictionary.LOGIN_INFO_INCORRECT);

    await this.setAuthCookie(user, response);
  }
  async setAuthCookie(user: User, res: Response) {
    const accessToken = await this.jwtService.signAsync({
      userId: user._id.toString(),
    });
    res.cookie('accessToken', accessToken, {
      // expires: new Date(new Date().getTime() + 30 * 1000), // act as session without expires
      //sameSite: 'strict',   // for development
      httpOnly: true,
    });
  }
  logout(response: Response) {
    response.clearCookie('accessToken');
  }
}
