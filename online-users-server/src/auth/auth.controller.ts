import { Controller, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() RegisterDto: RegisterDto) {
    return this.authService.register(RegisterDto);
  }

  @Post('login')
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body() LoginDto: LoginDto,
  ) {
    await this.authService.login(LoginDto, response);
  }
  @UseGuards(AuthGuard)
  @Get('logout')
  logout(@Res({ passthrough: true }) response: Response) {
    return this.authService.logout(response);
  }
}
