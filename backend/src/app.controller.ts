import { Controller, Get, Post, Body, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService, COOKIE_VISIT } from 'src/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('api/set/count')
  async setTodayCount(@Req() req, @Res({ passthrough: true }) res: Response) {
    const visitedToday = req.cookies[COOKIE_VISIT];
    await this.appService.setTodayCount(visitedToday, res);
  }

  @Get('api/get/count')
  getTodayCount(): number {
    return this.appService.getTodayCount();
  }

  @Get('api/get')
  getEntranceLocation(): object {
    return this.appService.getEntranceLocation();
  }

  @Post('api/set')
  setEntranceLocation(@Body() body: any): object {
    return this.appService.setEntranceLocation(body);
  }
}
