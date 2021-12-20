import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostViewComponent} from "./post-view/post-view.component";
import {PostCreateComponent} from "./post-create/post-create.component";
import {PostsIndexComponent} from "./posts-index/posts-index.component";
import {PostEditComponent} from "./post-edit/post-edit.component";
import {AuthedOnlyGuard} from "../core/guards/authed-only.guard";

const routes: Routes = [
  {
    path: '', component: PostsIndexComponent,
  },
  {
    path: ':slug', component: PostViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
