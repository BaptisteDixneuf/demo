"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var MyRequestOptions = (function (_super) {
    __extends(MyRequestOptions, _super);
    function MyRequestOptions() {
        _super.call(this);
        this.headers.append('X-AUTH-TOKEN', localStorage.getItem('jwt'));
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    }
    return MyRequestOptions;
}(http_1.BaseRequestOptions));
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    core_1.provide(http_1.RequestOptions, { useClass: MyRequestOptions })
]);
//# sourceMappingURL=main.js.map