import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostViewComponent} from './post-view/post-view.component';
import {PostsRoutingModule} from "./posts-routing.module";
import {MarkdownModule} from "ngx-markdown";
import {PostCreateComponent} from './post-create/post-create.component';
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {FormsModule} from "@angular/forms";
import {PostDemoComponent} from './post-demo/post-demo.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    PostViewComponent,
    PostCreateComponent,
    PostDemoComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    MarkdownModule,
    CodemirrorModule,
    FormsModule,
    SharedModule,
  ]
})
export class PostsModule {
}
