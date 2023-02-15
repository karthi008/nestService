import { Injectable } from '@nestjs/common';
import { productPojo, findProductPojo } from './pojo/userPojo';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(request: productPojo) {
    const user = await new this.userModel(request).save();
    return user;
  }

  async getProductByMake(make: string) {
    const productsList = await this.userModel
      .find({
        make: make,
      })
      .limit(50);
    return productsList ? productsList : [];
  }

  async getProductByRegNo(regNo: string) {
    const productsList = await this.userModel
      .find({
        regNo: regNo,
      })
      .limit(50);
    return productsList ? productsList : [];
  }

  async findByRegNoAndMake(request: findProductPojo) {
    const productsList = await this.userModel.findOne(request);
    return productsList ? productsList : {};
  }

  async deleteUserById(userId: string) {
    const userStatus = await this.userModel
      .deleteOne(new Types.ObjectId(userId))
      .exec();
    return userStatus;
  }
}
