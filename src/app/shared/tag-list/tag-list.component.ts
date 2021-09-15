import {Component, Input, OnInit} from '@angular/core';
import {Tag} from "../../types/tags";

@Component({
  selector: 'app-tag-list[tags]',
  templateUrl: './tag-list.component.html'
})
export class TagListComponent implements OnInit {

  @Input() tags!: Tag[];

  constructor() { }

  ngOnInit(): void {
  }

}
