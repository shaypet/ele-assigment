import { Types } from 'mongoose';

export interface GetUserDto {
  UserName: string;
  Email: string;
  LoginCount: number;
  Id: Types.ObjectId;
}
