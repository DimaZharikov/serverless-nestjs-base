import { Test, TestingModule } from '@nestjs/testing';
import { LazymoduletestService } from './lazymoduletest.service';

describe('LazymoduletestService', () => {
  let service: LazymoduletestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LazymoduletestService],
    }).compile();

    service = module.get<LazymoduletestService>(LazymoduletestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
