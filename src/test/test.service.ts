import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {
  public helloWorld() {
    return 'hello world';
  }

  public helloVlad() {
    return ' VLAD THE BEST OF THE BEST IN WORLD DEVELOPER';
  }
}
