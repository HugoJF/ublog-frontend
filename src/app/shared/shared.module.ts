import {NgModule, SecurityContext} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkdownComponent} from "./markdown/markdown.component";
import {MarkdownModule} from "ngx-markdown";
import {RouterModule} from "@angular/router";
import {FieldWrapperComponent} from './field-wrapper/field-wrapper.component';
import {PostListComponent} from "./post-list/post-list.component";
import {PostFormComponent} from "./post-form/post-form.component";
import {CodemirrorModule} from "@ctrl/ngx-codemirror";
import {ReactiveFormsModule} from "@angular/forms";
import {TagsComponent} from "./tags/tags.component";
import { ErrorComponent } from './error/error.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { InputWithPrefixComponent } from './input-with-prefix/input-with-prefix.component';

@NgModule({
  declarations: [
    MarkdownComponent,
    FieldWrapperComponent,
    PostListComponent,
    PostFormComponent,
    TagsComponent,
    ErrorComponent,
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    InputWithPrefixComponent,
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
    FieldWrapperComponent,
    PostListComponent,
    PostFormComponent,
    TagsComponent,
    ErrorComponent,
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    InputWithPrefixComponent,
  ],
})
export class SharedModule {
}
