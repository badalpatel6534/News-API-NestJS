import { Controller, Get } from '@nestjs/common';
import { InshortsService } from 'src/news/service/inshorts/inshorts.service';

@Controller('inshorts/en')
export class InshortsEnController {

    constructor(private newsService: InshortsService) {}

    @Get('dashboardNews')
    async dashboardNews() {
        // console.log('data...................................', data);
        const newsResponse = await this.newsService.getNews('https://inshorts.com/en/read').toPromise();
        return await this.newsService.inshortNewsScript(newsResponse.data);
    }

    @Get('technologyNews')
    async technologyNews() {
        const newsResponse = await this.newsService.getNews('https://inshorts.com/en/read/technology').toPromise();
        return await this.newsService.inshortNewsScript(newsResponse.data);
    }

    @Get('sportNews')
    async sportNews() {
        const newsResponse = await this.newsService.getNews('https://inshorts.com/en/read/sports').toPromise();
        return await this.newsService.inshortNewsScript(newsResponse.data);
    }

    @Get('businessNews')
    async businessNews() {
        const newsResponse = await this.newsService.getNews('https://inshorts.com/en/read/business').toPromise();
        return await this.newsService.inshortNewsScript(newsResponse.data);
    }

    @Get('entertainmentNews')
    async entertainmentNews() {
        const newsResponse = await this.newsService.getNews('https://inshorts.com/en/read/entertainment').toPromise();
        return await this.newsService.inshortNewsScript(newsResponse.data);
    }

    @Get('scienceNews')
    async scienceNews() {
        const newsResponse = await this.newsService.getNews('https://inshorts.com/en/read/science').toPromise();
        return await this.newsService.inshortNewsScript(newsResponse.data);
    }

    @Get('automobileNews')
    async automobileNews() {
        const newsResponse = await this.newsService.getNews('https://inshorts.com/en/read/automobile').toPromise();
        return await this.newsService.inshortNewsScript(newsResponse.data);
    }

}
