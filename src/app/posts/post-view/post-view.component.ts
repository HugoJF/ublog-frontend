import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Post} from "../../types/posts";
import {PostsService} from "../posts.service";
import {map, switchMap, take} from "rxjs/operators";
import {Tag} from "../../types/tags";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html'
})
export class PostViewComponent implements OnInit {
  slug!: string;
  authed!: boolean;

  post$!: Observable<Post>;
  versions$!: Observable<{ versions: string[] }>;

  refetchPost = new BehaviorSubject<number>(0);

  constructor(
    private readonly http: HttpClient,
    private readonly route: ActivatedRoute,
    private readonly posts: PostsService,
    private readonly router: Router,
    private readonly auth: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug')!;
    this.authed = this.auth.authed();

    this.route.queryParams.pipe(
      map(qs => qs['version'] ?? 0),
    ).subscribe(this.refetchPost);

    this.versions$ = this.posts.versions(this.slug);
    this.post$ = this.refetchPost.pipe(
      switchMap(version => this.posts.get(this.slug, version))
    );
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
