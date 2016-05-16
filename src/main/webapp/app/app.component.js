"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_component_1 = require('./login/login.component');
var logout_component_1 = require('./login/logout.component');
var user_component_1 = require('./user/user.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES],
            template: "\n            <h1>Bienvenue</h1>\n             <nav>\n      <a [routerLink]=\"['/home']\">Mon compte</a>\n      <a [routerLink]=\"['/login']\">Se connecter</a>\n      <a [routerLink]=\"['/logout']\">D\u00E9connexion</a>\n    </nav>\n    <router-outlet></router-outlet>\n        "
        }),
        router_1.Routes([
            { path: '/user', component: user_component_1.UserComponent },
            { path: '/login', component: login_component_1.LoginComponent },
            { path: '/logout', component: logout_component_1.LogoutComponent },
            { path: '*', component: user_component_1.UserComponent },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map