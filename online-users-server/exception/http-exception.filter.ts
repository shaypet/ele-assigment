import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { ServerResponse } from 'dto/server-response.dto';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const res: ServerResponse<any> = {
      Success: false,
      Data: null,
      ErrorCode: `HTTP_${status}`,
      ErrorMessage: '',
    };

    ///we can log here
    response.status(status).json(res);
  }
}
