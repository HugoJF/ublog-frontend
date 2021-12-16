import { Injectable } from '@angular/core';
import {Tag} from "../types/tags";
import {ApiService} from "../api.service";

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private readonly api: ApiService
  ) { }

  tags() {
    return this.api.get<Tag[]>(`/tags`);
  }

  postsByTag(slug: string) {
    // TODO
  }

  createTag(tag: string) {
    return this.api.post<Tag>(`/tags`, {
      slug: tag.toLowerCase().replace(/[^a-zA-Z0-9-]/, ''),
      name: tag
    });
  }
}
