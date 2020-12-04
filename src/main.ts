import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api/v1');

  const options = new DocumentBuilder()
  .setTitle('Daily News Network')
  .setDescription('<h1>Web scraping using Cheerio package, scrape news from Inshorts News and Dailyhunt News</h1> <h2> Checkout Web App <a href="https://dailynewsnetwork.web.app/" target="_blank">Click!</a> </h2> ')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
