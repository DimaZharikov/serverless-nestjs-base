import { Context } from 'aws-lambda';
import { proxy } from 'aws-serverless-express';
import { Server } from 'http';

import { bootstrapServer } from '../main';

let cachedServer: Server;

export const serverlessHandler =
  (module: unknown) =>
  async <TEvent>(event: TEvent, context: Context) => {
    cachedServer = await bootstrapServer(module);

    return await proxy(cachedServer, event, context, 'PROMISE').promise;
  };
