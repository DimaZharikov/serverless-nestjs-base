import { Module } from '@nestjs/common';

import { FirstModule } from './first/first.module';

@Module({
  imports: [FirstModule],
})
export class AppModule {}
