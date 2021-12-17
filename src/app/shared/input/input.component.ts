import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  host: {class: 'contents'}
})
export class InputComponent implements OnInit {
  @Input() form!: FormControl;
  @Input() type = 'text';
  @Input() placeholder = '';

  constructor() { }

  ngOnInit(): void {
  }

}
