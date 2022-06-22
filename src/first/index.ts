import { Handler } from 'aws-lambda';

import { serverlessHandler } from '../helpers/serverless.handler';
import { FirstModule } from './first.module';

export const handler: Handler = serverlessHandler(FirstModule);
