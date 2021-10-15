import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {GuestOnlyGuard} from "../core/guards/guest-only.guard";
import {AuthedOnlyGuard} from "../core/guards/authed-only.guard";

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
  canActivate: [GuestOnlyGuard]
}, {
  path: 'logout',
  component: LogoutComponent,
  canActivate: [AuthedOnlyGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
