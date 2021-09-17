import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-wrapper',
  templateUrl: './field-wrapper.component.html',
  host: {class: 'contents'},
})
export class FieldWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
