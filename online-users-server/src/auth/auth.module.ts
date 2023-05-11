import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { OnlineUsersModule } from 'src/online-users/online-users.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      global: true,
      useFactory: () => ({
        secret: process.env.SECRET,
      }),
    }),
    UsersModule,
    OnlineUsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
