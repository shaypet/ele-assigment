import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/schemas/user.schema';
import { GetUserDto } from './dto/get-user.reuqest';
import { SiteException } from 'src/exception/site.exception';
import { SiteErrorDictionary } from 'src/dictionaries/site-error.dictionary';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto): Promise<any> {
    //check all fields
    if (
      !createUserDto.Email ||
      !createUserDto.Email.trim().length ||
      !createUserDto.Password ||
      !createUserDto.Password.trim().length ||
      !createUserDto.UserName ||
      !createUserDto.UserName.trim().length
    )
      throw new SiteException(SiteErrorDictionary.REGISTER_Fill_ALL_FIELDS);

    const checkEmail = await this.checkIfEmailUnique(createUserDto.Email);
    if (checkEmail) throw new SiteException(SiteErrorDictionary.EMAIL_EXISTS);

    const newUser = new this.userModel(createUserDto);

    await newUser.save();

    return null;
  }

  async getUserByEmail(email: string): Promise<User> {
    const user: User = await this.userModel.findOne({ Email: email }).exec();
    return user;
  }

  async checkIfEmailUnique(email: string): Promise<boolean> {
    const user: User = await this.getUserByEmail(email);
    if (user) return true;
    return false;
  }

  async findUserById(id: Types.ObjectId): Promise<User> {
    const user: User = await this.userModel.findById(id).exec();
    return user;
  }
  async getUserById(id: Types.ObjectId): Promise<GetUserDto> {
    const user: User = await this.findUserById(id);
    if (!user) return null;
    return {
      Id: user._id,
      UserName: user.UserName,
      Email: user.Email,
      LoginCount: user.LoginCount,
    };
  }
}
