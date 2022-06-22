import { Module } from '@nestjs/common';

import { SecondService } from './second.service';

@Module({
  providers: [SecondService],
  exports: [SecondService],
})
export class SecondModule {}
