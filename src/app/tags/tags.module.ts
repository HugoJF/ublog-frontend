import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagViewComponent} from './tag-view/tag-view.component';
import {TagsRoutingModule} from "./tags-routing.module";

@NgModule({
  declarations: [
    TagViewComponent
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
  ]
})
export class TagsModule {
}
