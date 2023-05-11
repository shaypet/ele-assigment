import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from 'src/exception/http-exception.filter';
import { SiteExceptionFilter } from 'src/exception/site-exception.filter';
import { ServerResponseInterceptor } from './interceptors/server-respones.interceptor';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.useGlobalInterceptors(new ServerResponseInterceptor());
  app.useGlobalFilters(new SiteExceptionFilter());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(process.env.PORT);
}
bootstrap();
