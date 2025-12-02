import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { Logger } from '@nestjs/common';
import * as pkg from 'package.json';

const logger = new Logger('main');

async function bootstrap() {
  logger.log(`Starting server... hi2 ${pkg.name} v${pkg.version}`);
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
