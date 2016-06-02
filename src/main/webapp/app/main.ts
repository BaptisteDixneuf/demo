import {provide} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS } from '@angular/router';
import {HTTP_PROVIDERS,  Headers, Http, BaseRequestOptions, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';


class MyRequestOptions extends BaseRequestOptions {
  constructor () {
    super();  
    this.headers.append('X-AUTH-TOKEN', localStorage.getItem('jwt'));    
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  }
} 

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide(RequestOptions, { useClass: MyRequestOptions })
]);