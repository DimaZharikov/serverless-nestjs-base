import { Injectable } from '@nestjs/common';

@Injectable()
export class SecondService {
  public secondReturnResult(string: string) {
    return string;
  }
}
