import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { OnlineUsersModule } from './online-users/online-users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, OnlineUsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
