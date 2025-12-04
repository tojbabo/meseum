import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { Logger } from '@nestjs/common';
import * as pkg from 'package.json';
import * as cookieParser from "cookie-parser";

const logger = new Logger('main');

async function bootstrap() {
  logger.log(`Starting server... hi2 ${pkg.name} v${pkg.version}`);
  const app = await NestFactory.create(AppModule);


  app.enableCors({
    origin: ['http://127.0.0.1', 'http://localhost'],
    // origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  
  app.use(cookieParser.default()); 


  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
