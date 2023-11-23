(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _form_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/log-in/log-in.component */ "./src/app/form/log-in/log-in.component.ts");
/* harmony import */ var _form_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form/sign-up/sign-up.component */ "./src/app/form/sign-up/sign-up.component.ts");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], pathMatch: 'full' },
    {
        path: 'play',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./play/play.module */ "./src/app/play/play.module.ts")).then(m => m.PlayModule),
    },
    { path: 'form/log-in', component: _form_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_3__["LogInComponent"] },
    { path: 'form/sign-up', component: _form_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'learn-by-typing-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["lbt-root"]], decls: 4, vars: 0, consts: [[1, "background"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "lbt-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".background[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  background: url('background-paper.jpg');\n  background-repeat: repeat;\n  background-position: center center;\n  background-size: 100%;\n  opacity: 1;\n  position: relative;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUVBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vYXNzZXRzL2JhY2tncm91bmQtcGFwZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIC8vIHotaW5kZXg6IC05OTk5O1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lbt-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _form_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/sign-up/sign-up.component */ "./src/app/form/sign-up/sign-up.component.ts");
/* harmony import */ var _form_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form/log-in/log-in.component */ "./src/app/form/log-in/log-in.component.ts");
/* harmony import */ var _play_play_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./play/play.module */ "./src/app/play/play.module.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _play_play_module__WEBPACK_IMPORTED_MODULE_8__["PlayModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _form_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
        _form_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__["LogInComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _play_play_module__WEBPACK_IMPORTED_MODULE_8__["PlayModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _form_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                    _form_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_7__["LogInComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _play_play_module__WEBPACK_IMPORTED_MODULE_8__["PlayModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/form/log-in/log-in.component.ts":
/*!*************************************************!*\
  !*** ./src/app/form/log-in/log-in.component.ts ***!
  \*************************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LogInComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogInComponent.ɵfac = function LogInComponent_Factory(t) { return new (t || LogInComponent)(); };
LogInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogInComponent, selectors: [["lbt-log-in"]], decls: 16, vars: 0, consts: [[1, "login-base"], [1, "title"], [1, "logo"], [1, "text"], [1, "input-base"], ["type", "text", "name", "name", "placeholder", "\u30E6\u30FC\u30B6\u540D", 1, "form"], ["type", "password", "name", "password", "placeholder", "\u30D1\u30B9\u30EF\u30FC\u30C9", 1, "form"], [1, "button"], [1, "rectangle"], [1, "label"], [1, "navi-signup"], ["routerLink", "/form/sign-up"]], template: function LogInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u306B\u30ED\u30B0\u30A4\u30F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u30ED\u30B0\u30A4\u30F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u203B\u4F1A\u54E1\u767B\u9332\u306F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u3053\u3061\u3089");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".login-base[_ngcontent-%COMP%] {\n  width: 440px;\n  height: 100vh;\n  opacity: 1;\n  position: relative;\n  top: 150px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n.login-base[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 93px;\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  left: -17px;\n  overflow: visible;\n}\n.login-base[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 362px;\n  height: 93px;\n  background: url('main-logo.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: relative;\n  top: 10px;\n  left: 0px;\n  overflow: visible;\n}\n.login-base[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 162px;\n  color: rgba(18, 45, 66, 0.8);\n  position: absolute;\n  top: 35px;\n  left: 335px;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 22px;\n  opacity: 1;\n  text-align: left;\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 238px;\n  opacity: 1;\n  position: absolute;\n  margin: 0 auto;\n  top: 140px;\n  left: 0;\n  right: 0;\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 58px;\n  background: white;\n  opacity: 1;\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto 20px;\n  padding: 0 5%;\n  font-size: 16px;\n  font-weight: Medium;\n  border: 1px solid black;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 62px;\n  opacity: 1;\n  position: relative;\n  margin: auto;\n  font-size: 16px;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 6px auto 0px;\n  transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 58px;\n  background: #e6501e;\n  opacity: 1;\n  position: absolute;\n  top: 2px;\n  left: 0px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 100%;\n  line-height: 62px;\n  text-align: center;\n  position: absolute;\n  color: white;\n  top: 0px;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 18px;\n  opacity: 1;\n  text-align: center;\n}\n.login-base[_ngcontent-%COMP%]   .navi-signup[_ngcontent-%COMP%] {\n  width: 235px;\n  position: absolute;\n  top: 400px;\n  left: 200px;\n  color: rgba(0, 0, 0, 0.8);\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 17px;\n  opacity: 1;\n  text-align: right;\n}\n.login-base[_ngcontent-%COMP%]   .navi-signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0066CC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9sb2ctaW4vbG9nLWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUVKO0FBREk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUdOO0FBREk7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFHTjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FBRUo7QUFBSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBRU47QUFBSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUNBLDhDQUFBO0FBRU47QUFETTtFQUNFLHNCQUFBO0FBR1I7QUFETTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0FBR1I7QUFETTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBR1I7QUFDRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQUk7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFFTiIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vbG9nLWluL2xvZy1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1iYXNlIHtcbiAgd2lkdGg6IDQ0MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgLnRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDkzcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0xN3B4O1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIC5sb2dvIHtcbiAgICAgIHdpZHRoOiAzNjJweDtcbiAgICAgIGhlaWdodDogOTNweDtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9tYWluLWxvZ28ucG5nXCIpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIH1cbiAgICAudGV4dCB7XG4gICAgICB3aWR0aDogMTYycHg7XG4gICAgICBjb2xvcjogcmdiYSgxOCw0NSw2NiwwLjgpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAzNXB4O1xuICAgICAgbGVmdDogMzM1cHg7XG4gICAgICBmb250LWZhbWlseTogS2l3aSBNYXJ1O1xuICAgICAgZm9udC13ZWlnaHQ6IE1lZGl1bTtcbiAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgfVxuICAuaW5wdXQtYmFzZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMzhweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0b3A6IDE0MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwxKTtcbiAgICAuZm9ybSB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBNZWRpdW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDEpO1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICAuYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA2MnB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbjogNnB4IGF1dG8gMHB4O1xuICAgICAgdHJhbnNpdGlvbjogLjNzIGN1YmljLWJlemllcigwLjUsIDEsIDAuODksIDEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgICB9XG4gICAgICAucmVjdGFuZ2xlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzAsODAsMzAsMSk7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAycHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuICAgICAgLmxhYmVsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBmb250LWZhbWlseTogS2l3aSBNYXJ1O1xuICAgICAgICBmb250LXdlaWdodDogTWVkaXVtO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm5hdmktc2lnbnVwIHtcbiAgICB3aWR0aDogMjM1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDAwcHg7XG4gICAgbGVmdDogMjAwcHg7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC44KTtcbiAgICBmb250LWZhbWlseTogS2l3aSBNYXJ1O1xuICAgIGZvbnQtd2VpZ2h0OiBNZWRpdW07XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYXtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAjMDA2NkNDO1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lbt-log-in',
                templateUrl: './log-in.component.html',
                styleUrls: ['./log-in.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/form/sign-up/sign-up.component.ts":
/*!***************************************************!*\
  !*** ./src/app/form/sign-up/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SignUpComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignUpComponent.ɵfac = function SignUpComponent_Factory(t) { return new (t || SignUpComponent)(); };
SignUpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignUpComponent, selectors: [["lbt-sign-up"]], decls: 13, vars: 0, consts: [[1, "login-base"], [1, "title"], [1, "logo"], [1, "text"], [1, "input-base"], ["type", "email", "name", "name", "placeholder", "\u767B\u9332\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", 1, "form"], ["type", "text", "name", "name", "placeholder", "\u30E6\u30FC\u30B6\u540D", 1, "form"], ["type", "password", "name", "password", "placeholder", "\u30D1\u30B9\u30EF\u30FC\u30C9", 1, "form"], [1, "button"], [1, "rectangle"], [1, "label"]], template: function SignUpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u306B\u4F1A\u54E1\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u4F1A\u54E1\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".login-base[_ngcontent-%COMP%] {\n  width: 440px;\n  height: 100vh;\n  opacity: 1;\n  position: relative;\n  top: 130px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n.login-base[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 93px;\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  left: -17px;\n  overflow: visible;\n}\n.login-base[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 362px;\n  height: 93px;\n  background: url('main-logo.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: relative;\n  top: 10px;\n  left: 0px;\n  overflow: visible;\n}\n.login-base[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 162px;\n  color: rgba(18, 45, 66, 0.8);\n  position: absolute;\n  top: 35px;\n  left: 335px;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 22px;\n  opacity: 1;\n  text-align: left;\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 238px;\n  opacity: 1;\n  position: absolute;\n  margin: 0 auto;\n  top: 140px;\n  left: 0;\n  right: 0;\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  width: 90%;\n  height: 58px;\n  background: white;\n  opacity: 1;\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto 20px;\n  padding: 0 5%;\n  font-size: 16px;\n  font-weight: Medium;\n  border: 1px solid black;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 62px;\n  opacity: 1;\n  position: relative;\n  margin: auto;\n  font-size: 16px;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 10px auto 0px;\n  transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 58px;\n  background: #e6501e;\n  opacity: 1;\n  position: absolute;\n  top: 2px;\n  left: 0px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n}\n.login-base[_ngcontent-%COMP%]   .input-base[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 100%;\n  line-height: 62px;\n  text-align: center;\n  position: absolute;\n  color: white;\n  top: 0px;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 18px;\n  opacity: 1;\n  text-align: center;\n}\n.login-base[_ngcontent-%COMP%]   .navi-signup[_ngcontent-%COMP%] {\n  width: 235px;\n  position: absolute;\n  top: 400px;\n  left: 200px;\n  color: rgba(0, 0, 0, 0.8);\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 17px;\n  opacity: 1;\n  text-align: right;\n}\n.login-base[_ngcontent-%COMP%]   .navi-signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #0066CC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBRUo7QUFESTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBR047QUFESTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUdOO0FBQUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUFFSjtBQUFJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFFTjtBQUFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHFCQUFBO0VBQ0EsOENBQUE7QUFFTjtBQURNO0VBQ0Usc0JBQUE7QUFHUjtBQURNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFHUjtBQURNO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFHUjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUVOIiwiZmlsZSI6InNyYy9hcHAvZm9ybS9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tYmFzZSB7XG4gIHdpZHRoOiA0NDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEzMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC50aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5M3B4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMTdweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAubG9nbyB7XG4gICAgICB3aWR0aDogMzYycHg7XG4gICAgICBoZWlnaHQ6IDkzcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWFpbi1sb2dvLnBuZ1wiKTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDEwcHg7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgd2lkdGg6IDE2MnB4O1xuICAgICAgY29sb3I6IHJnYmEoMTgsNDUsNjYsMC44KTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMzVweDtcbiAgICAgIGxlZnQ6IDMzNXB4O1xuICAgICAgZm9udC1mYW1pbHk6IEtpd2kgTWFydTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBNZWRpdW07XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gIH1cbiAgLmlucHV0LWJhc2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjM4cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdG9wOiAxNDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMSk7XG4gICAgLmZvcm0ge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIGhlaWdodDogNThweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogTWVkaXVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwxKTtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgLmJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNjJweDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBtYXJnaW46IDEwcHggYXV0byAwcHg7XG4gICAgICB0cmFuc2l0aW9uOiAuM3MgY3ViaWMtYmV6aWVyKDAuNSwgMSwgMC44OSwgMSk7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgICAgIH1cbiAgICAgIC5yZWN0YW5nbGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1OHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCw4MCwzMCwxKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG4gICAgICAubGFiZWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDYycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBLaXdpIE1hcnU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBNZWRpdW07XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAubmF2aS1zaWdudXAge1xuICAgIHdpZHRoOiAyMzVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MDBweDtcbiAgICBsZWZ0OiAyMDBweDtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xuICAgIGZvbnQtZmFtaWx5OiBLaXdpIE1hcnU7XG4gICAgZm9udC13ZWlnaHQ6IE1lZGl1bTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBhe1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMwMDY2Q0M7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignUpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lbt-sign-up',
                templateUrl: './sign-up.component.html',
                styleUrls: ['./sign-up.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["lbt-header"]], decls: 7, vars: 0, consts: [["routerLink", "/", 1, "logo"], [1, "link-box"], ["routerLink", "/form/log-in", 1, "link"], ["routerLink", "/form/sign-up", 1, "link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u30ED\u30B0\u30A4\u30F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u4F1A\u54E1\u767B\u9332");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["header[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 60px;\n  position: fixed;\n  background: #576C88;\n  z-index: 100;\n}\nheader[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 169px;\n  height: 60px;\n  background: url('header-logo.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  position: absolute;\n  left: 30px;\n  top: 6px;\n}\nheader[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%] {\n  margin-right: 40px;\n}\nheader[_ngcontent-%COMP%]   .link-box[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 60px;\n  line-height: 60px;\n  font-family: Kiwi Maru;\n  font-weight: Middle;\n  font-size: 16px;\n  color: whitesmoke;\n  float: right;\n  margin: auto 10px auto auto;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBTGM7RUFNZCxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBRkY7QUFHRTtFQUNFLFlBQUE7RUFDQSxZQVhZO0VBWVosa0NBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBREo7QUFHRTtFQUNFLGtCQUFBO0FBREo7QUFFSTtFQUNFLFdBQUE7RUFDQSxZQXhCVTtFQXlCVixpQkF6QlU7RUEwQlYsc0JBM0JNO0VBNEJOLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUFBTiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZS1mb250OiBLaXdpIE1hcnU7XG4kaGVhZGVyLWhlaWdodDogNjBweDtcblxuaGVhZGVye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICM1NzZDODg7XG4gIHotaW5kZXg6IDEwMDtcbiAgLmxvZ297XG4gICAgd2lkdGg6IDE2OXB4O1xuICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQ7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2hlYWRlci1sb2dvLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMzBweDtcbiAgICB0b3A6IDZweDtcbiAgfVxuICAubGluay1ib3h7XG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgIC5saW5re1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xuICAgICAgbGluZS1oZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xuICAgICAgZm9udC1mYW1pbHk6ICRiYXNlLWZvbnQ7XG4gICAgICBmb250LXdlaWdodDogTWlkZGxlO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6IHdoaXRlc21va2U7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBtYXJnaW46IGF1dG8gMTBweCBhdXRvIGF1dG87XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lbt-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["lbt-home"]], decls: 113, vars: 0, consts: [[1, "home-base"], [1, "main-top"], [1, "logo"], [1, "message"], [1, "start-button", "n1"], [1, "rectangle"], ["routerLink", "play/select/exam", 1, "text"], [1, "img-keyboard"], [1, "img-book"], [1, "img-pen"], [1, "guide-detail"], [1, "text"], [1, "triangle"], [1, "gray", "n1"], [1, "explanation", "n1"], [1, "img", "right"], [1, "textbox", "left"], [1, "number"], [1, "title"], [1, "explanation", "n2"], [1, "img", "left"], [1, "textbox", "right"], [1, "gray", "n3"], [1, "explanation", "n3"], [1, "guide-start"], [1, "start-button", "n2"], [1, "contact-us"], [1, "subtitle"], ["type", "text", "name", "name", "placeholder", "\u4EF6\u540D", 1, "form", "n1"], ["type", "text", "name", "name", "placeholder", "\u672C\u6587", 1, "form", "n2"], [1, "send-button"], [1, "label"], [1, "about-developer-button"], [1, "name"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u8CC7\u683C\u52C9\u5F37\u3068\u30BF\u30A4\u30D4\u30F3\u30B0\u7DF4\u7FD2\u304C\u540C\u6642\u306B\u3067\u304D\u308B\u65B0\u611F\u899A\u30B7\u30B9\u30C6\u30E0\uFF01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u30BF\u30A4\u30D4\u30F3\u30B0\u30B2\u30FC\u30E0\u3092\u697D\u3057\u307F\u306A\u304C\u3089\u3001\u8CC7\u683C\u8A66\u9A13\u306B\u5FC5\u8981\u306A\u6587\u7AE0\u3092\u52B9\u7387\u7684\u306B\u6697\u8A18\u3057\u3088\u3046\uFF01 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u3055\u3063\u305D\u304F\u59CB\u3081\u308B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u30BF\u30A4\u30D4\u30F3\u30B0\u7DF4\u7FD2\u3068\u8A66\u9A13\u52C9\u5F37\u3092\u540C\u6642\u306B\u7FD2\u5F97 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u30BF\u30A4\u30D4\u30F3\u30B0\u7DF4\u7FD2\u306B\u6CA1\u982D\u3057\u3066\u3001\u3064\u3044\u3064\u3044\u9577\u6642\u9593");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u53D6\u308A\u7D44\u3093\u3067\u3057\u307E\u3063\u305F\u3053\u3068\u306F\u3042\u308A\u307E\u305B\u3093\u304B\uFF1F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u305D\u3093\u306A\u3042\u306A\u305F\u306B\u6717\u5831\u3067\u3059\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u3053\u306E\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u305F\u3060\u5358\u306B\u30BF\u30A4\u30D4\u30F3\u30B0\u3092");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " \u7DF4\u7FD2\u3059\u308B\u3060\u3051\u3067\u306F\u306A\u304F\u3001\u8CC7\u683C\u8A66\u9A13\u306B\u95A2\u3059\u308B\u6587\u7AE0\u3092");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u30BF\u30A4\u30D4\u30F3\u30B0\u3059\u308B\u3053\u3068\u3067\u77E5\u8B58\u306E\u5B9A\u7740\u3092\u6E2C\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u3082\u3046\u3001\u7121\u99C4\u306A\u6642\u9593\u3092\u904E\u3054\u3059\u3053\u3068\u306A\u304F\u3001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " \u6709\u610F\u7FA9\u306A\u5B66\u7FD2\u4F53\u9A13\u3092\u624B\u8EFD\u306B\u5F97\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3088\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u77E5\u8B58\u5B9A\u7740\u3092\u4FC3\u9032\u3059\u308B\u306E\uFF12\u3064\u306E\u30E2\u30FC\u30C9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u5F53\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u3067\u306F\u3001\u52B9\u679C\u7684\u306B\u77E5\u8B58\u3092\u5B9A\u7740\u3055\u305B\u308B\u305F\u3081\u3001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " 2\u3064\u306E\u9B45\u529B\u7684\u306A\u30E2\u30FC\u30C9\u3092\u3054\u7528\u610F\u3057\u3066\u3044\u307E\u3059\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " \uFF11\uFF0C\u8CC7\u683C\u8A66\u9A13\u306E\u554F\u984C\u3092\u89E3\u304F\u305F\u3081\u306B\u5FC5\u8981\u306A\u6587\u7AE0\u3092\u305D\u306E\u307E\u307E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \u30BF\u30A4\u30D4\u30F3\u30B0\u3059\u308B\u300C\u6697\u8A18\u30E2\u30FC\u30C9\u300D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \uFF12\uFF0C\u6587\u7AE0\u306E\u4E00\u90E8\u304C\u7A74\u57CB\u3081\u5F62\u5F0F\u306B\u306A\u3063\u3066\u304A\u308A\u30014\u3064\u306E\u9078\u629E\u80A2\u304B\u3089");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " \u6B63\u3057\u3044\u3082\u306E\u3092\u9078\u3076\u300C\u89E3\u7B54\u30E2\u30FC\u30C9\u300D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u81EA\u5206\u306B\u5408\u3063\u305F\u30E2\u30FC\u30C9\u3092\u9078\u3076\u3053\u3068\u3067\u3001\u3088\u308A\u52B9\u7387\u7684\u306B\u77E5\u8B58\u3092\u5B9A\u7740\u3055\u305B\u308B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " \u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "03");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\u4EBA\u6C17\u306E\u56FD\u5BB6\u8CC7\u683C\u306B\u5BFE\u5FDC\u4E88\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u672C\u30A2\u30D7\u30EA\u30B1\u30FC\u30B7\u30E7\u30F3\u306F\u3001 \u4EBA\u6C17\u306E\u56FD\u5BB6\u8CC7\u683C\u306B\u5BFE\u5FDC\u4E88\u5B9A\u3067\u3059\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " \u73FE\u6642\u70B9\u3067\u306F\u3001IT\u306B\u95A2\u3059\u308B\u57FA\u790E\u7684\u306A\u77E5\u8B58\u3092\u8A3C\u660E\u3067\u304D\u308B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " \u56FD\u5BB6\u8CC7\u683C\u306E\u300CIT\u30D1\u30B9\u30DD\u30FC\u30C8\u300D\u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u3059\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " \u307E\u305F\u4ECA\u5F8C\u306F\u3001\u4EE5\u4E0B\u306E\u4EBA\u6C17\u8CC7\u683C\u8A66\u9A13\u306B\u3082\u5BFE\u5FDC\u4E88\u5B9A\u3067\u3059\u3002");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " \u30FB\u57FA\u672C\u60C5\u5831\u6280\u8853\u8005\u8A66\u9A13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " \u30FB\u5FDC\u7528\u60C5\u5831\u6280\u8853\u8005\u8A66\u9A13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " \u30FB\u7D71\u8A08\u691C\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " \u30FB\u7C3F\u8A18\u691C\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\u4EE5\u4E0B\u306E\u30DC\u30BF\u30F3\u304B\u3089\u3055\u3063\u305D\u304F\u5B66\u7FD2\u3092\u59CB\u3081\u307E\u3057\u3087\u3046\uFF01");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u3055\u3063\u305D\u304F\u59CB\u3081\u308B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\u304A\u554F\u5408\u305B / \u3054\u8981\u671B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "- Contact us -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "textarea", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "\u9001\u4FE1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "\u958B\u767A\u8005\u306B\u3064\u3044\u3066");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".start-button[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 52px;\n  opacity: 1;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  overflow: hidden;\n  transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);\n}\n.start-button.n1[_ngcontent-%COMP%] {\n  top: 400px;\n}\n.start-button.n2[_ngcontent-%COMP%] {\n  top: 80px;\n}\n.start-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.start-button[_ngcontent-%COMP%]:hover   .rectangle[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 2.5px solid #e6501e;\n}\n.start-button[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  color: #e6501e;\n}\n.start-button[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 52px;\n  background: #e6501e;\n  opacity: 1;\n  position: relative;\n  top: 0px;\n  left: 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n  overflow: hidden;\n  transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);\n}\n.start-button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 52px;\n  color: white;\n  position: absolute;\n  line-height: 52px;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 17px;\n  opacity: 1;\n  text-align: center;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);\n}\n.about-developer-button[_ngcontent-%COMP%] {\n  transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);\n}\n.about-developer-button[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n.about-developer-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.about-developer-button[_ngcontent-%COMP%]:hover   .rectangle[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  border: 2.5px solid #576c88;\n}\n.about-developer-button[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  color: #576c88;\n}\n.contact-us[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.contact-us[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.home-base[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4500px;\n}\n.home-base[_ngcontent-%COMP%]   .main-top[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 576px;\n  opacity: 1;\n  overflow: hidden;\n}\n.home-base[_ngcontent-%COMP%]   .main-top[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 140px;\n  background: url('main-logo.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 130px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.home-base[_ngcontent-%COMP%]   .main-top[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  width: 70%;\n  color: #26466f;\n  position: absolute;\n  line-height: 32px;\n  top: 290px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-family: Kiwi Maru;\n  font-weight: Regular;\n  font-size: 18px;\n  opacity: 1;\n  text-align: center;\n}\n.home-base[_ngcontent-%COMP%]   .img-keyboard[_ngcontent-%COMP%] {\n  width: 313px;\n  height: 386px;\n  background: url('main-keyboard.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 60px;\n  right: 0;\n  overflow: hidden;\n}\n.home-base[_ngcontent-%COMP%]   .img-book[_ngcontent-%COMP%] {\n  width: 263px;\n  height: 411px;\n  background: url('main-book.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 60px;\n  left: 0;\n  overflow: hidden;\n}\n.home-base[_ngcontent-%COMP%]   .img-pen[_ngcontent-%COMP%] {\n  width: 175px;\n  height: 260px;\n  background: url('main-pen.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  opacity: 1;\n  position: absolute;\n  top: 340px;\n  left: 80px;\n  transform: rotate(-120deg);\n  overflow: hidden;\n}\n.guide-detail[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 70px;\n  opacity: 1;\n  position: absolute;\n  top: 510px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  overflow: hidden;\n}\n.guide-detail[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 110px;\n  color: #999999;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 19px;\n  opacity: 1;\n  text-align: center;\n}\n.guide-detail[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-top: 15px solid rgba(153, 153, 153, 0.5);\n  border-right: 15px solid transparent;\n  border-bottom: 15px solid transparent;\n  border-left: 15px solid transparent;\n  position: absolute;\n  top: 40px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n.gray[_ngcontent-%COMP%] {\n  width: 100%;\n  background: rgba(217, 217, 217, 0.4);\n  height: 678px;\n  opacity: 1;\n  position: absolute;\n  left: 0px;\n}\n.gray.n1[_ngcontent-%COMP%] {\n  top: 864px;\n}\n.gray.n3[_ngcontent-%COMP%] {\n  top: 2284px;\n}\n.explanation[_ngcontent-%COMP%] {\n  width: 888px;\n  height: 678px;\n  opacity: 1;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  overflow: hidden;\n}\n.explanation.n1[_ngcontent-%COMP%] {\n  top: 864px;\n}\n.explanation.n1[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  background: url('main-explanation-1.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n.explanation.n2[_ngcontent-%COMP%] {\n  top: 1570px;\n}\n.explanation.n2[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  background: url('main-explanation-2.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n.explanation.n3[_ngcontent-%COMP%] {\n  top: 2284px;\n}\n.explanation.n3[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  background: url('main-explanation-3.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n.explanation[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 270px;\n  height: 282px;\n  opacity: 1;\n  position: absolute;\n  top: 218px;\n  overflow: hidden;\n}\n.explanation[_ngcontent-%COMP%]   .img.right[_ngcontent-%COMP%] {\n  right: 0;\n}\n.explanation[_ngcontent-%COMP%]   .img.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n.explanation[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  width: 510px;\n  height: 678px;\n}\n.explanation[_ngcontent-%COMP%]   .textbox.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n.explanation[_ngcontent-%COMP%]   .textbox.right[_ngcontent-%COMP%] {\n  right: 0;\n}\n.explanation[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  width: 124px;\n  color: rgba(100, 100, 100, 0.4);\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-family: Noto Sans JP;\n  font-weight: bold;\n  font-size: 24px;\n  opacity: 1;\n  text-align: left;\n}\n.explanation[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 547px;\n  color: #576c88;\n  position: absolute;\n  top: 53px;\n  left: 0;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 26px;\n  opacity: 1;\n  text-align: left;\n}\n.explanation[_ngcontent-%COMP%]   .textbox[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 663px;\n  color: rgba(0, 0, 0, 0.6000000238);\n  position: absolute;\n  top: 120px;\n  left: 0;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 16px;\n  opacity: 1;\n  text-align: left;\n  line-height: 32px;\n}\n.guide-start[_ngcontent-%COMP%] {\n  width: 547px;\n  height: 138px;\n  opacity: 1;\n  position: absolute;\n  top: 3170px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  overflow: hidden;\n}\n.guide-start[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  width: 547px;\n  color: #5e5e5d;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 19px;\n  opacity: 1;\n  text-align: center;\n}\n.contact-us[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 600px;\n  opacity: 1;\n  position: absolute;\n  top: 3488px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  overflow: hidden;\n}\n.contact-us[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #576c88;\n  position: absolute;\n  top: 0px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 29px;\n  opacity: 1;\n  text-align: center;\n}\n.contact-us[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #888888;\n  position: absolute;\n  top: 45px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 25px;\n  opacity: 1;\n  text-align: center;\n}\n.contact-us[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  width: 500px;\n  background: white;\n  opacity: 1;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  padding: 15px;\n  color: #505050;\n  font-size: 16px;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  border: 1px solid black;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  overflow: hidden;\n  vertical-align: top;\n}\n.contact-us[_ngcontent-%COMP%]   .form.n1[_ngcontent-%COMP%] {\n  height: 58px;\n  top: 130px;\n}\n.contact-us[_ngcontent-%COMP%]   .form.n2[_ngcontent-%COMP%] {\n  height: 309px;\n  top: 202px;\n}\n.contact-us[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]:focus {\n  border-color: #000;\n  background-color: #ffc;\n  outline: none;\n}\n.contact-us[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 54px;\n  opacity: 1;\n  position: absolute;\n  top: 542px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  overflow: hidden;\n}\n.contact-us[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 54px;\n  background: #508ac7;\n  opacity: 1;\n  position: absolute;\n  top: 0;\n  left: 0px;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  overflow: hidden;\n}\n.contact-us[_ngcontent-%COMP%]   .send-button[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  width: 451px;\n  height: 54px;\n  line-height: 54px;\n  color: white;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 18px;\n  opacity: 1;\n  text-align: center;\n  vertical-align: center;\n}\n.about-developer-button[_ngcontent-%COMP%] {\n  width: 325px;\n  height: 58px;\n  opacity: 1;\n  position: absolute;\n  top: 4232px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  overflow: hidden;\n}\n.about-developer-button[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  width: 325px;\n  height: 58px;\n  background: #576c88;\n  opacity: 1;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  border-top-left-radius: 30px;\n  border-top-right-radius: 30px;\n  border-bottom-left-radius: 30px;\n  border-bottom-right-radius: 30px;\n  overflow: hidden;\n}\n.about-developer-button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 191px;\n  color: white;\n  position: absolute;\n  top: 12px;\n  left: 67px;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 19px;\n  opacity: 1;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0UsWUFMbUI7RUFNbkIsWUFMb0I7RUFNcEIsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQVBGO0FBUUU7RUFDRSxVQUFBO0FBTko7QUFRRTtFQUNFLFNBQUE7QUFOSjtBQVFFO0VBQ0UscUJBQUE7QUFOSjtBQU9JO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQUxOO0FBT0k7RUFDRSxjQTVCUztBQXVCZjtBQVFFO0VBQ0UsWUEvQmlCO0VBZ0NqQixZQS9Ca0I7RUFnQ2xCLG1CQWxDVztFQW1DWCxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4Q0FBQTtBQU5KO0FBUUU7RUFDRSxZQTlDaUI7RUErQ2pCLFlBOUNrQjtFQStDbEIsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBakRrQjtFQWtEbEIsTUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBMURRO0VBMkRSLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOENBQUE7QUFOSjtBQVVBO0VBQ0UsOENBQUE7QUFQRjtBQVFFO0VBQ0UsZ0JBQUE7QUFOSjtBQVNBO0VBQ0UscUJBQUE7QUFORjtBQU9FO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQUxKO0FBT0U7RUFDRSxjQS9FUztBQTBFYjtBQVVFO0VBQ0Usc0JBQUE7QUFQSjtBQVNFO0VBQ0UsOENBQUE7QUFQSjtBQWVBO0VBQ0Usc0JBQUE7QUFaRjtBQWNBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7QUFYRjtBQVlFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQVdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFUTjtBQVdJO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQXBJTTtFQXFJTixvQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFUTjtBQVlFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBbkpZO0VBb0paLFFBQUE7RUFDQSxnQkFBQTtBQVZKO0FBWUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FoS1k7RUFpS1osT0FBQTtFQUNBLGdCQUFBO0FBVko7QUFZRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFWSjtBQWFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQVdFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxzQkF0TVE7RUF1TVIsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBVEo7QUFXRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0EsK0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFUSjtBQVlBO0VBQ0UsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFURjtBQVVFO0VBQ0UsVUFBQTtBQVJKO0FBVUU7RUFDRSxXQUFBO0FBUko7QUFXQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFSRjtBQVNFO0VBQ0UsVUFBQTtBQVBKO0FBUUk7RUFDRSx5Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQkFBQTtBQU5OO0FBU0U7RUFDRSxXQUFBO0FBUEo7QUFRSTtFQUNFLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0FBTk47QUFTRTtFQUNFLFdBQUE7QUFQSjtBQVFJO0VBQ0UseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7QUFOTjtBQVNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVFJO0VBQ0UsUUFBQTtBQU5OO0FBUUk7RUFDRSxPQUFBO0FBTk47QUFTRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBUEo7QUFRSTtFQUNFLE9BQUE7QUFOTjtBQVFJO0VBQ0UsUUFBQTtBQU5OO0FBUUk7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFOTjtBQVFJO0VBQ0UsWUFBQTtFQUNBLGNBalRPO0VBa1RQLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxzQkF2VE07RUF3VE4sbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBTk47QUFRSTtFQUNFLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFuVU07RUFvVU4sbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFOTjtBQVVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFQRjtBQVFFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBNVZRO0VBNlZSLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQU5KO0FBU0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQU5GO0FBT0U7RUFDRSxXQUFBO0VBQ0EsY0E3V1M7RUE4V1Qsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBclhRO0VBc1hSLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUxKO0FBT0U7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQW5ZUTtFQW9ZUixtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFMSjtBQU9FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBcFpRO0VBcVpSLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU1JO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFKTjtBQU1JO0VBQ0UsYUFBQTtFQUNBLFVBQUE7QUFKTjtBQU9FO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFMSjtBQVNFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQU5OO0FBUUk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBOWNNO0VBK2NOLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBTk47QUFVQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBUEY7QUFRRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBbGVTO0VBbWVULFVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQU5KO0FBUUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFyZlE7RUFzZlIsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBTkoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbi1mb250OiBLaXdpIE1hcnU7XG4kaGVhZGVyLWhlaWdodDogNjBweDtcbiRiYXNlLWNvbG9yOiByZ2JhKDg3LDEwOCwxMzYsMSk7XG4kYWNjZW50LWNvbG9yOiByZ2JhKDIzMCw4MCwzMCwxKTtcbiRzdGFydC1idXR0b24td2lkdGg6IDMwMHB4O1xuJHN0YXJ0LWJ1dHRvbi1oZWlnaHQ6IDUycHg7XG5cblxuLnN0YXJ0LWJ1dHRvbntcbiAgd2lkdGg6ICRzdGFydC1idXR0b24td2lkdGg7XG4gIGhlaWdodDogJHN0YXJ0LWJ1dHRvbi1oZWlnaHQ7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogLjNzIGN1YmljLWJlemllcigwLjUsIDEsIDAuODksIDEpO1xuICAmLm4xe1xuICAgIHRvcDogNDAwcHg7XG4gIH1cbiAgJi5uMntcbiAgICB0b3A6IDgwcHg7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIC5yZWN0YW5nbGV7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgYm9yZGVyOiAyLjVweCBzb2xpZCAkYWNjZW50LWNvbG9yO1xuICAgIH1cbiAgICAudGV4dHtcbiAgICAgIGNvbG9yOiAkYWNjZW50LWNvbG9yO1xuICAgIH1cbiAgfVxuICAucmVjdGFuZ2xlIHtcbiAgICB3aWR0aDogJHN0YXJ0LWJ1dHRvbi13aWR0aDtcbiAgICBoZWlnaHQ6ICRzdGFydC1idXR0b24taGVpZ2h0O1xuICAgIGJhY2tncm91bmQ6ICRhY2NlbnQtY29sb3I7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IC4zcyBjdWJpYy1iZXppZXIoMC41LCAxLCAwLjg5LCAxKTtcbiAgfVxuICAudGV4dCB7XG4gICAgd2lkdGg6ICRzdGFydC1idXR0b24td2lkdGg7XG4gICAgaGVpZ2h0OiAkc3RhcnQtYnV0dG9uLWhlaWdodDtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwxKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGluZS1oZWlnaHQ6ICRzdGFydC1idXR0b24taGVpZ2h0O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6IE1lZGl1bTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IC4zcyBjdWJpYy1iZXppZXIoMC41LCAxLCAwLjg5LCAxKTtcbiAgfVxufVxuXG4uYWJvdXQtZGV2ZWxvcGVyLWJ1dHRvbntcbiAgdHJhbnNpdGlvbjogLjNzIGN1YmljLWJlemllcigwLjUsIDEsIDAuODksIDEpO1xuICAucmVjdGFuZ2xle1xuICAgIHRyYW5zaXRpb246IC4zcztcbiAgfVxufVxuLmFib3V0LWRldmVsb3Blci1idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC5yZWN0YW5nbGV7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkICRiYXNlLWNvbG9yO1xuICB9XG4gIC50ZXh0e1xuICAgIGNvbG9yOiAkYmFzZS1jb2xvcjtcbiAgfVxufVxuXG4uY29udGFjdC11cyB7XG4gIC5zZW5kLWJ1dHRvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgfVxuICAuc2VuZC1idXR0b257XG4gICAgdHJhbnNpdGlvbjogLjNzIGN1YmljLWJlemllcigwLjUsIDEsIDAuODksIDEpO1xuICB9XG5cbn1cblxuXG5cbi8vIG90aGVyIHRoYW4gYW5pbWF0aW9uXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5ob21lLWJhc2V7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1MDBweDs7XG4gIC5tYWluLXRvcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1NzZweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLmxvZ28ge1xuICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgaGVpZ2h0OiAxNDBweDsgLy8gMy44OTRcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9tYWluLWxvZ28ucG5nXCIpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTMwcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5tZXNzYWdlIHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBjb2xvcjogcmdiYSgzOCw3MCwxMTEsMSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgIHRvcDogMjkwcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBtYXJnaW46IGF1dG87XG4gICAgICBmb250LWZhbWlseTogJG1haW4tZm9udDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBSZWd1bGFyO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgLmltZy1rZXlib2FyZCB7XG4gICAgd2lkdGg6IDMxM3B4O1xuICAgIGhlaWdodDogMzg2cHg7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL21haW4ta2V5Ym9hcmQucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogJGhlYWRlci1oZWlnaHQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAuaW1nLWJvb2sge1xuICAgIHdpZHRoOiAyNjNweDtcbiAgICBoZWlnaHQ6IDQxMXB4OyAvLyAqMS41NjI3XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL21haW4tYm9vay5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAkaGVhZGVyLWhlaWdodDtcbiAgICBsZWZ0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmltZy1wZW4ge1xuICAgIHdpZHRoOiAxNzVweDtcbiAgICBoZWlnaHQ6IDI2MHB4O1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9tYWluLXBlbi5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNDBweDtcbiAgICBsZWZ0OiA4MHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMjBkZWcpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cbi5ndWlkZS1kZXRhaWwge1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUxMHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAudGV4dCB7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIGNvbG9yOiByZ2JhKDE1MywxNTMsMTUzLDEpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udDtcbiAgICBmb250LXdlaWdodDogTWVkaXVtO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAudHJpYW5nbGUge1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiAxNXB4IHNvbGlkIHJnYmEoMTUzLCAxNTMsIDE1MywgMC41KTtcbiAgICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MHB4O1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG4uZ3JheSB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxNywyMTcsMjE3LDAuNCk7XG4gIGhlaWdodDogNjc4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICAmLm4xe1xuICAgIHRvcDogODY0cHg7XG4gIH1cbiAgJi5uM3tcbiAgICB0b3A6IDIyODRweDtcbiAgfVxufVxuLmV4cGxhbmF0aW9uIHtcbiAgd2lkdGg6IDg4OHB4O1xuICBoZWlnaHQ6IDY3OHB4O1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gICYubjEge1xuICAgIHRvcDogODY0cHg7XG4gICAgLmltZ3tcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9tYWluLWV4cGxhbmF0aW9uLTEucG5nXCIpO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgfVxuICAmLm4yIHtcbiAgICB0b3A6IDE1NzBweDtcbiAgICAuaW1ne1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL21haW4tZXhwbGFuYXRpb24tMi5wbmdcIik7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICB9XG4gICYubjMge1xuICAgIHRvcDogMjI4NHB4O1xuICAgIC5pbWd7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvbWFpbi1leHBsYW5hdGlvbi0zLnBuZ1wiKTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG4gIH1cbiAgLmltZ3tcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgaGVpZ2h0OiAyODJweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIxOHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgJi5yaWdodHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAmLmxlZnR7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgfVxuICAudGV4dGJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTUwcHg7XG4gICAgd2lkdGg6IDUxMHB4O1xuICAgIGhlaWdodDogNjc4cHg7XG4gICAgJi5sZWZ0e1xuICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgJi5yaWdodHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICAubnVtYmVyIHtcbiAgICAgIHdpZHRoOiAxMjRweDtcbiAgICAgIGNvbG9yOiByZ2JhKDEwMCwxMDAsMTAwLDAuNCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgZm9udC1mYW1pbHk6IE5vdG8gU2FucyBKUDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICB3aWR0aDogNTQ3cHg7XG4gICAgICBjb2xvcjogJGJhc2UtY29sb3I7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDUzcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XG4gICAgICBmb250LXdlaWdodDogTWVkaXVtO1xuICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC50ZXh0IHtcbiAgICAgIHdpZHRoOiA2NjNweDtcbiAgICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNjAwMDAwMDIzODQxODU3OSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDEyMHB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xuICAgICAgZm9udC13ZWlnaHQ6IE1lZGl1bTtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgfVxuICB9XG59XG4uZ3VpZGUtc3RhcnQge1xuICB3aWR0aDogNTQ3cHg7XG4gIGhlaWdodDogMTM4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMTcwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC5tZXNzYWdlIHtcbiAgICB3aWR0aDogNTQ3cHg7XG4gICAgY29sb3I6IHJnYmEoOTQsOTQsOTMsMSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udDtcbiAgICBmb250LXdlaWdodDogTWVkaXVtO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuLmNvbnRhY3QtdXMge1xuICB3aWR0aDogNzAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNDg4cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC50aXRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICRiYXNlLWNvbG9yO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udDtcbiAgICBmb250LXdlaWdodDogTWVkaXVtO1xuICAgIGZvbnQtc2l6ZTogMjlweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuc3VidGl0bGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiByZ2JhKDEzNiwxMzYsMTM2LDEpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQ1cHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6IE1lZGl1bTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmZvcm0ge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgY29sb3I6IHJnYmEoODAsODAsODAsMSk7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xuICAgIGZvbnQtd2VpZ2h0OiBNZWRpdW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwxKTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICYubjF7XG4gICAgICBoZWlnaHQ6IDU4cHg7XG4gICAgICB0b3A6IDEzMHB4O1xuICAgIH1cbiAgICAmLm4ye1xuICAgICAgaGVpZ2h0OiAzMDlweDtcbiAgICAgIHRvcDogMjAycHg7XG4gICAgfVxuICB9XG4gIC5mb3JtOmZvY3Vze1xuICAgIGJvcmRlci1jb2xvcjogIzAwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuXG4gIC5zZW5kLWJ1dHRvbntcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTQycHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAucmVjdGFuZ2xlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1NHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg4MCwxMzgsMTk5LDEpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5sYWJlbCB7XG4gICAgICB3aWR0aDogNDUxcHg7XG4gICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgZm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XG4gICAgICBmb250LXdlaWdodDogTWVkaXVtO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICB9XG59XG4uYWJvdXQtZGV2ZWxvcGVyLWJ1dHRvbiB7XG4gIHdpZHRoOiAzMjVweDtcbiAgaGVpZ2h0OiA1OHB4O1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDIzMnB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAucmVjdGFuZ2xlIHtcbiAgICB3aWR0aDogMzI1cHg7XG4gICAgaGVpZ2h0OiA1OHB4O1xuICAgIGJhY2tncm91bmQ6ICRiYXNlLWNvbG9yO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICAudGV4dCB7XG4gICAgd2lkdGg6IDE5MXB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgbGVmdDogNjdweDtcbiAgICBmb250LWZhbWlseTogJG1haW4tZm9udDtcbiAgICBmb250LXdlaWdodDogTWVkaXVtO1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lbt-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/play/play-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/play/play-routing.module.ts ***!
  \*********************************************/
/*! exports provided: PlayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayRoutingModule", function() { return PlayRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_exam_exam_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select/exam/exam.component */ "./src/app/play/select/exam/exam.component.ts");
/* harmony import */ var _select_category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select/category/category.component */ "./src/app/play/select/category/category.component.ts");
/* harmony import */ var _select_section_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select/section/section.component */ "./src/app/play/select/section/section.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./start/start.component */ "./src/app/play/start/start.component.ts");
/* harmony import */ var _play_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./play.component */ "./src/app/play/play.component.ts");









const routes = [
    { path: '', component: _play_component__WEBPACK_IMPORTED_MODULE_6__["PlayComponent"],
        children: [
            { path: 'select/exam', component: _select_exam_exam_component__WEBPACK_IMPORTED_MODULE_2__["SelectExamComponent"] },
            { path: 'select/category', component: _select_category_category_component__WEBPACK_IMPORTED_MODULE_3__["SelectCategoryComponent"] },
            { path: 'select/section', component: _select_section_section_component__WEBPACK_IMPORTED_MODULE_4__["SelectSectionComponent"] },
            { path: 'start', component: _start_start_component__WEBPACK_IMPORTED_MODULE_5__["StartComponent"] }
        ] }
];
class PlayRoutingModule {
}
PlayRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlayRoutingModule });
PlayRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlayRoutingModule_Factory(t) { return new (t || PlayRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlayRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/play/play.component.ts":
/*!****************************************!*\
  !*** ./src/app/play/play.component.ts ***!
  \****************************************/
/*! exports provided: PlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayComponent", function() { return PlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class PlayComponent {
    constructor() { }
    ngOnInit() {
    }
}
PlayComponent.ɵfac = function PlayComponent_Factory(t) { return new (t || PlayComponent)(); };
PlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayComponent, selectors: [["lbt-play"]], decls: 4, vars: 0, consts: [[1, "play-base"], ["routerLink", "/", 1, "topic-path"]], template: function PlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "IT\u30D1\u30B9\u30DD\u30FC\u30C8 > \u30AB\u30C6\u30B4\u30EA\u9078\u629E > \u554F\u984C\u9078\u629E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".play-base[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  padding: 0;\n  margin: 0;\n}\n\n.topic-path[_ngcontent-%COMP%] {\n  width: 336px;\n  color: #69889d;\n  position: absolute;\n  top: 73px;\n  left: 33px;\n  text-decoration: none;\n  font-family: Kiwi Maru;\n  font-weight: Regular;\n  font-size: 14px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9wbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUYiLCJmaWxlIjoic3JjL2FwcC9wbGF5L3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheS1iYXNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi50b3BpYy1wYXRoIHtcbiAgd2lkdGg6IDMzNnB4O1xuICBjb2xvcjogcmdiYSgxMDUsMTM2LDE1NywxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDczcHg7XG4gIGxlZnQ6IDMzcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IEtpd2kgTWFydTtcbiAgZm9udC13ZWlnaHQ6IFJlZ3VsYXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lbt-play',
                templateUrl: './play.component.html',
                styleUrls: ['./play.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/play/play.module.ts":
/*!*************************************!*\
  !*** ./src/app/play/play.module.ts ***!
  \*************************************/
/*! exports provided: PlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayModule", function() { return PlayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _play_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play-routing.module */ "./src/app/play/play-routing.module.ts");
/* harmony import */ var _play_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./play.component */ "./src/app/play/play.component.ts");
/* harmony import */ var _select_category_category_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select/category/category.component */ "./src/app/play/select/category/category.component.ts");
/* harmony import */ var _select_exam_exam_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select/exam/exam.component */ "./src/app/play/select/exam/exam.component.ts");
/* harmony import */ var _select_section_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./select/section/section.component */ "./src/app/play/select/section/section.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./start/start.component */ "./src/app/play/start/start.component.ts");









class PlayModule {
}
PlayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PlayModule });
PlayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PlayModule_Factory(t) { return new (t || PlayModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _play_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlayRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PlayModule, { declarations: [_play_component__WEBPACK_IMPORTED_MODULE_3__["PlayComponent"],
        _select_category_category_component__WEBPACK_IMPORTED_MODULE_4__["SelectCategoryComponent"],
        _select_exam_exam_component__WEBPACK_IMPORTED_MODULE_5__["SelectExamComponent"],
        _select_section_section_component__WEBPACK_IMPORTED_MODULE_6__["SelectSectionComponent"],
        _start_start_component__WEBPACK_IMPORTED_MODULE_7__["StartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _play_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlayRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _play_component__WEBPACK_IMPORTED_MODULE_3__["PlayComponent"],
                    _select_category_category_component__WEBPACK_IMPORTED_MODULE_4__["SelectCategoryComponent"],
                    _select_exam_exam_component__WEBPACK_IMPORTED_MODULE_5__["SelectExamComponent"],
                    _select_section_section_component__WEBPACK_IMPORTED_MODULE_6__["SelectSectionComponent"],
                    _start_start_component__WEBPACK_IMPORTED_MODULE_7__["StartComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _play_routing_module__WEBPACK_IMPORTED_MODULE_2__["PlayRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/play/select/category/category.component.ts":
/*!************************************************************!*\
  !*** ./src/app/play/select/category/category.component.ts ***!
  \************************************************************/
/*! exports provided: SelectCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCategoryComponent", function() { return SelectCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SelectCategoryComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectCategoryComponent.ɵfac = function SelectCategoryComponent_Factory(t) { return new (t || SelectCategoryComponent)(); };
SelectCategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectCategoryComponent, selectors: [["lbt-select-category"]], decls: 68, vars: 0, consts: [[1, "title"], [1, "score-base"], [1, "percentage"], [1, "bar-base"], [1, "bar-box"], [1, "subtitle", "question"], [1, "bar-back", "memory"], [1, "bar", "memory"], [1, "subtitle", "memory"], [1, "bar-back", "question"], [1, "bar", "question"], [1, "select-base"], [1, "section-base"], [1, "subtitle"], [1, "icon", "strategy"], [1, "name"], ["routerLink", "/play/select/section", 1, "rectangle", "category"], [1, "rectangle", "category"], [1, "rectangle", "summary"], [1, "icon", "management"], [1, "icon", "technology"]], template: function SelectCategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IT\u30D1\u30B9\u30DD\u30FC\u30C8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "46 %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u89E3\u7B54\u30E2\u30FC\u30C9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u6697\u8A18\u30E2\u30FC\u30C9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u30B9\u30C8\u30E9\u30C6\u30B8\u7CFB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u4F01\u696D\u3068\u6CD5\u52D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u7D4C\u55B6\u6226\u7565");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u30B7\u30B9\u30C6\u30E0\u6226\u7565");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u307E\u3068\u3081");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8\u7CFB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u958B\u767A\u6280\u8853");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u30B5\u30FC\u30D3\u30B9\u30DE\u30CD\u30B8\u30E1\u30F3\u30C8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u307E\u3068\u3081");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u30C6\u30AF\u30CE\u30ED\u30B8\u7CFB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u6280\u8853\u8981\u7D20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30B7\u30B9\u30C6\u30E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\u57FA\u790E\u7406\u8AD6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u307E\u3068\u3081");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: Kiwi Maru;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 348px;\n  color: #576c88;\n  position: absolute;\n  top: 117px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-weight: Medium;\n  font-size: 26px;\n  text-align: center;\n}\n\n.score-base[_ngcontent-%COMP%] {\n  width: 841px;\n  height: 98px;\n  background: #69889d;\n  position: absolute;\n  top: 200px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  border-radius: 10px;\n}\n\n.score-base[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%] {\n  width: 79px;\n  height: 50px;\n  line-height: 50px;\n  color: #eeeeee;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 40px;\n  margin: auto;\n  font-weight: Regular;\n  font-size: 24px;\n  text-align: center;\n}\n\n.score-base[_ngcontent-%COMP%]   .bar-base[_ngcontent-%COMP%] {\n  height: 70px;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 145px;\n  margin: auto;\n}\n\n.score-base[_ngcontent-%COMP%]   .bar-base[_ngcontent-%COMP%]   .bar-box[_ngcontent-%COMP%] {\n  display: flex;\n  width: 700px;\n  height: 34px;\n}\n\n.score-base[_ngcontent-%COMP%]   .bar-base[_ngcontent-%COMP%]   .bar-box[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  width: 92px;\n  height: 34px;\n  line-height: 34px;\n  color: gainsboro;\n  font-weight: Regular;\n  font-size: 16px;\n  text-align: center;\n}\n\n.score-base[_ngcontent-%COMP%]   .bar-base[_ngcontent-%COMP%]   .bar-box[_ngcontent-%COMP%]   .bar-back[_ngcontent-%COMP%] {\n  width: 543px;\n  height: 17px;\n  background: #d9d9d9;\n  position: relative;\n  border-radius: 5px;\n  margin: auto 0 auto 10px;\n}\n\n.score-base[_ngcontent-%COMP%]   .bar-base[_ngcontent-%COMP%]   .bar-box[_ngcontent-%COMP%]   .bar-back[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  height: 17px;\n  background: #e6501e;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 5px;\n}\n\n.score-base[_ngcontent-%COMP%]   .bar-base[_ngcontent-%COMP%]   .bar-box[_ngcontent-%COMP%]   .bar-back[_ngcontent-%COMP%]   .bar.memory[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.score-base[_ngcontent-%COMP%]   .bar-base[_ngcontent-%COMP%]   .bar-box[_ngcontent-%COMP%]   .bar-back[_ngcontent-%COMP%]   .bar.question[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.select-base[_ngcontent-%COMP%] {\n  width: 890px;\n  height: 500px;\n  position: absolute;\n  top: 352px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%] {\n  width: 257px;\n  height: 289px;\n  opacity: 1;\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 46px;\n  opacity: 1;\n  position: relative;\n  margin: 0 auto 25px;\n  border-bottom: 3px solid rgba(105, 136, 157, 0.8);\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  opacity: 1;\n  position: absolute;\n  top: 6px;\n  left: 38px;\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .icon.strategy[_ngcontent-%COMP%] {\n  background: url('section-strategy.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .icon.management[_ngcontent-%COMP%] {\n  background: url('section-management.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  left: 34px;\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .icon.technology[_ngcontent-%COMP%] {\n  background: url('section-technology.png');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  width: 159px;\n  color: #69889d;\n  position: absolute;\n  top: 6px;\n  left: 58px;\n  font-weight: Regular;\n  font-size: 19px;\n  opacity: 1;\n  text-align: center;\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  display: block;\n  width: 245px;\n  height: 43px;\n  opacity: 1;\n  top: 0;\n  right: 0;\n  left: 0;\n  margin: 0 auto;\n  position: relative;\n  margin-bottom: 14px;\n  border-radius: 10px;\n  transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%]   .rectangle.category[_ngcontent-%COMP%] {\n  background: #fcfcfc;\n  border: 1px solid #555555;\n  color: #555555;\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%]   .rectangle.summary[_ngcontent-%COMP%] {\n  background: #69889d;\n  color: white;\n}\n\n.select-base[_ngcontent-%COMP%]   .section-base[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  width: 231px;\n  position: absolute;\n  top: 9px;\n  left: 17px;\n  font-weight: Regular;\n  font-size: 15px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9zZWxlY3QvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUNJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQWZTO0FBZ0JmOztBQUFNO0VBQ0UsV0FBQTtFQUNBLFlBbEJPO0VBbUJQLGlCQW5CTztFQW9CUCxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRVI7O0FBQU07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBRVI7O0FBRFE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUFHVjs7QUFGVTtFQUNFLFVBQUE7QUFJWjs7QUFGVTtFQUNFLFVBQUE7QUFJWjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FBREY7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFBSjs7QUFDSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtBQUNOOztBQUFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQUVSOztBQURRO0VBQ0UsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7QUFHVjs7QUFEUTtFQUNFLHlDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUdWOztBQURRO0VBQ0UseUNBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esc0JBQUE7QUFHVjs7QUFBTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUVSOztBQUNJO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQUNOOztBQUFNO0VBQ0Usc0JBQUE7QUFFUjs7QUFBTTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBRVI7O0FBQU07RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFFUjs7QUFBTTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFFUiIsImZpbGUiOiJzcmMvYXBwL3BsYXkvc2VsZWN0L2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgZm9udC1mYW1pbHk6IEtpd2kgTWFydTtcbn1cblxuLnRpdGxlIHtcbiAgd2lkdGg6IDM0OHB4O1xuICBjb2xvcjogcmdiYSg4NywgMTA4LCAxMzYsIDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTE3cHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBNZWRpdW07XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2NvcmUtYmFzZSB7XG4gIHdpZHRoOiA4NDFweDtcbiAgaGVpZ2h0OiA5OHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTM2LCAxNTcsIDEpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIC5wZXJjZW50YWdlIHtcbiAgICB3aWR0aDogNzlweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6IHJnYmEoMjM4LCAyMzgsIDIzOCwgMSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogNDBweDtcbiAgICBtYXJnaW46IGF1dG87XG5cbiAgICBmb250LXdlaWdodDogUmVndWxhcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gICRiYXItaGVpZ2h0OiAzNHB4O1xuICAuYmFyLWJhc2Uge1xuICAgIGhlaWdodDogNzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDE0NXB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAuYmFyLWJveCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgd2lkdGg6IDcwMHB4O1xuICAgICAgaGVpZ2h0OiAkYmFyLWhlaWdodDtcbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIHdpZHRoOiA5MnB4O1xuICAgICAgICBoZWlnaHQ6ICRiYXItaGVpZ2h0O1xuICAgICAgICBsaW5lLWhlaWdodDogJGJhci1oZWlnaHQ7XG4gICAgICAgIGNvbG9yOiByZ2JhKDIyMCwgMjIwLCAyMjAsIDEpO1xuICAgICAgICBmb250LXdlaWdodDogUmVndWxhcjtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuYmFyLWJhY2sge1xuICAgICAgICB3aWR0aDogNTQzcHg7XG4gICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMTcsIDIxNywgMjE3LCAxKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIG1hcmdpbjogYXV0byAwIGF1dG8gMTBweDtcbiAgICAgICAgLmJhciB7XG4gICAgICAgICAgaGVpZ2h0OiAxN3B4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjMwLCA4MCwgMzAsIDEpO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgJi5tZW1vcnkge1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgJi5xdWVzdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2VsZWN0LWJhc2Uge1xuICB3aWR0aDogODkwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNTJweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgLnNlY3Rpb24tYmFzZSB7XG4gICAgd2lkdGg6IDI1N3B4O1xuICAgIGhlaWdodDogMjg5cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICAuc3VidGl0bGUge1xuICAgICAgd2lkdGg6IDI0MHB4O1xuICAgICAgaGVpZ2h0OiA0NnB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDI1cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgxMDUsIDEzNiwgMTU3LCAwLjgpO1xuICAgICAgLmljb24ge1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNnB4O1xuICAgICAgICBsZWZ0OiAzOHB4O1xuICAgICAgICAmLnN0cmF0ZWd5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc2VjdGlvbi1zdHJhdGVneS5wbmdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgICAgJi5tYW5hZ2VtZW50IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvc2VjdGlvbi1tYW5hZ2VtZW50LnBuZ1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBsZWZ0OiAzNHB4O1xuICAgICAgICB9XG4gICAgICAgICYudGVjaG5vbG9neSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3NlY3Rpb24tdGVjaG5vbG9neS5wbmdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgd2lkdGg6IDE1OXB4O1xuICAgICAgICBjb2xvcjogcmdiYSgxMDUsIDEzNiwgMTU3LCAxKTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgbGVmdDogNThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IFJlZ3VsYXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgICAucmVjdGFuZ2xlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDI0NXB4O1xuICAgICAgaGVpZ2h0OiA0M3B4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjUsIDEsIDAuODksIDEpO1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gICAgICB9XG4gICAgICAmLmNhdGVnb3J5IHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDI1MiwgMjUyLCAxKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg4NSwgODUsIDg1LCAxKTtcbiAgICAgICAgY29sb3I6IHJnYmEoODUsIDg1LCA4NSwgMSk7XG4gICAgICB9XG4gICAgICAmLnN1bW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNSwgMTM2LCAxNTcsIDEpO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgIH1cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgd2lkdGg6IDIzMXB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOXB4O1xuICAgICAgICBsZWZ0OiAxN3B4O1xuICAgICAgICBmb250LXdlaWdodDogUmVndWxhcjtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectCategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lbt-select-category',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/play/select/exam/exam.component.ts":
/*!****************************************************!*\
  !*** ./src/app/play/select/exam/exam.component.ts ***!
  \****************************************************/
/*! exports provided: SelectExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectExamComponent", function() { return SelectExamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SelectExamComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectExamComponent.ɵfac = function SelectExamComponent_Factory(t) { return new (t || SelectExamComponent)(); };
SelectExamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectExamComponent, selectors: [["lbt-select-exam"]], decls: 35, vars: 0, consts: [[1, "title"], [1, "select-base"], [1, "select-box"], ["routerLink", "/play/select/category", 1, "rectangle"], [1, "name"], [1, "line"], [1, "icon", "it-pass"], [1, "rectangle"], [1, "icon", "basic-tech"], [1, "icon", "applied-tech"], [1, "icon", "satistical-3"], [1, "rectangle", "disable-filter"], [1, "icon", "satistical-2"], [1, "icon", "bookkeeping-2"]], template: function SelectExamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u8CC7\u683C\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "IT\u30D1\u30B9\u30DD\u30FC\u30C8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u57FA\u672C\u60C5\u5831\u6280\u8853\u8005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u5FDC\u7528\u60C5\u5831\u6280\u8853\u8005");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u7D71\u8A08\u691C\u5B9A\uFF13\u7D1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u7D71\u8A08\u691C\u5B9A\uFF12\u7D1A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u7C3F\u8A18\u691C\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".title[_ngcontent-%COMP%] {\n  width: 400px;\n  color: #576c88;\n  position: absolute;\n  top: 117px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-family: Kiwi Maru;\n  font-weight: Medium;\n  font-size: 26px;\n  text-align: center;\n}\n\n.select-base[_ngcontent-%COMP%] {\n  width: 740px;\n  height: 461px;\n  position: absolute;\n  top: 190px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  padding: 10px;\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-bottom: 30px;\n  display: flex;\n  justify-content: space-around;\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  width: 175px;\n  height: 200px;\n  background: whitesmoke;\n  opacity: 1;\n  border: 1.5px solid #666666;\n  border-radius: 20px;\n  text-decoration: none;\n  transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]:hover:not(.disable-filter) {\n  transform: scale(1.07);\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle.disable-filter[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #333333;\n  position: relative;\n  top: 13px;\n  margin: 0 auto;\n  font-family: Kiwi Maru;\n  font-weight: Light;\n  font-size: 16px;\n  text-align: center;\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  z-index: 10;\n  border-top: 1.5px solid #666666;\n  position: relative;\n  top: 30px;\n  left: 0;\n  opacity: 1;\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  opacity: 1;\n  position: relative;\n  top: 70px;\n  margin: 0 auto;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  overflow: hidden;\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .icon.it-pass[_ngcontent-%COMP%] {\n  background: url('category-it-pass.png');\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .icon.basic-tech[_ngcontent-%COMP%] {\n  background: url('category-basic-tech.png');\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .icon.applied-tech[_ngcontent-%COMP%] {\n  background: url('category-applied-tech.png');\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .icon.satistical-3[_ngcontent-%COMP%] {\n  background: url('category-satistical-3.png');\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .icon.satistical-2[_ngcontent-%COMP%] {\n  background: url('category-satistical-2.png');\n}\n\n.select-base[_ngcontent-%COMP%]   .select-box[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]   .icon.bookkeeping-2[_ngcontent-%COMP%] {\n  background: url('category-bookkeeping-2.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9zZWxlY3QvZXhhbS9leGFtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFFRjs7QUFERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUFHSjs7QUFBSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOENBQUE7QUFFTjs7QUFETTtFQUNFLHNCQUFBO0FBR1I7O0FBRE07RUFDRSxZQUFBO0FBR1I7O0FBRE07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBR1I7O0FBRE07RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FBR1I7O0FBRE07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFHUjs7QUFGUTtFQUNFLHVDQUFBO0FBSVY7O0FBRlE7RUFDRSwwQ0FBQTtBQUlWOztBQUZRO0VBQ0UsNENBQUE7QUFJVjs7QUFGUTtFQUNFLDRDQUFBO0FBSVY7O0FBRlE7RUFDRSw0Q0FBQTtBQUlWOztBQUZRO0VBQ0UsNkNBQUE7QUFJViIsImZpbGUiOiJzcmMvYXBwL3BsYXkvc2VsZWN0L2V4YW0vZXhhbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgY29sb3I6IHJnYmEoODcsIDEwOCwgMTM2LCAxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExN3B4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LWZhbWlseTogS2l3aSBNYXJ1O1xuICBmb250LXdlaWdodDogTWVkaXVtO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZWxlY3QtYmFzZSB7XG4gIHdpZHRoOiA3NDBweDtcbiAgaGVpZ2h0OiA0NjFweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC5zZWxlY3QtYm94e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLy8gZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIC8vIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgLnJlY3RhbmdsZSB7XG4gICAgICB3aWR0aDogMTc1cHg7XG4gICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NSwgMjQ1LCAxKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC41LCAxLCAwLjg5LCAxKTtcbiAgICAgICY6aG92ZXI6bm90KC5kaXNhYmxlLWZpbHRlcikge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDcpO1xuICAgICAgfVxuICAgICAgJi5kaXNhYmxlLWZpbHRlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgIH1cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiByZ2JhKDUxLCA1MSwgNTEsIDEpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogMTNweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGZvbnQtZmFtaWx5OiBLaXdpIE1hcnU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBMaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAubGluZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHJnYmEoMTAyLCAxMDIsIDEwMiwgMSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgICAgLmljb24ge1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogNzBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICYuaXQtcGFzcyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2NhdGVnb3J5LWl0LXBhc3MucG5nXCIpO1xuICAgICAgICB9XG4gICAgICAgICYuYmFzaWMtdGVjaCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2NhdGVnb3J5LWJhc2ljLXRlY2gucG5nXCIpO1xuICAgICAgICB9XG4gICAgICAgICYuYXBwbGllZC10ZWNoIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvY2F0ZWdvcnktYXBwbGllZC10ZWNoLnBuZ1wiKTtcbiAgICAgICAgfVxuICAgICAgICAmLnNhdGlzdGljYWwtMyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2NhdGVnb3J5LXNhdGlzdGljYWwtMy5wbmdcIik7XG4gICAgICAgIH1cbiAgICAgICAgJi5zYXRpc3RpY2FsLTIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9jYXRlZ29yeS1zYXRpc3RpY2FsLTIucG5nXCIpO1xuICAgICAgICB9XG4gICAgICAgICYuYm9va2tlZXBpbmctMiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2NhdGVnb3J5LWJvb2trZWVwaW5nLTIucG5nXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectExamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lbt-select-exam',
                templateUrl: './exam.component.html',
                styleUrls: ['./exam.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/play/select/section/section.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/play/select/section/section.component.ts ***!
  \**********************************************************/
/*! exports provided: SelectSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSectionComponent", function() { return SelectSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class SelectSectionComponent {
    constructor() { }
    ngOnInit() {
    }
}
SelectSectionComponent.ɵfac = function SelectSectionComponent_Factory(t) { return new (t || SelectSectionComponent)(); };
SelectSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectSectionComponent, selectors: [["lbt-select-section"]], decls: 23, vars: 0, consts: [[1, "title"], [1, "subtitle"], [1, "question-base"], ["routerLink", "/play/start", 1, "rectangle", "complete-filter"], [1, "text"], [1, "rectangle"], ["routerLink", "/play/select/category", 1, "rectangle", "back"]], template: function SelectSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IT\u30D1\u30B9\u30DD\u30FC\u30C8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u30B9\u30C8\u30E9\u30C6\u30B8\u7CFB - \u4F01\u696D\u3068\u6CD5\u52D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u4F01\u696D\u6D3B\u52D5 - Part\uFF11 (\u6E08)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u4F01\u696D\u6D3B\u52D5 - Part\uFF12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u4F01\u696D\u6D3B\u52D5 - Part\uFF13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u6CD5\u52D9 - Part\uFF11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u6CD5\u52D9 - Part\uFF12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u623B\u308B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n  font-family: Kiwi Maru;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 348px;\n  color: #576c88;\n  position: absolute;\n  top: 117px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-weight: Medium;\n  font-size: 26px;\n  text-align: center;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  width: 660px;\n  height: 34px;\n  color: #69889d;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 188px;\n  margin: 0 auto;\n  font-weight: Regular;\n  font-size: 17px;\n  opacity: 1;\n  text-align: center;\n  border-bottom: 4px solid rgba(105, 136, 157, 0.8);\n}\n\n.question-base[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 660px;\n  position: absolute;\n  top: 260px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n}\n\n.question-base[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  height: 46px;\n  margin: 0 0 16px;\n  background: #fcfcfc;\n  position: relative;\n  top: 0;\n  border: 1px solid #69889d;\n  border-radius: 10px;\n  color: #555555;\n  transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);\n}\n\n.question-base[_ngcontent-%COMP%]   .rectangle[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n.question-base[_ngcontent-%COMP%]   .rectangle.complete-filter[_ngcontent-%COMP%] {\n  border: 1px solid #ad786e;\n  background: #fff0f0;\n  color: #963c0a;\n}\n\n.question-base[_ngcontent-%COMP%]   .rectangle.back[_ngcontent-%COMP%] {\n  border: none;\n  background: #e6501e;\n  color: #fff0f0;\n}\n\n.question-base[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  left: 26px;\n  font-weight: Regular;\n  font-size: 16px;\n  line-height: 46px;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9zZWxlY3Qvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQUVGOztBQURFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0FBR0o7O0FBRkk7RUFDRSxzQkFBQTtBQUlOOztBQUZJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFJTjs7QUFGSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFJTjs7QUFERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9wbGF5L3NlbGVjdC9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICBmb250LWZhbWlseTogS2l3aSBNYXJ1O1xufVxuXG4udGl0bGUge1xuICB3aWR0aDogMzQ4cHg7XG4gIGNvbG9yOiByZ2JhKDg3LCAxMDgsIDEzNiwgMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMTdweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC13ZWlnaHQ6IE1lZGl1bTtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3VidGl0bGUge1xuICB3aWR0aDogNjYwcHg7XG4gIGhlaWdodDogMzRweDtcbiAgY29sb3I6IHJnYmEoMTA1LDEzNiwxNTcsMSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTg4cHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBmb250LXdlaWdodDogUmVndWxhcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2JhKDEwNSwxMzYsMTU3LDAuOCk7XG59XG5cbi5xdWVzdGlvbi1iYXNle1xuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogNjYwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNjBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAucmVjdGFuZ2xlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTIsMjUyLDI1MiwxKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTA1LDEzNiwxNTcsMSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjb2xvcjogcmdiYSg4NSw4NSw4NSwxKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGN1YmljLWJlemllcigwLjUsIDEsIDAuODksIDEpO1xuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKTtcbiAgICB9XG4gICAgJi5jb21wbGV0ZS1maWx0ZXIge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNzMsMTIwLDExMCwxKTtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI0MCwyNDAsMSk7XG4gICAgICBjb2xvcjogcmdiYSgxNTAsNjAsMTAsMSk7XG4gICAgfVxuICAgICYuYmFjayB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMCwgODAsIDMwLCAxKTtcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNDAsMjQwLDEpO1xuICAgIH1cbiAgfVxuICAudGV4dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IFJlZ3VsYXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lbt-select-section',
                templateUrl: './section.component.html',
                styleUrls: ['./section.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/play/start/start.component.ts":
/*!***********************************************!*\
  !*** ./src/app/play/start/start.component.ts ***!
  \***********************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StartComponent {
    constructor() { }
    ngOnInit() {
    }
}
StartComponent.ɵfac = function StartComponent_Factory(t) { return new (t || StartComponent)(); };
StartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartComponent, selectors: [["lbt-start"]], decls: 24, vars: 0, consts: [[1, "title"], [1, "subtitle"], [1, "start-base"], [1, "statement"], [1, "button-base"], [1, "button-section"], [1, "button"], [1, "text"], [1, "explanation"]], template: function StartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "IT\u30D1\u30B9\u30DD\u30FC\u30C8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u30B9\u30C8\u30E9\u30C6\u30B8\u7CFB - \u4F01\u696D\u3068\u6CD5\u52D9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u30E2\u30FC\u30C9\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u6697\u8A18\u30E2\u30FC\u30C9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u554F\u984C\u6587\u3092\u305D\u306E\u307E\u307E\u30BF\u30A4\u30D4\u30F3\u30B0\u3057\u3066\u3001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u6697\u8A18\u3092\u884C\u3046\u30E2\u30FC\u30C9\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u89E3\u7B54\u30E2\u30FC\u30C9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u554F\u984C\u6587\u306E\u4E00\u90E8\u304C\u96A0\u3055\u308C\u3066\u304A\u308A\u3001");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u305D\u308C\u3092\u89E3\u7B54\u3057\u3066\u30BF\u30A4\u30D4\u30F3\u30B0\u3059\u308B\u30E2\u30FC\u30C9\u3002 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  font-family: Kiwi Maru;\n}\n\n.title[_ngcontent-%COMP%] {\n  width: 348px;\n  color: #576c88;\n  position: absolute;\n  top: 117px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-weight: Medium;\n  font-size: 26px;\n  text-align: center;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  width: 660px;\n  height: 34px;\n  color: #69889d;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 188px;\n  margin: 0 auto;\n  font-weight: Regular;\n  font-size: 17px;\n  opacity: 1;\n  text-align: center;\n  border-bottom: 4px solid rgba(105, 136, 157, 0.8);\n}\n\n.start-base[_ngcontent-%COMP%] {\n  height: 600px;\n  width: 700px;\n  position: absolute;\n  top: 240px;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.start-base[_ngcontent-%COMP%]   .statement[_ngcontent-%COMP%] {\n  width: 482px;\n  color: #576c88;\n  position: relative;\n  top: 90px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  font-weight: Regular;\n  font-size: 22px;\n  text-align: center;\n}\n\n.start-base[_ngcontent-%COMP%]   .button-base[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 180px;\n  position: relative;\n  top: 200px;\n  margin: sauto;\n  display: flex;\n  justify-content: center;\n}\n\n.start-base[_ngcontent-%COMP%]   .button-base[_ngcontent-%COMP%]   .button-section[_ngcontent-%COMP%] {\n  width: 330px;\n  height: 160px;\n  position: relative;\n  margin: 0 10px;\n}\n\n.start-base[_ngcontent-%COMP%]   .button-base[_ngcontent-%COMP%]   .button-section[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 52px;\n  margin: 0 auto;\n  background: #e6501e;\n  border-radius: 30px;\n  transition: 0.3s cubic-bezier(0.5, 1, 0.89, 1);\n}\n\n.start-base[_ngcontent-%COMP%]   .button-base[_ngcontent-%COMP%]   .button-section[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n}\n\n.start-base[_ngcontent-%COMP%]   .button-base[_ngcontent-%COMP%]   .button-section[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: Medium;\n  font-size: 18px;\n  line-height: 50px;\n  text-align: center;\n}\n\n.start-base[_ngcontent-%COMP%]   .button-base[_ngcontent-%COMP%]   .button-section[_ngcontent-%COMP%]   .explanation[_ngcontent-%COMP%] {\n  width: 100%;\n  color: #e6501e;\n  margin-top: 26px;\n  font-weight: Regular;\n  font-size: 16px;\n  text-align: center;\n  line-height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheS9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxpREFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFFRjs7QUFERTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFERTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUdKOztBQUZJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFJTjs7QUFITTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQUtSOztBQUpRO0VBQ0Usc0JBQUE7QUFNVjs7QUFKUTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTVY7O0FBSE07RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUtSIiwiZmlsZSI6InNyYy9hcHAvcGxheS9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gIGZvbnQtZmFtaWx5OiBLaXdpIE1hcnU7XG59XG5cbi50aXRsZSB7XG4gIHdpZHRoOiAzNDhweDtcbiAgY29sb3I6IHJnYmEoODcsIDEwOCwgMTM2LCAxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDExN3B4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXdlaWdodDogTWVkaXVtO1xuICBmb250LXNpemU6IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zdWJ0aXRsZSB7XG4gIHdpZHRoOiA2NjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBjb2xvcjogcmdiYSgxMDUsMTM2LDE1NywxKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAxODhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBSZWd1bGFyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYmEoMTA1LDEzNiwxNTcsMC44KTtcbn1cblxuLnN0YXJ0LWJhc2Uge1xuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogNzAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNDBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgLnN0YXRlbWVudCB7XG4gICAgd2lkdGg6IDQ4MnB4O1xuICAgIGNvbG9yOiByZ2JhKDg3LDEwOCwxMzYsMSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogOTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBmb250LXdlaWdodDogUmVndWxhcjtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5idXR0b24tYmFzZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDIwMHB4O1xuICAgIG1hcmdpbjogc2F1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAuYnV0dG9uLXNlY3Rpb24ge1xuICAgICAgd2lkdGg6IDMzMHB4O1xuICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAyODBweDtcbiAgICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzAsODAsMzAsMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuNSwgMSwgMC44OSwgMSk7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDEpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBNZWRpdW07XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmV4cGxhbmF0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiByZ2JhKDIzMCw4MCwzMCwxKTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IFJlZ3VsYXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'lbt-start',
                templateUrl: './start.component.html',
                styleUrls: ['./start.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/youhei_3_kamimura/Documents/個人開発/LearnByTyping/learn-by-typing-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map