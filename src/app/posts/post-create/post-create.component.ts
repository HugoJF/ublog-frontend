import {Component, OnInit} from '@angular/core';
import {KatexOptions} from "ngx-markdown";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent implements OnInit {
  content: string = '# Let\'s write something amazing';
  slug: string = 'my-greatest-post';

  constructor(
    private router: Router,
    private http: HttpClient,
    private posts: PostsService,
  ) {
  }

  ngOnInit(): void {
  }

  create() {
    this.posts.store({
      slug: this.slug,
      title: 'my title',
      body: this.content,
    }).subscribe(() => {
      this.router.navigateByUrl(`/posts/${this.slug}`);
    })
  }
}
