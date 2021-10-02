import {Injectable} from '@angular/core';
import {Post, PostProperties} from "../types/posts";
import {Tag} from "../types/tags";
import {ApiService} from "../api.service";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private api: ApiService) {
  }

  rollBack(slug: string, version: number) {
    return this.api.put(`/posts/${slug}/versions/${version}`, {});
  }

  versions(slug: string) {
    return this.api.get<{ versions: string[] }>(`/posts/${slug}/versions`);
  }

  store(post: PostProperties) {
    return this.api.post(`/posts`, post);
  }

  get(slug: string, version?: number | string) {
    if (version) {
      const v = version.toString().replace(/[a-zA-Z]/, '');

      return this.api.get<Post>(`/posts/${slug}/versions/${v}`);
    } else {
      return this.api.get<Post>(`/posts/${slug}`);
    }
  }

  index(key: string | undefined) {
    const options = key ? {params: {key}} : {};
    return this.api.get<Post[]>(`/posts`, options);
  }

  tags(slug: string) {
    return this.api.get<Tag[]>(`/posts/${slug}/tags`);
  }

  tagPost(postSlug: string, tagSlug: string) {
    return this.api.post(`posts/${postSlug}/tag/${tagSlug}`, {});
  }

  untagPost(postSlug: string, tagSlug: string) {
    return this.api.delete(`/posts/${postSlug}/tag/${tagSlug}`, {});
  }
}
