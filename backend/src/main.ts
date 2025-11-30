import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as pkg from '../package.json';

const logger = new Logger('main');

async function bootstrap() {
  logger.log(`Starting server... hi2 ${pkg.name} v${pkg.version}`);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
