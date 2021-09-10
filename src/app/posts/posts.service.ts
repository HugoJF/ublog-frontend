import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post, PostProperties} from "../types/posts";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  rollBack(slug: string, version: number) {
    return this.http.put(`${environment.baseUrl}/posts/${slug}/versions/${version}`, {});
  }

  versions(slug: string) {
    return this.http.get<{versions: string[]}>(`${environment.baseUrl}/posts/${slug}/versions`);
  }

  store(post: PostProperties) {
    return this.http.post(`${environment.baseUrl}/posts`, post);
  }

  get(slug: string, version?: number|string) {
    if (version) {
      const v = version.toString().replace(/[a-zA-Z]/, '');

      return this.http.get<Post>(`${environment.baseUrl}/posts/${slug}/versions/${v}`);
    } else {
      return this.http.get<Post>(`${environment.baseUrl}/posts/${slug}`);
    }
  }

  index(key: string | undefined) {
    const options = key ? {params: {key}} : {};
    return this.http.get<Post[]>(`${environment.baseUrl}/posts`, options);
  }
}
