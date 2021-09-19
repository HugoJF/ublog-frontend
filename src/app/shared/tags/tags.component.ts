import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../types/posts";
import {TagsService} from "../../tags/tags.service";
import {BehaviorSubject, Observable} from "rxjs";
import {Tag} from "../../types/tags";
import {PostsService} from "../../posts/posts.service";
import {switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-tags[post]',
  templateUrl: './tags.component.html',
  host: {class: 'contents'}
})
export class TagsComponent implements OnInit {
  @Input() post!: Post;

  tagMenuOpen = false;

  refreshTags = new BehaviorSubject<void>(undefined);

  postTags?: Tag[];

  tags$!: Observable<Tag[]>
  postTags$!: Observable<Tag[]>;

  constructor(
    private readonly postsService: PostsService,
    private readonly tagsService: TagsService
  ) {
  }

  ngOnInit(): void {
    console.log(this.post);
    this.postTags$ = this.refreshTags.pipe(
      switchMap(() => this.postsService.tags(this.post.slug).pipe(
        tap(tags => this.postTags = tags),
      ))
    );

    this.tags$ = this.tagsService.tags();
  }

  addTag(tagSlug: string) {
    const hasTag = this.hasTag(tagSlug);
    const action = hasTag ? 'untagPost' : 'tagPost';

    this.postsService[action](this.post.slug, tagSlug).subscribe(
      () => this.refreshTags.next()
    );
  }

  hasTag(tagSlug: string): boolean {
    if (!this.postTags) {
      return false
    }

    return this.postTags.map(tag => tag.slug).includes(tagSlug);
  }

  toggleTagMenu() {
    this.tagMenuOpen = !this.tagMenuOpen;
  }
}
