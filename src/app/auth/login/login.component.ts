import {Component} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  host: {class: 'contents'},
})
export class LoginComponent {

  error = false;
  loading = false;

  username = new FormControl('');
  password = new FormControl('');

  form = new FormGroup({
    username: this.username,
    password: this.password,
  })

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router,
  ) {
  }

  handleLogin(): void {
    this.error = false;
    this.loading = true;

    this.auth.login({
      Username: this.username.value,
      Password: this.password.value,
    }).pipe(
      finalize(() => {
        this.error = true;
        this.loading = false;
      }),
    ).subscribe(
      () => this.router.navigateByUrl('/'),
    )
  }
}
