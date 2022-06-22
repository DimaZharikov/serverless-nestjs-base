import { Controller, Get } from '@nestjs/common';

import { TestService } from './test.service';

@Controller('/test')
export class TestController {
  constructor(private service: TestService) {}

  @Get('/helloworld')
  private getHelloWorld() {
    return this.service.helloWorld();
  }

  @Get('/hello')
  private whoisVlad() {
    return this.service.helloVlad();
  }
}
