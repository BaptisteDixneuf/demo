import {Component} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import {LoginComponent} from './login.component';
import {PrivateComponent} from './private.component';


@Component({
    selector: 'my-app',
    directives: [LoginComponent, ROUTER_DIRECTIVES]
    template: `
            <router-outlet></router-outlet>
        `
})
@RouteConfig([
    { path: '/home', name: 'Home', component: PrivateComponent, useAsDefault:true },
    { path: '/login', name: 'Login', component: LoginComponent }
])
export class AppComponent {}