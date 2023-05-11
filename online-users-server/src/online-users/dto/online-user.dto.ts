import { IUserId } from 'src/interfaces/user-id.interface';

export interface OnlineUserDto {
  Username: string;
  UserAgent: string;
  RegisterTime: Date;
  LoginCount: number;
}
