import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Post} from "../../types/posts";
import {mergeMap} from "rxjs/operators";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-posts-index',
  templateUrl: './posts-index.component.html'
})
export class PostsIndexComponent implements OnInit {
  posts$!: Observable<Post[]>;

  onPagination = new BehaviorSubject<string | undefined>(undefined);

  constructor(private posts: PostsService) {
  }

  ngOnInit(): void {
    this.posts$ = this.onPagination.pipe(
      mergeMap(key => this.posts.index(key))
    )
  }
}
