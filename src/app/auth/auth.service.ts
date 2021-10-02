import {Injectable} from '@angular/core';
import {LoginCredentials, LoginToken} from "../types/auth";
import {environment} from "../../environments/environment";
import {catchError, map, switchMap, take, tap} from "rxjs/operators";
import {iif, of} from "rxjs";
import {ApiService} from "../api.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private readonly api: ApiService
  ) {
  }

  login(credentials: LoginCredentials) {
    return this.api.post<LoginToken>(`/auth`, credentials).pipe(
      take(1),
      switchMap(v => iif(() => typeof v.token === 'string', of(v), of({token: undefined}))),
      catchError(() => of({token: undefined})),
      map(v => v.token),
      tap(value => this.handleToken(value))
    );
  }

  authed() {
    return Boolean(localStorage.getItem('token'));
  }

  private handleToken(value: string | undefined) {
    if (value) {
      localStorage.setItem('token', value);
    } else {
      localStorage.removeItem('token');
    }
  }

}
