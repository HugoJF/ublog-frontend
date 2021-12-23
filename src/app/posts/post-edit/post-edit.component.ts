import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PostsService} from "../posts.service";
import {BehaviorSubject} from "rxjs";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html'
})
export class PostEditComponent implements OnInit {
  title = new FormControl('');
  slug = new FormControl('');
  body = new FormControl('');
  abstract = new FormControl('');
  public = new FormControl(true);
  version = new FormControl('0');

  form = new FormGroup({
    title: this.title,
    slug: this.slug,
    body: this.body,
    abstract: this.abstract,
    public: this.public,
    version: this.version,
  });

  versions: string[] = [];

  version$ = new BehaviorSubject<string | number | undefined>(undefined);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private posts: PostsService,
  ) {
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;

    this.fetchVersions(slug);
    this.listenForFormVersionChanges(slug);

    this.version$.pipe(
      switchMap(version => this.posts.get(slug, version)),
      tap(post => {
        this.title.setValue(post.title);
        this.slug.setValue(post.slug);
        this.body.setValue(post.body);
        this.abstract.setValue(post.abstract);
        this.public.setValue(post.public);
      })
    ).subscribe();

    this.slug.disable();
  }

  private listenForFormVersionChanges(slug: string) {
    this.form.controls.version.valueChanges.pipe(
      tap(version => {
        this.router.navigate(['/admin/posts', slug, 'edit', version].filter(Boolean))
      }),
      tap(version => this.version$.next(version ?? undefined)),
    ).subscribe();
  }

  private fetchVersions(slug: string) {
    this.posts.versions(slug).subscribe(rawVersions => {
      const versions = Array.from(new Set(rawVersions.versions));
      const latestVersion = String(Math.max(...versions));

      this.versions = versions.sort((a, b) => a - b).map(String);

      this.version.setValue(this.route.snapshot.paramMap.get('version') || latestVersion);
    })
  }

  submit() {
    this.posts.store(this.form.getRawValue()).subscribe(() => {
      this.router.navigateByUrl(`/posts/${this.slug.value}`);
    });
  }
}
