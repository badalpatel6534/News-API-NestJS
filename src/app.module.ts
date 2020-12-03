import { DailyHuntService } from './news/service/daily-hunt/daily-hunt.service';
import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InshortsService } from './news/service/inshorts/inshorts.service';
import { InshortsEnController } from './news/controller/inshorts/inshorts-en.controller';
import { InshortsHiController } from './news/controller/inshorts/inshorts-hi.controller';
import { DailyHuntGuController } from './news/controller/daily-hunt/daily-hunt-gu.controller';
import { NewsApiOrgController } from './news/controller/news-api-org/news-api-org.controller';
import { NewsApiOrgService } from './news/service/news-api-org/news-api-org.service';
@Module({
  imports: [HttpModule],
  controllers: [
    DailyHuntGuController,
    InshortsHiController,
    AppController,
    InshortsEnController,
    NewsApiOrgController],
  providers: [
    AppService,
    DailyHuntService,
    InshortsService,
    NewsApiOrgService],
})
export class AppModule {}
