import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

(async function start() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true,
  });
  app.useGlobalPipes(new ValidationPipe());

  try {
    await app.listen(4000, () => console.log(`stared at http:localhost/4000`));
  } catch (e) {
    console.log('application down:', { ...e });
  }
})();
