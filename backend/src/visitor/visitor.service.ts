import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export const COOKIE_VISIT = "VISITED"

@Injectable()
export class VisitorService {
    private todaycount = 0;
    private getMidnightKst(): Date { 
        dayjs.extend(utc);
        dayjs.extend(timezone)
        const nowKst = dayjs().tz('Asia/Seoul');
        const midnightKst = nowKst.endOf('day').toDate();
        return midnightKst;
    }
    async handleVisit(visitedToday: string, res: Response) {
        console.log(visitedToday, this.todaycount)
        if (visitedToday) return;

        this.todaycount++;
        
        res.cookie(COOKIE_VISIT, 'true', {
            expires: this.getMidnightKst(),
            httpOnly: true,
            secure: true,   // localhost 예외처리 믿고 secure: true, sameSite: none 사용
            sameSite: 'none',
        });
    }

    getTodayCount():number{return this.todaycount;}

}