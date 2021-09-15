import {NgModule, SecurityContext} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarkdownComponent} from "./markdown/markdown.component";
import {MarkdownModule} from "ngx-markdown";
import { TagListComponent } from './tag-list/tag-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    MarkdownComponent,
    TagListComponent
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
        TagListComponent
    ],
})
export class SharedModule { }
