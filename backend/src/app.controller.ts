import { Controller, Get, Post, Body, Req, Res, HttpVersionNotSupportedException } from '@nestjs/common';
import { AppService } from 'src/app.service';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

@Controller()
export class AppController {
  private today_count = 0;
  
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api/get')
  getEntranceLocation(@Req() req, @Res({passthrough: true}) res): object {// 1. 요청의 쿠키에서 플래그 확인
    
    const visitedToday = req.cookies['visited_today'];
    dayjs.extend(utc);
    dayjs.extend(timezone)
    const nowKst = dayjs().tz('Asia/Seoul');

    if(!visitedToday){
      console.log('여기 왔니?')
      this.today_count++;
      const midnightKst = nowKst.endOf('day').toDate();

      res.cookie('visited_today', 'true', {
        expires: midnightKst,
        httpOnly:true,
        secure: true,
        sameSite:'none'
      })
    }

    console.log('today is: ', visitedToday, this.today_count);


    return this.appService.getEntranceLocation();
  }

  @Post('api/set')
  setEntranceLocation(@Body() body: any): object {
    return this.appService.setEntranceLocation(body);
  }
}
