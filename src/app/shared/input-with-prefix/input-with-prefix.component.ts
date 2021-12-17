import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input-with-prefix',
  templateUrl: './input-with-prefix.component.html',
  host: {class: 'contents'}
})
export class InputWithPrefixComponent implements OnInit {
  @Input() type = 'text';
  @Input() prefix = '';
  @Input() placeholder = '';
  @Input() form!: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

}
