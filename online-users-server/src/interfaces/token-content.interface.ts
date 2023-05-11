import { Types } from 'mongoose';
import { IUserId } from './user-id.interface';

export interface TokenConetnt {
  userId: IUserId;
}
