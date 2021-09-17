import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostViewComponent} from './post-view/post-view.component';
import {PostsRoutingModule} from "./posts-routing.module";
import {MarkdownModule} from "ngx-markdown";
import {PostCreateComponent} from './post-create/post-create.component';
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostDemoComponent} from './post-demo/post-demo.component';
import {SharedModule} from "../shared/shared.module";
import { PostListComponent } from './post-list/post-list.component';
import { PostsIndexComponent } from './posts-index/posts-index.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import {NgEmptyPipeModule} from "angular-pipes";

@NgModule({
  declarations: [
    PostViewComponent,
    PostCreateComponent,
    PostDemoComponent,
    PostListComponent,
    PostsIndexComponent,
    PostFormComponent,
    PostEditComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MarkdownModule,
    CodemirrorModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    NgEmptyPipeModule,
  ]
})
export class PostsModule {
}
