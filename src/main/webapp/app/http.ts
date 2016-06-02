/*import {Injectable} from '@angular/core';
import {Http, Headers} from 'angular2/http';

@Injectable()
export class HttpClient {
    
  constructor(public http: Http) {
    this.http = http;
  }

  createAuthorizationHeader(headers:Headers) {
    headers.append('X-AUTH-TOKEN', 'eyJpZCI6NCwidXNlcm5hbWUiOiJhZG1pbiIsImV4cGlyZXMiOjE0NjU3NTkzODUyMTIsInJvbGVzIjpbIkFETUlOIl19.yEXAfH9k1Nd1f0B7nKkChiaWZxhB3E17ar7a1yirrIw=');
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }
}*/