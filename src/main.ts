import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';

import { createServer } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';
import express from 'express';
import { Server } from 'http';

import { AppModule } from './app.module';

let cachedServer: Server;
const binaryMimeTypes: string[] = [];
export async function bootstrapServer(module: unknown): Promise<Server> {
  if (!cachedServer) {
    const expressApp = express();
    const nestApp = await NestFactory.create(module, new ExpressAdapter(expressApp));
    nestApp.use(eventContext());
    await nestApp.init();
    cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
  }
  return cachedServer;
}
bootstrapServer(AppModule);
