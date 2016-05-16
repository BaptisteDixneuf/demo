import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './login/logout.component';
import {UserComponent} from './user/user.component';


@Component({
    selector: 'my-app',
    directives: [LoginComponent, ROUTER_DIRECTIVES],
    template: `
            <h1>Bienvenue</h1>
             <nav>
      <a [routerLink]="['/home']">Mon compte</a>
      <a [routerLink]="['/login']">Se connecter</a>
      <a [routerLink]="['/logout']">Déconnexion</a>
    </nav>
    <router-outlet></router-outlet>
        `
})
@Routes([
    { path: '/user', component: UserComponent},
    { path: '/login', component: LoginComponent },
    { path: '/logout', component: LogoutComponent },
    { path: '*', component: UserComponent},
])
export class AppComponent {}