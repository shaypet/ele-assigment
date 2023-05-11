import { Controller, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Get, Post, Body } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request, Response } from 'express';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserId } from 'src/decorators/user-id.decorator';
import { IUserId } from 'src/interfaces/user-id.interface';

@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() RegisterDto: RegisterDto) {
    return this.authService.register(RegisterDto);
  }

  @Post('login')
  async login(
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
    @Body() LoginDto: LoginDto,
  ) {
    await this.authService.login(LoginDto, request, response);
  }
  @UseGuards(AuthGuard)
  @Get('logout')
  logout(
    @UserId() userId: IUserId,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.logout(userId, response);
  }
}
