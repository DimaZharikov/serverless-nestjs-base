import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { FirstService } from './first.service';

@Controller('/first')
export class FirstController {
  constructor(private service: FirstService) {}

  // get result from body
  // http://localhost:4002/dev/first/post
  // {"name": "somename"}
  @Post('/post')
  results(
    @Body()
    body: {
      name: string;
    },
  ) {
    console.log(body);
    return this.service.sendResult(body.name);
  }

  @Get('/get/:entity/:search/:id')
  getResult(@Param() params) {
    console.log(params);
    return this.service.sendResult('hello World');
  }
}
