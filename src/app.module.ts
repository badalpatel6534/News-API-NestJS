import { DailyHuntService } from './news/service/daily-hunt/daily-hunt.service';
import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InshortsService } from './news/service/inshorts/inshorts.service';
import { InshortsEnController } from './news/controller/inshorts/inshorts-en.controller';
import { InshortsHiController } from './news/controller/inshorts/inshorts-hi.controller';
import { DailyHuntGuController } from './news/controller/daily-hunt/daily-hunt-gu.controller';

@Module({
  imports: [HttpModule],
  controllers: [
    DailyHuntGuController,
    InshortsHiController,
    AppController,
    InshortsEnController],
  providers: [
    AppService,
    DailyHuntService,
    InshortsService],
})
export class AppModule {}
