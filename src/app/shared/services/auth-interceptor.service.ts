import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    if (!token)
      return next.handle(req);

    // const haveAuth = req.headers.get('Authorization');
    // if (haveAuth)
    //   return next.handle(req);

    const authReq = req.clone({ setHeaders: { Authorization: token } });
    return next.handle(authReq);
  }
}
