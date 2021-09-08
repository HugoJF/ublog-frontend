import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../types/posts";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html'
})
export class PostViewComponent implements OnInit {
  content$!: Observable<Post>;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private posts: PostsService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug) {
      this.router.navigateByUrl('/posts/write');

      return;
    }

    this.content$ = this.posts.get(slug);
  }
}
