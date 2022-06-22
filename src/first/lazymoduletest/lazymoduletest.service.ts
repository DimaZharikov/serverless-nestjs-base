import { Injectable } from '@nestjs/common';
import { GlobalService } from 'first/global/global.service';

@Injectable()
export class LazymoduletestService {
    constructor(public globalService: GlobalService){
        console.log('LazymoduletestService instantiated');
    }
}
