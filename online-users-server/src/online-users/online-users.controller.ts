import { Controller } from '@nestjs/common';
import { OnlineUsersService } from './online-users.service';

@Controller('online-users')
export class OnlineUsersController {
  constructor(private readonly onlineUsersService: OnlineUsersService) {}
}
