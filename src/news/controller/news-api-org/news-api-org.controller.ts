import { Controller, Get, Req } from '@nestjs/common';
import { NewsApiOrgService } from 'src/news/service/news-api-org/news-api-org.service';
import { Request } from 'express';

export interface newsAPI  {
    category: string;
    country: string;
}

@Controller('news-api-org')
export class NewsApiOrgController {
    constructor(private newsApiOrgService: NewsApiOrgService) {}

    @Get('topHeadlinesNews')
    async getTopHeadlinesNews(@Req() request: Request) {
        const queryData = request.query as newsAPI;
        return await this.newsApiOrgService.getTopHeadlinesNews(queryData.category, queryData.country);
    }
}
