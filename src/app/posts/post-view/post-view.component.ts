import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../types/posts";
import {PostsService} from "../posts.service";
import {map, switchMap, take} from "rxjs/operators";
import {Tag} from "../../types/tags";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html'
})
export class PostViewComponent implements OnInit {
  slug!: string;

  post$!: Observable<Post>;
  tags$!: Observable<Tag[]>;
  versions$!: Observable<{ versions: string[] }>;

  refetchPost = new BehaviorSubject<number>(0);

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private posts: PostsService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')!;

    this.route.queryParams.pipe(
      map(qs => qs['version'] ?? 0),
    ).subscribe(this.refetchPost);

    this.versions$ = this.posts.versions(this.slug);
    this.post$ = this.refetchPost.pipe(
      switchMap(version => this.posts.get(this.slug, version))
    );
    this.tags$ = this.refetchPost.pipe(
      switchMap(() => this.posts.tags(this.slug))
    )
  }

  commit(version: number) {
    this.posts
      .rollBack(this.slug, version)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigateByUrl(location.pathname);
      });
  }
}
