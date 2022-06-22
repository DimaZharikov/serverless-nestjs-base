import { Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';
import { LazymoduletestModule } from './lazymoduletest/lazymoduletest.module';
import { SecondService } from './second/second.service';

@Injectable()
export class FirstService {
  constructor(private secondService: SecondService, public loader: LazyModuleLoader) {}

  async onApplicationBootstrap() {
    console.log('Lazy loading module...');
    await this.loader.load(() => LazymoduletestModule);
  }

  public sendResult(string: string) {
    return this.secondService.secondReturnResult(string);
  }
}
