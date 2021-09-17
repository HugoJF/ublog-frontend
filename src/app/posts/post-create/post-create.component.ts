import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../posts.service";
import {FormControl, FormGroup} from "@angular/forms";
import {iif, of} from "rxjs";
import {map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent implements OnInit {
  title = new FormControl('');
  slug = new FormControl('');
  body = new FormControl('');

  form = new FormGroup({
    title: this.title,
    slug: this.slug,
    body: this.body,
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private posts: PostsService,
  ) {
  }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;

    // Fill defaults
    this.posts.get(slug).subscribe(post => {
      this.form.setValue(post);
    })

    // Automatically generate slug from title
    this.title.valueChanges.pipe(
      mergeMap(v => iif(() => this.slug.pristine, of(v))),
      map(v => v.toString().toLowerCase().replace(/[^a-z0-9]/g, '-'))
    ).subscribe(values => {
      this.slug.setValue(values)
    })
  }

  submit() {
    this.posts.store(this.form.value).subscribe(() => {
      this.router.navigateByUrl(`/posts/${this.slug.value}`);
    })
  }
}
