import {Injectable} from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";

type Options = {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private readonly http: HttpClient
  ) {
  }

  private path(path: string) {
    return `${environment.baseUrl}${path}`
  }

  private options(options: Options): Options {
    return {
      ...options,
      headers: {
        Authorization: localStorage.getItem('token') || '',
      }
    }
  }

  get<T>(path: string, options: Options = {}) {
    return this.http.get<T>(this.path(path), this.options(options));
  }

  put<T>(path: string, body: any, options: Options = {}) {
    return this.http.put<T>(this.path(path), body, this.options(options));
  }

  post<T>(path: string, body: any, options: Options = {}) {
    return this.http.post<T>(this.path(path), body, this.options(options));
  }

  delete<T>(path: string, options: Options = {}) {
    return this.http.delete<T>(this.path(path), this.options(options));
  }
}
