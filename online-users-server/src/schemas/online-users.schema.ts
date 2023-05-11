import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import { User } from './user.schema';
export type OnlineUserDocument = HydratedDocument<OnlineUser>;

@Schema({ timestamps: true })
export class OnlineUser extends Document<Types.ObjectId> {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  User: User;

  @Prop()
  UserAgent: string;

  @Prop()
  LastUpdate: Date;

  @Prop()
  IP: string;
}

export const OnlineUserSchema = SchemaFactory.createForClass(OnlineUser);
