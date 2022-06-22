import { Module } from '@nestjs/common';

import { FirstController } from './first.controller';
import { FirstService } from './first.service';
import { SecondModule } from './second/second.module';
import { LazymoduletestModule } from './lazymoduletest/lazymoduletest.module';

@Module({
  providers: [FirstService],
  controllers: [FirstController],
  imports: [SecondModule, LazymoduletestModule],
})
export class FirstModule {}
