import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Into Interceptor");
    //idea is to update http req header with bearer token
    // the token is saved in session storage
    // let's access the token from session storage
    const authToken = sessionStorage.getItem('authToken');
    // now I have to manipulate the req header with above authtoken
    request = request.clone({
      setHeaders: {
        authorization: `Bearer ${authToken}`
      }
    });

    return next.handle(request);
  }
}
