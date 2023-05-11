import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
import * as bcrypt from 'bcrypt';
export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User extends Document<Types.ObjectId> {
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

UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.Password = await bcrypt.hash(this.Password, salt);
    return next();
  } catch (error) {
    return next(error);
  }
});
