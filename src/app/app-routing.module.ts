import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'posts',
  loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
}, {
  path: 'tags',
  loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
