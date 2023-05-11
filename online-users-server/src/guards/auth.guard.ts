import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Types } from 'mongoose';
import { Observable } from 'rxjs';
import { TokenConetnt } from 'src/interfaces/token-content.interface';
import { User } from 'src/schemas/user.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();

    return this.validateRequest(request);
  }
  async validateRequest(req: Request): Promise<boolean> {
    const accessToken = req.cookies?.accessToken;
    if (!accessToken) return false;
    const decodeAccessToken = this.jwtService.verify<TokenConetnt>(accessToken);
    if (!decodeAccessToken) return false;

    //check if the user still in db
    const user = await this.usersService.findUserById(decodeAccessToken.userId);
    if (!user) return false;
    req.userId = user._id;
    return true;
  }
}
