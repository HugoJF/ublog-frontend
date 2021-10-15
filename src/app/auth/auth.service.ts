import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {take, tap} from "rxjs/operators";
import {from, ReplaySubject} from "rxjs";
import * as AmazonCognitoIdentity from "amazon-cognito-identity-js";

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

  logout() {
    localStorage.removeItem('token');
    this.authChanges.next(false);
  }

  login(credentials: IAuthenticationDetailsData) {
    const authenticationDetails = new AuthenticationDetails(credentials);
    const userPool = new CognitoUserPool({
      UserPoolId: environment.cognitoPoolId,
      ClientId: environment.cognitoClientId,
    });

    const cognitoUser = new CognitoUser({
      Username: credentials.Username,
      Pool: userPool,
    });

    const promise = new Promise<string>(((resolve, reject) => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: result => resolve(result.getAccessToken().getJwtToken()),
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

  private handleToken(value: string) {
    if (value) {
      localStorage.setItem('token', value);
    } else {
      localStorage.removeItem('token');
    }
  }
}
