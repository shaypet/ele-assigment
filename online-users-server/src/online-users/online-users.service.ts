import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model, Types } from 'mongoose';
import { IUserId } from 'src/interfaces/user-id.interface';
import { OnlineUser } from 'src/schemas/online-users.schema';
import { OnlineUsersDto } from './dto/online-users.dto';
import { OnlineUserDto } from './dto/online-user.dto';

@Injectable()
export class OnlineUsersService {
  constructor(
    @InjectModel(OnlineUser.name) private onlineUserModel: Model<OnlineUser>,
  ) {}

  async addOrUpdateEntry(userId: IUserId, reuqest: Request) {
    await this.onlineUserModel.findOneAndUpdate(
      { User: userId },
      {
        User: userId,
        UserAgent: reuqest.headers['user-agent'],
        IP: reuqest.socket.remoteAddress,
        LastUpdate: new Date(),
      },
      { upsert: true },
    );
  }
  async removeEntry(userId: IUserId) {
    await this.onlineUserModel.deleteMany({ User: userId });
  }
  async getOnlineUser(userId: IUserId): Promise<OnlineUserDto> {
    const startFrom = new Date(new Date().getTime() - 6 * 60 * 1000);
    const rawOnlineUsers: OnlineUser[] = await this.onlineUserModel
      .aggregate([
        { $match: { LastUpdate: { $gte: startFrom } } },
        {
          $lookup: {
            from: 'users',
            localField: 'User',
            foreignField: '_id',
            as: 'User',
          },
        },
        { $unwind: '$User' },
        { $limit: 1 },
      ])
      .exec();
    if (!rawOnlineUsers[0]) return null;
    return {
      LoginCount: rawOnlineUsers[0].User.LoginCount,
      UserAgent: rawOnlineUsers[0].UserAgent,
      RegisterTime: rawOnlineUsers[0].User.RegisterTime,
      Username: rawOnlineUsers[0].User.UserName,
    } as OnlineUserDto;
  }
  async getOnlineUsers(): Promise<OnlineUsersDto[]> {
    const startFrom = new Date(new Date().getTime() - 6 * 60 * 1000);
    const rawOnlineUsers: OnlineUser[] = await this.onlineUserModel
      .aggregate([
        { $match: { LastUpdate: { $gte: startFrom } } },
        {
          $lookup: {
            from: 'users',
            localField: 'User',
            foreignField: '_id',
            as: 'User',
          },
        },
        { $unwind: '$User' },
      ])
      .exec();
    return rawOnlineUsers.map(
      (onlineUser) =>
        ({
          UserId: onlineUser.User._id,
          LastLogin: onlineUser.User.LastLogin,
          LastUpdate: onlineUser.LastUpdate,
          UserIP: onlineUser.IP,
          LoginTime: onlineUser.User.LoginTime,
          Username: onlineUser.User.UserName,
        } as OnlineUsersDto),
    );
  }
}
