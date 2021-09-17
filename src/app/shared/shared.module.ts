import {NgModule, SecurityContext} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownComponent} from "./markdown/markdown.component";
import {MarkdownModule} from "ngx-markdown";
import {TagListComponent} from './tag-list/tag-list.component';
import {RouterModule} from "@angular/router";
import {FieldWrapperComponent} from './field-wrapper/field-wrapper.component';
import {PostListComponent} from "./post-list/post-list.component";
import {PostFormComponent} from "./post-form/post-form.component";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    MarkdownComponent,
    TagListComponent,
    FieldWrapperComponent,
    PostListComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CodemirrorModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
  ],
  exports: [
    MarkdownComponent,
    TagListComponent,
    FieldWrapperComponent,
    PostListComponent,
    PostFormComponent
  ],
})
export class SharedModule {
}
