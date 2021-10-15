import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "./auth/auth.service";
import {BehaviorSubject, ReplaySubject} from "rxjs";
import {takeUntil, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'ublog-frontend';

  authed = false;

  destroy$ = new ReplaySubject<boolean>();

  constructor(private readonly auth: AuthService) {
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit() {
    this.authed = this.auth.authed();
    this.auth.authChanges.pipe(
      takeUntil(this.destroy$),
      tap(value => this.authed = value)
    ).subscribe()
  }
}
