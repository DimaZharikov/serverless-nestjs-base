import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

const globalPrefix = 'v1/api';
(async function start() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(globalPrefix);

  try {
    await app.listen(4000, () => console.log(`stared at http:localhost/4000` + globalPrefix));
  } catch (e) {
    console.log('application down:', { ...e });
  }
})();
