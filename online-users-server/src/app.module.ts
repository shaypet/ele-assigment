import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OnlineUsersModule } from './online-users/online-users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, OnlineUsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
