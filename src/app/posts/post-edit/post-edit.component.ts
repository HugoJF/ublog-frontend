import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PostsService} from "../posts.service";
import {Post} from "../../types/posts";

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

  form = new FormGroup({
    title: this.title,
    slug: this.slug,
    body: this.body,
    abstract: this.abstract,
    public: this.public,
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

    this.slug.disable();
    this.posts.get(slug).subscribe(post => {
      Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].setValue(post[key as keyof Post])
      });
    })
  }

  submit() {
    this.posts.store(this.form.getRawValue()).subscribe(() => {
      this.router.navigateByUrl(`/posts/${this.slug.value}`);
    });
  }
}
