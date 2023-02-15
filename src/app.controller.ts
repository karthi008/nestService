import { AppService } from './app.service';
import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Get,
  Res,
  Param,
  Request,
  Delete,
} from '@nestjs/common';
import { productPojo, findProductPojo } from './pojo/userPojo';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/addUser')
  async addUser(@Body() body: productPojo, @Request() req, @Res() response) {
    const result = await this.appService.createUser(body);
    return response.status(HttpStatus.OK).send(result);
  }

  @Post('/findProduct')
  async findByRegNoAndMake(
    @Body() body: findProductPojo,
    @Request() req,
    @Res() response,
  ) {
    const result = await this.appService.findByRegNoAndMake(body);
    return response.status(HttpStatus.OK).send(result);
  }

  @Get('/getMake/:make')
  async getProductByMake(
    @Param('make') make: string,
    @Request() req,
    @Res() response,
  ) {
    const result = await this.appService.getProductByMake(make);
    return response.status(HttpStatus.OK).send(result);
  }

  @Get('/getRegNo/:regNo')
  async getUserById(
    @Param('regNo') regNo: string,
    @Request() req,
    @Res() response,
  ) {
    const result = await this.appService.getProductByRegNo(regNo);
    return response.status(HttpStatus.OK).send(result);
  }

  @Delete('/deleteRegNo/:regNo')
  async deleteUserById(
    @Param('regNo') regNo: string,
    @Request() req,
    @Res() response,
  ) {
    const result = await this.appService.deleteProductByRegNo(regNo);
    return response.status(HttpStatus.OK).send(result);
  }
}
