(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#container {\r\n  margin: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjY29udGFpbmVyIHtcclxuICBtYXJnaW46IDhweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <h1>About</h1>\n\n  <p>\n    This app was created as a class project for Professor Mitchell's SE575 at\n    Drexel University.\n  </p>\n\n  <p>\n    This app is a demonstration of nontrivial design concepts, such as REST API's,\n    mobile app development, and web development using current day frameworks and\n    techniques.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _watchad_watchad_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./watchad/watchad.component */ "./src/app/watchad/watchad.component.ts");
/* harmony import */ var _charities_charities_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./charities/charities.component */ "./src/app/charities/charities.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_8__["ToolbarComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _watchad_watchad_component__WEBPACK_IMPORTED_MODULE_14__["WatchadComponent"],
                _charities_charities_component__WEBPACK_IMPORTED_MODULE_15__["CharitiesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([
                    { path: '', component: _watchad_watchad_component__WEBPACK_IMPORTED_MODULE_14__["WatchadComponent"] },
                    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"] },
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"] },
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/charities/charities.component.css":
/*!***************************************************!*\
  !*** ./src/app/charities/charities.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nmat-select {\r\n  background-color: white;\r\n  color: black;\r\n  border : 1px solid #666666;\r\n}\r\n\r\nmat-select span {\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcml0aWVzL2NoYXJpdGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsMkJBQTJCO0NBQzVCOztBQUVEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvY2hhcml0aWVzL2NoYXJpdGllcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbm1hdC1zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXIgOiAxcHggc29saWQgIzY2NjY2NjtcclxufVxyXG5cclxubWF0LXNlbGVjdCBzcGFuIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/charities/charities.component.html":
/*!****************************************************!*\
  !*** ./src/app/charities/charities.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-select id=\"charitySelect\" placeholder=\"Charity\" [value]=0>\n  <mat-option *ngFor=\"let charity of charities\" [value]=\"charity.value\">\n    {{charity.viewValue}}\n  </mat-option>\n</mat-select>\n"

/***/ }),

/***/ "./src/app/charities/charities.component.ts":
/*!**************************************************!*\
  !*** ./src/app/charities/charities.component.ts ***!
  \**************************************************/
/*! exports provided: CharitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharitiesComponent", function() { return CharitiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CharitiesComponent = /** @class */ (function () {
    function CharitiesComponent() {
        this.charities = [
            { value: 0, viewValue: 'Random' },
            { value: 1, viewValue: 'Habitat for Humanity' },
            { value: 2, viewValue: 'The Foodbank' },
            { value: 3, viewValue: 'WildAid' }
        ];
    }
    CharitiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charities',
            template: __webpack_require__(/*! ./charities.component.html */ "./src/app/charities/charities.component.html"),
            styles: [__webpack_require__(/*! ./charities.component.css */ "./src/app/charities/charities.component.css")]
        })
    ], CharitiesComponent);
    return CharitiesComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nbutton#burgerButton {\r\n  position: absolute;\r\n  right: 2%;\r\n  border: none;\r\n  background: none;\r\n  padding: 0;\r\n}\r\n\r\nmat-toolbar {\r\n  padding: 0;\r\n  border: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFdBQVc7RUFDWCxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5idXR0b24jYnVyZ2VyQnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDIlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" id=\"burgerButton\">\n    <mat-icon aria-label=\"Menu\">menu</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <a routerLink=\"/\">\n      <button mat-menu-item>\n        <span>Watch Ads</span>\n      </button>\n    </a>\n    <!--<a routerLink=\"/settings\">-->\n      <!--<button mat-menu-item>-->\n        <!--<span>Settings</span>-->\n      <!--</button>-->\n    <!--</a>-->\n    <a routerLink=\"/about\">\n      <button mat-menu-item>\n        <span>About</span>\n      </button>\n    </a>\n  </mat-menu>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.css */ "./src/app/toolbar/toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/watchad/watchad.component.css":
/*!***********************************************!*\
  !*** ./src/app/watchad/watchad.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div#fullpage {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0 solid red;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n}\r\n\r\nbutton#btn_showvideo {\r\n  width: calc(80% - 40px);\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n\r\n#numAdsWatched {\r\n  text-align: center;\r\n}\r\n\r\n::ng-deep .mat-select-value {\r\n  color: black;\r\n  border: black;\r\n}\r\n\r\nmat-select {\r\n  background-color: white;\r\n  color: black;\r\n  border : 1px solid black;\r\n}\r\n\r\nmat-select span {\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2hhZC93YXRjaGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHlDQUFpQztVQUFqQyxpQ0FBaUM7Q0FDbEM7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLFVBQVU7Q0FDWDs7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGFBQWE7RUFDYixjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHlCQUF5QjtDQUMxQjs7QUFFRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL3dhdGNoYWQvd2F0Y2hhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2I2Z1bGxwYWdlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXI6IDAgc29saWQgcmVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbmJ1dHRvbiNidG5fc2hvd3ZpZGVvIHtcclxuICB3aWR0aDogY2FsYyg4MCUgLSA0MHB4KTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI251bUFkc1dhdGNoZWQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc2VsZWN0LXZhbHVlIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyOiBibGFjaztcclxufVxyXG5cclxubWF0LXNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlciA6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxubWF0LXNlbGVjdCBzcGFuIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/watchad/watchad.component.html":
/*!************************************************!*\
  !*** ./src/app/watchad/watchad.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"numAdsWatched\">Ads Watched: {{adsWatched}}</h2>\n\n<div id=\"fullpage\">\n  <button id='btn_showvideo'>Preparing Ad</button>\n  <br><br><br>\n  <mat-select id=\"charitySelect\" placeholder=\"Charity\" [value]=selectedCharity (selectionChange)=\"onSelectChange($event)\">\n    <mat-option *ngFor=\"let charity of charities\" [value]=\"charity.value\">\n      {{charity.viewValue}}\n    </mat-option>\n  </mat-select>\n\n  <br><br><br>\n  <button id=\"adTest\"></button>\n</div>\n"

/***/ }),

/***/ "./src/app/watchad/watchad.component.ts":
/*!**********************************************!*\
  !*** ./src/app/watchad/watchad.component.ts ***!
  \**********************************************/
/*! exports provided: WatchadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchadComponent", function() { return WatchadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var WatchadComponent = /** @class */ (function () {
    function WatchadComponent(injector) {
        this.injector = injector;
        this.adsWatched = 0;
        this.selectedCharity = 0;
        this.appData = {
            numWatched: 0,
            charityChoice: 0
        };
        this.charities = [
            { value: 0, viewValue: 'Random' },
            { value: 1, viewValue: 'Habitat for Humanity' },
            { value: 2, viewValue: 'The Foodbank' },
            { value: 3, viewValue: 'WildAid' }
        ];
        this.http = injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]);
        var localData = JSON.parse(window.localStorage.getItem('data'));
        if (localData !== null) {
            this.appData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.appData, localData);
        }
        // @ts-ignore
        this.adsWatched = this.appData.numWatched;
        // @ts-ignore
        this.selectedCharity = this.appData.charityChoice;
    }
    WatchadComponent.prototype.ngOnInit = function () {
        var that = this;
        var admobid = {};
        var onDeviceReady = function () {
            // @ts-ignore
            if (!AdMob) {
                alert('admob plugin not ready');
                return;
            }
            initAd();
        };
        function prepareVideo() {
            // @ts-ignore
            AdMob.prepareRewardVideoAd({
                adId: admobid['rewardvideo'],
                autoShow: false,
            }, function () {
            }, function (e) {
                console.log('Failed to prepare reward video ad');
                console.log(e);
            });
        }
        function initAd() {
            if (/(android)/i.test(navigator.userAgent)) {
                admobid = {
                    banner: 'ca-app-pub-3940256099942544/6300978111',
                    interstitial: 'ca-app-pub-3940256099942544/1033173712',
                    rewardvideo: 'ca-app-pub-3940256099942544/5224354917'
                };
            }
            else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
                admobid = {
                    banner: 'ca-app-pub-3940256099942544/4480807092',
                    interstitial: 'ca-app-pub-3940256099942544/4411468910',
                    rewardvideo: 'ca-app-pub-3940256099942544/1712485313'
                };
            }
            else {
                admobid = {
                    banner: 'ca-app-pub-6869992474017983/8878394753',
                    interstitial: 'ca-app-pub-6869992474017983/1355127956',
                    rewardvideo: 'ca-app-pub-3940256099942544/5224354917'
                };
            }
            // @ts-ignore
            AdMob.getAdSettings(function (info) {
                info.adTrackingEnabled = info.adTrackingEnabled || '?';
                console.log('adId: ' + info.adId + '\n' +
                    'adTrackingEnabled: ' + info.adTrackingEnabled);
            }, function () {
                console.log('failed to get user ad settings');
            });
            // @ts-ignore
            AdMob.setOptions({
                isTesting: true,
                bgColor: 'black',
            });
            // new events, with variable to differentiate: adNetwork, adType, adEvent
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).on('onAdFailLoad', function (e) {
                // when jquery is used, it will hijack the event,
                // so we have to get data from original event
                if (typeof e.originalEvent !== 'undefined') {
                    // @ts-ignore
                    e = e.originalEvent;
                }
                var data = e.detail || e.data || e;
                // @ts-ignore
                data.adNetwork = data.adNetwork || '';
                // @ts-ignore
                data.adType = data.adType || '';
                // @ts-ignore
                data.adEvent = data.adEvent || '';
                // @ts-ignore
                alert('error: ' + data.error +
                    ', reason: ' + data['reason'] +
                    ', adNetwork: ' + data['adNetwork'] +
                    ', adType: ' + data['adType'] +
                    ', adEvent: ' + data['adEvent']);
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).on('onAdLoaded', function (e) {
                if (typeof e.originalEvent !== 'undefined') {
                    // @ts-ignore
                    e = e.originalEvent;
                }
                var data = e.data || e;
                // @ts-ignore
                if (data.adType === 'rewardvideo') {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('#btn_showvideo').prop({
                        'disabled': false,
                        'textContent': 'Watch Ad!'
                    });
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).on('onAdPresent', function (e) {
                if (typeof e.originalEvent !== 'undefined') {
                    // @ts-ignore
                    e = e.originalEvent;
                }
                // @ts-ignore
                e.rewardAmount = e.rewardAmount || 0;
                // @ts-ignore
                if (e.rewardAmount > 0) {
                    console.log('Congratulations, you were rewarded!');
                    var charityNumber = that.selectedCharity;
                    if (charityNumber === 0) {
                        charityNumber = Math.ceil(Math.random() * that.charities.length - 1);
                    }
                    that.http.post('https://h1k8qwwvua.execute-api.us-east-1.amazonaws.com/default/AdsForCharity', JSON.stringify({ 'charity': charityNumber })).toPromise()
                        .catch(function (err) {
                        console.log('Failed to send data to server!');
                        console.log(err);
                    })
                        .finally(function () {
                        that.adsWatched += 1;
                        // @ts-ignore
                        that.appData.numWatched += 1;
                    });
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__(document).on('onAdDismiss', function (e) {
                if (typeof e.originalEvent !== 'undefined') {
                    // @ts-ignore
                    e = e.originalEvent;
                }
                var data = e.data || e;
                // @ts-ignore
                if (data.adType === 'rewardvideo') {
                    jquery__WEBPACK_IMPORTED_MODULE_3__('#btn_showvideo').prop({
                        'disabled': true,
                        'textContent': 'Preparing Ad'
                    });
                    prepareVideo();
                }
            });
            jquery__WEBPACK_IMPORTED_MODULE_3__('#btn_showvideo').on('click', function () {
                // @ts-ignore
                AdMob.showRewardVideoAd(function () {
                    // This is just the success callback for Showing the ad,
                    // it has nothing to do with whether or not they actually
                    // watched the damn thing!
                }, function (e) {
                    console.log('showRewardVideoAd Failure callback');
                    console.log(e);
                });
            });
            prepareVideo();
        }
        jquery__WEBPACK_IMPORTED_MODULE_3__('#btn_showvideo').prop('disabled', true);
        // on mobile device, we must wait the 'deviceready' event fired by cordova
        if (/(ipad|iphone|ipod|android|windows phone)/i
            .test(navigator.userAgent)) {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        else {
            console.log('Browsers are not supported. :(');
        }
        jquery__WEBPACK_IMPORTED_MODULE_3__('#adTest').on('click', function () {
            // @ts-ignore
            that.appData.numWatched += 1;
        });
    };
    WatchadComponent.prototype.ngOnDestroy = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).off('onAdDismiss onAdPresent onAdLoaded onAdFailLoad');
        jquery__WEBPACK_IMPORTED_MODULE_3__('#btn_showvideo').off('click');
        window.localStorage.setItem('data', JSON.stringify(this.appData));
    };
    WatchadComponent.prototype.onSelectChange = function (event) {
        this.selectedCharity = event.value;
        // @ts-ignore
        this.appData.chariyChoice = event.value;
    };
    WatchadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-watchad',
            template: __webpack_require__(/*! ./watchad.component.html */ "./src/app/watchad/watchad.component.html"),
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            styles: [__webpack_require__(/*! ./watchad.component.css */ "./src/app/watchad/watchad.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], WatchadComponent);
    return WatchadComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vlek\WebstormProjects\AngularCordova AdsforCharity\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map