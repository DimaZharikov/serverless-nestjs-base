import { Module } from '@nestjs/common';

import { FirstController } from './first.controller';
import { FirstService } from './first.service';
import { SecondModule } from './second/second.module';

@Module({
  providers: [FirstService],
  controllers: [FirstController],
  imports: [SecondModule],
})
export class FirstModule {}
