import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { VisitorService, COOKIE_VISIT } from 'src/visitor/visitor.service';

@Injectable()
export class VisitorMiddleware implements NestMiddleware {
  constructor(private readonly visitorService: VisitorService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const visitedToday = req.cookies[COOKIE_VISIT];
    await this.visitorService.handleVisit(visitedToday, res); 
    next();
  }
}
