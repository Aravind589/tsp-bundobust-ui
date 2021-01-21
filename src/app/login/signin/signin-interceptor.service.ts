import { SigninService } from './../../services/signin.service';
import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class SiginInterceptorService implements HttpInterceptor {
    constructor(private signinService: SigninService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.signinService.user.pipe(
            take(1),
            exhaustMap(user => {
                if (!user) {
                    return next.handle(req);
                }
                const modifiedReq = req.clone({
                    params: new HttpParams().set('signin', user.token)
                });
                return next.handle(modifiedReq)
            })
        );
    }
}