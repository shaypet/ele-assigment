import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  UserName: string;

  @Prop({ required: true })
  Password: string;

  @Prop({ required: true })
  Email: string;

  @Prop({ default: null })
  LastLogin: Date;

  @Prop({ default: 0 })
  LoginCount: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
