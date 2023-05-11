import { IUserId } from 'src/interfaces/user-id.interface';

export interface OnlineUsersDto {
  UserId: IUserId;
  Username: string;
  LoginTime: Date;
  LastUpdate: Date;
  LastLogin: Date;
  UserIP: string;
}
