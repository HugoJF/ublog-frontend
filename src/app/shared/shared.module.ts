import {NgModule, SecurityContext} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MarkdownComponent} from "./markdown/markdown.component";
import {MarkdownModule} from "ngx-markdown";

@NgModule({
  declarations: [
    MarkdownComponent
  ],
  imports: [
    CommonModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
  ],
  exports: [
    MarkdownComponent
  ],
})
export class SharedModule { }
