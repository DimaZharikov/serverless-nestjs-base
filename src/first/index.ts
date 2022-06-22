import { Context, Handler } from 'aws-lambda';
import { proxy } from 'aws-serverless-express';
import { Server } from 'http';

import { bootstrapServer } from '../main';
import { FirstModule } from './first.module';

let cachedServer: Server;

export const handler: Handler = async <TEvent>(event: TEvent, context: Context) => {
  cachedServer = await bootstrapServer(FirstModule);

  return proxy(cachedServer, event, context, 'PROMISE').promise;
};
