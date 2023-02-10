import { Injectable } from '@nestjs/common';
import { userPojo } from './pojo/userPojo';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(request: userPojo) {
    const user = await new this.userModel(request).save();
    return user;
  }

  async getUserById(userId: string) {
    const user: User = await this.userModel
      .findById(new Types.ObjectId(userId))
      .exec();
    return user;
  }

  async deleteUserById(userId: string) {
    const userStatus = await this.userModel
      .deleteOne(new Types.ObjectId(userId))
      .exec();
    return userStatus;
  }
}
