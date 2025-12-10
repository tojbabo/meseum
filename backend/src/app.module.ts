import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { VisitorModule } from './visitor/visitor.module';

@Module({
  imports: [VisitorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
