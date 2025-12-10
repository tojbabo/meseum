import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { VisitorMiddleware } from './visitor.middleware';
import { VisitorService } from './visitor.service';

@Module({
  providers: [VisitorService],
  exports:[VisitorService]
})
export class VisitorModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VisitorMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.GET }); 
  }
}