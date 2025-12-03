import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from 'src/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('api/set')
  setData(@Body() body: any): string {
    return this.appService.setData(body);
  }
}
