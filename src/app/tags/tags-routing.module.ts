import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TagViewComponent} from "./tag-view/tag-view.component";

const routes: Routes = [
  {
    path: ':slug', component: TagViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule {
}
