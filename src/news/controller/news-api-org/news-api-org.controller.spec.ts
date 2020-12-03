import { Test, TestingModule } from '@nestjs/testing';
import { NewsApiOrgController } from './news-api-org.controller';

describe('NewsApiOrg Controller', () => {
  let controller: NewsApiOrgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewsApiOrgController],
    }).compile();

    controller = module.get<NewsApiOrgController>(NewsApiOrgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
