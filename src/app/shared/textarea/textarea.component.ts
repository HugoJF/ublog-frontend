import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  host: {class: 'contents'}
})
export class TextareaComponent implements OnInit {
  @Input() form!: FormControl;
  @Input() placeholder = '';

  constructor() { }

  ngOnInit(): void {
  }

}
