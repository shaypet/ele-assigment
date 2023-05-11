import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Request } from 'express';
import { Model, Types } from 'mongoose';
import { IUserId } from 'src/interfaces/user-id.interface';
import { OnlineUser } from 'src/schemas/online-users.schema';

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
}
