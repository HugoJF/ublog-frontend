import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  host: {class: 'contents'}
})
export class PostFormComponent implements OnInit {
  @Input() onSubmit!: () => void;

  @Input() formGroup!: FormGroup;

  ngOnInit(): void {
  }

  control(name: string): FormControl {
    return this.formGroup.get(name) as FormControl;
  }
}
