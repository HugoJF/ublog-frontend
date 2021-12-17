import {Component, Input, OnInit} from '@angular/core';

const colors = {
  default: 'duration-150 px-5 py-3 bg-white hover:bg-gray-50 border border-gray-300 rounded',
  primary: 'duration-150 px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  host: {class: 'contents'}
})
export class ButtonComponent implements OnInit {
  @Input() disabled = false;
  @Input() color = 'default';
  @Input() loading = false;

  constructor() { }

  ngOnInit(): void {
  }

  classes() {
    return colors[this.color as keyof typeof colors]
  }
}
