import { Controller, Get, Param, Query, Req, Res } from '@nestjs/common';
import { NewsApiOrgService } from 'src/news/service/news-api-org/news-api-org.service';

@Controller('news-api-org')
export class NewsApiOrgController {
    constructor(private newsApiOrgService: NewsApiOrgService) {}

    @Get('topHeadlinesNews')
        async getTopHeadlinesNews(@Query("category") category: string,@Query("country") country: string) {
        return await this.newsApiOrgService.getTopHeadlinesNews(category,  country);
    }
}
