import { Controller, Get, Param, Req } from '@nestjs/common';
import { NewsApiOrgService } from 'src/news/service/news-api-org/news-api-org.service';


@Controller('news-api-org')
export class NewsApiOrgController {
    constructor(private newsApiOrgService: NewsApiOrgService) {}

    @Get('topHeadlinesNews/:category/:country')
        async getTopHeadlinesNews(@Param("category") category: string,@Param("country") country: string) {
        console.log('category', category);
        console.log('country', country);
        return await this.newsApiOrgService.getTopHeadlinesNews(category,  country);
    }
}
