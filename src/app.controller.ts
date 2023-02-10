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
import { userPojo } from './pojo/userPojo';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/addUser')
  async addUser(@Body() body: userPojo, @Request() req, @Res() response) {
    const result = await this.appService.createUser(body);
    return response.status(HttpStatus.OK).send(result);
  }

  @Get('/getUser/:userId')
  async getUserById(
    @Param('userId') userId: string,
    @Request() req,
    @Res() response,
  ) {
    const result = await this.appService.getUserById(userId);
    return response.status(HttpStatus.OK).send(result);
  }

  @Delete('/deleteUser/:userId')
  async deleteUserById(
    @Param('userId') userId: string,
    @Request() req,
    @Res() response,
  ) {
    const result = await this.appService.deleteUserById(userId);
    return response.status(HttpStatus.OK).send(result);
  }
}
