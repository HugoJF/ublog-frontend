import {NgModule, SecurityContext} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarkdownComponent} from "./markdown/markdown.component";
import {MarkdownModule} from "ngx-markdown";
import { TagListComponent } from './tag-list/tag-list.component';
import {RouterModule} from "@angular/router";
import { FieldWrapperComponent } from './field-wrapper/field-wrapper.component';

@NgModule({
  declarations: [
    MarkdownComponent,
    TagListComponent,
    FieldWrapperComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    RouterModule,
  ],
    exports: [
        MarkdownComponent,
        TagListComponent,
        FieldWrapperComponent
    ],
})
export class SharedModule { }
