import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  host: {class: 'contents'}
})
export class TextareaComponent implements OnInit {
  @Input() placeholder = '';

  constructor() { }

  ngOnInit(): void {
  }

}
