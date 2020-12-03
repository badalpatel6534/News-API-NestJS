import { Injectable, InternalServerErrorException } from '@nestjs/common';
import NewsAPI from 'newsapi';
const newsapi = new NewsAPI('ad8ceed456eb46cdb6761885d313f76b');

@Injectable()
export class NewsApiOrgService {
    /**
     * 
     * @param category : ex: 'business', ''
     * @param country : ex: 'in', 'us', 'au' etc
     */
    async getTopHeadlinesNews(category: string, country: string) {
        try {
            return  await newsapi.v2.topHeadlines({category,country}); 
        } catch (err) {
            console.error('err.......', err);
            throw new InternalServerErrorException(err);
        }   
    }
}

