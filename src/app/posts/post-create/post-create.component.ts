import {Component, OnInit} from '@angular/core';
import {KatexOptions} from "ngx-markdown";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../posts.service";
import {FormControl, FormGroup} from "@angular/forms";

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

    this.posts.get(slug).subscribe(post => {
      this.form.setValue(post);
    })
  }

  submit() {
    this.posts.store(this.form.value).subscribe(() => {
      this.router.navigateByUrl(`/posts/${this.slug.value}`);
    })
  }
}
