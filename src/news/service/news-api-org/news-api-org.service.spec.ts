import { Test, TestingModule } from '@nestjs/testing';
import { NewsApiOrgService } from './news-api-org.service';

describe('NewsApiOrgService', () => {
  let service: NewsApiOrgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewsApiOrgService],
    }).compile();

    service = module.get<NewsApiOrgService>(NewsApiOrgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
