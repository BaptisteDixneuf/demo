import {provide} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS } from '@angular/router';
import {HTTP_PROVIDERS,  Headers, Http, BaseRequestOptions, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';


class MyRequestOptions extends BaseRequestOptions {
  constructor () {
    super();
    this.headers.append('X-AUTH-TOKEN','eyJpZCI6NCwidXNlcm5hbWUiOiJhZG1pbiIsImV4cGlyZXMiOjE0NjU3NTkzODUyMTIsInJvbGVzIjpbIkFETUlOIl19.yEXAfH9k1Nd1f0B7nKkChiaWZxhB3E17ar7a1yirrIw=');
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }
} 

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(RequestOptions, { useClass: MyRequestOptions })
]);