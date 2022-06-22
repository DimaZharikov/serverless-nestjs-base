import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalService {
    constructor() {
        console.log('GlobalService instantiated');
      }
}
