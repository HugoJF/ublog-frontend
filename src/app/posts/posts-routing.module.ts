import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostViewComponent} from "./post-view/post-view.component";
import {PostCreateComponent} from "./post-create/post-create.component";
import {PostDemoComponent} from "./post-demo/post-demo.component";
import {PostsIndexComponent} from "./posts-index/posts-index.component";

const routes: Routes = [
  {
    path: '', component: PostsIndexComponent,
  },
  {
    path: 'demo', component: PostDemoComponent,
  },
  {
    path: 'write', component: PostCreateComponent,
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
