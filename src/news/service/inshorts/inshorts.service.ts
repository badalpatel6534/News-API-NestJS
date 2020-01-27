import { Injectable, HttpService } from '@nestjs/common';
import * as cheerio from 'cheerio';

@Injectable()
export class InshortsService {
  constructor(private readonly httpService: HttpService) {}

  getNews(url: string) {
    return this.httpService.get(url);
  }

  inshortNewsScript(apiResponse) {
    return new Promise((resolve, reject) => {
      const $ = cheerio.load(apiResponse);
      const data = [];

      $('.news-card').each((index, card) => {
        const obj = {
          source: {
            name: '',
          },
          url: '',
          urlToImage: '',
          description: '',
          content: '',
        };

        const image = $(card)
          .find('.news-card-image')
          .attr('style');
        const imgUrl = (image.match(/url\([^\)]+\)/gi) || [''])[0].split(
          /[()'"]+/,
        )[1];
        /* tslint:disable:no-string-literal */
        obj.urlToImage = imgUrl;

        obj.description = $(card)
          .find('span[itemprop="headline"]')
          .text();
        obj.content = $(card)
          .find('div[itemprop="articleBody"]')
          .text();

        obj.url = $(card)
          .find('.source')
          .attr('href');
        obj.source.name = $(card)
          .find('.source')
          .text();

        data.push(obj);
      });
      resolve(data);
    });
  }
}
