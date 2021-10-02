import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class GuestOnlyGuard implements CanActivate {
  constructor(private readonly router: Router, private readonly auth: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const guest = !this.auth.authed();

    if (guest) {
      return true;
    }

    this.router.navigateByUrl('/');

    return false;
  }

}
