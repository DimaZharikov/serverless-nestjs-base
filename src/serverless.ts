import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import serverlessExpress from '@vendia/serverless-express';
import { Context, Handler, Callback } from 'aws-lambda';

import { AppModule } from './app.module';

let server;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('v1/api');
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();

  return serverlessExpress({
    app: expressApp,
  });
}

export const handler: Handler = async <TEvent, TResults>(
  event: TEvent,
  context: Context,
  callback: Callback<TResults>,
) => {
  server = server ?? server((await bootstrap()) as Handler);

  return server(event, context, callback);
};
