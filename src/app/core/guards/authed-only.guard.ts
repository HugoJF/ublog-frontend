import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthedOnlyGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly auth: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const authed = this.auth.authed();

    if (authed) {
      return true;
    }

    this.router.navigateByUrl('/auth/login');

    return false;
  }

}
