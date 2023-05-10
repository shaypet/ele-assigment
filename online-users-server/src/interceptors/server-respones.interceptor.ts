import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { ServerResponse } from 'src/dto/server-response.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ServerResponseInterceptor<T>
  implements NestInterceptor<T, ServerResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ServerResponse<T>> {
    return next.handle().pipe(
      map((data) => ({
        Success: true,
        ErrorCode: '',
        ErrorMessage: '',
        Data: data,
      })),
    );
  }
}
