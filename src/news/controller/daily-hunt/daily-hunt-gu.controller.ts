import { DailyHuntService } from './../../service/daily-hunt/daily-hunt.service';
import { Controller, Get } from '@nestjs/common';

@Controller('dailyHunt/gu')
export class DailyHuntGuController {
  constructor(private dailyHuntService: DailyHuntService) {}

  @Get('dashboardNews')
  async dashboardNews() {
      const newsResponse = await this.dailyHuntService.getNews('https://m.dailyhunt.in/news/india/gujarati').toPromise();
      return await this.dailyHuntService.dailyHuntScript(newsResponse.data);
  }

  @Get('sportNews')
  async sportNews() {
    const newsResponse = await this.dailyHuntService.getNews('https://m.dailyhunt.in/news/india/gujarati/-topics-17').toPromise();
    return await this.dailyHuntService.dailyHuntScript(newsResponse.data);
  }

  @Get('businessNews')
  async businessNews() {
    const newsResponse = await this.dailyHuntService.getNews('https://m.dailyhunt.in/news/india/gujarati/-topics-2').toPromise();
    return await this.dailyHuntService.dailyHuntScript(newsResponse.data);
  }

  @Get('entertainmentNews')
  async entertainmentNews() {
    const newsResponse = await this.dailyHuntService.getNews('https://m.dailyhunt.in/news/india/gujarati/-topics-8').toPromise();
    return await this.dailyHuntService.dailyHuntScript(newsResponse.data);
  }

  @Get('technologyNews')
  async technologyNews() {
    const newsResponse = await this.dailyHuntService.getNews('https://m.dailyhunt.in/news/india/gujarati/-topics-102').toPromise();
    return await this.dailyHuntService.dailyHuntScript(newsResponse.data);
  }

  @Get('movieReviewNews')
  async movieReviewNews() {
    const newsResponse = await this.dailyHuntService.getNews('https://m.dailyhunt.in/news/india/gujarati/philm-rivyu-topics-807').toPromise();
    return await this.dailyHuntService.dailyHuntScript(newsResponse.data);
  }

  @Get('trendingNews')
  async trendingNews() {
    const newsResponse = await this.dailyHuntService.getNews('https://m.dailyhunt.in/news/india/gujarati/-topics-791').toPromise();
    return await this.dailyHuntService.dailyHuntScript(newsResponse.data);
  }
}
