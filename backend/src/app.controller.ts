import { Controller, Get, Post, Body, Req, Res, HttpVersionNotSupportedException } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { VisitorService } from './visitor/visitor.service';

@Controller()
export class AppController {  
  constructor(private readonly appService: AppService, private readonly visitorService: VisitorService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/get/count')
  getTodayCount(): number{
    return this.visitorService.getTodayCount();
  }

  @Get('api/get')
  getEntranceLocation(@Req() req, @Res({passthrough: true}) res): object {
    return this.appService.getEntranceLocation();
  }

  @Post('api/set')
  setEntranceLocation(@Body() body: any): object {
    return this.appService.setEntranceLocation(body);
  }
}
