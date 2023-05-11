import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Types } from 'mongoose';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserId } from 'src/decorators/user-id.decorator';
import { IUserId } from 'src/interfaces/user-id.interface';

@Controller('api/users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  getMe(@UserId() userId: IUserId) {
    return this.usersService.getUserById(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: IUserId) {
    return this.usersService.getUserById(id);
  }
}
