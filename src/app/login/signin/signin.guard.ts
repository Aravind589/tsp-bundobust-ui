import { Observable } from 'rxjs';
import { SigninService } from './../../services/signin.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SigninGuard implements CanActivate {
    router: any;
    constructor(private siginService: SigninService) { }

    canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
        return this.siginService.user.pipe(
            take(1),
            map(user => {
                const isSigin = !!user;
                if (isSigin) {
                    return true;
                }
                return this.router.createUrlTree(['/signin'])
            })
        );
    }
}