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

  store(post: PostProperties) {
    return this.http.post(`${environment.baseUrl}/posts`, post);
  }

  get(slug: string) {
    return this.http.get<Post>(`${environment.baseUrl}/posts/${slug}`);
  }
}
