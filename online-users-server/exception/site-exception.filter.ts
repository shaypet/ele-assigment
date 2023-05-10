import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ServerResponse } from 'dto/server-response.dto';
import { Request, Response } from 'express';
import { SiteException } from './site.exception';

@Catch(SiteException)
export class SiteExceptionFilter implements ExceptionFilter {
  catch(exception: SiteException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const code = exception.getCode();
    const res: ServerResponse<any> = {
      Success: false,
      Data: null,
      ErrorCode: `SITE_${code}`,
      ErrorMessage: exception.message,
    };
    ///we can log it here
    response.status(HttpStatus.OK).json(res);
  }
}
