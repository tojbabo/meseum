import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/get')
  getEntranceLocation(): object{
    return this.appService.getEntranceLocation()
  }

  @Post('api/set')
  setEntranceLocation(@Body() body: any): object {
    return this.appService.setEntranceLocation(body);
  }
}
