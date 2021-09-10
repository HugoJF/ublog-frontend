import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../types/posts";
import {PostsService} from "../posts.service";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html'
})
export class PostViewComponent implements OnInit {
  post$!: Observable<Post>;
  versions$!: Observable<{ versions: string[] }>;

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

    // TODO: refactor
    this.route.queryParams.subscribe((qs) => {
      this.post$ = this.posts.get(slug, qs['version']);
    });

    this.post$ = this.posts.get(slug);
    this.versions$ = this.posts.versions(slug);
  }
}
