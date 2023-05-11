import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Types } from 'mongoose';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller('api/users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  getMe(@UserId() userId: Types.ObjectId) {
    return this.usersService.getUserById(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: Types.ObjectId) {
    return this.usersService.getUserById(id);
  }
}
