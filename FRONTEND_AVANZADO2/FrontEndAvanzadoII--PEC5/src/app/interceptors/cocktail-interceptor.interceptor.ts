import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CocktailInterceptorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const modifiedReq = request.clone({
      headers: request.headers
        .set('x-rapidapi-key', 'a4241eac2cmsh4adbd58765968e6p11fb40jsn3e1d94e61cda')
        .set('x-rapidapi-host', 'omgvamp-hearthstone-v1.p.rapidapi.com')
    })

    return next.handle(modifiedReq);
  }
}
