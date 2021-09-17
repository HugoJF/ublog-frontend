import {Component, OnInit} from '@angular/core';
import {Post} from "../../types/posts";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html'
})
export class PostEditComponent implements OnInit {
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
      // TODO: test
      this.form.get('slug')?.disable();
    })

  }

  submit() {
    this.posts.store(this.form.value).subscribe(() => {
      this.router.navigateByUrl(`/posts/${this.slug.value}`);
    })
  }
}
