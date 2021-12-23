import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostCreateComponent} from "../posts/post-create/post-create.component";
import {AuthedOnlyGuard} from "../core/guards/authed-only.guard";
import {PostEditComponent} from "../posts/post-edit/post-edit.component";

const routes: Routes = [
  {
    path: 'posts/write', component: PostCreateComponent, canActivate: [AuthedOnlyGuard],
  },
  {
    path: 'posts/:slug/edit', component: PostEditComponent, canActivate: [AuthedOnlyGuard],
  },
  {
    path: 'posts/:slug/edit/:version', component: PostEditComponent, canActivate: [AuthedOnlyGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
