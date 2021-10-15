import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {

  constructor(private readonly auth: AuthService, private readonly router: Router) { }

  ngOnInit(): void {
    this.auth.logout();
    this.router.navigateByUrl('/auth/login');
  }

}
