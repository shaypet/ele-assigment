import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User extends Document {
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
