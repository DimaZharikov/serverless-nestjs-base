import { Module } from '@nestjs/common';
import { GlobalModule } from 'first/global/global.module';
import { LazymoduletestService } from './lazymoduletest.service';

@Module({
  providers: [LazymoduletestService],
  imports: [GlobalModule],
})
export class LazymoduletestModule {}
