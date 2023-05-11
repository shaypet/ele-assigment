import { Module } from '@nestjs/common';
import { OnlineUsersService } from './online-users.service';
import { OnlineUsersController } from './online-users.controller';
import { OnlineUser, OnlineUserSchema } from 'src/schemas/online-users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: OnlineUser.name, schema: OnlineUserSchema },
    ]),
    UsersModule,
  ],
  controllers: [OnlineUsersController],
  providers: [OnlineUsersService],
  exports: [OnlineUsersService],
})
export class OnlineUsersModule {}
