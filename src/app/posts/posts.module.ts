import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostViewComponent} from './post-view/post-view.component';
import {PostsRoutingModule} from "./posts-routing.module";
import {PostCreateComponent} from './post-create/post-create.component';
import {SharedModule} from "../shared/shared.module";
import {PostsIndexComponent} from './posts-index/posts-index.component';
import {PostEditComponent} from './post-edit/post-edit.component';
import {NgEmptyPipeModule} from "angular-pipes";

@NgModule({
  declarations: [
    PostViewComponent,
    PostCreateComponent,
    PostsIndexComponent,
    PostEditComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
    NgEmptyPipeModule,
  ]
})
export class PostsModule {
}
