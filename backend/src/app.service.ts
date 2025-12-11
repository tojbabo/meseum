import { Injectable } from '@nestjs/common';
import {Response} from 'express';
import * as fs from 'fs';
import * as path from 'path';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export const COOKIE_VISIT = 'cookie_visit';

@Injectable()
export class AppService {
  private readonly filepath = path.join(process.cwd(), 'tempconfig.txt');
  private lastlocation = { x: 0, y: 0 };
  private todaycount = 0

  private getMidnightKst(): Date { 
    dayjs.extend(utc);
    dayjs.extend(timezone)
    const nowKst = dayjs().tz('Asia/Seoul');
    const midnightKst = nowKst.endOf('day').toDate();
    return midnightKst;
}

  onModuleInit():void {
    this.loadMetafile();
  }
  
  private loadMetafile() : void{
    const key = 'entrancelocation';

    if (fs.existsSync(this.filepath)) {
      const content = fs.readFileSync(this.filepath, 'utf8');
      const lines = content.split('\n');

      lines.forEach(line=>{
        const [key,value] = line.split(":");

        if(key == 'entrancelocation'){
          const [x,y] = value.split(',');
          this.lastlocation.x = parseInt(x);
          this.lastlocation.y = parseInt(y);
        }
      });
    }
  }

  
  getHello(): string {
    return 'Hello World!';
  }

  getTodayCount(): number{
    return this.todaycount;
  }

  async setTodayCount(visitedToday:string, res: Response){
    if (visitedToday) return;

    this.todaycount++;
    
    res.cookie(COOKIE_VISIT, 'true', {
        expires: this.getMidnightKst(),
        httpOnly: true,
        secure: true,   // localhost 예외처리 믿고 secure: true, sameSite: none 사용
        sameSite: 'none',
    });

  }

  /**
   * Entrance 화면에서 이미지의 좌표를 가져옴
   * @returns "{x,y}"
   */
  getEntranceLocation(): object {
    return this.lastlocation;
  }

  /**
   * Entrance 화면에서 이미지의 좌표를 설정함
   * @param body "{x,y}"
   * @returns result message
   */
  setEntranceLocation(body: any): object {
    const key = 'entrancelocation';
    let content = '';

    if (fs.existsSync(this.filepath)) {
      content = fs.readFileSync(this.filepath, 'utf8');
    }

    const location = `${key}:${body.x},${body.y}\n`;
    this.lastlocation.x = body.x;
    this.lastlocation.y = body.y;

    if (content.includes(key)) {
      content = content.replace(new RegExp(`${key}.*`, 'g'), location);
    } else {
      content = content.trim() + '\n' + location + '\n';
    }
    fs.writeFileSync(this.filepath, content);

    return { ok: 'Data set successfully' };
  }
}
