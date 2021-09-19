import { Injectable } from '@angular/core';
import {PostProperties} from "../types/posts";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Tag} from "../types/tags";

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private readonly http: HttpClient
  ) { }

  tags() {
    return this.http.get<Tag[]>(`${environment.baseUrl}/tags`);
  }

  postsByTag(slug: string) {
    // TODO
  }
}
