import { Controller, Get } from '@nestjs/common';
import { NewsApiOrgService } from 'src/news/service/news-api-org/news-api-org.service';

@Controller('news-api-org')
export class NewsApiOrgController {
    constructor(private newsApiOrgService: NewsApiOrgService) {}

    @Get('getTopHeadlinesNews')
    async getTopHeadlinesNews() {
        return await this.newsApiOrgService.getTopHeadlinesNews('business', 'en', 'in');
    }
}
