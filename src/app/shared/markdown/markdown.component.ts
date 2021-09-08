import {Component, Input} from '@angular/core';
import {KatexOptions} from "ngx-markdown";

@Component({
  selector: 'app-markdown[data]',
  templateUrl: './markdown.component.html'
})
export class MarkdownComponent {
  @Input() data: string = '';

  options: KatexOptions = {
    displayMode: true,
    throwOnError: false,
    errorColor: '#cc0000',
  };

  constructor() {
  }
}
