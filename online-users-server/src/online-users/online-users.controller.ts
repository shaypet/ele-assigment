import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { OnlineUsersService } from './online-users.service';
import { UserId } from 'src/decorators/user-id.decorator';
import { IUserId } from 'src/interfaces/user-id.interface';
import { Request } from 'express';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('online-users')
@UseGuards(AuthGuard)
export class OnlineUsersController {
  constructor(private readonly onlineUsersService: OnlineUsersService) {}

  @Get()
  update(@UserId() userId: IUserId, @Req() request: Request) {
    this.onlineUsersService.addOrUpdateEntry(userId, request);
  }
}
