import { Injectable } from '@nestjs/common';

import { SecondService } from './second/second.service';

@Injectable()
export class FirstService {
  constructor(private secondService: SecondService) {}

  public sendResult(string: string) {
    return this.secondService.secondReturnResult(string);
  }
}
