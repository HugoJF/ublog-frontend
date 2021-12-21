import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {take, tap} from "rxjs/operators";
import {from, ReplaySubject} from "rxjs";
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";
import {CognitoAccessToken, CognitoUserSession} from "amazon-cognito-identity-js";

const {AuthenticationDetails, CognitoUserPool, CognitoUser} = AmazonCognitoIdentity;

interface IAuthenticationDetailsData {
  Username: string;
  Password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public readonly authChanges = new ReplaySubject<boolean>();

  private readonly userPool = new CognitoUserPool({
    UserPoolId: environment.cognitoPoolId,
    ClientId: environment.cognitoClientId,
  });

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('token_expires');
    this.authChanges.next(false);
  }

  login(credentials: IAuthenticationDetailsData) {
    const authenticationDetails = new AuthenticationDetails(credentials);

    const cognitoUser = new CognitoUser({
      Username: credentials.Username,
      Pool: this.userPool,
    });

    const promise = new Promise<CognitoAccessToken>(((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(result.getAccessToken()),
        onFailure: err => reject(err),
      });
    }))

    return from(promise).pipe(
      take(1),
      tap(() => this.authChanges.next(true), () => this.authChanges.next(false)),
      tap(value => this.handleToken(value)),
    );
  }

  authed() {
    return Boolean(localStorage.getItem('token'));
  }

  private handleToken(token: CognitoAccessToken) {
    if (token) {
      localStorage.setItem('token', token.getJwtToken());
      localStorage.setItem('token_expires', token.getExpiration().toString());
      this.authChanges.next(true);
    } else {
      this.logout();
    }
  }

  async refreshToken() {
    const cognitoUser = this.userPool.getCurrentUser();

    if (!cognitoUser) {
      return;
    }

    return new Promise((resolve, reject) => {
      cognitoUser.getSession((err: null | Error, session: null | CognitoUserSession) => {
        if (err || !session) {
          this.logout();
          return reject(err);
        }

        cognitoUser.refreshSession(session.getRefreshToken(), (err, result) => {
          if (err || !result) {
            this.logout();
            return reject(err);
          }

          this.handleToken(result.getAccessToken());
          resolve(true);
        });
      });
    })
  }

  async checkExpiration() {
    const token = localStorage.getItem('token');
    const expires = localStorage.getItem('token_expires');

    if (!token || !expires) {
      return
    }

    // TODO attempt to extend token before expiration (2min)
    const expiresDate = new Date(Number(expires) * 1000);
    if (expiresDate > new Date()) {
      return;
    }

    await this.refreshToken();
  }
}
