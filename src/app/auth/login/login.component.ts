import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {iif, of, throwError} from "rxjs";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  host: {class: 'contents'},
})
export class LoginComponent implements OnInit {

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

  ngOnInit(): void {
  }

  handleLogin(): void {
    this.error = false;
    this.loading = true;

    this.auth.login(this.form.value).pipe(
      tap(() => this.loading = false),
      switchMap(v => iif(() => v === undefined, throwError(Error('Invalid credentials')), of(v))),
    ).subscribe(
      () => this.router.navigateByUrl('/'),
      () => this.error = true,
    )
  }
}