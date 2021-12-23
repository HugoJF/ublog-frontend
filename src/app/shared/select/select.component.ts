import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  host: {class: 'contents'}
})
export class SelectComponent implements OnInit {
  @Input() form: FormControl = new FormControl(); // TODO temp
  @Input() options: Record<string, string> = {};

  constructor() {
  }

  ngOnInit(): void {
  }

}
