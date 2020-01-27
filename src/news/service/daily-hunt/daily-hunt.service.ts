import { Injectable, HttpService } from '@nestjs/common';
import * as cheerio from 'cheerio';

@Injectable()
export class DailyHuntService {
  constructor(private readonly httpService: HttpService) {}

  getNews(url: string) {
    return this.httpService.get(url);
  }

  dailyHuntScript(apiResponse) {
    return new Promise((resolve, reject) => {
      const $ = cheerio.load(apiResponse);
      const data = [];

      $('figure').each((index, card) => {
        const obj = {
          source: {
            name: '',
          },
          url: '',
          urlToImage: '',
          description: '',
          content: '',
        };

        const url = $(card).find('h2 a');
        obj.url = $(url).attr('href');

        const img = $(card).find('img');
        obj.urlToImage = $(img).attr('src');

        const description = $(card).find('a');
        obj.description = description.text().trim();

        const content = $(card).find('p');
        obj.content = content.text().trim();

        data.push(obj);

      });
      resolve(data);
    });

  }
}
