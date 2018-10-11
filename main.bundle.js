webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__ = __webpack_require__("./src/app/guards/is-logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_can_deactivate_guard__ = __webpack_require__("./src/app/guards/can-deactivate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_channel_descriptions_channel_descriptions_component__ = __webpack_require__("./src/app/pages/channel-descriptions/channel-descriptions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_channel_description_detail_channel_description_detail_component__ = __webpack_require__("./src/app/pages/channel-description-detail/channel-description-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_failures_failures_component__ = __webpack_require__("./src/app/pages/failures/failures.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_failure_detail_failure_detail_component__ = __webpack_require__("./src/app/pages/failure-detail/failure-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_failures_projects_failures_projects_component__ = __webpack_require__("./src/app/pages/failures-projects/failures-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_iso_codes_iso_codes_component__ = __webpack_require__("./src/app/pages/iso-codes/iso-codes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_iso_code_detail_iso_code_detail_component__ = __webpack_require__("./src/app/pages/iso-code-detail/iso-code-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_label_descriptions_label_descriptions_component__ = __webpack_require__("./src/app/pages/label-descriptions/label-descriptions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_label_description_detail_label_description_detail_component__ = __webpack_require__("./src/app/pages/label-description-detail/label-description-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_performance_limiter_calibrations_performance_limiter_calibrations_component__ = __webpack_require__("./src/app/pages/performance-limiter-calibrations/performance-limiter-calibrations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_performance_limiter_calibration_detail_performance_limiter_calibration_detail_component__ = __webpack_require__("./src/app/pages/performance-limiter-calibration-detail/performance-limiter-calibration-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_projects_projects_component__ = __webpack_require__("./src/app/pages/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_project_detail_project_detail_component__ = __webpack_require__("./src/app/pages/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_create_create_component__ = __webpack_require__("./src/app/pages/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_edit_project_edit_project_component__ = __webpack_require__("./src/app/pages/edit-project/edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_check_labels_existence_check_labels_existence_component__ = __webpack_require__("./src/app/pages/check-labels-existence/check-labels-existence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_copy_failures_list_copy_failures_list_component__ = __webpack_require__("./src/app/pages/copy-failures-list/copy-failures-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__ = __webpack_require__("./src/app/guards/has-access.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_unauthorized_access_unauthorized_access_component__ = __webpack_require__("./src/app/pages/unauthorized-access/unauthorized-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_users_users_component__ = __webpack_require__("./src/app/pages/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_user_detail_user_detail_component__ = __webpack_require__("./src/app/pages/user-detail/user-detail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var routes = [
    { path: '', redirectTo: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].home, pathMatch: 'full' },
    { path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].login, component: __WEBPACK_IMPORTED_MODULE_3__pages_login_login_component__["a" /* LoginComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].home, component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */]] },
    // { path: RoutingPaths.about, component: AboutComponent, canActivate: [IsLoggedInGuard] },
    { path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].unauthorized, component: __WEBPACK_IMPORTED_MODULE_25__pages_unauthorized_access_unauthorized_access_component__["a" /* UnauthorizedAccessComponent */] /*, canActivate: [IsLoggedInGuard]*/ },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].channelDescriptions,
        component: __WEBPACK_IMPORTED_MODULE_7__pages_channel_descriptions_channel_descriptions_component__["a" /* ChannelDescriptionsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].channelDescriptions + '/new',
        component: __WEBPACK_IMPORTED_MODULE_8__pages_channel_description_detail_channel_description_detail_component__["a" /* ChannelDescriptionDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]], data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].channelDescriptions + '/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__pages_channel_description_detail_channel_description_detail_component__["a" /* ChannelDescriptionDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] },
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__guards_can_deactivate_guard__["a" /* CanDeactivateGuard */]]
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].failures,
        component: __WEBPACK_IMPORTED_MODULE_9__pages_failures_failures_component__["a" /* FailuresComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].failures + '/new',
        component: __WEBPACK_IMPORTED_MODULE_10__pages_failure_detail_failure_detail_component__["a" /* FailureDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].failures + '/:id',
        component: __WEBPACK_IMPORTED_MODULE_10__pages_failure_detail_failure_detail_component__["a" /* FailureDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] },
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__guards_can_deactivate_guard__["a" /* CanDeactivateGuard */]]
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].isoCodes,
        component: __WEBPACK_IMPORTED_MODULE_12__pages_iso_codes_iso_codes_component__["a" /* IsoCodesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].isoCodes + '/new',
        component: __WEBPACK_IMPORTED_MODULE_13__pages_iso_code_detail_iso_code_detail_component__["a" /* IsoCodeDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].isoCodes + '/:id',
        component: __WEBPACK_IMPORTED_MODULE_13__pages_iso_code_detail_iso_code_detail_component__["a" /* IsoCodeDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] },
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__guards_can_deactivate_guard__["a" /* CanDeactivateGuard */]]
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].labelDescriptions,
        component: __WEBPACK_IMPORTED_MODULE_14__pages_label_descriptions_label_descriptions_component__["a" /* LabelDescriptionsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].labelDescriptions + '/new',
        component: __WEBPACK_IMPORTED_MODULE_15__pages_label_description_detail_label_description_detail_component__["a" /* LabelDescriptionDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].labelDescriptions + '/:id',
        component: __WEBPACK_IMPORTED_MODULE_15__pages_label_description_detail_label_description_detail_component__["a" /* LabelDescriptionDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].projects,
        component: __WEBPACK_IMPORTED_MODULE_18__pages_projects_projects_component__["a" /* ProjectsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].projects + '/new',
        component: __WEBPACK_IMPORTED_MODULE_19__pages_project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].projects + '/:id',
        component: __WEBPACK_IMPORTED_MODULE_19__pages_project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] },
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__guards_can_deactivate_guard__["a" /* CanDeactivateGuard */]]
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].performanceLimiterCalibrations,
        component: __WEBPACK_IMPORTED_MODULE_16__pages_performance_limiter_calibrations_performance_limiter_calibrations_component__["a" /* PerformanceLimiterCalibrationsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].performanceLimiterCalibrations + '/new',
        component: __WEBPACK_IMPORTED_MODULE_17__pages_performance_limiter_calibration_detail_performance_limiter_calibration_detail_component__["a" /* PerformanceLimiterCalibrationDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].performanceLimiterCalibrations + '/:id',
        component: __WEBPACK_IMPORTED_MODULE_17__pages_performance_limiter_calibration_detail_performance_limiter_calibration_detail_component__["a" /* PerformanceLimiterCalibrationDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] },
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__guards_can_deactivate_guard__["a" /* CanDeactivateGuard */]]
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].copyFailuresList,
        component: __WEBPACK_IMPORTED_MODULE_23__pages_copy_failures_list_copy_failures_list_component__["a" /* CopyFailuresListComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    { path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].editProject,
        component: __WEBPACK_IMPORTED_MODULE_21__pages_edit_project_edit_project_component__["a" /* EditProjectComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].checkLabelsExistence,
        component: __WEBPACK_IMPORTED_MODULE_22__pages_check_labels_existence_check_labels_existence_component__["a" /* CheckLabelsExistenceComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].users,
        component: __WEBPACK_IMPORTED_MODULE_26__pages_users_users_component__["a" /* UsersComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].users + '/:id',
        component: __WEBPACK_IMPORTED_MODULE_27__pages_user_detail_user_detail_component__["a" /* UserDetailComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].failuresProjects,
        component: __WEBPACK_IMPORTED_MODULE_11__pages_failures_projects_failures_projects_component__["a" /* FailuresProjectsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */], __WEBPACK_IMPORTED_MODULE_24__guards_has_access_guard__["a" /* HasAccessGuard */]],
        data: { roles: ['admin'] }
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].create,
        component: __WEBPACK_IMPORTED_MODULE_20__pages_create_create_component__["a" /* CreateComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!-- <div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul> -->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_web_storage__ = __webpack_require__("./node_modules/angular-web-storage/bundles/angular-web-storage.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_web_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_web_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__ = __webpack_require__("./src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_is_logged_in_guard__ = __webpack_require__("./src/app/guards/is-logged-in.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_can_deactivate_guard__ = __webpack_require__("./src/app/guards/can-deactivate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_has_access_guard__ = __webpack_require__("./src/app/guards/has-access.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_about_about_component__ = __webpack_require__("./src/app/pages/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_unauthorized_access_unauthorized_access_component__ = __webpack_require__("./src/app/pages/unauthorized-access/unauthorized-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_create_create_component__ = __webpack_require__("./src/app/pages/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_create_results_results_component__ = __webpack_require__("./src/app/pages/create/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_create_warnings_warnings_component__ = __webpack_require__("./src/app/pages/create/warnings/warnings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_create_result_details_result_details_component__ = __webpack_require__("./src/app/pages/create/result-details/result-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_projects_projects_component__ = __webpack_require__("./src/app/pages/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_failures_failures_component__ = __webpack_require__("./src/app/pages/failures/failures.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_failures_projects_failures_projects_component__ = __webpack_require__("./src/app/pages/failures-projects/failures-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_iso_codes_iso_codes_component__ = __webpack_require__("./src/app/pages/iso-codes/iso-codes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_channel_descriptions_channel_descriptions_component__ = __webpack_require__("./src/app/pages/channel-descriptions/channel-descriptions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_label_descriptions_label_descriptions_component__ = __webpack_require__("./src/app/pages/label-descriptions/label-descriptions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_performance_limiter_calibrations_performance_limiter_calibrations_component__ = __webpack_require__("./src/app/pages/performance-limiter-calibrations/performance-limiter-calibrations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__common_components_header_header_component__ = __webpack_require__("./src/app/common/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__common_components_footer_footer_component__ = __webpack_require__("./src/app/common/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__common_components_advanced_table_advanced_table_component__ = __webpack_require__("./src/app/common/components/advanced-table/advanced-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_paginator__ = __webpack_require__("./node_modules/primeng/paginator.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_paginator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_primeng_paginator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_primeng_multiselect__ = __webpack_require__("./node_modules/primeng/multiselect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_primeng_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_primeng_multiselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_34_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_primeng_card__ = __webpack_require__("./node_modules/primeng/card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_primeng_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_primeng_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_primeng_inputtext__ = __webpack_require__("./node_modules/primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_primeng_spinner__ = __webpack_require__("./node_modules/primeng/spinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_primeng_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_primeng_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_primeng_checkbox__ = __webpack_require__("./node_modules/primeng/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_primeng_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_primeng_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_primeng_radiobutton__ = __webpack_require__("./node_modules/primeng/radiobutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_primeng_radiobutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_primeng_radiobutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_40_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_primeng_confirmdialog__ = __webpack_require__("./node_modules/primeng/confirmdialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_primeng_confirmdialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_primeng_confirmdialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_42_primeng_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_primeng_fileupload__ = __webpack_require__("./node_modules/primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_43_primeng_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_primeng_tooltip__ = __webpack_require__("./node_modules/primeng/tooltip.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_primeng_tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_44_primeng_tooltip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_primeng_inputswitch__ = __webpack_require__("./node_modules/primeng/inputswitch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45_primeng_inputswitch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_45_primeng_inputswitch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_primeng_progressspinner__ = __webpack_require__("./node_modules/primeng/progressspinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46_primeng_progressspinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_46_primeng_progressspinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_primeng_overlaypanel__ = __webpack_require__("./node_modules/primeng/overlaypanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_primeng_overlaypanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_47_primeng_overlaypanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_primeng_password__ = __webpack_require__("./node_modules/primeng/password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_primeng_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_48_primeng_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_primeng_autocomplete__ = __webpack_require__("./node_modules/primeng/autocomplete.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_primeng_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_49_primeng_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_50_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__services_projects_service__ = __webpack_require__("./src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__services_iso_codes_service__ = __webpack_require__("./src/app/services/iso-codes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__services_failures_service__ = __webpack_require__("./src/app/services/failures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__services_label_descriptions_service__ = __webpack_require__("./src/app/services/label-descriptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__services_label_description_check_service__ = __webpack_require__("./src/app/services/label-description-check.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__services_channel_descriptions_service__ = __webpack_require__("./src/app/services/channel-descriptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__services_performance_limiter_calibration_service__ = __webpack_require__("./src/app/services/performance-limiter-calibration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__services_roles_service__ = __webpack_require__("./src/app/services/roles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__services_upload_service__ = __webpack_require__("./src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_channel_description_detail_channel_description_detail_component__ = __webpack_require__("./src/app/pages/channel-description-detail/channel-description-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_failure_detail_failure_detail_component__ = __webpack_require__("./src/app/pages/failure-detail/failure-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_failure_detail_fault_description_fault_description_component__ = __webpack_require__("./src/app/pages/failure-detail/fault-description/fault-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_failure_detail_ambient_conditions_ambient_conditions_component__ = __webpack_require__("./src/app/pages/failure-detail/ambient-conditions/ambient-conditions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_failure_detail_carb_description_carb_description_component__ = __webpack_require__("./src/app/pages/failure-detail/carb-description/carb-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_failure_detail_carb_fid_carb_fid_component__ = __webpack_require__("./src/app/pages/failure-detail/carb-fid/carb-fid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_iso_code_detail_iso_code_detail_component__ = __webpack_require__("./src/app/pages/iso-code-detail/iso-code-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_label_description_detail_label_description_detail_component__ = __webpack_require__("./src/app/pages/label-description-detail/label-description-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_project_detail_project_detail_component__ = __webpack_require__("./src/app/pages/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_edit_project_edit_project_component__ = __webpack_require__("./src/app/pages/edit-project/edit-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__pages_copy_failures_list_copy_failures_list_component__ = __webpack_require__("./src/app/pages/copy-failures-list/copy-failures-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__pages_check_labels_existence_check_labels_existence_component__ = __webpack_require__("./src/app/pages/check-labels-existence/check-labels-existence.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__pages_performance_limiter_calibration_detail_performance_limiter_calibration_detail_component__ = __webpack_require__("./src/app/pages/performance-limiter-calibration-detail/performance-limiter-calibration-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__pages_users_users_component__ = __webpack_require__("./src/app/pages/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__pages_user_detail_user_detail_component__ = __webpack_require__("./src/app/pages/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77_angular_font_awesome__ = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__common_dialogs_save_changes_dialog_save_changes_dialog_component__ = __webpack_require__("./src/app/common/dialogs/save-changes-dialog/save-changes-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__dao_a2l_failure_detail_field_mapper__ = __webpack_require__("./src/app/dao/a2l-failure-detail-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__dao_a2l_parsing_result_field_mapper__ = __webpack_require__("./src/app/dao/a2l-parsing-result-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__dao_channel_description_field_mapper__ = __webpack_require__("./src/app/dao/channel-description-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__dao_failure_field_mapper__ = __webpack_require__("./src/app/dao/failure-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__dao_iso_code_field_mapper__ = __webpack_require__("./src/app/dao/iso-code-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__dao_label_description_check_field_mapper__ = __webpack_require__("./src/app/dao/label-description-check-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__dao_label_description_field_mapper__ = __webpack_require__("./src/app/dao/label-description-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__dao_performance_limiter_calibration_field_mapper__ = __webpack_require__("./src/app/dao/performance-limiter-calibration-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__dao_project_field_mapper__ = __webpack_require__("./src/app/dao/project-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__dao_role_field_mapper__ = __webpack_require__("./src/app/dao/role-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__dao_user_field_mapper__ = __webpack_require__("./src/app/dao/user-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__common_components_dynamic_forms_dynamic_field_dynamic_field_component__ = __webpack_require__("./src/app/common/components/dynamic-forms/dynamic-field/dynamic-field.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__common_components_dynamic_forms_dynamic_form_dynamic_form_component__ = __webpack_require__("./src/app/common/components/dynamic-forms/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__common_components_dashboard_item_dashboard_item_component__ = __webpack_require__("./src/app/common/components/dashboard-item/dashboard-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__common_components_dashboard_dashboard_component__ = __webpack_require__("./src/app/common/components/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__pages_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_unauthorized_access_unauthorized_access_component__["a" /* UnauthorizedAccessComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_create_create_component__["a" /* CreateComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_create_results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_create_warnings_warnings_component__["a" /* WarningsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_create_result_details_result_details_component__["a" /* ResultDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pages_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pages_failures_failures_component__["a" /* FailuresComponent */],
                __WEBPACK_IMPORTED_MODULE_23__pages_failures_projects_failures_projects_component__["a" /* FailuresProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__pages_iso_codes_iso_codes_component__["a" /* IsoCodesComponent */],
                __WEBPACK_IMPORTED_MODULE_25__pages_channel_descriptions_channel_descriptions_component__["a" /* ChannelDescriptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__pages_label_descriptions_label_descriptions_component__["a" /* LabelDescriptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_27__pages_performance_limiter_calibrations_performance_limiter_calibrations_component__["a" /* PerformanceLimiterCalibrationsComponent */],
                __WEBPACK_IMPORTED_MODULE_28__common_components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_29__common_components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_30__common_components_advanced_table_advanced_table_component__["a" /* AdvancedTableComponent */],
                __WEBPACK_IMPORTED_MODULE_62__pages_channel_description_detail_channel_description_detail_component__["a" /* ChannelDescriptionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_63__pages_failure_detail_failure_detail_component__["a" /* FailureDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_64__pages_failure_detail_fault_description_fault_description_component__["a" /* FaultDescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_65__pages_failure_detail_ambient_conditions_ambient_conditions_component__["a" /* AmbientConditionsComponent */],
                __WEBPACK_IMPORTED_MODULE_66__pages_failure_detail_carb_description_carb_description_component__["a" /* CarbDescriptionComponent */],
                __WEBPACK_IMPORTED_MODULE_67__pages_failure_detail_carb_fid_carb_fid_component__["a" /* CarbFidComponent */],
                __WEBPACK_IMPORTED_MODULE_68__pages_iso_code_detail_iso_code_detail_component__["a" /* IsoCodeDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_69__pages_label_description_detail_label_description_detail_component__["a" /* LabelDescriptionDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_70__pages_project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_71__pages_edit_project_edit_project_component__["a" /* EditProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_72__pages_copy_failures_list_copy_failures_list_component__["a" /* CopyFailuresListComponent */],
                __WEBPACK_IMPORTED_MODULE_73__pages_check_labels_existence_check_labels_existence_component__["a" /* CheckLabelsExistenceComponent */],
                __WEBPACK_IMPORTED_MODULE_74__pages_performance_limiter_calibration_detail_performance_limiter_calibration_detail_component__["a" /* PerformanceLimiterCalibrationDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_75__pages_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_76__pages_user_detail_user_detail_component__["a" /* UserDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_79__common_dialogs_save_changes_dialog_save_changes_dialog_component__["a" /* SaveChangesDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_91__common_components_dynamic_forms_dynamic_field_dynamic_field_component__["a" /* DynamicFieldComponent */],
                __WEBPACK_IMPORTED_MODULE_92__common_components_dynamic_forms_dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_93__common_components_dashboard_item_dashboard_item_component__["a" /* DashboardItemComponent */],
                __WEBPACK_IMPORTED_MODULE_94__common_components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_angular_web_storage__["AngularWebStorageModule"],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_77_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_31_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_32_primeng_paginator__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_33_primeng_multiselect__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_34_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_35_primeng_card__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_36_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_37_primeng_spinner__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_38_primeng_checkbox__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_39_primeng_radiobutton__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_40_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_41_primeng_confirmdialog__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_43_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_44_primeng_tooltip__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_45_primeng_inputswitch__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_46_primeng_progressspinner__["ProgressSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_47_primeng_overlaypanel__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_48_primeng_password__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_49_primeng_autocomplete__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_50_primeng_tabview__["TabViewModule"],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_78__common_services_apis_service__["a" /* ApisService */],
                __WEBPACK_IMPORTED_MODULE_51__services_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_52__services_projects_service__["a" /* ProjectsService */],
                __WEBPACK_IMPORTED_MODULE_87__dao_performance_limiter_calibration_field_mapper__["a" /* PerformanceLimiterCalibrationFieldMapper */],
                __WEBPACK_IMPORTED_MODULE_58__services_performance_limiter_calibration_service__["a" /* PerformanceLimiterCalibrationService */],
                __WEBPACK_IMPORTED_MODULE_90__dao_user_field_mapper__["a" /* UserFieldMapper */],
                __WEBPACK_IMPORTED_MODULE_59__services_users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_89__dao_role_field_mapper__["a" /* RoleFieldMapper */],
                __WEBPACK_IMPORTED_MODULE_60__services_roles_service__["a" /* RolesService */],
                __WEBPACK_IMPORTED_MODULE_88__dao_project_field_mapper__["a" /* ProjectFieldMapper */],
                __WEBPACK_IMPORTED_MODULE_53__services_iso_codes_service__["a" /* IsoCodesService */],
                __WEBPACK_IMPORTED_MODULE_84__dao_iso_code_field_mapper__["a" /* IsoCodeFieldMapper */],
                __WEBPACK_IMPORTED_MODULE_54__services_failures_service__["a" /* FailuresService */],
                __WEBPACK_IMPORTED_MODULE_83__dao_failure_field_mapper__["a" /* FailureFieldMapper */],
                __WEBPACK_IMPORTED_MODULE_57__services_channel_descriptions_service__["a" /* ChannelDescriptionsService */],
                __WEBPACK_IMPORTED_MODULE_81__dao_a2l_parsing_result_field_mapper__["a" /* A2lParsingResultFieldMapper */],
                __WEBPACK_IMPORTED_MODULE_80__dao_a2l_failure_detail_field_mapper__["a" /* A2lFailureDetailFieldMapper */],
                __WEBPACK_IMPORTED_MODULE_82__dao_channel_description_field_mapper__["a" /* ChannelDescriptionFieldMapper */],
                __WEBPACK_IMPORTED_MODULE_55__services_label_descriptions_service__["a" /* LabelDescriptionsService */],
                __WEBPACK_IMPORTED_MODULE_86__dao_label_description_field_mapper__["a" /* LabelDescriptionFieldMapper */],
                __WEBPACK_IMPORTED_MODULE_56__services_label_description_check_service__["b" /* LabelDescriptionCheckService */],
                __WEBPACK_IMPORTED_MODULE_85__dao_label_description_check_field_mapper__["a" /* LabelDescriptionCheckFieldMapper */],
                __WEBPACK_IMPORTED_MODULE_12__guards_is_logged_in_guard__["a" /* IsLoggedInGuard */],
                __WEBPACK_IMPORTED_MODULE_13__guards_can_deactivate_guard__["a" /* CanDeactivateGuard */],
                __WEBPACK_IMPORTED_MODULE_14__guards_has_access_guard__["a" /* HasAccessGuard */],
                __WEBPACK_IMPORTED_MODULE_42_primeng_api__["ConfirmationService"],
                __WEBPACK_IMPORTED_MODULE_61__services_upload_service__["a" /* UploadService */],
            ],
            entryComponents: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/components/advanced-table-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AdvancedTableData; });
/* unused harmony export AdvancedTableColumn */
/* unused harmony export AdvancedTableAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedTableColumnFilter; });
var AdvancedTableData = /** @class */ (function () {
    function AdvancedTableData() {
    }
    return AdvancedTableData;
}());

var AdvancedTableColumn = /** @class */ (function () {
    function AdvancedTableColumn() {
    }
    return AdvancedTableColumn;
}());

var AdvancedTableAction = /** @class */ (function () {
    function AdvancedTableAction() {
    }
    return AdvancedTableAction;
}());

var AdvancedTableColumnFilter = /** @class */ (function () {
    function AdvancedTableColumnFilter(field, value, matchMode) {
        this.field = field;
        this.value = value;
        this.matchMode = matchMode;
    }
    return AdvancedTableColumnFilter;
}());



/***/ }),

/***/ "./src/app/common/components/advanced-table/advanced-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"listTitle\" class=\"row\">\r\n  <h4 class=\"list-title\">{{ listTitle }}</h4>    \r\n</div>\r\n\r\n<div class=\"row\">\r\n  <button *ngIf=\"hasAddButton\"\r\n    pButton type=\"button\"\r\n    class=\"add-button\" (click)=\"add()\"\r\n    icon=\"fa-plus\" iconPos=\"left\" label=\"Add\"\r\n  ></button>\r\n  <button *ngIf=\"hasMultipleDelete\"\r\n    pButton type=\"button\"\r\n    class=\"delete-button ui-button-danger\" (click)=\"deleteMultiple()\"\r\n    icon=\"fa-trash\" iconPos=\"left\" label=\"Bulk Delete\"\r\n    [disabled]=\"!selectedItems?.length\"\r\n  ></button>\r\n</div>\r\n\r\n<!-- to make it scrollable add these 2 props also\r\n  [scrollable]=\"true\" scrollHeight=\"450px\" -->\r\n<p-table #tt\r\n  [columns]=\"cols\" [value]=\"items\"\r\n  [resizableColumns]=\"resizableColumns\"\r\n  [reorderableColumns]=\"reorderableColumns\"\r\n  [lazy]=\"lazy\" (onLazyLoad)=\"lazyLoadData($event)\"\r\n  [paginator]=\"paginator\" [rows]=\"pageSize\" [totalRecords]=\"totalRecords\" [rowsPerPageOptions]=\"rowsPerPageOptions\"\r\n  [loading]=\"loading\"\r\n  [(selection)]=\"selectedItems\" dataKey=\"id\">\r\n\r\n  <ng-template pTemplate=\"colgroup\" let-columns>\r\n    <colgroup>\r\n      <col *ngIf=\"hasMultipleSelection\" style=\"width:2.25em\">\r\n      <col *ngIf=\"actions?.length\" style=\"width:4.875em\">\r\n      <col *ngFor=\"let col of columns\" style=\"width:205px\">\r\n    </colgroup>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngIf=\"hasMultipleSelection\" rowspan=\"2\">\r\n        <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n      </th>\r\n      <th *ngIf=\"actions?.length\" rowspan=\"2\">Actions</th>\r\n      <th *ngFor=\"let col of columns\" pResizableColumn pReorderableColumn [pSortableColumn]=\"col.field\">\r\n        {{col.header}}\r\n        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n      </th>\r\n    </tr>\r\n    <tr>\r\n      <!-- <th *ngIf=\"actions?.length\"></th> -->\r\n      <!-- <th *ngIf=\"hasMultipleSelection\"></th> -->\r\n      <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.filterType\">\r\n        <p-dropdown *ngSwitchCase=\"'dropdown'\" [options]=\"col.filterOptions\" (input)=\"tt.filter($event.target.value, col.field, 'equals')\" style=\"width: 100%\"></p-dropdown>\r\n        <p-multiSelect *ngSwitchCase=\"'multiSelect'\" [options]=\"col.filterOptions\" (input)=\"tt.filter($event.target.value, col.field, 'in')\" style=\"width: 100%\"></p-multiSelect>\r\n        <input *ngSwitchDefault pInputText type=\"text\" (input)=\"tt.filter($event.target.value, col.field, col.filterMatchMode)\" style=\"width: 100%\">\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n    <tr [pSelectableRow]=\"item\">\r\n      <td *ngIf=\"hasMultipleSelection\" style=\"padding-left: .5em !important;\">\r\n        <p-tableCheckbox [value]=\"item\"></p-tableCheckbox>\r\n      </td>\r\n      <td *ngIf=\"actions?.length\">\r\n        <button pButton type=\"button\" *ngFor=\"let action of actions\"\r\n          icon=\"fa-{{action.icon}}\" [hidden]=\"action.disabled && action.disabled(item)\"\r\n          (click)=\"action.event(item); $event.stopPropagation();\"\r\n          class=\"ui-button-secondary\">\r\n        </button>\r\n      </td>\r\n      <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\r\n        {{item[col.field]}}\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"emptymessage\" let-columns>\r\n    <tr>\r\n      <td [attr.colspan]=\"columns.length\">\r\n        No records found\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n\r\n</p-table>"

/***/ }),

/***/ "./src/app/common/components/advanced-table/advanced-table.component.scss":
/***/ (function(module, exports) {

module.exports = ".list-title {\n  margin: 1rem; }\n\n.add-button, .delete-button {\n  margin: 1rem;\n  margin-right: 0; }\n\np-table td button.ui-button-secondary {\n  border: none;\n  background-color: transparent; }\n"

/***/ }),

/***/ "./src/app/common/components/advanced-table/advanced-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__advanced_table_data__ = __webpack_require__("./src/app/common/components/advanced-table-data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvancedTableComponent = /** @class */ (function () {
    function AdvancedTableComponent() {
        this.hasSearchBox = false;
        this.hasAddButton = false;
        this.hasMultipleSelection = false;
        this.hasMultipleDelete = false;
        this.addItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cols = [];
        this.actions = [];
        this.paginator = true;
        this.pageSize = 10;
        this.rowsPerPageOptions = [10, 20, 30, 50, 100];
        this.loading = true;
        this.lazy = true; // when lazy loading is true, column filtering and sorting must be done when getting the data
        this.resizableColumns = true;
        this.reorderableColumns = false;
    }
    AdvancedTableComponent.prototype.ngOnInit = function () {
        if (this.hasMultipleDelete) {
            this.hasMultipleSelection = true;
        }
        for (var _i = 0, _a = this.advancedTableData.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            this.cols.push({
                field: column.matColumnDefValue,
                header: column.description,
                filterMatchMode: column.filterMatchMode,
                filterType: column.filterType,
                filterOptions: column.filterOptions
            });
        }
        if (this.advancedTableData.actions) {
            for (var _b = 0, _c = this.advancedTableData.actions; _b < _c.length; _b++) {
                var action = _c[_b];
                this.actions.push({
                    icon: action.icon,
                    disabled: action.disabled,
                    event: action.event
                });
            }
        }
        if (!this.lazy) {
            this.getItems(null);
        }
    };
    AdvancedTableComponent.prototype.lazyLoadData = function (event) {
        this.getItems(event);
    };
    AdvancedTableComponent.prototype.getItems = function (event) {
        var _this = this;
        this.loading = true;
        var filters = [];
        var sortField = '';
        var sortOrder = '';
        var pageIndex = 0;
        if (event) {
            this.pageSize = event.rows;
            Object.keys(event.filters).forEach(function (field) {
                filters.push(new __WEBPACK_IMPORTED_MODULE_1__advanced_table_data__["a" /* AdvancedTableColumnFilter */](field, event.filters[field].value, event.filters[field].matchMode));
            });
            // tslint:disable-next-line:max-line-length
            sortField = event.sortField; // TODO: sorting doesn't work right now 'cause the api doesn't recognize the actual field name! ex. the field from projects "ecu" must be sorted using "Ecu"
            sortOrder = event.sortOrder === 1 ? 'asc' : 'desc';
            pageIndex = event.first / this.pageSize;
        }
        this.advancedTableData.dataSource.getData(filters, sortField, sortOrder, pageIndex, this.pageSize)
            .subscribe(function (result) {
            _this.items = result.data;
            _this.totalRecords = result.length;
            _this.loading = false;
        });
    };
    AdvancedTableComponent.prototype.add = function () {
        this.addItem.emit();
    };
    AdvancedTableComponent.prototype.deleteMultiple = function () {
        console.log('TODO: delete multiple items');
        console.log(this.selectedItems);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AdvancedTableComponent.prototype, "listTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__advanced_table_data__["b" /* AdvancedTableData */])
    ], AdvancedTableComponent.prototype, "advancedTableData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AdvancedTableComponent.prototype, "hasSearchBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AdvancedTableComponent.prototype, "hasAddButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AdvancedTableComponent.prototype, "hasMultipleSelection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AdvancedTableComponent.prototype, "hasMultipleDelete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AdvancedTableComponent.prototype, "addItem", void 0);
    AdvancedTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'advanced-table',
            template: __webpack_require__("./src/app/common/components/advanced-table/advanced-table.component.html"),
            styles: [__webpack_require__("./src/app/common/components/advanced-table/advanced-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvancedTableComponent);
    return AdvancedTableComponent;
}());



/***/ }),

/***/ "./src/app/common/components/base-data-source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");



var BaseDataSource = /** @class */ (function () {
    function BaseDataSource() {
        this.dataSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    // connect(collectionViewer: CollectionViewer): Observable<T[]> {
    //   return this.dataSubject.asObservable();
    // }
    // disconnect(collectionViewer: CollectionViewer): void {
    //   this.dataSubject.complete();
    //   this.loadingSubject.complete();
    // }
    BaseDataSource.prototype.loadData = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        var _this = this;
        if (filter === void 0) { filter = []; }
        if (sortField === void 0) { sortField = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        this.loadingSubject.next(true);
        this.getData(filter, sortField, sortDirection, pageIndex, pageSize)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["catchError"])(function (err, caught) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of([]); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["finalize"])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (results) {
            _this.rowsCount = results.length;
            _this.dataSubject.next(results.data);
        });
    };
    return BaseDataSource;
}());



/***/ }),

/***/ "./src/app/common/components/dashboard-item/dashboard-item.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Using images -->\r\n<!-- <img class=\"rounded-circle\" src=\"{{item.image}}\" alt=\"Generic placeholder image\" width=\"140\" height=\"140\">\r\n<h6>{{item.label}}</h6>\r\n<p>\r\n  <a class=\"btn btn-secondary\" href=\"{{item.href}}\" role=\"button\">{{item.hrefLabel}}</a>\r\n</p> -->\r\n\r\n<!-- Using icons -->\r\n<div class=\"item-wrapper {{item.disabled ? 'disable-links' : ''}}\">\r\n  <!-- TODO: rounded-circle class not working as expected! does it only apply to imgs?!? -->\r\n  <div class=\"rounded-circle\" style=\"font-size:2em; color:#343a40; margin-top: 1rem\">\r\n    <!-- <i class=\"fa fa-2x {{item.icon}}\"></i> -->\r\n    <span class=\"fa-stack\">\r\n      <i class=\"fa {{item.icons[0]}} fa-stack-2x\"></i>\r\n      <i *ngIf=\"item.icons[1]\" class=\"fa {{item.icons[1]}} fa-stack-1x\" style=\"margin-left: 26px; margin-top: -15px;\"></i>\r\n    </span>\r\n  </div>\r\n  <h6>{{item.label}}</h6>\r\n  <p>\r\n    <a class=\"btn btn-dark\" href=\"{{item.href}}\" pTooltip=\"{{item.description}}\" tooltipPosition=\"bottom\" role=\"button\">{{item.hrefLabel}}</a>\r\n  </p>\r\n</div>"

/***/ }),

/***/ "./src/app/common/components/dashboard-item/dashboard-item.component.scss":
/***/ (function(module, exports) {

module.exports = "div.item-wrapper.disable-links {\n  pointer-events: none; }\n  div.item-wrapper.disable-links a.btn {\n    color: gray; }\n"

/***/ }),

/***/ "./src/app/common/components/dashboard-item/dashboard-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_item__ = __webpack_require__("./src/app/common/components/dashboard-item/dashboard-item.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardItemComponent = /** @class */ (function () {
    function DashboardItemComponent() {
    }
    DashboardItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__dashboard_item__["a" /* DashboardItem */])
    ], DashboardItemComponent.prototype, "item", void 0);
    DashboardItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard-item',
            template: __webpack_require__("./src/app/common/components/dashboard-item/dashboard-item.component.html"),
            styles: [__webpack_require__("./src/app/common/components/dashboard-item/dashboard-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardItemComponent);
    return DashboardItemComponent;
}());



/***/ }),

/***/ "./src/app/common/components/dashboard-item/dashboard-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardItem; });
var DashboardItem = /** @class */ (function () {
    function DashboardItem() {
    }
    return DashboardItem;
}());



/***/ }),

/***/ "./src/app/common/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container marketing\">\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let item of items\" class=\"text-center col-xs-12 col-sm-6 col-md-3\">\r\n      <app-dashboard-item [item]=\"item\"></app-dashboard-item>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DashboardComponent.prototype, "items", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/common/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/common/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/common/components/dynamic-forms/dynamic-field/dynamic-field.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"field.hidden\" [formGroup]=\"form\">\r\n\r\n  <div [ngSwitch]=\"field.type\">\r\n    \r\n    <!-- Label -->\r\n    <div *ngSwitchCase=\"'label'\" class=\"form-group\">\r\n      <label>{{ field.label }}</label>\r\n    </div>\r\n\r\n    <!-- Text input -->\r\n    <div *ngSwitchCase=\"'text'\" class=\"form-group\">\r\n      <label [htmlFor]=\"field.key\">{{ field.label }}</label>\r\n      <input class=\"form-control\" [formControlName]=\"field.key\" [id]=\"field.key\" type=\"text\" pInputText>\r\n    </div>\r\n\r\n    <!-- Number input -->\r\n    <div *ngSwitchCase=\"'number'\" class=\"form-group\">\r\n      <label [htmlFor]=\"field.key\">{{ field.label }}</label>\r\n      <div class=\"primeng-form-control\">\r\n        <p-spinner\r\n          [formControlName]=\"field.key\"\r\n          [id]=\"field.key\"\r\n          [placeholder]=\"field.placeholder\"\r\n          [style]=\"{'display': 'block', 'width': '100%'}\">\r\n        </p-spinner>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Select -->\r\n    <div *ngSwitchCase=\"'select'\" class=\"form-group\">\r\n      <label [htmlFor]=\"field.key\">{{ field.label }}</label>\r\n      <div class=\"primeng-form-control\">\r\n        <p-dropdown\r\n          [options]=\"field.options\"\r\n          [formControlName]=\"field.key\"\r\n          [placeholder]=\"field.placeholder\"\r\n          [(ngModel)]=\"field.selectedOptions\"\r\n          [style]=\"{'display': 'block', 'width': '100%'}\">\r\n        </p-dropdown>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Multiselect -->\r\n    <div *ngSwitchCase=\"'multiselect'\" class=\"form-group\">\r\n      <label [htmlFor]=\"field.key\">{{ field.label }}</label>\r\n      <div class=\"primeng-form-control\">\r\n        <p-multiSelect\r\n          [options]=\"field.options\"\r\n          [formControlName]=\"field.key\"\r\n          [defaultLabel]=\"field.placeholder\"\r\n          [(ngModel)]=\"field.selectedOptions\"\r\n          [style]=\"{'display': 'block', 'width': '100%'}\"\r\n          maxSelectedLabels=\"30\"\r\n          styleClass=\"my-multiselect\">\r\n        </p-multiSelect>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- CheckBox -->\r\n    <div *ngSwitchCase=\"'checkbox'\" class=\"form-group\">\r\n      <label [htmlFor]=\"field.key\">{{ field.label }}</label>\r\n      <div class=\"primeng-form-control\">\r\n        <p-checkbox\r\n          [formControlName]=\"field.key\"\r\n          binary=\"true\"\r\n        ></p-checkbox>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- TextArea -->\r\n    <div *ngSwitchCase=\"'textarea'\" class=\"form-group\">\r\n      <label [htmlFor]=\"field.key\">{{ field.label }}</label>\r\n      <textarea class=\"form-control\" [formControlName]=\"field.key\" [id]=\"field.key\" pInputTextarea></textarea>\r\n    </div>\r\n\r\n    <!-- RadioButton -->\r\n    <div *ngSwitchCase=\"'radio'\" class=\"form-group\">\r\n      <label [htmlFor]=\"field.key\">{{ field.label }}</label>\r\n      <div class=\"primeng-form-control\">\r\n        <p-radioButton \r\n          *ngFor=\"let option of field.options\"\r\n          class=\"radio-option\"\r\n          [formControlName]=\"field.key\"\r\n          [name]=\"field.group\"\r\n          [value]=\"option.value\"\r\n          [label]=\"option.label\"\r\n        ></p-radioButton>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"field.type != 'label' && ( form.get(field.key).hasError('required') && (submitted || form.get(field.key).touched))\" class=\"alert alert-danger\">\r\n      {{ field.label }} is required.\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/common/components/dynamic-forms/dynamic-field/dynamic-field.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/common/components/dynamic-forms/dynamic-field/dynamic-field.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFieldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SUPPORTED_FIELD_TYPES = [
    'text',
    'number',
    'select',
    'multiselect',
    'checkbox',
    'textarea',
    'radio',
    'label',
];
var DynamicFieldComponent = /** @class */ (function () {
    function DynamicFieldComponent() {
        this.supportedFieldTypes = SUPPORTED_FIELD_TYPES;
    }
    Object.defineProperty(DynamicFieldComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.field.key].valid; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFieldComponent.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], DynamicFieldComponent.prototype, "form", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DynamicFieldComponent.prototype, "submitted", void 0);
    DynamicFieldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dynamic-field',
            template: __webpack_require__("./src/app/common/components/dynamic-forms/dynamic-field/dynamic-field.component.html"),
            styles: [__webpack_require__("./src/app/common/components/dynamic-forms/dynamic-field/dynamic-field.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFieldComponent);
    return DynamicFieldComponent;
}());



/***/ }),

/***/ "./src/app/common/components/dynamic-forms/dynamic-form/dynamic-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form [formGroup]=\"form\">\r\n\r\n    <div *ngFor=\"let field of vmDefinition\">\r\n      <app-dynamic-field\r\n        [field]=\"field\"\r\n        [form]=\"form\"\r\n        [submitted]=\"submitted\"\r\n      ></app-dynamic-field>\r\n    </div>\r\n\r\n    <div *ngIf=\"errorMessage \" class=\"alert alert-danger\">\r\n      {{ errorMessage }}\r\n    </div>\r\n\r\n    <div>\r\n      <div class=\"dynamic-form-buttons\">\r\n        <button *ngFor=\"let btn of extraButtons\" pButton type=\"button\" class=\"ui-button-secondary\"\r\n          [label]=\"btn.label\"\r\n          (click)=\"extraActionClick(btn.actionId)\"\r\n          [disabled]=\"btn.disabled\"\r\n          style=\"margin-right: 0.375rem;\"\r\n        ></button>\r\n      </div>\r\n      <div class=\"dynamic-form-buttons\">\r\n        <button type=\"button\" class=\"btn\" (click)=\"onCancel()\">Back</button>\r\n        <button *ngIf=hasSaveButton type=\"button\" class=\"btn btn-primary\" (click)=\"onSave()\">Save</button>\r\n      </div>\r\n    </div>\r\n\r\n  </form>\r\n\r\n  <p-confirmDialog></p-confirmDialog>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/common/components/dynamic-forms/dynamic-form/dynamic-form.component.scss":
/***/ (function(module, exports) {

module.exports = ".dynamic-form-buttons {\n  margin-top: 2em;\n  margin-bottom: 1em; }\n"

/***/ }),

/***/ "./src/app/common/components/dynamic-forms/dynamic-form/dynamic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(confirmationService) {
        this.confirmationService = confirmationService;
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.hasSaveButton = true;
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.extraAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.submitted = false;
    }
    DynamicFormComponent.prototype.resetForm = function () {
        var _this = this;
        var group = {};
        this.vmCopy = Object.assign({}, this.vm);
        this.vmDefinition.forEach(function (field) {
            group[field.key] = field.required ?
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: _this.vmCopy[field.key], disabled: field.disabled }, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required) :
                new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]({ value: _this.vmCopy[field.key], disabled: field.disabled });
        });
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"](group);
    };
    DynamicFormComponent.prototype.ngOnChanges = function (changes) {
        this.resetForm();
    };
    DynamicFormComponent.prototype.ngOnInit = function () {
        // this.resetForm();
    };
    DynamicFormComponent.prototype.onCancel = function () {
        var _this = this;
        if (this.form.pristine) {
            this.errorMessage = null;
            this.cancel.emit();
        }
        else {
            this.confirmationService.confirm({
                message: 'Unsaved changes will be lost! Are you sure that you want to proceed?',
                header: 'Confirmation',
                icon: 'fa fa-question-circle',
                accept: function () {
                    _this.errorMessage = null;
                    _this.cancel.emit();
                }
            });
        }
    };
    DynamicFormComponent.prototype.onSave = function () {
        this.submitted = true;
        if (this.form.valid) {
            this.save.emit(this.form.value);
        }
    };
    DynamicFormComponent.prototype.extraActionClick = function (action) {
        this.extraAction.emit(action);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "vm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "vmDefinition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], DynamicFormComponent.prototype, "errorMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DynamicFormComponent.prototype, "cancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFormComponent.prototype, "hasSaveButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DynamicFormComponent.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "extraButtons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DynamicFormComponent.prototype, "extraAction", void 0);
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dynamic-form',
            template: __webpack_require__("./src/app/common/components/dynamic-forms/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__("./src/app/common/components/dynamic-forms/dynamic-form/dynamic-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_primeng_api__["ConfirmationService"]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/common/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "  <footer class=\"footer\">\r\n    <p class=\"float-right\">\r\n      <a href=\"#\">Back to top</a>\r\n    </p>\r\n    <p class=\"float-left\">&copy; 2018 Fiat Powertrain &middot;\r\n      <a href=\"#\">Privacy</a> &middot;\r\n      <a href=\"#\">Terms</a>\r\n    </p>\r\n  </footer>"

/***/ }),

/***/ "./src/app/common/components/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  /* Set the fixed height of the footer here */\n  height: 30px;\n  line-height: 30px;\n  /* Vertically center the text there */\n  background-color: #f5f5f5; }\n  .footer .float-left {\n    padding-left: 1rem; }\n  .footer .float-right {\n    padding-right: 1rem; }\n"

/***/ }),

/***/ "./src/app/common/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/common/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/common/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/common/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\r\n    <a class=\"navbar-brand\" href=\"#\">Failure and Reaction Tool</a>\r\n    \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <!-- <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"/home\">Home <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\" ngbDropdown>\r\n          <a class=\"nav-link dropdown-toggle\" id=\"dataDropDown\" ngbDropdownToggle>Data</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dataDropDown\" ngbDropdownMenu>\r\n            <a *ngFor=\"let link of dataMenuLinks\" class=\"dropdown-item\" href=\"/{{ link.href }}\">{{ link.label }}</a>\r\n          </div>\r\n        </li> -->\r\n\r\n        <ng-container *ngFor=\"let menuItem of menu\">\r\n          <ng-container *ngIf=\"!menuItem.subMenu; else subMenu\">\r\n            <li *ngIf=\"!menuItem.displayForRoles || menuItem.displayForRoles?.includes(userInfo?.roles[0]|lowercase)\" class=\"nav-item {{ menuItem.disabled ? 'disable-links' : '' }}\">\r\n              <a class=\"nav-link\" href=\"{{ menuItem.href }}\">{{ menuItem.label }} <span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n          </ng-container>\r\n          <ng-template #subMenu>\r\n            <li *ngIf=\"menuItem.displayForRoles?.includes(userInfo?.roles[0]|lowercase)\" class=\"nav-item dropdown\" ngbDropdown>\r\n              <a class=\"nav-link dropdown-toggle\" id=\"dataDropDown\" ngbDropdownToggle>{{ menuItem.label }}</a>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"dataDropDown\" ngbDropdownMenu>\r\n                <ng-container *ngFor=\"let subMenuItem of menuItem.subMenu\">\r\n                  <ng-container *ngIf=\"subMenuItem.disabled\">\r\n                    <div *ngIf=\"!subMenuItem.displayForRoles || subMenuItem.displayForRoles?.includes(userInfo?.roles[0]|lowercase)\"\r\n                      class=\"dropdown-item disable-links\">\r\n                      {{ subMenuItem.label }}\r\n                    </div>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"!subMenuItem.disabled\">\r\n                    <a *ngIf=\"!subMenuItem.displayForRoles || subMenuItem.displayForRoles?.includes(userInfo?.roles[0]|lowercase)\" class=\"dropdown-item\"href=\"{{ subMenuItem.href }}\">{{ subMenuItem.label }}</a>\r\n                  </ng-container>\r\n                </ng-container>\r\n              </div>\r\n            </li>\r\n          </ng-template>\r\n        </ng-container>\r\n\r\n      </ul>\r\n    </div>\r\n    \r\n    <div>\r\n      <div style=\"text-align: right; color: white; float: left;\">\r\n        <div>Welcome {{ userInfo?.username }}</div>\r\n        <div style=\"font-size: x-small;\">You are logged in as {{ userInfo?.roles[0] }}</div>\r\n      </div>\r\n      <button pButton type=\"button\" icon=\"fa-sign-out\"\r\n        class=\"ui-button-secondary\"\r\n        (click)=\"logout()\"\r\n        style=\"float: right; margin-left: .75em; margin-top: 6px;\"\r\n        pTooltip=\"Logout\" tooltipZIndex=\"1031\" tooltipPosition=\"bottom\">\r\n      </button>\r\n    </div>\r\n    \r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n  </nav>\r\n</header>"

/***/ }),

/***/ "./src/app/common/components/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "header {\n  position: absolute;\n  top: 0;\n  height: 41px;\n  width: 100%; }\n\n.navbar {\n  padding: 0.25rem 1rem; }\n\n.navbar-nav a.nav-link {\n  cursor: pointer;\n  color: white; }\n\nli.nav-item.disable-links {\n  pointer-events: none; }\n\nli.nav-item.disable-links a.nav-link {\n    color: gray; }\n\nli.nav-item div.dropdown-item.disable-links {\n  pointer-events: none;\n  cursor: default;\n  color: gray; }\n"

/***/ }),

/***/ "./src/app/common/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.userInfo = null;
        this.menu = [
            {
                label: 'Home',
                href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].home,
                displayForRoles: ['guest', 'admin'],
            },
            {
                label: 'Create',
                href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].create,
                displayForRoles: ['admin'],
            },
            {
                label: 'CARB Create',
                href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].home,
                displayForRoles: ['admin'],
                disabled: true,
            },
            {
                label: 'Data',
                displayForRoles: ['admin'],
                subMenu: [
                    {
                        label: 'Projects',
                        href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].projects,
                        displayForRoles: ['admin'],
                    },
                    {
                        label: 'Failures',
                        href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].failures,
                        displayForRoles: ['admin'],
                    },
                    {
                        label: 'ISO Codes',
                        href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].isoCodes,
                        displayForRoles: ['admin'],
                    },
                    {
                        label: 'Channel Descriptions',
                        href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].channelDescriptions,
                        displayForRoles: ['admin'],
                    },
                    {
                        label: 'Label Descriptions',
                        href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].labelDescriptions,
                        displayForRoles: ['admin'],
                    },
                    {
                        label: 'Failure - Project',
                        href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].failuresProjects,
                        displayForRoles: ['admin'],
                    },
                    {
                        label: 'Performance Limiter Calibration',
                        href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].performanceLimiterCalibrations,
                        displayForRoles: ['admin'],
                    },
                    {
                        label: 'Copy failures with a list',
                        href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].copyFailuresList,
                        displayForRoles: ['admin'],
                    },
                    {
                        label: 'Edit Project (add or remove)',
                        href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].editProject,
                        displayForRoles: ['admin'],
                    },
                    {
                        label: 'Check if all labels exists in the software',
                        href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].checkLabelsExistence,
                        displayForRoles: ['admin'],
                    },
                    {
                        label: 'Calibration test',
                        href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].home,
                        displayForRoles: ['admin'],
                        disabled: true,
                    },
                ]
            },
            {
                label: 'Users',
                href: __WEBPACK_IMPORTED_MODULE_1__utils_routing_paths__["a" /* RoutingPaths */].users,
                displayForRoles: ['admin'],
            },
        ];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getUserInfo()
            .subscribe(function (result) {
            _this.userInfo = result;
        });
    };
    HeaderComponent.prototype.logout = function () {
        // no need to call logout from AccountService,
        // login component will call it on the "ngOnInit" method
        this.router.navigate(['login']);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/common/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/common/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HeaderComponent);
    return HeaderComponent;
}());

var MenuItem = /** @class */ (function () {
    function MenuItem() {
    }
    return MenuItem;
}());


/***/ }),

/***/ "./src/app/common/dialogs/save-changes-dialog/save-changes-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h2 mat-dialog-title>Pending Changes</h2> -->\r\n<!-- <mat-dialog-content>\r\n  Do you want to save your changes?\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions>\r\n  <button mat-button (click)=\"close('cancel')\">Cancel</button>\r\n  <button mat-button mat-button (click)=\"close('no')\">No</button>\r\n  <button mat-button (click)=\"close('yes')\">Yes</button>\r\n</mat-dialog-actions> -->"

/***/ }),

/***/ "./src/app/common/dialogs/save-changes-dialog/save-changes-dialog.component.scss":
/***/ (function(module, exports) {

module.exports = "mat-dialog-actions {\n  margin-top: 30px;\n  margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/common/dialogs/save-changes-dialog/save-changes-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveChangesDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
var SaveChangesDialogComponent = /** @class */ (function () {
    function SaveChangesDialogComponent() {
    }
    SaveChangesDialogComponent.prototype.close = function (parameter) {
        // this.dialogRef.close(parameter);
    };
    SaveChangesDialogComponent.width = '350px';
    SaveChangesDialogComponent.height = '200px';
    SaveChangesDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-save-changes-dialog',
            template: __webpack_require__("./src/app/common/dialogs/save-changes-dialog/save-changes-dialog.component.html"),
            styles: [__webpack_require__("./src/app/common/dialogs/save-changes-dialog/save-changes-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SaveChangesDialogComponent);
    return SaveChangesDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/services/apis.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApisService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_web_storage__ = __webpack_require__("./node_modules/angular-web-storage/bundles/angular-web-storage.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_web_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_web_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// tslint:disable-next-line:import-blacklist



var ApisService = /** @class */ (function () {
    function ApisService(http, storage, router) {
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.token = null;
        this.user = null;
        this.jwtHelper = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
    }
    Object.defineProperty(ApisService.prototype, "baseApiUrl", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apisBaseUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApisService.prototype, "isLoggedIn", {
        get: function () {
            return this.token != null && !this.jwtHelper.isTokenExpired(this.token);
        },
        enumerable: true,
        configurable: true
    });
    ApisService.prototype.createOptions = function (headers, needsAuthentication, contentType, responseType, reportProgress) {
        if (responseType === void 0) { responseType = 'arraybuffer'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (!headers) {
            headers = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["d" /* HttpHeaders */]();
        }
        if (contentType) {
            headers = headers.set('Content-Type', contentType);
        }
        if (needsAuthentication) {
            if (!this.token) {
                throw new TokenNotPresentException();
            }
            headers = headers.set('Authorization', 'bearer ' + this.token);
        }
        var requestOptions;
        if (responseType === 'text') {
            requestOptions = new CustomRequestOptionsText();
            requestOptions.responseType = 'text';
        }
        else {
            requestOptions = new CustomRequestOptions();
        }
        requestOptions.headers = headers;
        requestOptions.reportProgress = reportProgress;
        return requestOptions;
    };
    ApisService.prototype.login = function (username, password) {
        var _this = this;
        return this.performPost(this.baseApiUrl + '/Account/token', "username=" + username + "&password=" + password, false, 'application/x-www-form-urlencoded').map(function (result) {
            _this.token = result.token;
            return result;
        });
    };
    ApisService.prototype.getUserInfo = function () {
        var _this = this;
        if (this.user != null) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].from([this.user]);
        }
        return this.performGet(this.baseApiUrl + '/Account', true).map(function (result) {
            _this.user = result;
            return result;
        });
    };
    ApisService.prototype.logout = function () {
        var _this = this;
        return this.performPost(this.baseApiUrl + '/Account/logout', '', true).map(function (result) {
            _this.token = null;
            _this.user = null;
            return result;
        });
    };
    ApisService.prototype.performOperation = function (needsAuthentication, method) {
        if (needsAuthentication) {
            if (!this.token) {
                throw new TokenNotPresentException();
            }
            if (this.jwtHelper.isTokenExpired(this.token)) {
                this.router.navigate(['login']);
            }
        }
        return method();
    };
    ApisService.prototype.performOperationText = function (needsAuthentication, method) {
        if (needsAuthentication) {
            if (!this.token) {
                throw new TokenNotPresentException();
            }
            if (this.jwtHelper.isTokenExpired(this.token)) {
                this.router.navigate(['login']);
            }
        }
        return method();
    };
    ApisService.prototype.performOperationObject = function (needsAuthentication, method) {
        if (needsAuthentication) {
            if (!this.token) {
                throw new TokenNotPresentException();
            }
            if (this.jwtHelper.isTokenExpired(this.token)) {
                this.router.navigate(['login']);
            }
        }
        return method();
    };
    ApisService.prototype.performGet = function (url, needsAuthentication, contentType, headers) {
        var _this = this;
        if (contentType === void 0) { contentType = 'application/json'; }
        var options = this.createOptions(headers, needsAuthentication, contentType);
        return this.performOperation(needsAuthentication, function () {
            return _this.http.get(url, options);
        });
    };
    ApisService.prototype.performGetText = function (url, needsAuthentication, contentType, headers) {
        var _this = this;
        if (contentType === void 0) { contentType = 'text'; }
        var options = this.createOptions(headers, needsAuthentication, contentType, 'text');
        return this.performOperationText(needsAuthentication, function () {
            return _this.http.get(url, options);
        });
    };
    ApisService.prototype.performPost = function (url, body, needsAuthentication, contentType, headers) {
        var _this = this;
        if (contentType === void 0) { contentType = 'application/json'; }
        var options = this.createOptions(headers, needsAuthentication, contentType);
        return this.performOperation(needsAuthentication, function () {
            return _this.http.post(url, body, options);
        });
    };
    ApisService.prototype.performPut = function (url, body, needsAuthentication, contentType, headers) {
        var _this = this;
        if (contentType === void 0) { contentType = 'application/json'; }
        var options = this.createOptions(headers, needsAuthentication, contentType);
        return this.performOperation(needsAuthentication, function () {
            return _this.http.put(url, body, options);
        });
    };
    ApisService.prototype.performPutFormData = function (url, body, needsAuthentication, contentType, headers) {
        var _this = this;
        if (contentType === void 0) { contentType = null; }
        var options = this.createOptions(headers, needsAuthentication, contentType);
        return this.performOperation(needsAuthentication, function () {
            return _this.http.put(url, body, options);
        });
    };
    ApisService.prototype.performPostFormDataWithProgress = function (url, body, needsAuthentication, contentType, headers) {
        if (contentType === void 0) { contentType = null; }
        var options = this.createOptions(headers, needsAuthentication, contentType, 'arraybuffer', true);
        var req = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["e" /* HttpRequest */]('POST', url, body, options);
        return this.http.request(req);
    };
    ApisService.prototype.performDelete = function (url, needsAuthentication, contentType, headers) {
        var _this = this;
        if (contentType === void 0) { contentType = 'application/json'; }
        var options = this.createOptions(headers, needsAuthentication, contentType);
        return this.performOperation(needsAuthentication, function () {
            return _this.http.delete(url, options);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_angular_web_storage__["LocalStorage"])(),
        __metadata("design:type", String)
    ], ApisService.prototype, "token", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_angular_web_storage__["LocalStorage"])(),
        __metadata("design:type", Object)
    ], ApisService.prototype, "user", void 0);
    ApisService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angular_web_storage__["LocalStorageService"],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */]])
    ], ApisService);
    return ApisService;
}());

var TokenNotPresentException = /** @class */ (function () {
    function TokenNotPresentException() {
    }
    return TokenNotPresentException;
}());
var CustomRequestOptions = /** @class */ (function () {
    function CustomRequestOptions() {
    }
    return CustomRequestOptions;
}());
var CustomRequestOptionsText = /** @class */ (function () {
    function CustomRequestOptionsText() {
    }
    return CustomRequestOptionsText;
}());


/***/ }),

/***/ "./src/app/common/services/crud.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudService; });
/* unused harmony export ListResults */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CrudService = /** @class */ (function () {
    function CrudService(apisService, fieldMapper) {
        this.apisService = apisService;
        this.fieldMapper = fieldMapper;
    }
    CrudService.prototype.getItems = function (filter, sortField, sortDirection, pageIndex, pageSize, fields) {
        var _this = this;
        var url = this.baseApiUrlWithRoot;
        var setFirstParam = true;
        if (fields != null && fields.length > 0) {
            url += '?fields=' + fields.join(',');
            setFirstParam = false;
        }
        if (sortField.length > 0 && sortDirection.length > 0) {
            var apiSortField = this.getApiFieldName(sortField);
            if (apiSortField != null && apiSortField.length > 0) {
                url += setFirstParam ? '?' : '&';
                url += 'sortField=' + apiSortField + '&sortDirection=' + sortDirection;
            }
        }
        return this.apisService
            .performGet(url, true)
            .map(function (returningItems) {
            if (filter.length > 0) {
                returningItems = returningItems.filter(function (x) {
                    return _this.isNotFiltered(x, filter);
                });
            }
            var length = returningItems.length;
            if (pageIndex > 0 && pageSize > 0) {
                returningItems = returningItems.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);
            }
            return { data: returningItems, length: length };
        });
    };
    CrudService.prototype.getItem = function (id) {
        return this.apisService
            .performGet(this.baseApiUrlWithRoot + '/' + id, true)
            .map(function (returningItem) { return returningItem; });
    };
    CrudService.prototype.removeItem = function (id) {
        return this.apisService.performDelete(this.baseApiUrlWithRoot + '/' + id, true);
    };
    CrudService.prototype.addItem = function (item) {
        return this.apisService.performPost(this.baseApiUrlWithRoot, item, true);
    };
    CrudService.prototype.editItem = function (id, item) {
        return this.apisService.performPut(this.baseApiUrlWithRoot + '/' + id, item, true);
    };
    CrudService.prototype.isNotFiltered = function (item, filters) {
        var match = true;
        for (var _i = 0, filters_1 = filters; _i < filters_1.length; _i++) {
            var filter = filters_1[_i];
            if (item[filter['field']] === null) {
                return false;
            }
            switch (filter['matchMode']) {
                case 'equals':
                    match = match && (item[filter['field']].toString().toLowerCase() === filter['value'].toString().toLowerCase());
                    break;
                case 'contains':
                    match = match && (item[filter['field']].toString().toLowerCase().indexOf(filter['value'].toString().toLowerCase()) !== -1);
                    break;
                case 'startsWith':
                    match = match && (item[filter['field']].toString().toLowerCase().indexOf(filter['value'].toString().toLowerCase()) === 0);
                    break;
                case 'notStartsWith':
                    match = match && (item[filter['field']].toString().toLowerCase().indexOf(filter['value'].toString().toLowerCase()) !== 0);
                    break;
                case 'in':
                    match = match && true;
                    break;
            }
        }
        return match;
    };
    Object.defineProperty(CrudService.prototype, "baseApiUrlWithRoot", {
        get: function () {
            return this.apisService.baseApiUrl + '/' + this.apiRoot;
        },
        enumerable: true,
        configurable: true
    });
    CrudService.prototype.getApiFieldName = function (field) {
        return this.fieldMapper.fieldMap[field];
    };
    CrudService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__apis_service__["a" /* ApisService */], Object])
    ], CrudService);
    return CrudService;
}());

var ListResults = /** @class */ (function () {
    function ListResults() {
    }
    return ListResults;
}());



/***/ }),

/***/ "./src/app/common/services/lockable-crud.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockableCrudService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__crud_service__ = __webpack_require__("./src/app/common/services/crud.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LockableCrudService = /** @class */ (function (_super) {
    __extends(LockableCrudService, _super);
    function LockableCrudService(apisService, fieldMapper) {
        var _this = _super.call(this, apisService, fieldMapper) || this;
        _this.apisService = apisService;
        _this.fieldMapper = fieldMapper;
        return _this;
    }
    LockableCrudService.prototype.lockItem = function (id) {
        return this.lockUnlockItem(id, 1);
    };
    LockableCrudService.prototype.unlockItem = function (id) {
        return this.lockUnlockItem(id, 0);
    };
    LockableCrudService.prototype.lockUnlockItem = function (id, lockStatus) {
        return this.apisService
            .performPut(this.apisService.baseApiUrl + '/lock', {
            id: id,
            resourceType: this.lockResourceType,
            locked: lockStatus,
        }, true);
    };
    LockableCrudService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__apis_service__["a" /* ApisService */], Object])
    ], LockableCrudService);
    return LockableCrudService;
}(__WEBPACK_IMPORTED_MODULE_2__crud_service__["a" /* CrudService */]));



/***/ }),

/***/ "./src/app/dao/a2l-failure-detail-field-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A2lFailureDetailFieldMapper; });
var A2lFailureDetailFieldMapper = /** @class */ (function () {
    function A2lFailureDetailFieldMapper() {
        this.fieldMap = {
            name: 'fnrFailureDetailName',
            title: 'fnrFailureDetailTitle',
            dtc: 'fnrFailureDetailDtc',
            component: 'fnrFailureDetailComponent',
            obdSystem: 'fnrFailureDetailObdSystem',
            obdCode: 'fnrFailureDetailObdCode',
            disabled: 'fnrFailureDetailDisable',
            errorClass: 'fnrFailureDetailErrorclass',
            priority: 'fnrFailureDetailPriority',
            visibleScanTool: 'fnrFailureDetailVisibleScanTool',
            longTermFailure: 'fnrFailureDetailLongTermFailure',
            perfLim: 'fnrFailureDetailPerformanceLimitation',
            systemLamp: 'fnrFailureDetailSystemLamp',
            systemLampActivation: 'fnrFailureDetailSystemLampActivation',
            systemLampDeactivation: 'fnrFailureDetailSystemLampDeactivation',
            mil: 'fnrFailureDetailMil',
            validationMil: 'fnrFailureValidationPendingMil',
            healingMil: 'fnrFailureDetailHealingMil',
            dtcErasingFromMemory: 'fnrFailureDetailDtcErasingFromMemory',
            dtcErasingPending: 'fnrFailureDetailDtcErasingPending',
            dtcErasingPendingHealed: 'fnrFailureDetailDtcErasingPendingHealed',
            classification: 'fnrFailureDetailClassification',
            resetBehaviour: 'fnrFailureDetailResetBehavior',
            resetAfterrun: 'fnrFailureDetailResetOnAftemun',
            faultStorage: 'fnrFailureDetailFaultAtStorage',
            debouncingWhileTesterPresent: 'fnrFailureDetailDebouncingWhileTesterPresent',
            disableBehaviour: 'fnrFailureDetailDisableBehavior',
            generalRemarks: 'fnrFailureDetailGeneralRemarks',
            testConditon: 'fnrFailureDetailTestCondiiton',
            faultDetection: 'fnrFailureDetailFaultDetection',
            defectDebouncing: 'fnrFailureDetailDefectDebouncing',
            faultHealing: 'fnrFailureDetailFaultHealing',
            healingDebouncing: 'fnrFailureDetailHealingDebouncing',
            systemReaction: 'fnrFailureDetailSystemReaction',
            faultDisabling: 'fnrFailureDetailFaultDisabling',
            fidCalibrations: 'fnrFailureDetailFidCalibrations',
            failureCause: 'fnrFailureDetailFailureCause',
            failureRepair: 'fnrFailureDetailFailureRepair',
            // ambientConditions: 'ambientConditions',
            inducement: 'fnrFailureDetailInducement',
            diumpr: 'fnrFailureDetailDiumpr',
            dtcm: 'fnrFailureDetailDtcm',
            blinkCode: 'fnrFailureDetailBlinkCode',
        };
    }
    return A2lFailureDetailFieldMapper;
}());



/***/ }),

/***/ "./src/app/dao/a2l-failure-detail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A2lFailureDetail; });
var A2lFailureDetail = /** @class */ (function () {
    function A2lFailureDetail() {
    }
    return A2lFailureDetail;
}());



/***/ }),

/***/ "./src/app/dao/a2l-parsing-result-field-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return A2lParsingResultFieldMapper; });
var A2lParsingResultFieldMapper = /** @class */ (function () {
    function A2lParsingResultFieldMapper() {
        this.fieldMap = {
            failureDetail: 'fnrFailureDetail',
            ambientConditions: 'fnrAmbientConditions',
        };
    }
    return A2lParsingResultFieldMapper;
}());



/***/ }),

/***/ "./src/app/dao/channel-description-field-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelDescriptionFieldMapper; });
var ChannelDescriptionFieldMapper = /** @class */ (function () {
    function ChannelDescriptionFieldMapper() {
        this.fieldMap = {
            id: 'id',
            name: 'name',
            description: 'description',
            boschDescription: 'boschDescription',
            comment: 'comment',
            projectCode: 'projectCode',
            projectId: 'projectId',
            timeStamp: 'ssmaTimeStamp',
            status: 'status',
        };
    }
    return ChannelDescriptionFieldMapper;
}());



/***/ }),

/***/ "./src/app/dao/failure-field-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailureFieldMapper; });
var FailureFieldMapper = /** @class */ (function () {
    function FailureFieldMapper() {
        this.fieldMap = {
            id: 'id',
            name: 'name',
            faultTitle: 'title',
            failureGroupId: 'failureGroup',
            comment: 'comment',
            cameTitle: 'cameTitle',
            componentId: 'componentId',
            carbComponentId: 'carbComponent',
            monitorStrategyDescription: 'monitorStrategyDescription',
            timeRequired: 'timeRequired',
            responsibleId: 'responsible',
            isCarbRelevant: 'carbrelevant',
            status: 'status',
            projects: 'projects'
        };
    }
    return FailureFieldMapper;
}());



/***/ }),

/***/ "./src/app/dao/failure.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Failure; });
var Failure = /** @class */ (function () {
    function Failure() {
    }
    return Failure;
}());



/***/ }),

/***/ "./src/app/dao/fid-reaction.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FidReactions; });
var FidReaction = /** @class */ (function () {
    function FidReaction() {
    }
    return FidReaction;
}());
var FidReactions = /** @class */ (function () {
    function FidReactions() {
    }
    FidReactions.getFidReactionById = function (id) {
        return FidReactions.fidReactions.find(function (fidReaction) { return fidReaction.id === id; });
    };
    FidReactions.fidReactions = [
        { id: 1, name: 'Engine stop (direct)' },
        { id: 2, name: 'Engine stop (indirect)' },
        { id: 3, name: 'Yes (OBD)' },
        { id: 4, name: 'Yes (technical)' },
    ];
    return FidReactions;
}());



/***/ }),

/***/ "./src/app/dao/iso-code-field-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsoCodeFieldMapper; });
var IsoCodeFieldMapper = /** @class */ (function () {
    function IsoCodeFieldMapper() {
        this.fieldMap = {
            id: 'id',
            code: 'code',
            pcode: 'pcode',
            description: 'description',
            comment: 'comment',
            status: 'status',
        };
    }
    return IsoCodeFieldMapper;
}());



/***/ }),

/***/ "./src/app/dao/label-description-check-field-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelDescriptionCheckFieldMapper; });
var LabelDescriptionCheckFieldMapper = /** @class */ (function () {
    function LabelDescriptionCheckFieldMapper() {
        this.fieldMap = {
            failure: 'failure',
            labelName: 'labelName',
            table: 'table',
            warning: 'warning',
        };
    }
    return LabelDescriptionCheckFieldMapper;
}());



/***/ }),

/***/ "./src/app/dao/label-description-field-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelDescriptionFieldMapper; });
var LabelDescriptionFieldMapper = /** @class */ (function () {
    function LabelDescriptionFieldMapper() {
        this.fieldMap = {
            id: 'id',
            name: 'name',
            unit: 'unit',
            description: 'description',
            comment: 'comment',
            projectId: 'projectId',
            timestamp: 'ssmaTimeStamp'
        };
    }
    return LabelDescriptionFieldMapper;
}());



/***/ }),

/***/ "./src/app/dao/performance-limiter-calibration-field-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceLimiterCalibrationFieldMapper; });
var PerformanceLimiterCalibrationFieldMapper = /** @class */ (function () {
    function PerformanceLimiterCalibrationFieldMapper() {
        this.fieldMap = {
            id: 'id',
            fid: 'fid',
            reactionId: 'reactionId',
            projects: 'project',
            status: 'status',
        };
    }
    return PerformanceLimiterCalibrationFieldMapper;
}());



/***/ }),

/***/ "./src/app/dao/project-field-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectFieldMapper; });
var ProjectFieldMapper = /** @class */ (function () {
    function ProjectFieldMapper() {
        this.fieldMap = {
            id: 'id',
            version: 'version',
            name: 'name',
            project: 'project',
            revision: 'revision',
            ecu: 'ecu',
            dsmStructure: 'dsmStructure',
            comment: 'comment',
            status: 'status',
        };
    }
    return ProjectFieldMapper;
}());



/***/ }),

/***/ "./src/app/dao/role-field-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoleFieldMapper; });
var RoleFieldMapper = /** @class */ (function () {
    function RoleFieldMapper() {
        this.fieldMap = {
            id: 'id',
            name: 'description',
        };
    }
    return RoleFieldMapper;
}());



/***/ }),

/***/ "./src/app/dao/user-field-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFieldMapper; });
var UserFieldMapper = /** @class */ (function () {
    function UserFieldMapper() {
        this.fieldMap = {
            id: 'id',
            username: 'username',
            mail: 'mail',
            roles: 'roles',
            roleId: 'roleId',
            role: 'role',
        };
    }
    return UserFieldMapper;
}());



/***/ }),

/***/ "./src/app/guards/can-deactivate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    CanDeactivateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/guards/has-access.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasAccessGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HasAccessGuard = /** @class */ (function () {
    function HasAccessGuard(router) {
        this.router = router;
    }
    HasAccessGuard.prototype.canActivate = function (next, state) {
        var userInfo = JSON.parse(localStorage.getItem('user'))._value;
        if (userInfo && next.data.roles.includes(userInfo.roles[0].toLowerCase())) {
            return true;
        }
        // Redirect the user before denying them access to this route
        this.router.navigate(['unauthorized']);
        return false;
    };
    HasAccessGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], HasAccessGuard);
    return HasAccessGuard;
}());



/***/ }),

/***/ "./src/app/guards/is-logged-in.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IsLoggedInGuard = /** @class */ (function () {
    function IsLoggedInGuard(router, accountService) {
        this.router = router;
        this.accountService = accountService;
    }
    IsLoggedInGuard.prototype.canActivate = function (next, state) {
        if (this.accountService.isLoggedIn) {
            return true;
        }
        // Redirect the user before denying them access to this route
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    IsLoggedInGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]])
    ], IsLoggedInGuard);
    return IsLoggedInGuard;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <p>\r\n    TODO: \"about\" page \r\n  </p>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__("./src/app/pages/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/channel-description-detail/channel-description-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"container\">\r\n\r\n      <h3>Channel Description</h3>\r\n\r\n      <app-dynamic-form\r\n        [vm]=\"item\"\r\n        [vmDefinition]=\"itemDefinition\"\r\n        [errorMessage]=\"errorMessage\"\r\n        [hasSaveButton]=\"lockedByCurrentUser\"\r\n        (cancel)=\"cancel()\"\r\n        (save)=\"save($event)\"\r\n      ></app-dynamic-form>\r\n\r\n      <p-dialog header=\"Warning\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n        <span>{{ dialogMessage }}</span>\r\n        <p-footer>\r\n          <button type=\"button\" pButton icon=\"fa-unlock\" (click)=\"dialogUnlock()\" label=\"Unlock it\" class=\"ui-button-success\"></button>\r\n          <button type=\"button\" pButton icon=\"fa-lock\" (click)=\"dialogKeepLock()\" label=\"Keep it locked\" class=\"ui-button-danger\"></button>\r\n        </p-footer>\r\n      </p-dialog>\r\n\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/channel-description-detail/channel-description-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/channel-description-detail/channel-description-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelDescriptionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_channel_descriptions_service__ = __webpack_require__("./src/app/services/channel-descriptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_channel_description_field_mapper__ = __webpack_require__("./src/app/dao/channel-description-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChannelDescriptionDetailComponent = /** @class */ (function () {
    function ChannelDescriptionDetailComponent(route, router, dataService, fieldMapper) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.itemDefinition = [
            {
                key: this.fieldMapper.fieldMap['id'],
                label: 'Id',
                type: 'number',
                hidden: true,
                isId: true,
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['status'],
                label: '',
                type: 'label',
            },
            {
                key: this.fieldMapper.fieldMap['name'],
                label: 'Name',
                type: 'text',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['description'],
                label: 'Description',
                type: 'text',
            },
            {
                key: this.fieldMapper.fieldMap['boschDescription'],
                label: 'Bosch Description',
                type: 'text',
            },
            {
                key: this.fieldMapper.fieldMap['comment'],
                label: 'Comment',
                type: 'textarea',
            },
            {
                key: this.fieldMapper.fieldMap['projectCode'],
                label: 'Project Code',
                type: 'text',
            },
            {
                key: this.fieldMapper.fieldMap['projectId'],
                label: 'Used in Project',
                type: 'number',
            },
        ];
        this.showDialog = false;
        this.lockedByCurrentUser = false;
    }
    ChannelDescriptionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isNew = this.route.snapshot.url[1].path === 'new';
        if (this.isNew) {
            this.lockedByCurrentUser = true;
            this.item = {
                id: 0,
                name: null,
                description: null,
                boschDescription: null,
                comment: null,
                projectCode: null,
                projectId: null,
            };
        }
        else {
            var id = this.route.snapshot.params['id'];
            var statusIndex_1 = this.itemDefinition.findIndex(function (item) { return item.key === _this.fieldMapper.fieldMap['status']; });
            this.dataService.lockItem(id).subscribe(function (success) {
                _this.lockedByCurrentUser = true;
                _this.itemDefinition[statusIndex_1].label = 'Locked by you';
                _this.getItem();
            }, function (error) {
                if (error.status === 409) {
                    _this.lockedByCurrentUser = false;
                    _this.itemDefinition[statusIndex_1].label = 'Locked by another user';
                    _this.getItem();
                }
            });
        }
    };
    ChannelDescriptionDetailComponent.prototype.getItem = function () {
        var _this = this;
        this.dataService.getItem(this.route.snapshot.params['id'])
            .subscribe(function (item) {
            _this.item = item;
        });
    };
    ChannelDescriptionDetailComponent.prototype.cancel = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].channelDescriptions]);
    };
    ChannelDescriptionDetailComponent.prototype.save = function (item) {
        if (this.isNew) {
            this.create(item);
        }
        else {
            this.update(item);
        }
        this.cancel();
    };
    ChannelDescriptionDetailComponent.prototype.update = function (item) {
        this.dataService.editItem(item.id, item)
            .subscribe(function (x) {
            console.log('channel description ' + item.id + ' updated');
        });
    };
    ChannelDescriptionDetailComponent.prototype.create = function (item) {
        // TODO: ERROR (No 'Access-Control-Allow-Origin' header is present on the requested resource)
        this.dataService.addItem(item)
            .subscribe(function (x) {
            console.log('channel description ' + x.id + ' created');
        });
    };
    ChannelDescriptionDetailComponent.prototype.dialogKeepLock = function () {
        this.showDialog = false;
        this.lockedByCurrentUser = false;
        this.cancel();
    };
    ChannelDescriptionDetailComponent.prototype.dialogUnlock = function () {
        var _this = this;
        this.showDialog = false;
        this.dataService.unlockItem(this.route.snapshot.params['id']).subscribe(function (success) {
            _this.lockedByCurrentUser = false;
            _this.cancel();
        }, function (error) {
            console.log('error unlocking');
        });
    };
    ChannelDescriptionDetailComponent.prototype.canDeactivate = function () {
        if (!this.lockedByCurrentUser) {
            return true;
        }
        this.dialogMessage = 'You have locked this channel description, which prevents other users from editing it! What would you like to do?';
        this.showDialog = true;
    };
    ChannelDescriptionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-channel-description-detail',
            template: __webpack_require__("./src/app/pages/channel-description-detail/channel-description-detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/channel-description-detail/channel-description-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_channel_descriptions_service__["a" /* ChannelDescriptionsService */],
            __WEBPACK_IMPORTED_MODULE_4__dao_channel_description_field_mapper__["a" /* ChannelDescriptionFieldMapper */]])
    ], ChannelDescriptionDetailComponent);
    return ChannelDescriptionDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/channel-descriptions/channel-descriptions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"course\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <advanced-table #table\r\n          [listTitle]=\"listTitle\"\r\n          [advancedTableData]=\"advancedTableData\"\r\n          [hasAddButton]=true\r\n          (addItem)=\"addItem()\"\r\n          [hasMultipleDelete]=false>\r\n        </advanced-table>\r\n        <p-dialog header=\"Error\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n          <span>{{ dialogMessage }}</span>\r\n          <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"showDialog=false\" label=\"Close\"></button>\r\n          </p-footer>\r\n        </p-dialog>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/channel-descriptions/channel-descriptions.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/channel-descriptions/channel-descriptions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelDescriptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_channel_descriptions_service__ = __webpack_require__("./src/app/services/channel-descriptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__channel_descriptions_datasource__ = __webpack_require__("./src/app/pages/channel-descriptions/channel-descriptions.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__ = __webpack_require__("./src/app/common/components/advanced-table/advanced-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dao_channel_description_field_mapper__ = __webpack_require__("./src/app/dao/channel-description-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChannelDescriptionsComponent = /** @class */ (function () {
    function ChannelDescriptionsComponent(router, crudService, fieldMapper) {
        var _this = this;
        this.router = router;
        this.crudService = crudService;
        this.fieldMapper = fieldMapper;
        this.listTitle = 'Channel Descriptions';
        this.advancedTableData = {
            columns: [
                {
                    description: 'Channel Name',
                    valueGetter: function (item) { return item.name; },
                    matColumnDefValue: this.fieldMapper.fieldMap['name']
                },
                {
                    description: 'Description',
                    valueGetter: function (item) { return item.description; },
                    matColumnDefValue: this.fieldMapper.fieldMap['description']
                },
                {
                    description: 'Bosch Description',
                    valueGetter: function (item) { return item.boschDescription; },
                    matColumnDefValue: this.fieldMapper.fieldMap['boschDescription']
                },
                {
                    description: 'Used in Project',
                    valueGetter: function (item) { return String(item.projectId); },
                    matColumnDefValue: this.fieldMapper.fieldMap['projectId']
                },
                {
                    description: 'Comment',
                    valueGetter: function (item) { return item.comment; },
                    matColumnDefValue: this.fieldMapper.fieldMap['comment']
                }
            ],
            displayedColumns: [
                this.fieldMapper.fieldMap['name'],
                this.fieldMapper.fieldMap['description'],
                this.fieldMapper.fieldMap['boschDescription'],
                this.fieldMapper.fieldMap['projectId'],
                this.fieldMapper.fieldMap['comment']
            ],
            dataSource: new __WEBPACK_IMPORTED_MODULE_3__channel_descriptions_datasource__["a" /* ChannelDescriptionsDataSource */](this.crudService),
            actions: [
                {
                    icon: 'edit',
                    disabled: function (any) { return false; },
                    event: function (x) { return _this.onEdit(x); }
                },
                {
                    icon: 'trash',
                    disabled: function (any) { return false; },
                    event: function (x) {
                        return _this.onDelete(x);
                    }
                }
            ]
        };
        this.showDialog = false;
    }
    ChannelDescriptionsComponent.prototype.onEdit = function (row) {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].channelDescriptions, row.id]);
    };
    ChannelDescriptionsComponent.prototype.onDelete = function (row) {
        var _this = this;
        this.crudService.lockItem(row.id).subscribe(function (item) {
            // if record is successfully locked => proceed to delete
            _this.crudService.removeItem(row.id).subscribe(function (result) {
                _this.table.items.splice(_this.table.items.indexOf(row), 1);
            });
        }, function (error) {
            if (error.status === 409) {
                _this.dialogMessage = 'Record locked by another user!';
                _this.showDialog = true;
            }
        });
    };
    ChannelDescriptionsComponent.prototype.addItem = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].channelDescriptions, 'new']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__["a" /* AdvancedTableComponent */])
    ], ChannelDescriptionsComponent.prototype, "table", void 0);
    ChannelDescriptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-channel-descriptions',
            template: __webpack_require__("./src/app/pages/channel-descriptions/channel-descriptions.component.html"),
            styles: [__webpack_require__("./src/app/pages/channel-descriptions/channel-descriptions.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_channel_descriptions_service__["a" /* ChannelDescriptionsService */],
            __WEBPACK_IMPORTED_MODULE_6__dao_channel_description_field_mapper__["a" /* ChannelDescriptionFieldMapper */]])
    ], ChannelDescriptionsComponent);
    return ChannelDescriptionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/channel-descriptions/channel-descriptions.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelDescriptionsDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__ = __webpack_require__("./src/app/common/components/base-data-source.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ChannelDescriptionsDataSource = /** @class */ (function (_super) {
    __extends(ChannelDescriptionsDataSource, _super);
    function ChannelDescriptionsDataSource(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    ChannelDescriptionsDataSource.prototype.getData = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = []; }
        if (sortField === void 0) { sortField = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        return this.service.getItems(filter, sortField, sortDirection, pageIndex, pageSize);
    };
    return ChannelDescriptionsDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__["a" /* BaseDataSource */]));



/***/ }),

/***/ "./src/app/pages/check-labels-existence/check-labels-existence.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<main role=\"main\">\r\n  <div class=\"container\">\r\n\r\n    <h3>Check labels existence</h3>\r\n\r\n    <div>\r\n      <form [formGroup]=\"form\">\r\n\r\n        <!-- <div class=\"row\">\r\n            <div class=\"col-2\"> -->\r\n        <div [formGroup]=\"form\" class=\"form-group\">\r\n          <p-checkbox class=\"primeng-form-control\" formControlName=\"globalScope\" [(ngModel)]=\"globalScope\" binary=\"true\"></p-checkbox>\r\n          <label htmlFor=\"globalScope\">Global check</label>\r\n        </div>\r\n        <!-- </div> -->\r\n\r\n        <!-- <div class=\"col-10\"> -->\r\n        <div *ngIf=\"!globalScope\" [formGroup]=\"form\" class=\"form-group\">\r\n          <label htmlFor=\"selectedProject\">Project</label>\r\n          <div class=\"primeng-form-control\">\r\n            <p-dropdown [options]=\"projectOptions\" formControlName=\"selectedProject\" [(ngModel)]=\"selectedProject\" autoDisplayFirst=\"true\"\r\n              [style]=\"{'display': 'block', 'width': '100%'}\">\r\n            </p-dropdown>\r\n          </div>\r\n          <div *ngIf=\"form.get('selectedProject').hasError('required') && form.get('selectedProject').touched\" class=\"alert alert-danger\">\r\n            Project is required when \"Global check\" is unchecked.\r\n          </div>\r\n        </div>\r\n        <!-- </div>\r\n          </div> -->\r\n\r\n        <div class=\"row\">\r\n          <div *ngFor=\"let tableFlag of tableFlags; let index = index\" [formGroup]=\"form\" class=\"form-group\">\r\n            <div class=\"col\">\r\n              <p-checkbox class=\"primeng-form-control\" [formControlName]=\"tableFlag.id\" [(ngModel)]=\"tableFlag.value\" binary=\"true\"></p-checkbox>\r\n              <label [htmlFor]=\"tableFlag.id\">{{tableFlag.label}}</label>\r\n            </div>\r\n            <div *ngIf=\"(index + 1) % 4 == 0\" class=\"clearfix\"></div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-buttons\">\r\n          <button type=\"button\" class=\"btn\" (click)=\"cancel()\">Cancel</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkLabels()\">Check labels</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"checkLabelsReport()\">Generate TXT report</button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"check-labels-result\">\r\n      <p-table #tt\r\n        [columns]=\"cols\"\r\n        [value]=\"checkLabelsResult\"\r\n        [loading]=\"loading\"\r\n        paginator=true [rows]=\"50\" [totalRecords]=\"checkLabelsResult.length\" [rowsPerPageOptions]=\"[50, 100, 500]\"\r\n      >\r\n\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr *ngIf=\"checkLabelsResult.length > 0\">\r\n            <td [attr.colspan]=\"columns.length\">\r\n              <button pButton type=\"button\" class=\"ui-button-success\" icon=\"fa-file-o\" iconPos=\"left\" label=\"Export results to CSV\" (click)=\"tt.exportCSV()\" style=\"float:left; margin-bottom: 1rem;\"></button>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <th *ngFor=\"let col of columns\" pResizableColumn pReorderableColumn [pSortableColumn]=\"col.field\">\r\n              {{col.header}}\r\n              <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n            </th>\r\n          </tr>\r\n          <tr>\r\n            <th *ngFor=\"let col of columns\">\r\n              <input pInputText type=\"text\" (input)=\"tt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n          <tr>\r\n            <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\r\n              {{item[col.field]}}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"emptymessage\" let-columns>\r\n          <tr>\r\n            <td [attr.colspan]=\"columns.length\">\r\n              No records found\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n      </p-table>\r\n    </div>\r\n\r\n  </div>\r\n</main>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/check-labels-existence/check-labels-existence.component.scss":
/***/ (function(module, exports) {

module.exports = ".form-buttons {\n  margin-top: 0.5em; }\n\n.check-labels-result {\n  margin-top: 2em; }\n"

/***/ }),

/***/ "./src/app/pages/check-labels-existence/check-labels-existence.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckLabelsExistenceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_projects_service__ = __webpack_require__("./src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_project_field_mapper__ = __webpack_require__("./src/app/dao/project-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_label_description_check_service__ = __webpack_require__("./src/app/services/label-description-check.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dao_label_description_check_field_mapper__ = __webpack_require__("./src/app/dao/label-description-check-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckLabelsExistenceComponent = /** @class */ (function () {
    function CheckLabelsExistenceComponent(route, router, dataService, fieldMapper, projectsDataService, projectsFieldMapper) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.projectsDataService = projectsDataService;
        this.projectsFieldMapper = projectsFieldMapper;
        this.loading = false;
        this.globalScope = false;
        this.tableFlags = [
            { id: 'generalRemark', label: 'General Remark', value: true },
            { id: 'testCondition', label: 'Test Condition', value: true },
            { id: 'faultDetection', label: 'Fault Detection', value: true },
            { id: 'defectDebouncing', label: 'Defect Debouncing', value: true },
            { id: 'faultHealing', label: 'Fault Healing', value: true },
            { id: 'healingDebouncing', label: 'Healing Debouncing', value: true },
            { id: 'systemReaction', label: 'System Reaction', value: true },
            { id: 'faultDisabling', label: 'Fault Disabling', value: true },
            { id: 'faultCause', label: 'Fault Cause', value: true },
            { id: 'faultRepair', label: 'Fault Repair', value: true },
        ];
        this.checkLabelsResult = [];
        this.cols = [
            {
                header: 'Failure',
                field: this.fieldMapper.fieldMap['failure'],
                filterMatchMode: 'contains'
            },
            {
                header: 'Label Name',
                field: this.fieldMapper.fieldMap['labelName'],
                filterMatchMode: 'contains'
            },
            {
                header: 'Table',
                field: this.fieldMapper.fieldMap['table'],
                filterMatchMode: 'contains'
            },
            {
                header: 'Warning',
                field: this.fieldMapper.fieldMap['warning'],
                filterMatchMode: 'contains'
            },
        ];
    }
    CheckLabelsExistenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectOptions = [];
        this.projectsDataService
            .getItems([], this.projectsFieldMapper.fieldMap.name, 'asc', null, null)
            .subscribe(function (result) {
            result.data.map(function (project) {
                var formattedVersion = project.version.slice(0, 3) + '_' + (project.version.slice(3).length > 0 ?
                    project.version.slice(3) :
                    '0');
                _this.projectOptions.push({ value: project.id, label: project.ecu + '_' + project.project + '_' + formattedVersion });
            });
            _this.selectedProject = _this.projectOptions[0].value;
        });
        this.resetForm();
    };
    CheckLabelsExistenceComponent.prototype.resetForm = function () {
        var group = {};
        group['globalScope'] = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.globalScope);
        group['selectedProject'] = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('selectedProject', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required);
        for (var _i = 0, _a = this.tableFlags; _i < _a.length; _i++) {
            var tableFlag = _a[_i];
            group[tableFlag.id] = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](tableFlag.id);
        }
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"](group);
    };
    CheckLabelsExistenceComponent.prototype.ngOnChanges = function (changes) {
        this.resetForm();
    };
    CheckLabelsExistenceComponent.prototype.cancel = function () {
        // TODO: home or back?
        this.router.navigate(['home']);
    };
    CheckLabelsExistenceComponent.prototype.checkLabels = function () {
        var _this = this;
        this.loading = true;
        this.checkLabelsResult = [];
        this.dataService.check(this.getRequestParams(this.form.value)).subscribe(function (result) {
            _this.checkLabelsResult = result;
            _this.loading = false;
        });
    };
    CheckLabelsExistenceComponent.prototype.checkLabelsReport = function () {
        var _this = this;
        this.loading = true;
        this.checkLabelsResult = [];
        var a = document.createElement('a');
        a.hidden = true;
        document.body.appendChild(a);
        this.dataService.getTxtReport(this.getRequestParams(this.form.value)).subscribe(function (result) {
            var blob = new Blob([result], { type: 'text/plain' });
            a.href = window.URL.createObjectURL(blob);
            if (_this.globalScope) {
                a.download = 'Global_Check_Report.txt';
            }
            else {
                var selectedProjectIdx = _this.projectOptions.findIndex(function (item) { return item.value === _this.selectedProject; });
                a.download = _this.projectOptions[selectedProjectIdx].label + '_WRN.txt';
            }
            a.click();
            var resultArray = result.split(/\r?\n/);
            if (!_this.globalScope) {
                resultArray.shift();
            }
            for (var _i = 0, resultArray_1 = resultArray; _i < resultArray_1.length; _i++) {
                var record = resultArray_1[_i];
                var cols = record.split(' - ');
                _this.checkLabelsResult.push({
                    failure: cols[0],
                    labelName: cols[1],
                    table: cols[2],
                    warning: cols[3],
                });
            }
            // this.checkLabelsResult = result;
            _this.loading = false;
        });
    };
    CheckLabelsExistenceComponent.prototype.getRequestParams = function (formValues) {
        var requestParams = new __WEBPACK_IMPORTED_MODULE_5__services_label_description_check_service__["a" /* LabelDescriptionCheckRequest */];
        requestParams.projectId = this.globalScope ? null : formValues.selectedProject;
        requestParams.generalRemark = formValues.generalRemark;
        requestParams.testCondition = formValues.testCondition;
        requestParams.faultDetection = formValues.faultDetection;
        requestParams.defectDebouncing = formValues.defectDebouncing;
        requestParams.faultHealing = formValues.faultHealing;
        requestParams.healingDebouncing = formValues.healingDebouncing;
        requestParams.systemReaction = formValues.systemReaction;
        requestParams.faultDisabling = formValues.faultDisabling;
        requestParams.faultCause = formValues.faultCause;
        requestParams.faultRepair = formValues.faultRepair;
        return requestParams;
    };
    CheckLabelsExistenceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-check-labels-existence',
            template: __webpack_require__("./src/app/pages/check-labels-existence/check-labels-existence.component.html"),
            styles: [__webpack_require__("./src/app/pages/check-labels-existence/check-labels-existence.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_label_description_check_service__["b" /* LabelDescriptionCheckService */],
            __WEBPACK_IMPORTED_MODULE_6__dao_label_description_check_field_mapper__["a" /* LabelDescriptionCheckFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_3__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_4__dao_project_field_mapper__["a" /* ProjectFieldMapper */]])
    ], CheckLabelsExistenceComponent);
    return CheckLabelsExistenceComponent;
}());



/***/ }),

/***/ "./src/app/pages/copy-failures-list/copy-failures-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<main role=\"main\">\r\n  <div class=\"container\">\r\n\r\n    <h3>Copy failures with a list</h3>\r\n    \r\n    <form [formGroup]=\"form\">\r\n\r\n      <div [formGroup]=\"form\" class=\"form-group ui-fluid\">\r\n        <label htmlFor=\"selectedFailures\">Failures to copy</label>\r\n        <p-autoComplete\r\n          class=\"\"\r\n          formControlName=\"selectedFailures\"\r\n          [(ngModel)]=\"selectedFailures\"\r\n          [suggestions]=\"filteredFailures\"\r\n          (completeMethod)=\"filterFailures($event.query)\"\r\n          [autoHighlight]=\"true\"\r\n          field=\"name\"\r\n          [minLength]=\"1\"\r\n          placeholder=\"Search failures by name or id\"\r\n          [multiple]=\"true\"\r\n          [forceSelection]=\"true\"\r\n          styleClass=\"wid100\"\r\n          inputStyleClass=\"wid100\"\r\n        >\r\n          <ng-template let-item pTemplate=\"selectedItem\">\r\n            <span style=\"margin-right:1.2em\">{{ item.name }} (#{{ item.id }})</span>\r\n          </ng-template>\r\n          <ng-template let-item pTemplate=\"item\">\r\n            {{ item.name }} (#{{ item.id }})\r\n          </ng-template>\r\n        </p-autoComplete>\r\n        <div *ngIf=\"form.get('selectedFailures').hasError('required') && form.get('selectedFailures').touched\" class=\"alert alert-danger\">\r\n          At least one failure is required.\r\n        </div>\r\n      </div>\r\n\r\n      <div [formGroup]=\"form\" class=\"form-group\">\r\n        <label htmlFor=\"comment\">Comment</label>\r\n        <input class=\"form-control\" formControlName=\"comment\" id=\"comment\" type=\"text\" pInputText [(ngModel)]=\"comment\">\r\n      </div>\r\n\r\n      <div>\r\n        <button type=\"button\" class=\"btn\" (click)=\"cancel()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"submit($event)\">Copy</button>\r\n      </div>\r\n\r\n    </form>\r\n  \r\n    <!-- <p-confirmDialog></p-confirmDialog> -->\r\n\r\n    <p-dialog [header]=\"dialogHeaderTitle\" [showHeader]=\"dialogShowHeader\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n      <span>{{ dialogMessage }}</span>\r\n      <div *ngIf=\"dialogShowProgress\" style=\"text-align: center; padding-top: 1rem;\">\r\n        <p-progressSpinner></p-progressSpinner>\r\n      </div>\r\n      <p-footer *ngIf=\"!dialogShowProgress\">\r\n        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"showDialog=false\" label=\"Close\"></button>\r\n      </p-footer>\r\n    </p-dialog>\r\n    \r\n  </div>\r\n</main>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/copy-failures-list/copy-failures-list.component.scss":
/***/ (function(module, exports) {

module.exports = "li.ui-autocomplete-token {\n  margin: .125em !important; }\n\nli.ui-autocomplete-input-token,\nli.ui-autocomplete-input-token input {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/copy-failures-list/copy-failures-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyFailuresListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dao_failure_field_mapper__ = __webpack_require__("./src/app/dao/failure-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_failures_service__ = __webpack_require__("./src/app/services/failures.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CopyFailuresListComponent = /** @class */ (function () {
    function CopyFailuresListComponent(route, router, dataService, fieldMapper) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.showDialog = false;
        this.dialogShowProgress = false;
        this.dialogShowHeader = true;
    }
    CopyFailuresListComponent.prototype.ngOnInit = function () {
        this.getAllFailures();
        this.resetForm();
    };
    CopyFailuresListComponent.prototype.resetForm = function () {
        // legacy app defaults
        this.comment = 'machined copied by ListFunction';
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            selectedFailures: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('selectedFailures', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            comment: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('comment'),
        });
    };
    CopyFailuresListComponent.prototype.ngOnChanges = function (changes) {
        this.resetForm();
    };
    CopyFailuresListComponent.prototype.cancel = function () {
        // TODO: home or back?
        this.router.navigate(['home']);
    };
    CopyFailuresListComponent.prototype.submit = function (event) {
        var _this = this;
        this.dialogShowHeader = false;
        this.dialogMessage = 'Operation in progress...';
        this.dialogShowProgress = true;
        this.showDialog = true;
        var formValues = this.form.value;
        this.dataService.copyFailures(formValues.selectedFailures, formValues.comment).subscribe(function (result) {
            _this.showDialog = false;
            _this.dialogShowProgress = false;
            _this.dialogShowHeader = true;
            _this.dialogHeaderTitle = 'Info';
            _this.dialogMessage = _this.selectedFailures.length + ' failure'
                + (_this.selectedFailures.length > 1 ? 's' : '') + ' successfully copied!';
            _this.showDialog = true;
            _this.filteredFailures = [];
            _this.selectedFailures = [];
            _this.resetForm();
        }, function (error) {
            _this.showDialog = false;
            _this.dialogShowProgress = false;
            _this.dialogShowHeader = true;
            _this.dialogHeaderTitle = 'Error';
            _this.dialogMessage = 'An error has occurred!';
            _this.showDialog = true;
        });
    };
    CopyFailuresListComponent.prototype.getAllFailures = function () {
        var _this = this;
        this.dataService
            .getItems([], '', '', null, null)
            .subscribe(function (result) { return _this.failures = result.data; });
    };
    CopyFailuresListComponent.prototype.filterFailures = function (str) {
        var _this = this;
        var upperStr = str.toUpperCase();
        this.filteredFailures = this.failures.filter(function (failure) { return (failure[_this.fieldMapper.fieldMap['name']].toUpperCase().indexOf(upperStr) >= 0
            || failure[_this.fieldMapper.fieldMap['id']].toString().indexOf(upperStr) >= 0); });
    };
    CopyFailuresListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-copy-failures-list',
            template: __webpack_require__("./src/app/pages/copy-failures-list/copy-failures-list.component.html"),
            styles: [__webpack_require__("./src/app/pages/copy-failures-list/copy-failures-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_failures_service__["a" /* FailuresService */],
            __WEBPACK_IMPORTED_MODULE_3__dao_failure_field_mapper__["a" /* FailureFieldMapper */]])
    ], CopyFailuresListComponent);
    return CopyFailuresListComponent;
}());



/***/ }),

/***/ "./src/app/pages/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"container\">\r\n\r\n    <h3>Create</h3>\r\n\r\n    <div>\r\n      <form [formGroup]=\"form\">\r\n\r\n        <div [formGroup]=\"form\" class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2\">\r\n              <label htmlFor=\"selectedProject\">Selected EDC Project</label>\r\n            </div>\r\n            <div class=\"col-10\">\r\n              <div class=\"primeng-form-control\">\r\n                <p-dropdown\r\n                  [options]=\"projectOptions\"\r\n                  formControlName=\"selectedProject\"\r\n                  [(ngModel)]=\"selectedProject\"\r\n                  [placeholder]=\"selectedProjectPlaceholder\"\r\n                  [style]=\"{'display': 'block', 'width': '100%'}\"\r\n                  (onChange)=\"selectedProjectChange($event)\"\r\n                >\r\n                </p-dropdown>\r\n              </div>\r\n              <input type=\"number\" hidden formControlName=\"selectedProjectId\" [(ngModel)]=\"selectedProjectId\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-12\">\r\n            <div [formGroup]=\"form\" class=\"form-group\">\r\n              <p-checkbox class=\"primeng-form-control\" formControlName=\"useA2L\" [(ngModel)]=\"useA2L\" binary=\"true\" (onChange)=\"useA2LChange($event)\"></p-checkbox>\r\n              <label htmlFor=\"useA2L\">A2L</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"useA2L\" [formGroup]=\"form\" class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2\">\r\n              <label htmlFor=\"selectedA2L\">Selected A2L File</label>\r\n            </div>\r\n            <div class=\"col-10\">\r\n              <div class=\"primeng-form-control\">\r\n                <p-fileUpload #fileSelectorA2L\r\n                  \r\n                  class=\"my-upload-button\"\r\n                  name=\"selectedA2L\"\r\n                  accept=\".a2l,/*\\.[a|A]2[l|L]$/\"\r\n                  chooseLabel=\"Browse\"\r\n                  [showUploadButton]=\"true\"\r\n                  cancelLabel=\"Clear\"\r\n                  (onSelect)=\"onFileChange($event, 'selectedA2L')\"\r\n                  (onClear)=\"onA2LFileClear($event)\"\r\n                  customUpload=\"true\"\r\n                  (uploadHandler)=\"uploadA2L($event)\"\r\n                >\r\n                  <ng-template let-file pTemplate=\"file\">\r\n                    <div>{{ file.name }} <i>({{ formatBytes(file.size) }})</i> <span *ngIf=\"a2lUploaded\" style=\"color: lightgreen;\">&#10004;</span></div>\r\n                  </ng-template>\r\n                </p-fileUpload>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div [formGroup]=\"form\" class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2\">\r\n              <label htmlFor=\"selectedHex\">Selected Dataset</label>\r\n            </div>\r\n            <div class=\"col-10\">\r\n              <div class=\"primeng-form-control\">\r\n                <p-fileUpload #fileSelectorHex\r\n                  \r\n                  class=\"my-upload-button\"\r\n                  name=\"selectedHex\"\r\n                  accept=\".hex,/*\\.[h|H][e|E][x|X]$/\"\r\n                  chooseLabel=\"Browse\"\r\n                  [showUploadButton]=\"true\"\r\n                  cancelLabel=\"Clear\"\r\n                  (onSelect)=\"onFileChange($event, 'selectedHex')\"\r\n                  (onClear)=\"onHexFileClear($event)\"\r\n                  customUpload=\"true\"\r\n                  (uploadHandler)=\"uploadHex($event)\"\r\n                >\r\n                  <ng-template let-file pTemplate=\"file\">\r\n                    <div>{{ file.name }} <i>({{ formatBytes(file.size) }})</i> <span *ngIf=\"hexUploaded\" style=\"color: lightgreen;\">&#10004;</span></div>\r\n                  </ng-template>\r\n                </p-fileUpload>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <div [formGroup]=\"form\" class=\"form-group\">\r\n              <p-checkbox class=\"primeng-form-control\" formControlName=\"skipDisabledFailures\" [(ngModel)]=\"skipDisabledFailures\" binary=\"true\"></p-checkbox>\r\n              <label htmlFor=\"skipDisabledFailures\">Don't list disabled failures</label>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-4\">\r\n            <div [formGroup]=\"form\" class=\"form-group\">\r\n              <label htmlFor=\"action\">DTC Display</label>\r\n              <div class=\"primeng-form-control\">\r\n                <div><p-radioButton class=\"radio-option\" formControlName=\"dtcDisplay\" [(ngModel)]=\"dtcDisplay\" name=\"action-group\" value=\"man\" label=\"DTC Manufac. spec.\"></p-radioButton></div>\r\n                <div><p-radioButton class=\"radio-option\" formControlName=\"dtcDisplay\" [(ngModel)]=\"dtcDisplay\" name=\"action-group\" value=\"sae\" label=\"DTC SAE (SPN - FMI)\"></p-radioButton></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-4\">\r\n            <div [formGroup]=\"form\" class=\"form-group\">\r\n              <p-checkbox class=\"primeng-form-control\" formControlName=\"reduceFidList\" [(ngModel)]=\"reduceFidList\" binary=\"true\" (onChange)=\"reduceFidListChange($event)\"></p-checkbox>\r\n              <label htmlFor=\"reduceFidList\">Reduce FId's list</label>\r\n            </div>\r\n\r\n            <div [formGroup]=\"form\" class=\"form-group\">\r\n              <div class=\"primeng-form-control\">\r\n                <label htmlFor=\"selectedCat\">Only FId's with 'Cat' &ge;</label>\r\n                <p-dropdown\r\n                  [options]=\"catOptions\"\r\n                  formControlName=\"selectedCat\"\r\n                  [(ngModel)]=\"selectedCat\"\r\n                  [style]=\"{ 'margin-top': '-0.3rem' }\"\r\n                  >\r\n                </p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div [formGroup]=\"form\" class=\"form-group\">\r\n          <p-checkbox class=\"primeng-form-control\" formControlName=\"compareLabels\" [(ngModel)]=\"compareLabels\" binary=\"true\"></p-checkbox>\r\n          <label htmlFor=\"compareLabels\">Compare monitoring labels with other dataset file</label>\r\n        </div>\r\n\r\n        <div *ngIf=\"compareLabels\" [formGroup]=\"form\" class=\"form-group\">\r\n          <div class=\"row\">\r\n            <div class=\"col-2\">\r\n              <label htmlFor=\"selectedHex\">Selected Dataset file for comparison</label>\r\n            </div>\r\n            <div class=\"col-10\">\r\n              <div class=\"primeng-form-control\">\r\n                <p-fileUpload #fileSelectorComparison\r\n                  \r\n                  class=\"my-upload-button\"\r\n                  name=\"selectedComparisonFile\"\r\n                  accept=\".csv,/*\\.[c|C][s|S][v|V]$/\"\r\n                  chooseLabel=\"Browse\"\r\n                  [showUploadButton]=\"false\"\r\n                  cancelLabel=\"Clear\"\r\n                  (onSelect)=\"onFileChange($event, 'selectedComparisonFile')\"\r\n                  customUpload=\"true\"\r\n                  (uploadHandler)=\"fileSelectorComparison.clear()\"\r\n                >\r\n                  <ng-template let-file pTemplate=\"file\">\r\n                    <div>{{ file.name }}</div>\r\n                  </ng-template>\r\n                </p-fileUpload>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div [formGroup]=\"form\" class=\"form-group\">\r\n          <p-checkbox class=\"primeng-form-control\" formControlName=\"skipPopups\" [(ngModel)]=\"skipPopups\" binary=\"true\"></p-checkbox>\r\n          <label htmlFor=\"skipPopups\">Don't show Pop-Up's</label>\r\n        </div>\r\n\r\n        <div>\r\n          <button type=\"button\" class=\"btn\" (click)=\"cancel()\">Cancel</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\" [disabled]=\"!a2lUploaded || !hexUploaded\">Ok</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showResultsDialog=true\" [disabled]=\"!parsingCompleted\">View results</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showWarningsDialog=true\" [disabled]=\"!parsingCompleted\">View warnings</button>\r\n        </div>\r\n\r\n      </form>\r\n\r\n      <p-confirmDialog></p-confirmDialog>\r\n\r\n      <p-dialog\r\n        [header]=\"dialogHeaderTitle\"\r\n        [showHeader]=\"dialogShowHeader\"\r\n        [(visible)]=\"showDialog\"\r\n        modal=\"true\"\r\n        [responsive]=\"true\"\r\n        [closable]=\"dialogHeaderClose\"\r\n      >\r\n        <span>{{ dialogMessage }}</span>\r\n        <div *ngIf=\"dialogShowProgress\" style=\"text-align: center; padding-top: 1rem;\">\r\n          <p-progressSpinner></p-progressSpinner>\r\n          <span *ngIf=\"dialogShowProgressPercentage\" style=\"display: block; text-align: center; font-weight: bold; margin-top: -64px; margin-bottom: 50px;\">{{ uploadPercentage }}%</span>\r\n        </div>\r\n        <p-footer *ngIf=\"!dialogShowProgress\">\r\n          <button type=\"button\" pButton icon=\"fa-close\" (click)=\"showDialog=false\" label=\"Close\"></button>\r\n        </p-footer>\r\n      </p-dialog>\r\n    \r\n    </div>\r\n\r\n    <app-results\r\n      [visibleIn]=\"showResultsDialog\"\r\n      (visibleOut)=\"showResultsDialog=$event\"\r\n      [a2lFailureDetails]=\"a2lFailureDetails\"\r\n      [panelTitle]=\"{'a2l': uploadedA2lFileName, 'hex': uploadedHexFileName}\">\r\n    </app-results>\r\n\r\n    <app-warnings\r\n      [visibleIn]=\"showWarningsDialog\"\r\n      (visibleOut)=\"showWarningsDialog=$event\"\r\n      [a2lWarnings]=\"a2lWarnings\"\r\n      [panelTitle]=\"{'a2l': uploadedA2lFileName, 'hex': uploadedHexFileName}\">\r\n    </app-warnings>\r\n\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/create/create.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_project_field_mapper__ = __webpack_require__("./src/app/dao/project-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_projects_service__ = __webpack_require__("./src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_upload_service__ = __webpack_require__("./src/app/services/upload.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dao_a2l_failure_detail_field_mapper__ = __webpack_require__("./src/app/dao/a2l-failure-detail-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dao_a2l_parsing_result_field_mapper__ = __webpack_require__("./src/app/dao/a2l-parsing-result-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CreateComponent = /** @class */ (function () {
    function CreateComponent(router, projectDataService, projectFieldMapper, uploadService, a2lFailureDetailFieldMapper, a2lParsingResultFieldMapper) {
        this.router = router;
        this.projectDataService = projectDataService;
        this.projectFieldMapper = projectFieldMapper;
        this.uploadService = uploadService;
        this.a2lFailureDetailFieldMapper = a2lFailureDetailFieldMapper;
        this.a2lParsingResultFieldMapper = a2lParsingResultFieldMapper;
        this.disableSelectedProject = true;
        this.useA2L = true;
        this.skipDisabledFailures = false;
        this.uploadPercentage = 0;
        this.a2lUploaded = false;
        this.hexUploaded = false;
        // LEGACY CODE (MD1 version)
        //
        // If datReaderDSMstr.GetValue(0) = 1 Then             // APPLIC
        //     RadBtnDTCM.Checked = True
        // Else
        //     RadBtnDTCSAE.Checked = True
        // End If
        // If datReaderDSMstr.GetValue(1) = 2 Then             // DTCstruct
        //     GrDTCview.Enabled = False
        // Else
        //     GrDTCview.Enabled = True
        // End If
        this.dtcDisplay = 'sae'; // TODO: get this value from the selected project
        this.reduceFidList = false;
        this.selectedCat = 0;
        this.catOptions = [
            { value: 0, label: 'Cat 0' },
            { value: 1, label: 'Cat 1' },
            { value: 2, label: 'Cat 2' },
        ];
        this.compareLabels = false;
        this.skipPopups = true; // does it make sense to have this here???
        this.showDialog = false;
        this.dialogShowHeader = true;
        this.dialogHeaderClose = false;
        this.dialogShowProgress = false;
        this.dialogShowProgressPercentage = false;
        this.parsingCompleted = false;
        this.csv = '';
        this.csvCompleted = false;
        this.showResultsDialog = false;
        this.a2lFailureDetails = [];
        this.showWarningsDialog = false;
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.setProjectOptions();
        this.resetForm();
    };
    CreateComponent.prototype.resetForm = function () {
        this.selectedProjectPlaceholder = 'Please select an A2L file first...';
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            selectedProject: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: 'selectedProject', disabled: true }),
            selectedProjectId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('selectedProjectId'),
            useA2L: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('useA2L'),
            selectedA2L: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.selectedA2L),
            selectedHex: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.selectedHex),
            skipDisabledFailures: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('skipDisabledFailures'),
            dtcDisplay: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: 'dtcDisplay', disabled: true }),
            compareLabels: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('compareLabels'),
            reduceFidList: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('reduceFidList'),
            selectedCat: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: 'selectedCat', disabled: true }),
            selectedComparisonFile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.selectedComparisonFile),
            skipPopups: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('skipPopups'),
        });
    };
    CreateComponent.prototype.selectedProjectChange = function (event) {
        if (event.value > 0) {
            this.selectedProjectId = event.value;
            this.setDtcByProjectId(event.value);
        }
    };
    CreateComponent.prototype.setDtcByProjectId = function (projectId) {
        if (projectId > 0) {
            // TODO: check if the project's DTCstruct == 2, if so, disable the control
            // and check also if the project's Applic == 1, if so, check 'manufac', otherwise check 'sae'
            this.form.controls['dtcDisplay'].enable();
        }
        else {
            this.form.controls['dtcDisplay'].disable();
        }
    };
    CreateComponent.prototype.onFileChange = function (event, whichFile) {
        if (event.files.length > 0) {
            this.form.get(whichFile).setValue(event.files[0]);
            if (whichFile === 'selectedA2L') {
                this.resetSelectedA2lVars();
                this.a2lFileChange(event.files[0]);
            }
            else {
                this.resetSelectedHexVars();
            }
        }
    };
    CreateComponent.prototype.resetSelectedA2lVars = function () {
        this.a2lUploaded = false;
        this.a2lServerPath = null;
    };
    CreateComponent.prototype.resetSelectedHexVars = function () {
        this.hexUploaded = false;
        this.hexServerPath = null;
    };
    CreateComponent.prototype.onA2LFileClear = function (event) {
        this.selectedProject = this.selectedProjectId = null;
        this.selectedProjectPlaceholder = 'Please select an A2L file first...';
        this.setDtcByProjectId(0);
        this.form.controls['selectedProject'].disable();
        this.resetSelectedA2lVars();
    };
    CreateComponent.prototype.onHexFileClear = function (event) {
        this.resetSelectedHexVars();
    };
    CreateComponent.prototype.a2lFileChange = function (file) {
        var _this = this;
        if (file) {
            var fileReader_1 = new FileReader();
            fileReader_1.onload = function (e) {
                var projectIdentifier = _this.getProjectAndVersionFromA2lFile(fileReader_1.result.toString());
                if (_this.projectIdentifiers[projectIdentifier]) {
                    _this.selectedProject = _this.selectedProjectId = _this.projectIdentifiers[projectIdentifier].id;
                    _this.setDtcByProjectId(_this.projectIdentifiers[projectIdentifier].id);
                    _this.form.controls['selectedProject'].disable();
                }
                else if (_this.projectIdentifiers[projectIdentifier.slice(-1) + 'x']) {
                    _this.selectedProject = _this.selectedProjectId = _this.projectIdentifiers[projectIdentifier.slice(-1) + 'x'].id;
                    _this.setDtcByProjectId(_this.projectIdentifiers[projectIdentifier.slice(-1) + 'x'].id);
                    _this.form.controls['selectedProject'].disable();
                }
                else {
                    _this.dialogShowHeader = true;
                    _this.dialogMessage = 'Automatic project selection was not successful! Please select the correct project manualy.';
                    _this.dialogShowProgress = false;
                    _this.dialogShowProgressPercentage = false;
                    _this.showDialog = true;
                    _this.selectedProject = _this.selectedProjectId = null;
                    _this.selectedProjectPlaceholder = 'Please select the correct project...';
                    _this.setDtcByProjectId(0);
                    _this.form.controls['selectedProject'].enable();
                }
            };
            fileReader_1.readAsText(file);
        }
    };
    CreateComponent.prototype.formatBytes = function (bytes, decimals) {
        if (bytes === 0) {
            return '0 Bytes';
        }
        var k = 1024;
        var dm = decimals || 2;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    CreateComponent.prototype.uploadA2L = function (event) {
        var _this = this;
        if (this.a2lUploaded) {
            this.showUploadPrevented();
            return;
        }
        this.dialogShowHeader = true;
        this.dialogHeaderClose = false;
        this.dialogHeaderTitle = 'Operation in progress';
        this.dialogMessage = 'Uploading Selected A2L file to server...';
        this.dialogShowProgress = true;
        this.dialogShowProgressPercentage = true;
        this.showDialog = true;
        var formData = new FormData();
        formData.append('file', this.form.value.selectedA2L);
        this.uploadPercentage = 0;
        this.uploadService.uploadA2L(formData).subscribe(function (result) {
            if (result.type === __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                _this.uploadPercentage = Math.round(100 * result.loaded / result.total);
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["f" /* HttpResponse */]) {
                if (result.body.isStoredSuccessfully) {
                    _this.a2lUploaded = true;
                    _this.a2lServerPath = result.body.path;
                    _this.uploadedA2lFileName = _this.form.value.selectedA2L.name;
                }
                else {
                    _this.showFileStoringError();
                }
            }
        }, function (error) {
            _this.showFileStoringError();
            console.log(error);
        }, function () {
            _this.showDialog = false;
            _this.uploadPercentage = 0;
        });
    };
    CreateComponent.prototype.uploadHex = function (event) {
        var _this = this;
        if (this.hexUploaded) {
            this.showUploadPrevented();
            return;
        }
        this.dialogShowHeader = true;
        this.dialogHeaderClose = false;
        this.dialogHeaderTitle = 'Operation in progress';
        this.dialogMessage = 'Uploading Selected Hex file to server...';
        this.dialogShowProgress = true;
        this.dialogShowProgressPercentage = true;
        this.showDialog = true;
        var formData = new FormData();
        formData.append('file', this.form.value.selectedHex);
        this.uploadPercentage = 0;
        this.uploadService.uploadHex(formData).subscribe(function (result) {
            if (result.type === __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                _this.uploadPercentage = Math.round(100 * result.loaded / result.total);
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["f" /* HttpResponse */]) {
                if (result.body.isStoredSuccessfully) {
                    _this.hexUploaded = true;
                    _this.hexServerPath = result.body.path;
                    _this.uploadedHexFileName = _this.form.value.selectedHex.name;
                }
                else {
                    _this.showFileStoringError();
                }
            }
        }, function (error) {
            _this.showFileStoringError();
            console.log(error);
        }, function () {
            _this.showDialog = false;
            _this.uploadPercentage = 0;
        });
    };
    CreateComponent.prototype.useA2LChange = function (useA2L) {
        if (useA2L) {
            this.form.controls['selectedA2L'].enable();
        }
        else {
            this.form.controls['selectedA2L'].disable();
        }
    };
    CreateComponent.prototype.reduceFidListChange = function (reduceFidList) {
        if (reduceFidList) {
            this.form.controls['selectedCat'].enable();
            this.dialogShowHeader = true;
            this.dialogHeaderClose = true;
            this.dialogHeaderTitle = 'Warning';
            this.dialogMessage = 'ATTENTION: Your output file will have a reduced FId List. This can cause incomplete information!';
            this.dialogShowProgress = false;
            this.dialogShowProgressPercentage = false;
            this.showDialog = true;
        }
        else {
            this.form.controls['selectedCat'].disable();
        }
    };
    CreateComponent.prototype.cancel = function () {
        this.router.navigate(['home']);
    };
    CreateComponent.prototype.save = function () {
        // const formData = new FormData();
        // formData.append('projectId', this.selectedProjectId.toString());
        // formData.append('pathA2l', this.a2lServerPath);
        // formData.append('pathHex', this.hexServerPath);
        var _this = this;
        // formData.append('useA2L', this.form.value.useA2L);
        // formData.append('fileA2L', this.form.value.selectedA2L);
        // formData.append('fileHex', this.form.value.selectedHex);
        // formData.append('skipDisabledFailures', this.form.value.skipDisabledFailures);
        // formData.append('dtcDisplay', this.form.value.dtcDisplay);
        // formData.append('reduceFidList', this.form.value.reduceFidList);
        // formData.append('selectedCat', this.form.value.selectedCat);
        // formData.append('compareLabels', this.form.value.compareLabels);
        // formData.append('fileComparison', this.form.value.selectedComparisonFile);
        // formData.append('skipPopups', this.form.value.skipPopups);
        if (this.selectedProjectId === null) {
            this.dialogShowHeader = true;
            this.dialogHeaderTitle = 'Information';
            this.dialogMessage = 'Selected EDC Project cannot be empty! Please select one.';
            this.dialogShowProgress = false;
            this.dialogShowProgressPercentage = false;
            this.showDialog = true;
            return;
        }
        var requestData = {
            ProjectId: this.selectedProjectId.toString(),
            PathA2l: this.a2lServerPath,
            PathHex: this.hexServerPath,
        };
        this.dialogShowHeader = true;
        this.dialogHeaderClose = false;
        this.dialogHeaderTitle = 'Operation in progress';
        this.dialogMessage = 'Server is parsing the information from the uploaded files...';
        this.dialogShowProgress = true;
        this.dialogShowProgressPercentage = false;
        this.showDialog = true;
        this.uploadService.parseUploadedFiles(requestData).subscribe(function (result) {
            // console.log(result);
            _this.a2lWarnings = result.fnrWarnings;
            // console.log(this.a2lWarnings);
            _this.a2lFailureDetails = result.fnrData.map(function (item) {
                var detail = item.fnrFailureDetail;
                return {
                    name: detail[_this.a2lFailureDetailFieldMapper.fieldMap.name],
                    title: detail[_this.a2lFailureDetailFieldMapper.fieldMap.title],
                    dtc: detail[_this.a2lFailureDetailFieldMapper.fieldMap.dtc],
                    component: detail[_this.a2lFailureDetailFieldMapper.fieldMap.component],
                    obdSystem: detail[_this.a2lFailureDetailFieldMapper.fieldMap.obdSystem],
                    obdCode: detail[_this.a2lFailureDetailFieldMapper.fieldMap.obdCode],
                    disabled: detail[_this.a2lFailureDetailFieldMapper.fieldMap.disabled],
                    errorClass: detail[_this.a2lFailureDetailFieldMapper.fieldMap.errorClass],
                    priority: detail[_this.a2lFailureDetailFieldMapper.fieldMap.priority],
                    visibleScanTool: detail[_this.a2lFailureDetailFieldMapper.fieldMap.visibleScanTool],
                    longTermFailure: detail[_this.a2lFailureDetailFieldMapper.fieldMap.longTermFailure],
                    perfLim: detail[_this.a2lFailureDetailFieldMapper.fieldMap.perfLim],
                    systemLamp: detail[_this.a2lFailureDetailFieldMapper.fieldMap.systemLamp],
                    systemLampActivation: detail[_this.a2lFailureDetailFieldMapper.fieldMap.systemLampActivation],
                    systemLampDeactivation: detail[_this.a2lFailureDetailFieldMapper.fieldMap.systemLampDeactivation],
                    mil: detail[_this.a2lFailureDetailFieldMapper.fieldMap.mil],
                    validationMil: detail[_this.a2lFailureDetailFieldMapper.fieldMap.validationMil],
                    healingMil: detail[_this.a2lFailureDetailFieldMapper.fieldMap.healingMil],
                    dtcErasingFromMemory: detail[_this.a2lFailureDetailFieldMapper.fieldMap.dtcErasingFromMemory],
                    dtcErasingPending: detail[_this.a2lFailureDetailFieldMapper.fieldMap.dtcErasingPending],
                    dtcErasingPendingHealed: detail[_this.a2lFailureDetailFieldMapper.fieldMap.dtcErasingPendingHealed],
                    classification: detail[_this.a2lFailureDetailFieldMapper.fieldMap.classification],
                    resetBehaviour: detail[_this.a2lFailureDetailFieldMapper.fieldMap.resetBehaviour],
                    resetAfterrun: detail[_this.a2lFailureDetailFieldMapper.fieldMap.resetAfterrun],
                    faultStorage: detail[_this.a2lFailureDetailFieldMapper.fieldMap.faultStorage],
                    debouncingWhileTesterPresent: detail[_this.a2lFailureDetailFieldMapper.fieldMap.debouncingWhileTesterPresent],
                    disableBehaviour: detail[_this.a2lFailureDetailFieldMapper.fieldMap.disableBehaviour],
                    generalRemarks: detail[_this.a2lFailureDetailFieldMapper.fieldMap.generalRemarks],
                    testConditon: detail[_this.a2lFailureDetailFieldMapper.fieldMap.testConditon],
                    faultDetection: detail[_this.a2lFailureDetailFieldMapper.fieldMap.faultDetection],
                    defectDebouncing: detail[_this.a2lFailureDetailFieldMapper.fieldMap.defectDebouncing],
                    faultHealing: detail[_this.a2lFailureDetailFieldMapper.fieldMap.faultHealing],
                    healingDebouncing: detail[_this.a2lFailureDetailFieldMapper.fieldMap.healingDebouncing],
                    systemReaction: detail[_this.a2lFailureDetailFieldMapper.fieldMap.systemReaction],
                    faultDisabling: detail[_this.a2lFailureDetailFieldMapper.fieldMap.faultDisabling],
                    fidCalibrations: detail[_this.a2lFailureDetailFieldMapper.fieldMap.fidCalibrations],
                    failureCause: detail[_this.a2lFailureDetailFieldMapper.fieldMap.failureCause],
                    failureRepair: detail[_this.a2lFailureDetailFieldMapper.fieldMap.failureRepair],
                    ambientConditions: item[_this.a2lParsingResultFieldMapper.fieldMap.ambientConditions],
                };
            });
            _this.parsingCompleted = true;
            _this.showDialog = false;
            _this.showResultsDialog = true;
            _this.showWarningsDialog = true;
        }, function (error) {
            console.log(error);
            _this.showDialog = false;
            _this.dialogShowHeader = true;
            _this.dialogHeaderClose = true;
            _this.dialogHeaderTitle = 'Error';
            _this.dialogMessage = 'There was an error parsing the files!';
            _this.dialogShowProgress = false;
            _this.dialogShowProgressPercentage = false;
            _this.showDialog = true;
        });
    };
    CreateComponent.prototype.showFileStoringError = function () {
        this.dialogShowHeader = true;
        this.dialogHeaderClose = true;
        this.dialogHeaderTitle = 'Error';
        this.dialogMessage = 'There was an error storing the file on server! Please re-upload it!';
        this.dialogShowProgress = false;
        this.dialogShowProgressPercentage = false;
        this.showDialog = true;
    };
    CreateComponent.prototype.showUploadPrevented = function () {
        this.dialogShowHeader = true;
        this.dialogHeaderClose = true;
        this.dialogHeaderTitle = 'Information';
        this.dialogMessage = 'This file has already been uploaded!';
        this.dialogShowProgress = false;
        this.dialogShowProgressPercentage = false;
        this.showDialog = true;
    };
    CreateComponent.prototype.getProjectAndVersionFromA2lFile = function (fileContent) {
        var projectTitle = '';
        var projectVersion = '';
        var fileLines = fileContent.split(/[\r\n]+/g);
        // the following logic was extracted from the legacy tool source code (MD1 version)
        // we'll be looking for two lines to extract the project's "project" and "version" fields
        // line example to extract project: /begin PROJECT P_662 "EDC17CV41"
        // line example to extract version: VERSION "P_662_EDC17CV41_H12"
        for (var _i = 0, fileLines_1 = fileLines; _i < fileLines_1.length; _i++) {
            var line = fileLines_1[_i];
            line = line.trim();
            if (projectTitle.length === 0 && line.startsWith('/begin PROJECT')) {
                projectTitle = this.getProjectFromA2lLine(line);
                // skip the remaining lines if projectVersion has already been extracted
                if (projectVersion.length > 0) {
                    break;
                }
            }
            else if (projectVersion.length === 0 && line.startsWith('VERSION')) {
                if (line.indexOf('P1738') > -1) {
                    projectTitle = 'P1738V';
                }
                projectVersion = this.getVersionFromA2lLine(line);
                // skip the remaining lines if projectTitle has already been extracted
                if (projectTitle.length > 0) {
                    break;
                }
            }
        }
        var result = projectTitle.concat(projectVersion);
        if (result.indexOf('VV') > -1) {
            result = result.replace('VV', 'V') + '0';
        }
        return result;
    };
    CreateComponent.prototype.getProjectFromA2lLine = function (line) {
        var projectTitle = line.split(' ')[2].replace('_', '') + 'V';
        if (projectTitle.length > 5) {
            projectTitle = projectTitle.substr(0, 5) + 'V';
        }
        return projectTitle;
    };
    CreateComponent.prototype.getVersionFromA2lLine = function (line) {
        var projectVersion = '';
        var versionParts = line.split('_');
        for (var _i = 0, versionParts_1 = versionParts; _i < versionParts_1.length; _i++) {
            var versionPart = versionParts_1[_i];
            if (versionPart.length < 6) {
                projectVersion += versionPart;
            }
        }
        return projectVersion.replace('"', '').slice(-3);
    };
    CreateComponent.prototype.setProjectOptions = function () {
        var _this = this;
        this.projectOptions = [];
        this.projectIdentifiers = [];
        this.projectDataService
            .getItems([], this.projectFieldMapper.fieldMap.name, 'asc', null, null)
            .subscribe(function (result) {
            result.data.map(function (project) {
                _this.projectOptions.push({ value: project.id, label: project.name });
                _this.projectIdentifiers[project.project + project.version.substr(0, 4)] = project;
            });
        });
    };
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create',
            template: __webpack_require__("./src/app/pages/create/create.component.html"),
            styles: [__webpack_require__("./src/app/pages/create/create.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_4__dao_project_field_mapper__["a" /* ProjectFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */],
            __WEBPACK_IMPORTED_MODULE_7__dao_a2l_failure_detail_field_mapper__["a" /* A2lFailureDetailFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_8__dao_a2l_parsing_result_field_mapper__["a" /* A2lParsingResultFieldMapper */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/pages/create/result-details/result-details.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog \r\n  [header]=\"'[' + panelTitle.a2l + ' -- ' + panelTitle.hex + ' -- ' + failureDetail?.name + ']'\"\r\n  [(visible)]=\"visibleIn\"\r\n  modal=\"modal\"\r\n  [responsive]=\"true\"\r\n  [autoAlign]=\"true\"\r\n  [positionTop]=\"46\"\r\n  [contentStyle]=\"{'width':'99vw', 'max-height':'77.5vh'}\"\r\n  [closeOnEscape]=\"false\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"false\"\r\n>\r\n\r\n  <div style=\"font-size: smaller;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-4\">\r\n        <label for=\"name\">Name</label>\r\n        <input class=\"form-control\" id=\"name\" type=\"text\" pInputText [value]=\"failureDetail?.name || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <label for=\"title\">Title</label>\r\n        <textarea class=\"form-control\" id=\"title\" pInputTextarea [value]=\"failureDetail?.title || ''\" disabled=true [rows]=\"2\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label for=\"dtc\">DTC</label>\r\n        <input class=\"form-control\" id=\"dtc\" type=\"text\" pInputText [value]=\"failureDetail?.dtc || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <label for=\"component\">Component</label>\r\n        <input class=\"form-control\" id=\"component\" type=\"text\" pInputText [value]=\"failureDetail?.component || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <label for=\"obd-system\">OBD System</label>\r\n        <input class=\"form-control\" id=\"obd-system\" type=\"text\" pInputText [value]=\"failureDetail?.obdSystem || ''\" disabled=true>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-11\">\r\n        <label for=\"obd-code\">OBDCode</label>\r\n        <textarea class=\"form-control\" id=\"obd-code\" pInputTextarea [value]=\"failureDetail?.obdCode || ''\" disabled=true [rows]=\"2\"></textarea>\r\n      </div>\r\n      <div class=\"col-1\" style=\"text-align: center;\">\r\n        <label for=\"component\">Disabled</label>\r\n        <div><p-checkbox binary=\"true\" [ngModel]=\"failureDetail?.disabled\" disabled=true></p-checkbox></div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label for=\"error-class\">Error Class</label>\r\n        <input class=\"form-control\" id=\"error-class\" type=\"text\" pInputText [value]=\"failureDetail?.errorClass || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <label for=\"priority\">Priority</label>\r\n        <input class=\"form-control\" id=\"priority\" type=\"text\" pInputText [value]=\"failureDetail?.priority || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <label for=\"visible-scan-tool\">Visible OBD scan tool</label>\r\n        <input class=\"form-control\" id=\"visible-obd\" type=\"text\" pInputText [value]=\"failureDetail?.visibleScanTool || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <label for=\"long-term-failure\">Long Term Failure</label>\r\n        <input class=\"form-control\" id=\"long-term-failure\" type=\"text\" pInputText [value]=\"failureDetail?.longTermFailure || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <label for=\"perf-lim\">Performance Limitation</label>\r\n        <input class=\"form-control\" id=\"perf-lim\" type=\"text\" pInputText [value]=\"failureDetail?.perfLim || ''\" disabled=true>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label for=\"system-lamp\">System Lamp</label>\r\n        <input class=\"form-control\" id=\"system-lamp\" type=\"text\" pInputText [value]=\"failureDetail?.systemLamp || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-5\">\r\n        <label for=\"system-lamp-activation\">System Lamp Activation</label>\r\n        <textarea class=\"form-control\" id=\"system-lamp-activation\" pInputTextarea [value]=\"failureDetail?.systemLampActivation || ''\" disabled=true [rows]=\"2\"></textarea>\r\n      </div>\r\n      <div class=\"col-5\">\r\n        <label for=\"system-lamp-deactivation\">System Lamp Deactivation</label>\r\n        <textarea class=\"form-control\" id=\"system-lamp-deactivation\" pInputTextarea [value]=\"failureDetail?.systemLampDeactivation || ''\" disabled=true [rows]=\"2\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label for=\"mil\">MIL</label>\r\n        <input class=\"form-control\" id=\"mil\" type=\"text\" pInputText [value]=\"failureDetail?.mil || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-5\">\r\n        <label for=\"validation-pending\">Validation, pending -> confirmed (MIL on)</label>\r\n        <textarea class=\"form-control\" id=\"validation-pending\" pInputTextarea [value]=\"failureDetail?.validationMil || ''\" disabled=true [rows]=\"2\"></textarea>\r\n      </div>\r\n      <div class=\"col-5\">\r\n        <label for=\"healing\">Healing (MIL off)</label>\r\n        <textarea class=\"form-control\" id=\"healing\" pInputTextarea [value]=\"failureDetail?.healingMil || ''\" disabled=true [rows]=\"2\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-4\">\r\n        <label for=\"dtc-erasing-from-memory\">DTC Erasing from Memory</label>\r\n        <textarea class=\"form-control\" id=\"dtc-erasing-from-memory\" pInputTextarea [value]=\"failureDetail?.dtcErasingFromMemory || ''\" disabled=true [rows]=\"2\"></textarea>\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <label for=\"dtc-erasing-pending\">DTC Erasing pending, if no more tested</label>\r\n        <textarea class=\"form-control\" id=\"dtc-erasing-pending\" pInputTextarea [value]=\"failureDetail?.dtcErasingPending || ''\" disabled=true [rows]=\"2\"></textarea>\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <label for=\"dtc-erasing-pending-healed\">DTC Erasing pending healed</label>\r\n        <textarea class=\"form-control\" id=\"dtc-erasing-pending-healed\" pInputTextarea [value]=\"failureDetail?.dtcErasingPendingHealed || ''\" disabled=true [rows]=\"2\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label for=\"classification\">Classification (Fault/Event)</label>\r\n        <input class=\"form-control\" id=\"classification\" type=\"text\" pInputText [value]=\"failureDetail?.classification || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <label for=\"reset-behaviour\">Reset Behaviour</label>\r\n        <input class=\"form-control\" id=\"reset-behaviour\" type=\"text\" pInputText [value]=\"failureDetail?.resetBehaviour || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-5\">\r\n        <label for=\"reset-afterrun\">Reset On Afterrun</label>\r\n        <input class=\"form-control\" id=\"reset-afterrun\" type=\"text\" pInputText [value]=\"failureDetail?.resetAfterrun || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <label for=\"fault-storage\">Fault Storage</label>\r\n        <input class=\"form-control\" id=\"mil\" type=\"text\" pInputText [value]=\"failureDetail?.faultStorage || ''\" disabled=true>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <label for=\"debouncing-while-tester-present\">Debouncing While Tester Present</label>\r\n        <input class=\"form-control\" id=\"debouncing-while-tester-present\" type=\"text\" pInputText [value]=\"failureDetail?.debouncingWhileTesterPresent || ''\" disabled=true>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <label for=\"disable-behaviour\">Disable Behaviour</label>\r\n        <input class=\"form-control\" id=\"disable-behaviour\" type=\"text\" pInputText [value]=\"failureDetail?.disableBehaviour || ''\" disabled=true>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <label for=\"general-remarks\">General Remarks</label>\r\n        <textarea class=\"form-control\" id=\"general-remarks\" pInputTextarea [value]=\"failureDetail?.generalRemarks || ''\" disabled=true [rows]=\"3\"></textarea>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <label for=\"test-condition\">Test Condition</label>\r\n        <textarea class=\"form-control\" id=\"test-condition\" pInputTextarea [value]=\"failureDetail?.testCondition || ''\" disabled=true [rows]=\"3\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <label for=\"fault-detection\">Fault Detection</label>\r\n        <textarea class=\"form-control\" id=\"fault-detection\" pInputTextarea [value]=\"failureDetail?.faultDetection || ''\" disabled=true [rows]=\"3\"></textarea>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <label for=\"defect-debouncing\">Defect Debouncing</label>\r\n        <textarea class=\"form-control\" id=\"defect-debouncing\" pInputTextarea [value]=\"failureDetail?.defectDebouncing || ''\" disabled=true [rows]=\"3\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <label for=\"fault-healing\">Fault Healing</label>\r\n        <textarea class=\"form-control\" id=\"fault-healing\" pInputTextarea [value]=\"failureDetail?.faultHealing || ''\" disabled=true [rows]=\"3\"></textarea>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <label for=\"healing-debouncing\">Healing Debouncing</label>\r\n        <textarea class=\"form-control\" id=\"healing-debouncing\" pInputTextarea [value]=\"failureDetail?.healingDebouncing || ''\" disabled=true [rows]=\"3\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <label for=\"system-reaction\">System Reaction (general)</label>\r\n        <textarea class=\"form-control\" id=\"system-reaction\" pInputTextarea [value]=\"failureDetail?.systemReaction || ''\" disabled=true [rows]=\"3\"></textarea>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <label for=\"fault-disabling\">Fault Disabling</label>\r\n        <textarea class=\"form-control\" id=\"fault-disabling\" pInputTextarea [value]=\"failureDetail?.faultDisabling || ''\" disabled=true [rows]=\"3\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <label for=\"system-reaction-fid\">System Reaction by calibration (via FID)</label>\r\n        <p-table\r\n          [columns]=\"systemReactionColumns\"\r\n          [value]=\"failureDetail?.fidCalibrations\"\r\n          [scrollable]=\"true\" scrollHeight=\"140px\"\r\n          [resizableColumns]=\"true\"\r\n        >\r\n\r\n          <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n              <col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\r\n            </colgroup>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n              <th *ngFor=\"let col of columns\" pResizableColumn [pSortableColumn]=\"col.field\">\r\n                {{col.header}}\r\n                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n            <tr>\r\n              <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\r\n                {{item[col.field]}}\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"emptymessage\" let-columns>\r\n            <tr>\r\n              <td [attr.colspan]=\"columns.length\">\r\n                No records found\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n\r\n        </p-table>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <label for=\"failure-cause\">Failure Cause</label>\r\n        <textarea class=\"form-control\" id=\"failure-cause\" pInputTextarea [value]=\"failureDetail?.failureCause || ''\" disabled=true [rows]=\"3\"></textarea>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <label for=\"failure-repair\">Failure Repair</label>\r\n        <textarea class=\"form-control\" id=\"failure-repair\" pInputTextarea [value]=\"failureDetail?.failureRepair || ''\" disabled=true [rows]=\"3\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- AMBIENT CONDITIONS -->\r\n    <div class=\"row\">\r\n      <div class=\"col-12\">\r\n        <label for=\"ambient-conditions\">Ambient Conditions (only for Service Tester. Values for each failure for 1st and last occurrence)</label>\r\n        <p-table\r\n          [columns]=\"ambientConditionsColumns\"\r\n          [value]=\"failureDetail?.ambientConditions\"\r\n          [scrollable]=\"true\" scrollHeight=\"140px\"\r\n          [resizableColumns]=\"true\"\r\n        >\r\n\r\n          <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n              <col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\r\n            </colgroup>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"header\" let-columns>\r\n            <tr>\r\n              <th *ngFor=\"let col of columns\" pResizableColumn [pSortableColumn]=\"col.field\">\r\n                {{col.header}}\r\n                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n            <tr>\r\n              <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\r\n                {{item[col.field]}}\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"emptymessage\" let-columns>\r\n            <tr>\r\n              <td [attr.colspan]=\"columns.length\">\r\n                No records found\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n\r\n        </p-table>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"close()\" label=\"Close\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/create/result-details/result-details.component.scss":
/***/ (function(module, exports) {

module.exports = "div.row {\n  padding-bottom: 1rem; }\n  div.row label {\n    margin-bottom: 0.25rem; }\n"

/***/ }),

/***/ "./src/app/pages/create/result-details/result-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dao_a2l_failure_detail__ = __webpack_require__("./src/app/dao/a2l-failure-detail.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultDetailsComponent = /** @class */ (function () {
    function ResultDetailsComponent() {
        this.visibleIn = false;
        this.visibleOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.systemReactionColumns = [
            { header: 'Name', field: 'fnrFidCalibrationName', width: '25%' },
            { header: 'Description', field: 'fnrFidCalibrationDescription' },
        ];
        this.ambientConditionsColumns = [
            { header: 'Name', field: 'fnrAmbientConditionName', width: '25%' },
            { header: 'Description', field: 'fnrAmbientConditionDescription', width: '30%' },
            { header: 'Troubleshooting Advice', field: 'fnrAmbientConditionTroubleshootingAdvice' },
        ];
    }
    ResultDetailsComponent.prototype.close = function () {
        this.visibleIn = false;
        this.visibleOut.emit(false);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ResultDetailsComponent.prototype, "visibleIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__dao_a2l_failure_detail__["a" /* A2lFailureDetail */])
    ], ResultDetailsComponent.prototype, "failureDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ResultDetailsComponent.prototype, "panelTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ResultDetailsComponent.prototype, "visibleOut", void 0);
    ResultDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result-details',
            template: __webpack_require__("./src/app/pages/create/result-details/result-details.component.html"),
            styles: [__webpack_require__("./src/app/pages/create/result-details/result-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultDetailsComponent);
    return ResultDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/create/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog \r\n  [header]=\"'[' + panelTitle.a2l + ' -- ' + panelTitle.hex + ']'\"\r\n  [(visible)]=\"visibleIn\"\r\n  modal=\"modal\"\r\n  [responsive]=\"true\"\r\n  [autoAlign]=\"true\"\r\n  [positionTop]=\"46\"\r\n  [contentStyle]=\"{'width':'99vw', 'max-height':'77.5vh'}\"\r\n  [closeOnEscape]=\"false\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"false\"\r\n>\r\n\r\n  <div style=\"font-size: smaller;\">\r\n    <p-table #tt\r\n      [columns]=\"cols\"\r\n      [value]=\"a2lFailureDetails\"\r\n      [loading]=\"loading\"\r\n      paginator=true [rows]=\"50\" [totalRecords]=\"a2lFailureDetails?.length\" [rowsPerPageOptions]=\"[50, 100, 500, 1000]\"\r\n      selectionMode=\"single\" [(selection)]=\"selectedRow\" (onRowUnselect)=\"cancelRowUnselect($event)\"\r\n      [scrollable]=\"true\" scrollHeight=\"41vh\"\r\n      [resizableColumns]=\"true\"\r\n    >\r\n\r\n      <ng-template pTemplate=\"colgroup\" let-columns>\r\n        <colgroup>\r\n          <col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr *ngIf=\"a2lFailureDetails?.length > 0\">\r\n          <td [attr.colspan]=\"columns.length\" style=\"font-size: small;\">\r\n            <button pButton type=\"button\" class=\"ui-button-secondary\" icon=\"fa-file-o\" iconPos=\"left\" label=\"Generate report\" (click)=\"createReport()\" style=\"float:right; margin-bottom: 0.5rem;\"></button>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <th *ngFor=\"let col of columns\" pResizableColumn [pSortableColumn]=\"col.field\">\r\n            {{col.header}}\r\n            <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n          </th>\r\n        </tr>\r\n        <tr>\r\n          <th *ngFor=\"let col of columns\">\r\n            <p-dropdown *ngIf=\"col.isFilterDropdown\"\r\n              [options]=\"col.filterOptions\"\r\n              [style]=\"{'width':'100%'}\"\r\n              (onChange)=\"tt.filter($event.value, col.field, col.filterMatchMode)\"\r\n              [showClear]=\"true\"\r\n              appendTo=\"body\"\r\n            ></p-dropdown>\r\n            <input pInputText *ngIf=\"!col.isFilterDropdown\" type=\"text\" (input)=\"tt.filter($event.target.value, col.field, col.filterMatchMode)\" style=\"width: -webkit-fill-available;\">\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n        <tr [pSelectableRow]=\"item\" (dblclick)=\"onRowDblClick(item)\">\r\n          <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\r\n            <ng-container *ngIf=\"col.isCheckbox; else notCheckBox\">\r\n              <div style=\"text-align: center;\">\r\n                <p-checkbox\r\n                  binary=\"true\"\r\n                  [(ngModel)]=\"item[col.field]\"\r\n                  disabled=\"true\"\r\n                ></p-checkbox>\r\n              </div>\r\n            </ng-container>\r\n            <ng-template #notCheckBox>\r\n              {{item[col.field]}}\r\n            </ng-template>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr>\r\n          <td [attr.colspan]=\"columns.length\">\r\n            No records found\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n\r\n    </p-table>\r\n  </div>\r\n\r\n  <div style=\"font-size: smaller; padding-top: 0.75rem;\">\r\n    <p-table\r\n      [columns]=\"colsSubTable\"\r\n      [value]=\"selectedRow?.fidCalibrations\"\r\n      [loading]=\"loading\"\r\n      [scrollable]=\"true\" scrollHeight=\"10vh\"\r\n      [resizableColumns]=\"true\"\r\n    >\r\n\r\n      <ng-template pTemplate=\"colgroup\" let-columns>\r\n        <colgroup>\r\n          <col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\r\n        </colgroup>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th *ngFor=\"let col of columns\" pResizableColumn [pSortableColumn]=\"col.field\">\r\n            {{col.header}}\r\n            <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n        <tr>\r\n          <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\r\n            {{item[col.field]}}\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n\r\n      <ng-template pTemplate=\"emptymessage\" let-columns>\r\n        <tr>\r\n          <td [attr.colspan]=\"columns.length\">\r\n            No records found\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n\r\n    </p-table>\r\n  </div>\r\n\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"close()\" label=\"Close\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<app-result-details\r\n  [visibleIn]=\"showDetailsDialog\"\r\n  (visibleOut)=\"showDetailsDialog=$event\"\r\n  [failureDetail]=\"dblClickedRow\"\r\n  [panelTitle]=\"panelTitle\">\r\n</app-result-details>"

/***/ }),

/***/ "./src/app/pages/create/results/results.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/create/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_exceljs_dist_exceljs_min_js__ = __webpack_require__("./node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_exceljs_dist_exceljs_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_exceljs_dist_exceljs_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("./node_modules/file-saver/src/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var onOrOffFilterOptions = [
    { label: 'On or Off', value: null },
    { label: 'On', value: 'ON' },
    { label: 'Off', value: 'OFF' },
];
var yesOrNoFilterOptions = [
    { label: 'Yes or No', value: null },
    { label: 'Yes', value: true },
    { label: 'No', value: false },
];
var ResultsComponent = /** @class */ (function () {
    function ResultsComponent() {
        this.visibleIn = false;
        this.visibleOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showDetailsDialog = false;
        // master table
        this.cols = [
            {
                header: 'DTC',
                field: 'dtc',
                filterMatchMode: 'contains',
                width: '2rem',
            },
            {
                header: 'Title',
                field: 'title',
                filterMatchMode: 'contains',
                width: '12rem',
            },
            {
                header: 'Name',
                field: 'name',
                filterMatchMode: 'contains',
                width: '8rem',
            },
            {
                header: 'MIL',
                field: 'mil',
                filterMatchMode: 'equals',
                width: '2rem',
                isFilterDropdown: true,
                filterOptions: onOrOffFilterOptions,
            },
            {
                header: 'Dia Lamp',
                field: 'systemLamp',
                filterMatchMode: 'contains',
                width: '4rem',
            },
            {
                header: 'OBD-System',
                field: 'obdSystem',
                filterMatchMode: 'contains',
                width: '4rem',
            },
            {
                header: 'Perf Lim',
                field: 'perfLim',
                filterMatchMode: 'contains',
                width: '6rem',
            },
            {
                header: 'Disabled',
                field: 'disabled',
                filterMatchMode: 'equals',
                width: '2rem',
                isCheckbox: true,
                isFilterDropdown: true,
                filterOptions: yesOrNoFilterOptions,
            },
        ];
        // fidCalibrations (detail table)
        this.colsSubTable = [
            {
                header: 'Name',
                field: 'fnrFidCalibrationName',
                width: '20rem',
            },
            {
                header: 'Description',
                field: 'fnrFidCalibrationDescription',
            },
        ];
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.selectedRow = this.a2lFailureDetails[0];
    };
    ResultsComponent.prototype.close = function () {
        this.visibleIn = false;
        this.visibleOut.emit(false);
    };
    ResultsComponent.prototype.cancelRowUnselect = function (event) {
        this.selectedRow = event.data;
        this.mainTable.selection = this.selectedRow;
    };
    ResultsComponent.prototype.onRowDblClick = function (row) {
        this.dblClickedRow = row;
        this.showDetailsDialog = true;
    };
    ResultsComponent.prototype.createReport = function () {
        var _this = this;
        var sheet1Data = [
            ['Project:', this.panelTitle['a2l']],
            ['Dataset:', this.panelTitle['hex']],
            [],
            Object.keys(this.failureDetailToXlsRow(this.a2lFailureDetails[0]))
        ];
        for (var _i = 0, _a = this.a2lFailureDetails; _i < _a.length; _i++) {
            var failureDetail = _a[_i];
            sheet1Data.push(Object.values(this.failureDetailToXlsRow(failureDetail)));
        }
        var sheet2Data = [
            [],
            [
                'Usage Comment',
                'Parameter Name',
                'Value',
                'Compare Value',
            ],
        ];
        var workbook = new __WEBPACK_IMPORTED_MODULE_1_exceljs_dist_exceljs_min_js__["Workbook"]();
        var worksheet1 = workbook.addWorksheet('Sheet1', { views: [{ showGridLines: false }] });
        var worksheet2 = workbook.addWorksheet('Sheet2', { views: [{ showGridLines: false }] });
        var grayFill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFC0C0C0' } };
        var baseStyle = {
            font: { name: 'Arial', size: 9 },
            alignment: { vertical: 'middle', wrapText: true },
        };
        worksheet1.columns = [
            { width: 18, style: baseStyle },
            { width: 40, style: baseStyle },
            { width: 10, style: baseStyle },
            { width: 20, style: baseStyle },
            { width: 22, style: baseStyle },
            { width: 25, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 45, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 10, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 20, style: baseStyle },
            { width: 20, style: baseStyle },
            { width: 20, style: baseStyle },
            { width: 20, style: baseStyle },
            { width: 20, style: baseStyle },
            { width: 20, style: baseStyle },
            { width: 10, style: baseStyle },
            { width: 10, style: baseStyle },
            { width: 15, style: baseStyle },
            { width: 15, style: baseStyle },
            { width: 15, style: baseStyle },
            { width: 30, style: baseStyle },
            { width: 30, style: baseStyle },
            { width: 30, style: baseStyle },
            { width: 18, style: baseStyle },
            { width: 18, style: baseStyle },
            { width: 10, style: baseStyle },
            { width: 18, style: baseStyle },
            { width: 18, style: baseStyle },
            { width: 18, style: baseStyle },
            { width: 18, style: baseStyle },
            { width: 18, style: baseStyle },
            { width: 45, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 18, style: baseStyle },
            { width: 18, style: baseStyle },
            { width: 18, style: baseStyle },
        ];
        worksheet2.columns = [
            { width: 37, style: baseStyle },
            { width: 37, style: baseStyle },
            { width: 60, style: baseStyle },
            { width: 60, style: baseStyle },
        ];
        worksheet1.addRows(sheet1Data);
        worksheet2.addRows(sheet2Data);
        worksheet1.getRow(1).font = worksheet1.getRow(2).font = { name: 'Arial', size: 11, bold: true };
        worksheet1.getRow(1).alignment = worksheet1.getRow(2).alignment = { wrapText: false };
        var border = {
            top: { style: 'medium' },
            left: { style: 'medium' },
            bottom: { style: 'medium' },
            right: { style: 'medium' }
        };
        // borders and fill header row on sheet1 - headers are on row 4
        var sheet1Row4 = worksheet1.getRow(4);
        sheet1Row4.font = { name: 'Arial', size: 9, bold: true };
        for (var c = 1; c <= worksheet1.columnCount; c++) {
            sheet1Row4.getCell(c).fill = grayFill;
            sheet1Row4.getCell(c).border = border;
        }
        // borders on sheet1 - headers are on row 4, which already have borders, so we start at 5
        for (var r = 5; r <= worksheet1.rowCount; r++) {
            var row = worksheet1.getRow(r);
            for (var c = 1; c <= worksheet1.columnCount; c++) {
                row.getCell(c).border = border;
            }
        }
        // borders and fill header row on sheet2 - headers are on row 2
        // row 1 height = 1px (from legacy tool report)
        worksheet2.getRow(1).height = 1;
        var sheet2Row2 = worksheet2.getRow(2);
        sheet2Row2.font = { name: 'Arial', size: 9, bold: true };
        for (var c = 1; c <= worksheet2.columnCount; c++) {
            sheet2Row2.getCell(c).fill = grayFill;
            sheet2Row2.getCell(c).border = border;
        }
        // create and download file
        workbook.xlsx.writeBuffer().then(function (data) {
            var blob = new Blob([data], { type: 'application/octet-stream' });
            Object(__WEBPACK_IMPORTED_MODULE_2_file_saver__["saveAs"])(blob, _this.panelTitle['a2l'] && _this.panelTitle['hex'] ?
                (_this.panelTitle['a2l'].slice(0, _this.panelTitle['a2l'].lastIndexOf('.')) +
                    '_FnR_' +
                    _this.panelTitle['hex'].slice(0, _this.panelTitle['hex'].lastIndexOf('.')) + '.xlsx') :
                'FnR_parsing_report.xlsx');
        });
    };
    ResultsComponent.prototype.failureDetailToXlsRow = function (failureDetail) {
        var row = {
            'Name': failureDetail.name || '',
            'Title': failureDetail.title || '',
            'DTC': failureDetail.dtc || '',
            'Component': failureDetail.component || '',
            'OBDCode': failureDetail.obdCode || '',
            'OBD System (Readiness)': failureDetail.obdSystem || '',
            'General Remark': failureDetail.generalRemarks || '',
            'Test Condition': failureDetail.testConditon || '',
            'Fault Detection': failureDetail.faultDetection || '',
            'Defect Debouncing': failureDetail.defectDebouncing || '',
            'Fault Healing': failureDetail.faultHealing || '',
            'Healing Debouncing': failureDetail.healingDebouncing || '',
            'System Reaction': failureDetail.systemReaction || '',
            'Fid Name': '',
            'Fid Description': '',
            'Fault Disabling': failureDetail.faultDisabling || '',
            'Disabled': failureDetail.disabled || '',
            'Failure Cause': failureDetail.failureCause || '',
            'Failure Repair': failureDetail.failureRepair || '',
            'Fault Storage': failureDetail.faultStorage || '',
            'Debouncing Tester Present': failureDetail.debouncingWhileTesterPresent || '',
            'Reset On Afterrun': failureDetail.resetAfterrun || '',
            'Reset Behaviour': failureDetail.resetBehaviour || '',
            'Disable Behaviour': failureDetail.disableBehaviour || '',
            'Classification': failureDetail.classification || '',
            'Error Class': failureDetail.errorClass || '',
            'Priority': failureDetail.priority || '',
            'Visible OBD scan tool': failureDetail.visibleScanTool || '',
            'Long Term Failure': failureDetail.longTermFailure || '',
            'Performance Limiter': failureDetail.perfLim || '',
            'Inducement': failureDetail.inducement || '',
            'DIUMPR': failureDetail.diumpr || '',
            'SVS': failureDetail.systemLamp || '',
            'SVS ON': failureDetail.systemLampActivation || '',
            'SVS OFF': failureDetail.systemLampDeactivation || '',
            'MIL': failureDetail.mil || '',
            'Validation (MIL ON)': failureDetail.validationMil || '',
            'Healing (MIL OFF)': failureDetail.healingMil || '',
            'Erasing Memory': failureDetail.dtcErasingFromMemory || '',
            'Erasing pending, healed': failureDetail.dtcErasingPendingHealed || '',
            'Erasing pending, no tested': failureDetail.dtcErasingPending || '',
            'Amb Cond Name': '',
            'Amb Cond Description': '',
            'DTC SAE (SPN-FMI)': failureDetail.dtc || '',
            'DTCM & DTCMLo': failureDetail.dtcm || '',
            'Blink Code': failureDetail.blinkCode || '',
        };
        // populate fid columns, using fidCalibrations array
        for (var index = 0; index < failureDetail.fidCalibrations.length; index++) {
            row['Fid Name'] +=
                (index + 1) + ') ' + (failureDetail.fidCalibrations[index].fnrFidCalibrationName || '');
            row['Fid Description'] +=
                (index + 1) + ') ' + (failureDetail.fidCalibrations[index].fnrFidCalibrationDescription || '');
            if (index !== failureDetail.fidCalibrations.length - 1) {
                row['Fid Name'] += '\r\n';
                row['Fid Description'] += '\r\n';
            }
        }
        // populate ambient conditions columns, using ambientConditions array
        for (var index = 0; index < failureDetail.ambientConditions.length; index++) {
            row['Amb Cond Name'] +=
                (index + 1) + ') ' + (failureDetail.ambientConditions[index].fnrAmbientConditionName || '');
            row['Amb Cond Description'] +=
                (index + 1) + ') ' + (failureDetail.ambientConditions[index].fnrAmbientConditionDescription || '');
            if (index !== failureDetail.ambientConditions.length - 1) {
                row['Amb Cond Name'] += '\r\n';
                row['Amb Cond Description'] += '\r\n';
            }
        }
        return row;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ResultsComponent.prototype, "visibleIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ResultsComponent.prototype, "a2lFailureDetails", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ResultsComponent.prototype, "panelTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ResultsComponent.prototype, "visibleOut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('tt'),
        __metadata("design:type", Object)
    ], ResultsComponent.prototype, "mainTable", void 0);
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-results',
            template: __webpack_require__("./src/app/pages/create/results/results.component.html"),
            styles: [__webpack_require__("./src/app/pages/create/results/results.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/pages/create/warnings/warnings.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog \r\n  [header]=\"'[' + panelTitle.a2l + ' -- ' + panelTitle.hex + '] WARNINGS'\"\r\n  [(visible)]=\"visibleIn\"\r\n  modal=\"modal\"\r\n  [responsive]=\"true\"\r\n  [autoAlign]=\"true\"\r\n  [positionTop]=\"46\"\r\n  [contentStyle]=\"{'width':'99vw', 'max-height':'77.5vh'}\"\r\n  [closeOnEscape]=\"false\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"false\"\r\n>\r\n\r\n  <div style=\"font-size: smaller;\">\r\n    <ul>\r\n      <li *ngFor=\"let warning of a2lWarnings\">\r\n        {{ warning }}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <p-footer>\r\n    <!-- style=\"float:right; margin-bottom: 0.5rem;\" -->\r\n    <button type=\"button\" pButton class=\"ui-button-primary\" icon=\"fa-file-o\" iconPos=\"left\" label=\"Save warnings file\" (click)=\"saveWarningsFile()\"></button>\r\n    <button type=\"button\" pButton class=\"ui-button-secondary\" label=\"Close\" (click)=\"close()\"></button>\r\n  </p-footer>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/create/warnings/warnings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/create/warnings/warnings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarningsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__("./node_modules/file-saver/src/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WarningsComponent = /** @class */ (function () {
    function WarningsComponent() {
        this.visibleIn = false;
        this.visibleOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    WarningsComponent.prototype.close = function () {
        this.visibleIn = false;
        this.visibleOut.emit(false);
    };
    WarningsComponent.prototype.saveWarningsFile = function () {
        var data = 'Project: ' + this.panelTitle['a2l'] + '\r\nDataset: ' + this.panelTitle['hex'] + '\r\n\r\nWARNINGS:\r\n\r\n';
        var blob = new Blob([data + this.a2lWarnings.join('\r\n')], { type: 'text/plain;charset=utf-8' });
        Object(__WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"])(blob, this.panelTitle['a2l'] && this.panelTitle['hex'] ?
            (this.panelTitle['a2l'].slice(0, this.panelTitle['a2l'].lastIndexOf('.')) +
                '_FnR_' +
                this.panelTitle['hex'].slice(0, this.panelTitle['hex'].lastIndexOf('.')) + '_warnings.txt') :
            'FnR_warnings.txt');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarningsComponent.prototype, "visibleIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], WarningsComponent.prototype, "a2lWarnings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WarningsComponent.prototype, "panelTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], WarningsComponent.prototype, "visibleOut", void 0);
    WarningsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-warnings',
            template: __webpack_require__("./src/app/pages/create/warnings/warnings.component.html"),
            styles: [__webpack_require__("./src/app/pages/create/warnings/warnings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WarningsComponent);
    return WarningsComponent;
}());



/***/ }),

/***/ "./src/app/pages/edit-project/edit-project.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<main role=\"main\">\r\n  <div class=\"container\">\r\n\r\n      <h3>Add/Remove Project</h3>\r\n\r\n      <div #panelSpinnerTarget>\r\n        <form [formGroup]=\"form\">\r\n\r\n          <div [formGroup]=\"form\" class=\"form-group\">\r\n            <label htmlFor=\"selectedProject\">Selected EDC Project</label>\r\n            <div class=\"primeng-form-control\">\r\n              <p-dropdown\r\n                [options]=\"projectOptions\"\r\n                formControlName=\"selectedProject\"\r\n                [(ngModel)]=\"selectedProject\"\r\n                placeholder=\"Select an option\"\r\n                [style]=\"{'display': 'block', 'width': '100%'}\">\r\n              </p-dropdown>\r\n            </div>\r\n            <div *ngIf=\"form.get('selectedProject').hasError('required') && form.get('selectedProject').touched\" class=\"alert alert-danger\">\r\n              Selected EDC Project is required.\r\n            </div>\r\n          </div>\r\n\r\n          <div [formGroup]=\"form\" class=\"form-group\">\r\n            <label htmlFor=\"action\">Action (Application Label / Channel Description)</label>\r\n            <div class=\"primeng-form-control\">\r\n              <p-radioButton class=\"radio-option\" formControlName=\"action\" [(ngModel)]=\"action\" name=\"action-group\" value=\"add\" label=\"Add Project\"></p-radioButton>\r\n              <p-radioButton class=\"radio-option\" formControlName=\"action\" [(ngModel)]=\"action\" name=\"action-group\" value=\"remove\" label=\"Remove Project\"></p-radioButton>\r\n            </div>\r\n            <div *ngIf=\"form.get('action').hasError('required') && form.get('action').touched\" class=\"alert alert-danger\">\r\n              Action is required.\r\n            </div>\r\n          </div>\r\n\r\n          <ng-container *ngIf=\"action == 'add'\">\r\n            <div [formGroup]=\"form\" class=\"form-group\">\r\n              <div class=\"form-group\">\r\n                <label htmlFor=\"selectedA2L\">Selected A2L</label>\r\n                <div class=\"primeng-form-control\">\r\n                  <p-fileUpload #fileSelector\r\n                    \r\n                    class=\"my-upload-button\"\r\n                    name=\"selectedA2L\"\r\n                    accept=\".a2l,/*\\.[a|A]2[l|L]$/\"\r\n                    chooseLabel=\"Browse\"\r\n                    [showUploadButton]=\"true\"\r\n                    cancelLabel=\"Clear\"\r\n                    (onSelect)=\"onFileChange($event)\"\r\n                    customUpload=\"true\"\r\n                    (uploadHandler)=\"uploadA2L($event)\"\r\n                  >\r\n                    <ng-template let-file pTemplate=\"file\">\r\n                      <div>{{ file.name }} <i>({{ formatBytes(file.size) }})</i> <span *ngIf=\"a2lUploaded\" style=\"color: lightgreen;\">&#10004;</span></div>\r\n                    </ng-template>\r\n                  </p-fileUpload>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div [formGroup]=\"form\" class=\"form-group\">\r\n              <label htmlFor=\"previousProject\">Previous EDC Project</label>\r\n              <div class=\"primeng-form-control\">\r\n                <p-dropdown\r\n                  [options]=\"projectOptions\"\r\n                  formControlName=\"previousProject\"\r\n                  [(ngModel)]=\"previousProject\"\r\n                  placeholder=\"Select an option\"\r\n                  [style]=\"{'display': 'block', 'width': '100%'}\">\r\n                </p-dropdown>\r\n              </div>\r\n              <div *ngIf=\"form.get('previousProject').hasError('required') && form.get('previousProject').touched\" class=\"alert alert-danger\">\r\n                Previous EDC Project is required.\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n\r\n          <div>\r\n            <button type=\"button\" class=\"btn\" (click)=\"cancel()\">Cancel</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Ok</button>\r\n          </div>\r\n\r\n        </form>\r\n      \r\n        <p-confirmDialog></p-confirmDialog>\r\n\r\n        <p-dialog\r\n          [header]=\"dialogHeaderTitle\"\r\n          [showHeader]=\"dialogShowHeader\"\r\n          [(visible)]=\"showDialog\"\r\n          modal=\"true\"\r\n          [responsive]=\"true\"\r\n          [closable]=\"dialogHeaderClose\"\r\n        >\r\n          <span>{{ dialogMessage }}</span>\r\n          <div *ngIf=\"dialogShowProgress\" style=\"text-align: center; padding-top: 1rem;\">\r\n            <p-progressSpinner></p-progressSpinner>\r\n            <span *ngIf=\"dialogShowProgressPercentage\" style=\"display: block; text-align: center; font-weight: bold; margin-top: -64px; margin-bottom: 50px;\">{{ uploadPercentage }}%</span>\r\n          </div>\r\n          <p-footer *ngIf=\"!dialogShowProgress\">\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"showDialog=false\" label=\"Close\"></button>\r\n          </p-footer>\r\n        </p-dialog>\r\n\r\n        <p-dialog header=\"Warning\" [(visible)]=\"showLockDialog\" modal=\"modal\" [responsive]=\"true\">\r\n          <span>{{ lockDialogMessage }}</span>\r\n          <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-unlock\" (click)=\"dialogUnlock()\" label=\"Unlock it\" class=\"ui-button-success\"></button>\r\n            <button type=\"button\" pButton icon=\"fa-lock\" (click)=\"dialogKeepLock()\" label=\"Keep it locked\" class=\"ui-button-danger\"></button>\r\n          </p-footer>\r\n        </p-dialog>\r\n      \r\n      </div>\r\n\r\n  </div>\r\n</main>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/edit-project/edit-project.component.scss":
/***/ (function(module, exports) {

module.exports = "app-details-page {\n  width: 100%; }\n\np-card.details-card {\n  width: 100%; }\n\n.form-details-input {\n  padding-top: 1.5em; }\n\n.form-details-footer {\n  padding-top: 2em; }\n\n.form-details-input input {\n  width: 100%; }\n\n.radio-option {\n  margin-left: 1.5em; }\n"

/***/ }),

/***/ "./src/app/pages/edit-project/edit-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_projects_service__ = __webpack_require__("./src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dao_project_field_mapper__ = __webpack_require__("./src/app/dao/project-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_upload_service__ = __webpack_require__("./src/app/services/upload.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProjectComponent = /** @class */ (function () {
    function EditProjectComponent(router, dataService, fieldMapper, uploadService) {
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.uploadService = uploadService;
        this.action = 'add';
        this.showDialog = false;
        this.dialogShowHeader = true;
        this.dialogHeaderClose = false;
        this.dialogShowProgress = false;
        this.dialogShowProgressPercentage = false;
        this.lockedByCurrentUser = false;
        this.a2lUploaded = false;
        this.uploadPercentage = 0;
    }
    EditProjectComponent.prototype.ngOnInit = function () {
        this.setProjectOptions();
        this.resetForm();
    };
    EditProjectComponent.prototype.setProjectOptions = function () {
        var _this = this;
        this.projectOptions = [];
        this.dataService
            .getItems([], this.fieldMapper.fieldMap.name, 'asc', null, null)
            .subscribe(function (result) {
            result.data.map(function (project) {
                _this.projectOptions.push({ value: project.id.toString(), label: project.name });
            });
        });
    };
    EditProjectComponent.prototype.resetForm = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            action: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.action, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            selectedProject: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('selectedProject', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            previousProject: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('previousProject', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            selectedA2L: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](this.selectedA2L)
        });
    };
    EditProjectComponent.prototype.ngOnChanges = function (changes) {
        this.resetForm();
    };
    EditProjectComponent.prototype.cancel = function () {
        // TODO: home or back?
        this.router.navigate(['home']);
    };
    EditProjectComponent.prototype.save = function () {
        var _this = this;
        if (this.action === 'add' && (!this.form.value.selectedProject || !this.form.value.previousProject || !this.a2lServerPath)) {
            this.showMissingValuesError('"Selected EDC Project" and "Previous EDC Project" are mandatory, and an A2L file needs to be previously uploaded!');
            return;
        }
        else if (this.action === 'remove' && (!this.form.value.selectedProject)) {
            this.showMissingValuesError('"Selected EDC Project" is mandatory!');
            return;
        }
        this.dataService.lockItem(this.form.value.selectedProject).subscribe(function (item) {
            // if record is successfully locked...
            _this.lockedByCurrentUser = true;
            if (_this.action === 'add') {
                _this.add();
            }
            else {
                _this.remove();
            }
        }, function (error) {
            if (error.status === 409) {
                _this.lockedByCurrentUser = false;
                _this.dialogShowProgress = false;
                _this.dialogHeaderTitle = 'Info';
                _this.dialogHeaderClose = true;
                _this.dialogMessage = '"Selected EDC Project" is locked by another user!';
                setTimeout(function () { return _this.showDialog = true; });
            }
        });
    };
    EditProjectComponent.prototype.add = function () {
        var _this = this;
        this.dialogShowHeader = false;
        this.dialogMessage = 'Add operation in progress...';
        this.dialogShowProgress = true;
        this.dialogShowProgressPercentage = false;
        this.showDialog = true;
        var requestData = {
            projectNewId: this.form.value.selectedProject,
            projectPreviousId: this.form.value.previousProject,
            pathA2l: this.a2lServerPath,
        };
        this.uploadService.parseUploadedFileToAddProject(requestData).subscribe(function (result) {
            console.log(result);
            _this.showDialog = false;
            if (!_this.lockedByCurrentUser) {
                return true;
            }
            _this.lockDialogMessage = 'Operation successfully finished! You have locked the "Selected EDC Project", '
                + 'which prevents other users from editing it! What would you like to do?';
            _this.showLockDialog = true;
        }, function (error) {
            console.log(error);
            _this.showDialog = false;
            if (!_this.lockedByCurrentUser) {
                return true;
            }
            _this.lockDialogMessage = 'An error has occurred! You have locked the "Selected EDC Project", '
                + 'which prevents other users from editing it! What would you like to do?';
            _this.showLockDialog = true;
        });
    };
    EditProjectComponent.prototype.remove = function () {
        var _this = this;
        this.dataService.removeItem(this.form.value.selectedProject).subscribe(function (result) {
            // remove it from dropdowns options
            var optionIndex = _this.projectOptions.findIndex(function (option) { return option.value === _this.form.value.selectedProject; });
            if (optionIndex !== -1) {
                _this.projectOptions.splice(optionIndex, 1);
            }
            _this.resetForm();
        });
    };
    EditProjectComponent.prototype.onFileChange = function (event) {
        if (event.files.length > 0) {
            this.form.get('selectedA2L').setValue(event.files[0]);
        }
    };
    EditProjectComponent.prototype.uploadA2L = function (event) {
        var _this = this;
        if (this.a2lUploaded) {
            alert('File already uploaded');
            return;
        }
        this.dialogShowHeader = true;
        this.dialogHeaderClose = false;
        this.dialogHeaderTitle = 'Operation in progress';
        this.dialogMessage = 'Uploading Selected A2L file to server...';
        this.dialogShowProgress = true;
        this.dialogShowProgressPercentage = true;
        this.showDialog = true;
        var formData = new FormData();
        formData.append('file', this.form.value.selectedA2L);
        this.uploadPercentage = 0;
        this.uploadService.uploadA2L(formData).subscribe(function (result) {
            if (result.type === __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                _this.uploadPercentage = Math.round(100 * result.loaded / result.total);
            }
            else if (result instanceof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["f" /* HttpResponse */]) {
                if (result.body.isStoredSuccessfully) {
                    _this.a2lUploaded = true;
                    _this.a2lServerPath = result.body.path;
                    _this.uploadedA2lFileName = _this.form.value.selectedA2L.name;
                }
                else {
                    _this.showFileStoringError();
                }
            }
        }, function (error) {
            _this.showFileStoringError();
            console.log(error);
        }, function () {
            _this.showDialog = false;
            _this.uploadPercentage = 0;
        });
    };
    EditProjectComponent.prototype.formatBytes = function (bytes, decimals) {
        if (bytes === 0) {
            return '0 Bytes';
        }
        var k = 1024;
        var dm = decimals || 2;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    EditProjectComponent.prototype.dialogKeepLock = function () {
        this.showLockDialog = false;
        this.lockedByCurrentUser = true;
    };
    EditProjectComponent.prototype.dialogUnlock = function () {
        var _this = this;
        this.showLockDialog = false;
        this.dataService.unlockItem(this.form.value.selectedProject).subscribe(function (success) {
            _this.lockedByCurrentUser = false;
        }, function (error) {
            console.log('error unlocking');
        });
    };
    EditProjectComponent.prototype.showFileStoringError = function () {
        this.dialogShowHeader = true;
        this.dialogHeaderClose = true;
        this.dialogHeaderTitle = 'Error';
        this.dialogMessage = 'There was an error storing the file on server! Please re-upload it!';
        this.dialogShowProgress = false;
        this.dialogShowProgressPercentage = false;
        this.showDialog = true;
    };
    EditProjectComponent.prototype.showMissingValuesError = function (msg) {
        this.dialogShowHeader = true;
        this.dialogHeaderClose = true;
        this.dialogHeaderTitle = 'Error';
        this.dialogMessage = msg;
        this.dialogShowProgress = false;
        this.dialogShowProgressPercentage = false;
        this.showDialog = true;
    };
    EditProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-project',
            template: __webpack_require__("./src/app/pages/edit-project/edit-project.component.html"),
            styles: [__webpack_require__("./src/app/pages/edit-project/edit-project.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_5__dao_project_field_mapper__["a" /* ProjectFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_6__services_upload_service__["a" /* UploadService */]])
    ], EditProjectComponent);
    return EditProjectComponent;
}());



/***/ }),

/***/ "./src/app/pages/failure-detail/ambient-conditions/ambient-conditions.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog \r\n  header=\"Ambient Conditions\"\r\n  [(visible)]=\"visibleIn\"\r\n  modal=\"modal\"\r\n  [responsive]=\"true\"\r\n  [autoAlign]=\"true\"\r\n  [positionTop]=\"46\"\r\n  [contentStyle]=\"{'width':'99vw', 'max-height':'77vh'}\"\r\n  [closeOnEscape]=\"false\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"false\"\r\n>\r\n\r\n  <p-table\r\n    [columns]=\"ambientConditionsListColumns\"\r\n    [value]=\"ambientConditionsList\"\r\n    [resizableColumns]=\"true\"\r\n    class=\"ambient-conditions-table\"\r\n  >\r\n\r\n    <ng-template pTemplate=\"colgroup\" let-columns>\r\n      <colgroup>\r\n        <col [style.width]=\"'25px'\">\r\n      </colgroup>\r\n      <colgroup>\r\n        <col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\r\n      </colgroup>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th></th>\r\n        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" pResizableColumn>\r\n          {{ col.header }}\r\n          <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n      <tr style=\"font-size: 0.9rem;\" (dblclick)=\"showDetail(item)\">\r\n        <td class=\"show-detail-actions\">\r\n          <button pButton type=\"button\" icon=\"fa-edit\" (click)=\"showDetail(item); $event.stopPropagation();\" class=\"ui-button-secondary\"></button>\r\n        </td>\r\n        <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\r\n          {{ item[col.field] }}\r\n        </td>\r\n        <!-- <td class=\"ui-resizable-column\">{{ item.name || \"&nbsp;\" }}</td>\r\n        <td>{{ item.reason || \"&nbsp;\" }}</td> -->\r\n      </tr>\r\n    </ng-template>\r\n\r\n  </p-table>\r\n  \r\n  <p-footer>\r\n    <!-- <button type=\"button\" pButton (click)=\"showDetail()\" label=\"Detail\" class=\"ui-button-primary\"></button> -->\r\n    <!-- <button type=\"button\" pButton (click)=\"showCloseConfirmDialog=true\" label=\"Close\" class=\"ui-button-secondary\"></button> -->\r\n    <button type=\"button\" pButton (click)=\"close()\" label=\"Close\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!-- Details dialog -->\r\n<p-dialog \r\n  header=\"Ambient Condition Details\"\r\n  [(visible)]=\"showDetailsDialog && ambientCondition\"\r\n  modal=\"modal\"\r\n  [responsive]=\"true\"\r\n  [autoAlign]=\"true\"\r\n  [positionTop]=\"46\"\r\n  [contentStyle]=\"{'width':'85vw', 'max-height':'77vh', 'font-size': '0.9rem'}\"\r\n  [closeOnEscape]=\"false\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"false\"\r\n  class=\"ambient-condition-details-dialog\"\r\n>\r\n\r\n  <div>\r\n    <div class=\"row\" style=\"padding-bottom: 0;\">\r\n      <div class=\"col-8\">\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <label for=\"ambient-condition-id\">ID</label>\r\n          </div>\r\n          <div class=\"col-9\">\r\n            <input class=\"form-control\" id=\"ambient-condition-id\" type=\"text\" pInputText [value]=\"ambientCondition?.id\" readonly=true>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">\r\n            <label for=\"ambient-condition-failure-name\">Used for Failure</label>\r\n          </div>\r\n          <div class=\"col-9\">\r\n            <input class=\"form-control\" id=\"ambient-condition-failure-name\" type=\"text\" pInputText [value]=\"failure?.name\" readonly=true>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"position: absolute; bottom: 0; width: 100%;\">\r\n          <div class=\"col-3\">\r\n            <label for=\"ambient-condition-name\">Ambient Condition</label>\r\n          </div>\r\n          <div class=\"col-9\">\r\n            <!-- <input class=\"form-control\" id=\"ambient-condition-name\" type=\"text\" pInputText [(ngModel)]=\"ambientCondition && ambientCondition.name\" disabled=false> -->\r\n            <div class=\"primeng-form-control\">\r\n              <p-dropdown\r\n                id=\"ambient-condition-name\"\r\n                [options]=\"channelDescriptionOptions\"\r\n                [(ngModel)]=\"selectedChannelDescription\"\r\n                [style]=\"{'display': 'block', 'width': '100%'}\"\r\n                [disabled]=\"importFromFailure\"\r\n                (onChange)=\"selectedChannelDescriptionChange($event)\"\r\n              >\r\n              </p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <div class=\"row\" style=\"min-height: 8.75rem;\">\r\n          <div class=\"col-12\">\r\n            <label>Project</label>\r\n            <!-- <button pButton type=\"button\" icon=\"fa-edit\" class=\"ui-button-secondary stripped-button\" (click)=\"openProjectSelectionDialog()\"></button> -->\r\n\r\n            <p-table #tt\r\n              [columns]=\"projectsListColumns\"\r\n              [value]=\"projectsList\"\r\n              [resizableColumns]=\"true\"\r\n              [lazy]=\"false\"\r\n              [paginator]=\"false\"\r\n              [loading]=\"loadingProjectsList\"\r\n              [scrollable]=\"true\"\r\n              scrollHeight=\"100px\"\r\n              dataKey=\"id\"\r\n              class=\"projects-list\"\r\n            >\r\n              <ng-template pTemplate=\"colgroup\" let-columns>\r\n                <colgroup>\r\n                  <col style=\"width:22px;\">\r\n                  <col *ngFor=\"let col of columns\">\r\n                </colgroup>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                  <th style=\"padding:2px;\"></th>\r\n                  <th *ngFor=\"let col of columns\" pResizableColumn [pSortableColumn]=\"col.field\" style=\"padding:2px;\">\r\n                    {{col.header}}\r\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                  </th>\r\n                </tr>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n                <tr style=\"font-size:smaller\">\r\n                  <td style=\"text-align: center\">\r\n                      <!-- (onChange)=\"projectCheckBoxChanged(item.id, $event)\" -->\r\n                    <p-checkbox\r\n                      name=\"checked-projects-group\"\r\n                      [(ngModel)]=\"checkedProjectsIds\"\r\n                      [value]=\"item.id\"\r\n                      (onChange)=\"updateChannelDescriptionOptions()\"\r\n                      [style]=\"{'margin': '2px 0'}\"\r\n                    ></p-checkbox>\r\n                  </td>\r\n                  <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\r\n                    {{item[col.field]}}\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n\r\n              <ng-template pTemplate=\"emptymessage\" let-columns>\r\n                <tr style=\"height: 99px\">\r\n                  <td [attr.colspan]=\"columns.length + 1\">\r\n                    <!-- No projects to display! -->\r\n                  </td>\r\n                </tr>\r\n              </ng-template>\r\n\r\n            </p-table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <p-checkbox\r\n          [(ngModel)]=\"importFromFailure\"\r\n          binary=\"true\"\r\n          [style]=\"{'display': 'inline-block'}\"\r\n          (onChange)=\"importFromFailureChange($event)\"\r\n        ></p-checkbox>\r\n        <label for=\"failure-to-import\">Import from Failure</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"primeng-form-control\">\r\n          <p-dropdown\r\n            id=\"failure-to-import\"\r\n            [options]=\"importFromFailureOptions\"\r\n            [(ngModel)]=\"failureToImportFrom\"\r\n            [style]=\"{'display': 'block', 'width': '100%'}\"\r\n            [disabled]=\"!importFromFailure\"\r\n          >\r\n          </p-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-1\">\r\n        <button pButton type=\"button\" (click)=\"importFromFailureClick()\" label=\"Import\" class=\"ui-button-secondary\" style=\"width: 100%; height: 100%;\" [disabled]=\"!importFromFailure\"></button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label for=\"ambient-condition-description\">Description</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <!-- TODO: switch reason with description?!?!? -->\r\n        <!-- <textarea class=\"form-control ui-widget\" id=\"ambient-condition-description\" pInputTextarea [rows]=\"1\" [(ngModel)]=\"ambientCondition && ambientCondition.reason\" disabled=true></textarea> -->\r\n        <textarea class=\"form-control ui-widget\" id=\"ambient-condition-description\" pInputTextarea [rows]=\"1\" [(ngModel)]=\"selectedChannelDescription && selectedChannelDescription.description\" readonly=true></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label for=\"ambient-condition-reason\">Reason of Selection</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <!-- TODO: switch reason with description?!?!? -->\r\n        <textarea class=\"form-control\" id=\"ambient-condition-reason\" pInputTextarea [rows]=\"2\" [(ngModel)]=\"ambientCondition && ambientCondition.description\" [readonly]=\"importFromFailure\"></textarea>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row last\">\r\n      <div class=\"col-2\">\r\n        <label for=\"ambient-condition-comment\">Comment</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <textarea class=\"form-control\" id=\"ambient-condition-comment\" pInputTextarea [rows]=\"3\" [(ngModel)]=\"ambientCondition && ambientCondition.comment\" [readonly]=\"importFromFailure\"></textarea>\r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"saveAmbientConditionDetails()\" label=\"Save\" class=\"ui-button-primary\"></button>\r\n    <button pButton type=\"button\" (click)=\"closeDetailsDialog()\" label=\"Close\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!-- Close confirm dialog -->\r\n<!-- <p-dialog header=\"Confirm\" [(visible)]=\"showCloseConfirmDialog\" modal=\"modal\" [responsive]=\"true\">\r\n  <span>Are you sure you want to close without saving?</span>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"showCloseConfirmDialog=false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    <button pButton type=\"button\" (click)=\"close()\" label=\"Yes\" class=\"ui-button-primary\"></button>\r\n  </p-footer>\r\n</p-dialog> -->\r\n\r\n<!-- Projects selection dialog -->\r\n<!-- <p-dialog\r\n  header=\"Project selection\"\r\n  [(visible)]=\"showProjectSelectionDialog\"\r\n  modal=\"modal\"\r\n  [responsive]=\"true\"\r\n  [autoAlign]=\"true\"\r\n  [contentStyle]=\"{'width':'85vw', 'max-height':'77vh'}\"\r\n  [closeOnEscape]=\"false\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"false\"\r\n>\r\n\r\n  <p-table #ttall\r\n    [columns]=\"projectSelectionColumns\" [value]=\"allProjects\"\r\n    [resizableColumns]=\"true\"\r\n    [lazy]=\"false\"\r\n    [paginator]=\"true\" [rows]=\"20\" [totalRecords]=\"allProjects.length\" [rowsPerPageOptions]=\"[10, 20, 30, 50, 100]\"\r\n    [loading]=\"loadingAllProjects\"\r\n    [scrollable]=\"true\" scrollHeight=\"50vh\"\r\n    [(selection)]=\"selectedProjectsTemp\"\r\n    dataKey=\"id\"\r\n  >\r\n    <ng-template pTemplate=\"colgroup\" let-columns>\r\n      <colgroup>\r\n        <col style=\"width:1.5em;\">\r\n        <col *ngFor=\"let col of columns\">\r\n      </colgroup>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr style=\"font-size:small;\">\r\n        <th style=\"padding: 2px;\">\r\n          <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n        </th>\r\n        <th *ngFor=\"let col of columns\" pResizableColumn [pSortableColumn]=\"col.field\" style=\"padding: 2px;\">\r\n          {{col.header}}\r\n          <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n        </th>\r\n      </tr>\r\n      <tr style=\"font-size:small;\">\r\n        <th></th>\r\n        <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.filterType\" style=\"padding: 2px;\">\r\n          <input *ngSwitchDefault pInputText type=\"text\" (input)=\"ttall.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n      <tr style=\"font-size:smaller\">\r\n        <td style=\"padding: 2px;\">\r\n            <p-tableCheckbox [value]=\"item\"></p-tableCheckbox>\r\n        </td>\r\n        <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\" style=\"padding: 2px;\">\r\n          {{item[col.field]}}\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"emptymessage\" let-columns>\r\n      <tr style=\"font-size:smaller\">\r\n        <td [attr.colspan]=\"columns.length + 1\">\r\n          No projects to select!\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n\r\n  </p-table>\r\n\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"closeProjectSelectionDialog()\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    <button type=\"button\" pButton (click)=\"saveProjectSelectionDialog()\" label=\"Save selection\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog> -->"

/***/ }),

/***/ "./src/app/pages/failure-detail/ambient-conditions/ambient-conditions.component.scss":
/***/ (function(module, exports) {

module.exports = ".stripped-button, p-table.ambient-conditions-table td.show-detail-actions .ui-button {\n  border: none;\n  background-color: transparent;\n  vertical-align: middle;\n  color: #373a3c;\n  width: 1rem;\n  height: 1rem; }\n\np-table.ambient-conditions-table td.show-detail-actions {\n  text-align: center; }\n\np-table.projects-list div.ui-table-scrollable-body {\n  height: 100px !important; }\n\np-dialog.ambient-condition-details-dialog div.row {\n  padding-bottom: 1rem; }\n\np-dialog.ambient-condition-details-dialog div.row .last {\n    padding-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/pages/failure-detail/ambient-conditions/ambient-conditions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmbientConditionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_failures_service__ = __webpack_require__("./src/app/services/failures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dao_failure_field_mapper__ = __webpack_require__("./src/app/dao/failure-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_failure__ = __webpack_require__("./src/app/dao/failure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dao_project_field_mapper__ = __webpack_require__("./src/app/dao/project-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_projects_service__ = __webpack_require__("./src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_channel_descriptions_service__ = __webpack_require__("./src/app/services/channel-descriptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dao_channel_description_field_mapper__ = __webpack_require__("./src/app/dao/channel-description-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AmbientConditionsComponent = /** @class */ (function () {
    function AmbientConditionsComponent(route, router, dataService, fieldMapper, projectFieldMapper, projectsService, channelDescriptionsService, channelDescriptionFieldMapper) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.projectFieldMapper = projectFieldMapper;
        this.projectsService = projectsService;
        this.channelDescriptionsService = channelDescriptionsService;
        this.channelDescriptionFieldMapper = channelDescriptionFieldMapper;
        this.visibleIn = false;
        this.visibleOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showDetailsDialog = false;
        this.importFromFailure = false;
        this.ambientConditionsListColumns = [
            { field: 'ambCondition', header: 'Ambient Condition', width: '20%' },
            { field: 'description', header: 'Reason of Selection', width: 'calc(80% - 25px)' },
        ];
        this.projectsListColumns = [
            {
                header: 'Project',
                field: this.projectFieldMapper.fieldMap['project'],
                filterMatchMode: 'contains'
            },
            {
                header: 'Version',
                field: this.projectFieldMapper.fieldMap['version'],
                filterMatchMode: 'contains'
            },
            {
                header: 'ECU',
                field: this.projectFieldMapper.fieldMap['ecu'],
                filterMatchMode: 'contains'
            },
        ];
        this.loadingProjectsList = false;
    }
    AmbientConditionsComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params['id'];
        this.getAllAmbientConditions(id);
        this.projectsList = [];
        this.checkedProjectsIds = [];
        this.getAllProjects();
        this.getAllChannelDescriptionsExceptFid();
    };
    AmbientConditionsComponent.prototype.getAllProjects = function () {
        var _this = this;
        this.allProjects = [];
        this.projectsService
            .getItems([], '', '', null, null)
            .subscribe(function (result) {
            _this.allProjects = result.data;
        });
    };
    AmbientConditionsComponent.prototype.getAllChannelDescriptionsExceptFid = function () {
        var _this = this;
        this.channelDescriptionOptions = [];
        this.channelDescriptionsService
            .getItems([{ field: this.channelDescriptionFieldMapper.fieldMap.name, value: 'FId', matchMode: 'notStartsWith' }], this.channelDescriptionFieldMapper.fieldMap.name, 'asc', null, null)
            .subscribe(function (result) {
            result.data.map(function (channelDescription) {
                _this.channelDescriptionOptions.push({ value: channelDescription, label: channelDescription.name });
            });
        });
    };
    AmbientConditionsComponent.prototype.getAllAmbientConditions = function (failureId) {
        var _this = this;
        this.dataService.getAmbientConditions(failureId).subscribe(function (result) {
            _this.ambientConditionsList = result['ambientConditions'];
        });
    };
    AmbientConditionsComponent.prototype.close = function () {
        this.visibleIn = false;
        this.visibleOut.emit(false);
    };
    AmbientConditionsComponent.prototype.showDetail = function (ambientCondition) {
        var _this = this;
        this.projectsList = this.allProjects.filter(function (project) { return _this.failure.projects.indexOf(project.id) > -1; });
        for (var _i = 0, _a = this.projectsList; _i < _a.length; _i++) {
            var project = _a[_i];
            this.checkedProjectsIds.push(project.id);
        }
        this.getAllChannelDescriptionsExceptFid();
        this.selectedChannelDescription = null;
        this.ambientCondition = ambientCondition;
        // "clone" ambientCondition to check the "dirty" status on save
        this.ambientConditionPristine = Object.assign({}, ambientCondition);
        this.showDetailsDialog = true;
    };
    AmbientConditionsComponent.prototype.selectedChannelDescriptionChange = function (event) {
        this.ambientCondition.ambCondition = event.value.name;
    };
    AmbientConditionsComponent.prototype.saveAmbientConditionDetails = function () {
        var _this = this;
        // only save changes if form is "dirty"
        if (JSON.stringify(this.ambientCondition) !== JSON.stringify(this.ambientConditionPristine)) {
            var requestData = {
                id: this.ambientConditionPristine.id,
                failureId: this.failure.id,
                description: this.ambientCondition.description,
                comment: this.ambientCondition.comment,
                ambCondition: this.ambientCondition.ambCondition,
            };
            this.dataService.updateAmbientCondition(requestData).subscribe(function (result) {
                _this.ambientConditionPristine = null;
                _this.closeDetailsDialog();
            }, function (error) { alert('An error has occurred!'); });
        }
        else {
            alert('There are no changes to be saved!');
        }
    };
    AmbientConditionsComponent.prototype.closeDetailsDialog = function () {
        // restore ambient condition if form is "dirty"
        if (this.ambientConditionPristine && JSON.stringify(this.ambientCondition) !== JSON.stringify(this.ambientConditionPristine)) {
            console.log('restore');
            this.ambientCondition.id = this.ambientConditionPristine.id;
            this.ambientCondition.failureId = this.ambientConditionPristine.failureId;
            this.ambientCondition.ambCondition = this.ambientConditionPristine.ambCondition;
            this.ambientCondition.description = this.ambientConditionPristine.description;
            this.ambientCondition.comment = this.ambientConditionPristine.comment;
        }
        this.showDetailsDialog = false;
        this.importFromFailure = false;
        this.projectsList = [];
        this.checkedProjectsIds = [];
        this.failureToImportFrom = null;
        this.ambientCondition = null;
        this.ambientConditionPristine = null;
    };
    // TODO: remove after implementation
    AmbientConditionsComponent.prototype.importFromFailureChange = function (event) {
        var _this = this;
        console.log(event);
        alert('TODO...');
        setTimeout(function () { _this.importFromFailure = false; }, 100);
    };
    AmbientConditionsComponent.prototype.importFromFailureClick = function () {
        console.log(this.failureToImportFrom);
        alert('TODO...');
    };
    // projectCheckBoxChanged(projectId: number, checked: boolean) {
    AmbientConditionsComponent.prototype.updateChannelDescriptionOptions = function () {
        // TODO: update channelDescriptionOptions
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AmbientConditionsComponent.prototype, "visibleIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AmbientConditionsComponent.prototype, "visibleOut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__dao_failure__["a" /* Failure */])
    ], AmbientConditionsComponent.prototype, "failure", void 0);
    AmbientConditionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ambient-conditions',
            template: __webpack_require__("./src/app/pages/failure-detail/ambient-conditions/ambient-conditions.component.html"),
            styles: [__webpack_require__("./src/app/pages/failure-detail/ambient-conditions/ambient-conditions.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_failures_service__["a" /* FailuresService */],
            __WEBPACK_IMPORTED_MODULE_3__dao_failure_field_mapper__["a" /* FailureFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_5__dao_project_field_mapper__["a" /* ProjectFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_6__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_7__services_channel_descriptions_service__["a" /* ChannelDescriptionsService */],
            __WEBPACK_IMPORTED_MODULE_8__dao_channel_description_field_mapper__["a" /* ChannelDescriptionFieldMapper */]])
    ], AmbientConditionsComponent);
    return AmbientConditionsComponent;
}());

var AmbientCondition = /** @class */ (function () {
    function AmbientCondition() {
    }
    return AmbientCondition;
}());


/***/ }),

/***/ "./src/app/pages/failure-detail/carb-description/carb-description.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog \r\n  header=\"CARB Table Description\"\r\n  [(visible)]=\"visibleIn\"\r\n  modal=\"modal\"\r\n  [responsive]=\"true\"\r\n  [autoAlign]=\"true\"\r\n  [positionTop]=\"46\"\r\n  [contentStyle]=\"{'width':'99vw', 'max-height':'77vh'}\"\r\n  [closeOnEscape]=\"false\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"false\"\r\n  class=\"carb-description-dialog\"\r\n>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-2\">\r\n      <label for=\"failure-id\">Failure ID</label>\r\n    </div>\r\n    <div class=\"col-10\">\r\n      <input class=\"form-control\" id=\"failure-id\" type=\"text\" pInputText [value]=\"failure?.id\" disabled=true style=\"width: auto;\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-2\">\r\n      <label for=\"automatic-disabling\">Automatic Disabling</label>\r\n    </div>\r\n    <div class=\"col-10\">\r\n      <input class=\"form-control\" id=\"automatic-disabling\" type=\"text\" pInputText [value]=\"automaticDisabling\" style=\"width: 100%;\" disabled=\"true\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row last\">\r\n    <!-- <div class=\"col-1\"> -->\r\n      <!-- up/down buttons -->\r\n    <!-- </div>\r\n    <div class=\"col-11\"> -->\r\n    <div class=\"col-12\">\r\n      <p-table\r\n        [columns]=\"carbDescriptionColumns\"\r\n        [value]=\"carbDescriptionList\"\r\n        [resizableColumns]=\"true\"\r\n        class=\"carb-description-table\"\r\n        (onRowReorder)=\"renumberRows()\"\r\n      >\r\n\r\n        <ng-template pTemplate=\"colgroup\" let-columns>\r\n          <colgroup>\r\n            <col [style.width]=\"'25px'\">\r\n            <col [style.width]=\"'22px'\">\r\n          </colgroup>\r\n          <colgroup>\r\n            <col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\r\n          </colgroup>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr>\r\n            <th colspan=\"2\"></th>\r\n            <th *ngFor=\"let col of columns\" pResizableColumn [pResizableColumnDisabled]=\"col.disableResize\">\r\n              {{ col.header }}\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"body\" let-item let-columns=\"columns\" let-index=\"rowIndex\">\r\n          <tr style=\"font-size: 0.9rem;\" [pReorderableRow]=\"index\">\r\n            <td class=\"row-order-handle\">\r\n              <i class=\"fa fa-bars\" pReorderableRowHandle pTooltip=\"Drag and Drop to reorder\" style=\"cursor: move;\"></i>\r\n            </td>\r\n            <td>\r\n              <button pButton type=\"button\" icon=\"fa-remove\" (click)=\"removeRow(index);\" class=\"ui-button-secondary stripped-button\" style=\"color: #b11f1f; margin: 1px;\" pTooltip=\"Remove row\"></button>\r\n            </td>\r\n            <ng-container *ngFor=\"let col of columns\">\r\n\r\n              <td *ngIf=\"!col.editable\" style=\"text-align: center;\" [ngClass]=\"col.disableResize ? '' : 'ui-resizable-column'\">\r\n                {{ item[col.field] || \"&nbsp;\" }}\r\n              </td>\r\n\r\n              <td *ngIf=\"col.editable && col.type == 'checkbox'\" [ngClass]=\"col.disableResize ? '' : 'ui-resizable-column'\" style=\"text-align: center;\" [pEditableColumn]=\"item\" [pEditableColumnField]=\"col.field\">\r\n                <p-checkbox [(ngModel)]=\"item[col.field]\" binary=\"true\" [style]=\"{'margin-top': '-2px'}\"></p-checkbox>\r\n              </td>\r\n\r\n              <td *ngIf=\"col.editable && col.type == 'text'\" [ngClass]=\"col.disableResize ? '' : 'ui-resizable-column'\" [pEditableColumn]=\"item\" [pEditableColumnField]=\"col.field\">\r\n                <p-cellEditor>\r\n                  <ng-template *ngIf=\"col.type == 'text'\" pTemplate=\"input\">\r\n                    <input type=\"text\" [(ngModel)]=\"item[col.field]\">\r\n                  </ng-template>\r\n                  <ng-template *ngIf=\"col.type == 'checkbox'\" pTemplate=\"input\">\r\n                    <p-checkbox [(ngModel)]=\"item[col.field]\" binary=\"true\"></p-checkbox>\r\n                  </ng-template>\r\n                  <ng-template pTemplate=\"output\">\r\n                    {{ item[col.field] || \"&nbsp;\" }}\r\n                  </ng-template>\r\n                </p-cellEditor>\r\n              </td>\r\n\r\n            </ng-container>\r\n          </tr>\r\n        </ng-template>\r\n\r\n        <ng-template pTemplate=\"emptymessage\" let-columns>\r\n          <tr>\r\n            <td [attr.colspan]=\"columns.length + 2\">\r\n              No CARB Descriptions found for this failure...\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n      </p-table>\r\n      <button\r\n        pButton\r\n        type=\"button\"\r\n        icon=\"fa-plus\"\r\n        label=\"New row\"\r\n        class=\"ui-button-secondary\"\r\n        style=\"font-size: 0.875rem; margin-top: 0.5rem;\"\r\n        (click)=\"addNewRow();\"\r\n        pTooltip=\"Add a new row\"\r\n      ></button>\r\n    </div>\r\n  </div>\r\n  \r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"close()\" label=\"Close\" class=\"ui-button-secondary\"></button>\r\n    <!-- <button type=\"button\" pButton (click)=\"showCloseConfirmDialog=true\" label=\"Close\" class=\"ui-button-secondary\"></button> -->\r\n    <button type=\"button\" pButton (click)=\"saveCarbDescription()\" label=\"Save\" class=\"ui-button-primary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/pages/failure-detail/carb-description/carb-description.component.scss":
/***/ (function(module, exports) {

module.exports = "p-table.carb-description-table td {\n  overflow-wrap: break-word; }\n\np-table.carb-description-table td.row-order-handle {\n  text-align: center;\n  font-size: 1rem; }\n\np-dialog.carb-description-dialog div.row {\n  padding-bottom: 1rem; }\n\np-dialog.carb-description-dialog div.row .last {\n    padding-bottom: 0; }\n\n.stripped-button {\n  border: none;\n  background-color: transparent;\n  vertical-align: middle;\n  color: #373a3c;\n  width: 1rem;\n  height: 1rem; }\n"

/***/ }),

/***/ "./src/app/pages/failure-detail/carb-description/carb-description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarbDescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_failures_service__ = __webpack_require__("./src/app/services/failures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dao_failure_field_mapper__ = __webpack_require__("./src/app/dao/failure-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_failure__ = __webpack_require__("./src/app/dao/failure.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarbDescriptionComponent = /** @class */ (function () {
    function CarbDescriptionComponent(route, router, dataService, fieldMapper) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.visibleIn = false;
        this.visibleOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.carbDescriptionOriginalList = [];
        this.carbDescriptionList = [];
        // this next value is also hardcoded in the legacy app!!!
        this.automaticDisabling = 'fnrSTAutoDecision(Label_A_C = 0 AND fnrSTBitMsk(Label_BitMask_C; Bit Position; 1 = set '
            + '--> disable - 0 = not set --> disable) / generic text)';
        this.carbDescriptionColumns = [
            { field: 'rowNr', header: 'Row', editable: false, width: '3rem', disableResize: true },
            { field: 'notActive', type: 'checkbox', header: 'Not Active', editable: true, width: '3.875rem', disableResize: true },
            { field: 'malfunctionCriteria', type: 'text', header: 'Malfunction Criteria', editable: true },
            { field: 'thresholdValue', type: 'text', header: 'Threshold Value', editable: true },
            { field: 'secondaryParameters', type: 'text', header: 'Secondary Parameters', editable: true },
            { field: 'enableConditions', type: 'text', header: 'Enable Conditions', editable: true },
        ];
    }
    CarbDescriptionComponent.prototype.ngOnInit = function () {
        this.failureId = this.route.snapshot.params['id'];
        this.getAllCarbDescription(this.failureId);
    };
    CarbDescriptionComponent.prototype.getAllCarbDescription = function (failureId) {
        var _this = this;
        this.dataService.getCarbDescriptions(failureId).subscribe(function (result) {
            _this.carbDescriptionOriginalList = result['carbDescriptions'];
            _this.carbDescriptionOriginalList.sort(_this.compareCarbDescriptionsByRowNr);
            // this.carbDescriptionList = Object.assign(this.carbDescriptionList, this.carbDescriptionOriginalList)
            _this.carbDescriptionList = JSON.parse(JSON.stringify(_this.carbDescriptionOriginalList));
        });
    };
    CarbDescriptionComponent.prototype.close = function () {
        this.carbDescriptionList = JSON.parse(JSON.stringify(this.carbDescriptionOriginalList));
        this.visibleIn = false;
        this.visibleOut.emit(false);
    };
    CarbDescriptionComponent.prototype.saveCarbDescription = function () {
        var _this = this;
        if (!this.isListValid(this.carbDescriptionList)) {
            alert('There are invalid rows! Please delete them before saving');
        }
        else {
            // replace null values by empty strings so that api does not "complain"!
            for (var _i = 0, _a = this.carbDescriptionList; _i < _a.length; _i++) {
                var carbDescription = _a[_i];
                carbDescription.notActive = carbDescription.notActive == null ? false : carbDescription.notActive;
                carbDescription.malfunctionCriteria = carbDescription.malfunctionCriteria == null ? '-' : carbDescription.malfunctionCriteria;
                carbDescription.thresholdValue = carbDescription.thresholdValue == null ? '-' : carbDescription.thresholdValue;
                carbDescription.secondaryParameters = carbDescription.secondaryParameters == null ? '-' : carbDescription.secondaryParameters;
                carbDescription.enableConditions = carbDescription.enableConditions == null ? '-' : carbDescription.enableConditions;
            }
            var carbDescriptionsRequest = {
                id: this.failureId,
                carbDescriptions: this.carbDescriptionList,
            };
            this.dataService.updateCarbDescriptions(this.failureId, carbDescriptionsRequest).subscribe(function (result) {
                _this.carbDescriptionOriginalList = JSON.parse(JSON.stringify(_this.carbDescriptionList));
                _this.close();
            }, function (error) { alert('An error has occurred!'); console.log(error); });
        }
    };
    CarbDescriptionComponent.prototype.addNewRow = function () {
        var newCarb = new CarbDescription();
        newCarb.id = 0;
        newCarb.failureId = this.failureId;
        newCarb.rowNr = this.carbDescriptionList.length + 1;
        this.carbDescriptionList.push(newCarb);
    };
    CarbDescriptionComponent.prototype.removeRow = function (index) {
        this.carbDescriptionList.splice(index, 1);
        this.renumberRows();
    };
    // set rowNr for each row accordingly to its index
    CarbDescriptionComponent.prototype.renumberRows = function () {
        for (var idx = 0; idx < this.carbDescriptionList.length; idx++) {
            this.carbDescriptionList[idx].rowNr = idx + 1;
        }
    };
    CarbDescriptionComponent.prototype.compareCarbDescriptionsByRowNr = function (carb1, carb2) {
        return carb1.rowNr > carb2.rowNr ? 1 : (carb1.rowNr < carb2.rowNr ? -1 : 0);
    };
    CarbDescriptionComponent.prototype.isCarbDescriptionValid = function (carbDescription) {
        return (carbDescription.malfunctionCriteria && carbDescription.malfunctionCriteria !== '') ||
            (carbDescription.thresholdValue && carbDescription.thresholdValue !== '') ||
            (carbDescription.secondaryParameters && carbDescription.secondaryParameters !== '') ||
            (carbDescription.enableConditions && carbDescription.enableConditions !== '');
    };
    CarbDescriptionComponent.prototype.isListValid = function (list) {
        return list.every(this.isCarbDescriptionValid);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CarbDescriptionComponent.prototype, "visibleIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CarbDescriptionComponent.prototype, "visibleOut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__dao_failure__["a" /* Failure */])
    ], CarbDescriptionComponent.prototype, "failure", void 0);
    CarbDescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carb-description',
            template: __webpack_require__("./src/app/pages/failure-detail/carb-description/carb-description.component.html"),
            styles: [__webpack_require__("./src/app/pages/failure-detail/carb-description/carb-description.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_failures_service__["a" /* FailuresService */],
            __WEBPACK_IMPORTED_MODULE_3__dao_failure_field_mapper__["a" /* FailureFieldMapper */]])
    ], CarbDescriptionComponent);
    return CarbDescriptionComponent;
}());

var CarbDescription = /** @class */ (function () {
    function CarbDescription() {
    }
    return CarbDescription;
}());


/***/ }),

/***/ "./src/app/pages/failure-detail/carb-fid/carb-fid.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog \r\n  header=\"CARB FID Table\"\r\n  [(visible)]=\"visibleIn\"\r\n  modal=\"modal\"\r\n  [responsive]=\"true\"\r\n  [autoAlign]=\"true\"\r\n  [positionTop]=\"46\"\r\n  [contentStyle]=\"{'width':'60vw', 'max-height':'77vh'}\"\r\n  [closeOnEscape]=\"false\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"false\"\r\n  class=\"carb-fid-dialog\"\r\n>\r\n\r\n  <p-table\r\n    [value]=\"carbFidList\"\r\n    class=\"carb-fid-table\"\r\n  >\r\n\r\n    <ng-template pTemplate=\"header\">\r\n      <tr><th> FID </th></tr>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"body\" let-item>\r\n      <tr style=\"font-size: 0.9rem;\">\r\n        <td pEditableColumn>\r\n          <p-cellEditor>\r\n\r\n            <ng-template pTemplate=\"input\">\r\n              <p-dropdown\r\n                [options]=\"carbFidOptions\"\r\n                [(ngModel)]=\"item.name\"\r\n                appendTo=\"body\"\r\n                (onChange)=\"isDirty = true\"\r\n              ></p-dropdown>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"output\">\r\n              <span pTooltip=\"Click to edit, select the new FID and click enter to finish editing\">{{ item.name || \"&nbsp;\" }}</span>\r\n            </ng-template>\r\n\r\n          </p-cellEditor>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n\r\n    <ng-template pTemplate=\"emptymessage\">\r\n      <tr><td> No CARB FIDs found for this failure... </td></tr>\r\n    </ng-template>\r\n\r\n  </p-table>\r\n  \r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"close()\" label=\"Close\" class=\"ui-button-secondary\"></button>\r\n    <button type=\"button\" pButton (click)=\"saveCarbFids()\" label=\"Save\" class=\"ui-button-primary\" [disabled]=\"!isDirty\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/pages/failure-detail/carb-fid/carb-fid.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/failure-detail/carb-fid/carb-fid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarbFidComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_failures_service__ = __webpack_require__("./src/app/services/failures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dao_failure__ = __webpack_require__("./src/app/dao/failure.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_channel_descriptions_service__ = __webpack_require__("./src/app/services/channel-descriptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dao_channel_description_field_mapper__ = __webpack_require__("./src/app/dao/channel-description-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CarbFidComponent = /** @class */ (function () {
    function CarbFidComponent(route, dataService, channelDescriptionsDataService, channelDescriptionsFieldMapper) {
        this.route = route;
        this.dataService = dataService;
        this.channelDescriptionsDataService = channelDescriptionsDataService;
        this.channelDescriptionsFieldMapper = channelDescriptionsFieldMapper;
        this.visibleIn = false;
        this.visibleOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.carbFidOriginalList = [];
        this.carbFidList = [];
        this.isDirty = false;
    }
    CarbFidComponent.prototype.ngOnInit = function () {
        this.failureId = this.route.snapshot.params['id'];
        this.getCarbFids(this.failureId);
        this.getAllCarbFids();
    };
    CarbFidComponent.prototype.getCarbFids = function (failureId) {
        var _this = this;
        this.dataService.getCarbFids(failureId).subscribe(function (result) {
            result.map(function (item) {
                var itemAsCarbFid = { id: item.fidReactions.id, name: item.fidReactions.fid };
                // avoid duplicates on fid (because the endpoint is returning them!)
                if (!_this.carbFidOriginalList.find(function (carbFid) { return carbFid.name === itemAsCarbFid.name; })) {
                    _this.carbFidOriginalList.push(itemAsCarbFid);
                }
            });
            // this.carbFidOriginalList = <CarbFid[]>result['carbFids'];
            _this.carbFidList = JSON.parse(JSON.stringify(_this.carbFidOriginalList));
        });
    };
    CarbFidComponent.prototype.getAllCarbFids = function () {
        var _this = this;
        this.carbFidOptions = [];
        this.channelDescriptionsDataService
            .getItems([{ field: this.channelDescriptionsFieldMapper.fieldMap.name, value: 'FId_', matchMode: 'startsWith' }], this.channelDescriptionsFieldMapper.fieldMap.name, 'asc', null, null)
            .subscribe(function (result) {
            result.data.map(function (fid) {
                _this.carbFidOptions.push({ value: fid.name, label: fid.name });
            });
        });
    };
    // private onChange(event: any) {
    //   this.isDirty = true;
    //   console.log(event);
    //   console.log(this.carbFidList);
    // }
    CarbFidComponent.prototype.close = function () {
        if (this.isDirty) {
            // restore carbFidList to original
            this.carbFidList = JSON.parse(JSON.stringify(this.carbFidOriginalList));
            this.isDirty = false;
        }
        this.visibleIn = false;
        this.visibleOut.emit(false);
    };
    CarbFidComponent.prototype.saveCarbFids = function () {
        var _this = this;
        var carbFidRequest = {
            id: this.failureId,
            carbFids: this.carbFidList,
        };
        this.dataService.updateCarbFids(this.failureId, carbFidRequest).subscribe(function (result) {
            _this.carbFidOriginalList = JSON.parse(JSON.stringify(_this.carbFidList));
            _this.isDirty = false;
            _this.close();
        }, function (error) { alert('An error has occurred!'); console.log(error); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CarbFidComponent.prototype, "visibleIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], CarbFidComponent.prototype, "visibleOut", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__dao_failure__["a" /* Failure */])
    ], CarbFidComponent.prototype, "failure", void 0);
    CarbFidComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carb-fid',
            template: __webpack_require__("./src/app/pages/failure-detail/carb-fid/carb-fid.component.html"),
            styles: [__webpack_require__("./src/app/pages/failure-detail/carb-fid/carb-fid.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_failures_service__["a" /* FailuresService */],
            __WEBPACK_IMPORTED_MODULE_4__services_channel_descriptions_service__["a" /* ChannelDescriptionsService */],
            __WEBPACK_IMPORTED_MODULE_5__dao_channel_description_field_mapper__["a" /* ChannelDescriptionFieldMapper */]])
    ], CarbFidComponent);
    return CarbFidComponent;
}());

var CarbFid = /** @class */ (function () {
    function CarbFid() {
    }
    return CarbFid;
}());


/***/ }),

/***/ "./src/app/pages/failure-detail/failure-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"container\">\r\n\r\n      <h3>Failure</h3>\r\n\r\n      <app-dynamic-form\r\n        [vm]=\"item\"\r\n        [vmDefinition]=\"itemDefinition\"\r\n        [errorMessage]=\"errorMessage\"\r\n        [hasSaveButton]=\"lockedByCurrentUser\"\r\n        (cancel)=\"cancel()\"\r\n        (save)=\"save($event)\"\r\n        [extraButtons]=\"extraButtons\"\r\n        (extraAction)=\"extraAction($event)\"\r\n      ></app-dynamic-form>\r\n\r\n      <p-dialog header=\"Warning\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n        <span>{{ dialogMessage }}</span>\r\n        <p-footer>\r\n          <button type=\"button\" pButton icon=\"fa-unlock\" (click)=\"dialogUnlock()\" label=\"Unlock it\" class=\"ui-button-success\"></button>\r\n          <button type=\"button\" pButton icon=\"fa-lock\" (click)=\"dialogKeepLock()\" label=\"Keep it locked\" class=\"ui-button-danger\"></button>\r\n        </p-footer>\r\n      </p-dialog>\r\n\r\n      <app-fault-description [visibleIn]=\"showFaultDescriptionDialog\" (visibleOut)=\"showFaultDescriptionDialog=$event\"></app-fault-description>\r\n      <app-ambient-conditions [visibleIn]=\"showAmbientConditionsDialog\" (visibleOut)=\"showAmbientConditionsDialog=$event\" [failure]=\"item\"></app-ambient-conditions>\r\n      <app-carb-description [visibleIn]=\"showCarbDescriptionDialog\" (visibleOut)=\"showCarbDescriptionDialog=$event\" [failure]=\"item\"></app-carb-description>\r\n      <app-carb-fid [visibleIn]=\"showCarbFidDialog\" (visibleOut)=\"showCarbFidDialog=$event\" [failure]=\"item\"></app-carb-fid>\r\n\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/failure-detail/failure-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/failure-detail/failure-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailureDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_failures_service__ = __webpack_require__("./src/app/services/failures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_failure_field_mapper__ = __webpack_require__("./src/app/dao/failure-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FailureDetailComponent = /** @class */ (function () {
    function FailureDetailComponent(route, router, dataService, fieldMapper) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.itemDefinition = [
            {
                key: this.fieldMapper.fieldMap['id'],
                label: 'Id',
                type: 'number',
                hidden: true,
                isId: true,
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['status'],
                label: '',
                type: 'label',
            },
            {
                key: this.fieldMapper.fieldMap['cameTitle'],
                label: 'Full Name',
                type: 'text',
                disabled: true,
            },
            {
                key: this.fieldMapper.fieldMap['name'],
                label: 'Failure Name',
                type: 'text',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['faultTitle'],
                label: 'Failure Title',
                type: 'text',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['isCarbRelevant'],
                label: 'Relevant for CARB OBD Summary Table',
                type: 'checkbox',
            },
            {
                key: this.fieldMapper.fieldMap['failureGroupId'],
                label: 'Failure Group',
                type: 'number',
            },
            {
                key: this.fieldMapper.fieldMap['componentId'],
                label: 'Component',
                type: 'number',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['responsibleId'],
                label: 'Responsible',
                type: 'number',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['carbComponentId'],
                label: 'CARB Standardized Component',
                type: 'number',
            },
            {
                key: this.fieldMapper.fieldMap['monitorStrategyDescription'],
                label: 'Monitoring Strategy Description',
                type: 'textarea',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['timeRequired'],
                label: 'Time Required',
                type: 'textarea',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['comment'],
                label: 'Comment',
                type: 'textarea',
            },
        ];
        this.showDialog = false;
        this.lockedByCurrentUser = false;
        this.extraButtons = [
            { label: 'Fault Description', actionId: 'faultDescription', disabled: false },
            { label: 'Ambient Conditions', actionId: 'ambientConditions', disabled: false },
            { label: 'CARB Description', actionId: 'carbDescription', disabled: false },
            { label: 'CARB FID', actionId: 'carbFid', disabled: false },
        ];
        this.showFaultDescriptionDialog = false;
        this.showAmbientConditionsDialog = false;
        this.showCarbDescriptionDialog = false;
        this.showCarbFidDialog = false;
        this.showFnrFunctionsDescriptionDialog = false;
        this.faultDescriptionTabs = [
            { label: 'General Remark' },
            { label: 'Test Condition' },
            { label: 'Fault Detection' },
            { label: 'Defect Debouncing' },
            { label: 'Fault Healing' },
            { label: 'Healing Debouncing' },
            { label: 'System Reaction' },
            { label: 'Fault Disabling' },
            { label: 'Fault Cause' },
            { label: 'Fault Repair' },
        ];
    }
    FailureDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isNew = this.route.snapshot.url[1].path === 'new';
        if (this.isNew) {
            this.lockedByCurrentUser = true;
            this.item = {
                id: 0,
                name: null,
                faultTitle: null,
                failureGroupId: null,
                comment: null,
                cameTitle: null,
                componentId: null,
                carbComponentId: null,
                monitorStrategyDescription: null,
                timeRequired: null,
                responsibleId: null,
                isCarbRelevant: null,
            };
        }
        else {
            var id = this.route.snapshot.params['id'];
            var statusIndex_1 = this.itemDefinition.findIndex(function (item) { return item.key === _this.fieldMapper.fieldMap['status']; });
            this.dataService.lockItem(id).subscribe(function (success) {
                _this.lockedByCurrentUser = true;
                _this.itemDefinition[statusIndex_1].label = 'Locked by you';
                _this.getItem();
            }, function (error) {
                if (error.status === 409) {
                    _this.lockedByCurrentUser = false;
                    _this.itemDefinition[statusIndex_1].label = 'Locked by another user';
                    _this.getItem();
                }
            });
        }
    };
    FailureDetailComponent.prototype.getItem = function () {
        var _this = this;
        this.dataService.getItem(this.route.snapshot.params['id'])
            .subscribe(function (item) {
            _this.item = item;
        });
    };
    FailureDetailComponent.prototype.cancel = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].failures]);
    };
    FailureDetailComponent.prototype.save = function (item) {
        if (this.isNew) {
            this.create(item);
        }
        else {
            this.update(item);
        }
        this.cancel();
    };
    FailureDetailComponent.prototype.update = function (item) {
        this.dataService.editItem(item.id, item)
            .subscribe(function (x) {
            console.log('failure ' + item.id + ' updated');
        });
    };
    FailureDetailComponent.prototype.create = function (item) {
        // TODO: (No 'Access-Control-Allow-Origin' header is present on the requested resource)
        this.dataService.addItem(item)
            .subscribe(function (x) {
            console.log('failure ' + item.id + ' created');
        });
    };
    FailureDetailComponent.prototype.dialogKeepLock = function () {
        this.showDialog = false;
        this.lockedByCurrentUser = false;
        this.cancel();
    };
    FailureDetailComponent.prototype.dialogUnlock = function () {
        var _this = this;
        this.showDialog = false;
        this.dataService.unlockItem(this.route.snapshot.params['id']).subscribe(function (success) {
            _this.lockedByCurrentUser = false;
            _this.cancel();
        }, function (error) {
            console.log('error unlocking');
        });
    };
    FailureDetailComponent.prototype.canDeactivate = function () {
        if (!this.lockedByCurrentUser) {
            return true;
        }
        this.dialogMessage = 'You have locked this failure, which prevents other users from editing it! What would you like to do?';
        this.showDialog = true;
    };
    FailureDetailComponent.prototype.extraAction = function (actionId) {
        if (actionId === 'faultDescription') {
            this.showFaultDescriptionDialog = true;
        }
        else if (actionId === 'ambientConditions') {
            this.showAmbientConditionsDialog = true;
        }
        else if (actionId === 'carbDescription') {
            this.showCarbDescriptionDialog = true;
        }
        else if (actionId === 'carbFid') {
            this.showCarbFidDialog = true;
        }
    };
    FailureDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-failure-detail',
            template: __webpack_require__("./src/app/pages/failure-detail/failure-detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/failure-detail/failure-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_failures_service__["a" /* FailuresService */],
            __WEBPACK_IMPORTED_MODULE_4__dao_failure_field_mapper__["a" /* FailureFieldMapper */]])
    ], FailureDetailComponent);
    return FailureDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/failure-detail/fault-description/fault-description.component.html":
/***/ (function(module, exports) {

module.exports = "<p-dialog \r\n  header=\"Fault Description\"\r\n  [(visible)]=\"visibleIn\"\r\n  modal=\"modal\"\r\n  [responsive]=\"true\"\r\n  [autoAlign]=\"true\"\r\n  [positionTop]=\"46\"\r\n  [contentStyle]=\"{'width':'99vw', 'max-height':'77vh'}\"\r\n  [closeOnEscape]=\"false\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"false\"\r\n>\r\n\r\n  <p-tabView class=\"fault-description-tabs\" [style]=\"{'width': 'max-content', 'min-width': '-webkit-fill-available'}\">\r\n    <p-tabPanel *ngFor=\"let tab of faultDescriptionTabs; let tabIdx = index\" [header]=\"tab.label\" [selected]=\"tabIdx==0\" style=\"padding-right: 0;\">\r\n\r\n      <div class=\"row\" style=\"margin: 0;\">\r\n        <p-card\r\n          [subtitle]=\"tab.cards[0] && tab.cards[0][0]?.inputLabel\"\r\n          [style]=\"{width: 'fit-content', 'background-color': '#fafafc', 'padding-right': '0.15rem', 'padding-left': '0.15rem', 'box-shadow': '#e8e8e8 1px 1px 1px 0px'}\"\r\n        >\r\n          <div style=\"padding-top: .5rem; width: 22rem; line-height: 1.2; font-size: 0.9rem;\">\r\n            <textarea pInputTextarea\r\n              class=\"form-control\"\r\n              [id]=\"tab.id + '_comment'\"\r\n              [rows]=\"7\"\r\n              style=\"padding: 0.25rem 0.375rem; line-height: 1.2; font-size: 0.9rem;\"\r\n              [(ngModel)]=\"tab.cards[0] && tab.cards[0][0]?.conditions[0].text\"\r\n            ></textarea>\r\n          </div>\r\n          <div style=\"margin-top: 0.75rem\">\r\n            <ng-container *ngTemplateOutlet=\"addNodeSelect; context:{context: {condition: tab.cards[0] && tab.cards[0][0]?.conditions[0], levelIdx: 0}}\"></ng-container>\r\n          </div>\r\n        </p-card>\r\n\r\n        <p-card\r\n          *ngIf=\"tab.id == 'testCondition'\"\r\n          subtitle=\"FID as release condition\"\r\n          [style]=\"{width: 'fit-content', 'background-color': '#fafafc', 'padding-right': '0.15rem', 'padding-left': '0.15rem', 'margin-left': '1rem', 'box-shadow': '#e8e8e8 1px 1px 1px 0px'}\"\r\n        >\r\n          <div style=\"margin-top: 1rem;\">\r\n            <p-dropdown\r\n              [options]=\"fidConditions\"\r\n              placeholder=\"Select a FID to add as condition...\"\r\n              [(ngModel)]=\"selectedFidCondition\"\r\n              [style]=\"{'width': '42.5rem'}\"\r\n            ></p-dropdown>\r\n            <button\r\n              pButton\r\n              type=\"button\"\r\n              icon=\"fa-plus\"\r\n              class=\"ui-button-primary\"\r\n              style=\"float: right; margin-top: 0.1rem;\"\r\n              [disabled]=\"selectedFidCondition==null\"\r\n              (click)=\"addSelectedFidCondition(tabIdx)\"\r\n              pTooltip=\"Add selected FID as condition\"\r\n            ></button>\r\n          </div>\r\n          <div style=\"margin-top: 1.25rem; font-size: smaller;\">\r\n            <p-table class=\"fid-releases-table\" [value]=\"fidReleaseConditions\" [style]=\"{width:'45rem'}\">\r\n              <ng-template pTemplate=\"header\">\r\n                <tr>\r\n                  <th style=\"width: 3rem;\"></th>\r\n                  <th style=\"width: 15rem;\">FID</th>\r\n                  <th style=\"width: 3.5rem;\">Inverted</th>\r\n                  <th style=\"width: 23.5rem;\">Condition</th>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template pTemplate=\"body\" let-item>\r\n                <tr (dblclick)=\"onFidReleaseRowDblClick(item)\" style=\"word-wrap: break-word;\">\r\n                  <td class=\"fid-conditions-actions\">\r\n                    <button\r\n                      pButton\r\n                      type=\"button\"\r\n                      icon=\"fa-edit\"\r\n                      class=\"ui-button-secondary\"\r\n                      (click)=\"editFidCondition(item)\"\r\n                    ></button>\r\n                    <button\r\n                      pButton\r\n                      type=\"button\"\r\n                      icon=\"fa-trash\"\r\n                      class=\"ui-button-secondary\"\r\n                      (click)=\"removeFidCondition(item)\"\r\n                    ></button>\r\n                  </td>\r\n                  <td>{{ item.name }}</td>\r\n                  <td style=\"text-align: center;\">\r\n                    <p-checkbox\r\n                      binary=\"true\"\r\n                      [(ngModel)]=\"item.inverted\"\r\n                    ></p-checkbox>\r\n                  </td>\r\n                  <td>{{ item.condition }}</td>\r\n                </tr>\r\n              </ng-template>\r\n              <ng-template pTemplate=\"emptymessage\">\r\n                <tr>\r\n                  <td></td>\r\n                  <td [attr.colspan]=\"3\" style=\"color: #898989;\">No conditions added...</td>\r\n                </tr>\r\n              </ng-template>\r\n            </p-table>\r\n            <div style=\"color: #898989; text-align: right; margin-top: 0.5em;\">Inverted: FID set to release the monitor</div>\r\n          </div>\r\n        </p-card>\r\n      </div>\r\n\r\n      <ng-container *ngFor=\"let levelCards of tab.cards; let levelIdx = index\">\r\n        <ng-container *ngIf=\"levelIdx > 0\"> <!-- skip the root card! -->\r\n          <!-- new row for each level -->\r\n          <div class=\"row\" style=\"margin: 0;\">\r\n            <ng-container *ngFor=\"let card of levelCards; let cardIdx = index; let isLastCardInLevel = last\">\r\n              <ng-container *ngIf=\"card.conditions?.length > 0\"> <!-- skip if there are no conditions! -->\r\n                <ng-container *ngTemplateOutlet=\"labelDescriptionCard; context:{context: {card: card, levelIdx: levelIdx, cardIdx: cardIdx, isLastCardInLevel: isLastCardInLevel}}\"></ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n          </div>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <!-- Template for nodes (label cards) -->\r\n      <ng-template #labelDescriptionCard let-ctx=\"context\">\r\n        <p-card [style]=\"{'margin-top': '1rem', 'margin-right': ctx.isLastCardInLevel ? '0' : '0.75rem', 'width': 'fit-content', 'background-color': '#fafafc', 'display': 'inline-block', 'box-shadow': '#e8e8e8 1px 1px 1px 0px'}\">\r\n          <div class=\"ui-card-subtitle\">\r\n            <span style=\"margin-right: 0.5rem;\">{{ ctx.card.inputLabel }}</span>\r\n            <button\r\n              pButton\r\n              type=\"button\"\r\n              icon=\"fa-exchange\"\r\n              class=\"ui-button-secondary\"\r\n              style=\"width: 1.5rem; height: 1.5rem; font-size: 0.875rem;\"\r\n              (click)=\"openChangeDecisionLabelDialog(tabIdx, ctx.levelIdx, ctx.cardIdx)\"\r\n              pTooltip=\"Change Decision Label\"\r\n            ></button>\r\n            <button\r\n              pButton\r\n              type=\"button\"\r\n              icon=\"fa-plus\"\r\n              class=\"ui-button-success\"\r\n              style=\"width: 1.5rem; height: 1.5rem; font-size: 0.875rem; float: right; margin-right: 0.25rem;\"\r\n              (click)=\"addConditionBlock(tabIdx, ctx.levelIdx, ctx.cardIdx)\"\r\n              pTooltip=\"Add additional branch to node\"\r\n            ></button>\r\n          </div>\r\n          <div style=\"margin: -1rem; margin-top: 0; overflow: auto; padding: 0.25rem 0 0 15px; flex-wrap: nowrap; display: -webkit-box; line-height: 1.2; font-size: 0.9rem;\">\r\n            <ng-container *ngFor=\"let condition of ctx.card.conditions; let conditionIdx = index\">\r\n              <ng-container *ngTemplateOutlet=\"labelDescriptionCondition; context:{context: {condition: condition, levelIdx: ctx.levelIdx, cardIdx: ctx.cardIdx, conditionIdx: conditionIdx}}\"></ng-container>\r\n            </ng-container>\r\n          </div>\r\n        </p-card>\r\n      </ng-template>\r\n\r\n      <!-- Template for branches (conditions) -->\r\n      <ng-template #labelDescriptionCondition let-ctx=\"context\">\r\n        <div style=\"margin-right: 15px; width: 22rem;\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div style=\"float: right\">\r\n                <button\r\n                  pButton\r\n                  type=\"button\"\r\n                  icon=\"fa-trash\"\r\n                  class=\"ui-button-danger\"\r\n                  style=\"width: 1.5rem; height: 1.5rem; margin-bottom: .5rem;\"\r\n                  (click)=\"removeConditionBlock(tabIdx, ctx.levelIdx, ctx.cardIdx, ctx.conditionIdx)\"\r\n                  pTooltip=\"Delete branch from node\"\r\n                ></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-sm-12 col-md-3\" style=\"padding-right: 0.5rem;\">\r\n              <p-dropdown\r\n                [options]=\"comparissonOperators\"\r\n                [style]=\"{'width': '100%'}\"\r\n                [(ngModel)]=\"ctx.condition.operator\"\r\n              ></p-dropdown>\r\n            </div>\r\n            <div class=\"form-group col-sm-12 col-md-9 valueInput\" style=\"padding-left: 0;\">\r\n              <input type=\"text\" pInputText [(ngModel)]=\"ctx.condition.value\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <textarea pInputTextarea\r\n                class=\"form-control\"\r\n                [id]=\"tab.id + '_comment'\"\r\n                [rows]=\"5\"\r\n                style=\"padding: 0.25rem 0.375rem; line-height: 1.2; font-size: 0.9rem;\"\r\n                [(ngModel)]=\"ctx.condition.text\"\r\n              ></textarea>\r\n            </div>\r\n          </div>\r\n          <div style=\"margin-top: 0.75rem; margin-bottom: 1rem;\">\r\n            <ng-container *ngTemplateOutlet=\"addNodeSelect; context:{context: {condition: ctx.condition, levelIdx: ctx.levelIdx}}\"></ng-container>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    \r\n      <!-- Template for new node selection (select label and button to add it) -->\r\n      <ng-template #addNodeSelect let-ctx=\"context\">\r\n        <!-- {{ctx|json}} -->\r\n        <div class=\"label-decision-selector\">\r\n          <p-autoComplete\r\n            [(ngModel)]=\"ctx?.condition && ctx?.condition.outputLabel\"\r\n            [suggestions]=\"filteredLabelDescriptions\"\r\n            placeholder=\"Start typing a Label name to add as node...\"\r\n            [minLength]=\"1\"\r\n            [dropdown]=\"false\"\r\n            [autoHighlight]=\"true\"\r\n            [forceSelection]=\"true\"\r\n            size=\"37\"\r\n            [disabled]=\"labelDescriptionsSearchDisabled\"\r\n            (completeMethod)=\"filterLabelDescriptions($event.query)\"\r\n            (onClear)=\"ctx?.condition.outputLabel=null\"\r\n            appendTo=\"body\"\r\n          ></p-autoComplete>\r\n          <button\r\n            pButton\r\n            type=\"button\"\r\n            icon=\"fa-plus\"\r\n            class=\"ui-button-primary\"\r\n            style=\"width: 1.5rem; height: 1.5rem; font-size: 0.875rem; float: right; margin-top: 0.1rem;\"\r\n            pTooltip=\"Add new node for the selected Label Description\"\r\n            [disabled]=\"!ctx?.condition?.outputLabel || ctx?.condition?.outputLabel?.length == 0 || labelDescriptionsSearchDisabled\"\r\n            (click)=\"addSelectedLabelDescriptionBlock(tabIdx, ctx.levelIdx + 1, ctx.condition)\"\r\n          ></button>\r\n        </div>\r\n      </ng-template>\r\n\r\n    </p-tabPanel>\r\n  </p-tabView>\r\n  \r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-question-circle\" iconPos=\"right\" (click)=\"showFnrFunctionsDescriptionDialog=true\" label=\"FnR Functions Description\" class=\"ui-button-secondary\" style=\"float:left;\"></button>\r\n    <button type=\"button\" pButton icon=\"fa-question-circle\" iconPos=\"right\" (click)=\"showBitSyntaxDialog=true\" label=\"Bit-Decision syntax\" class=\"ui-button-secondary\" style=\"float:left; margin-left: 0.25rem;\"></button>\r\n    <button type=\"button\" pButton (click)=\"showCloseConfirmDialog=true\" label=\"Close\" class=\"ui-button-secondary\"></button>\r\n    <button type=\"button\" pButton (click)=\"saveFaultDescriptions()\" label=\"Save\" class=\"ui-button-primary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!-- Additional FID Condition dialog -->\r\n<p-dialog header=\"Additional FID Condition\" modal=\"modal\" [(visible)]=\"showFidConditionDialog\" [responsive]=\"true\" [autoAlign]=\"true\" [contentStyle]=\"{'max-height':'60vh', 'width':'90vw'}\">\r\n  <p-table [value]=\"fidConditionRows\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th>Label</th>\r\n        <th style=\"width:8%\">Rule</th>\r\n        <th style=\"width:30%\">Value</th>\r\n        <th style=\"width:8%\">Link</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-rowData>\r\n      <tr style=\"font-size: 0.9rem;\">\r\n        <!-- label -->\r\n        <td pEditableColumn>\r\n          <p-cellEditor>\r\n            <ng-template pTemplate=\"input\">\r\n              <p-autoComplete\r\n                [(ngModel)]=\"rowData.label\"\r\n                [suggestions]=\"filteredLabelDescriptions\"\r\n                placeholder=\"Start typing a Label Description name...\"\r\n                [minLength]=\"1\"\r\n                [dropdown]=\"false\"\r\n                [autoHighlight]=\"true\"\r\n                [forceSelection]=\"true\"\r\n                (completeMethod)=\"filterLabelDescriptions($event.query)\"\r\n                (onClear)=\"rowData.label=null\"\r\n              ></p-autoComplete>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"output\">\r\n                {{ rowData.label || \"&nbsp;\" }}\r\n            </ng-template>\r\n          </p-cellEditor>\r\n        </td>\r\n        <!-- rule -->\r\n        <td pEditableColumn>\r\n          <p-cellEditor>\r\n            <ng-template pTemplate=\"input\">\r\n              <p-dropdown\r\n                [options]=\"rules\"\r\n                [(ngModel)]=\"rowData.rule\"\r\n              ></p-dropdown>\r\n                <!-- [style]=\"{'width': '42.5rem'}\" -->\r\n            </ng-template>\r\n            <ng-template pTemplate=\"output\">\r\n              {{ rowData.rule || \"&nbsp;\" }}\r\n            </ng-template>\r\n          </p-cellEditor>\r\n        </td>\r\n        <!-- value -->\r\n        <td pEditableColumn>\r\n          <p-cellEditor>\r\n            <ng-template pTemplate=\"input\">\r\n              <input type=\"text\" [(ngModel)]=\"rowData.value\">\r\n            </ng-template>\r\n            <ng-template pTemplate=\"output\">\r\n              {{ rowData.value || \"&nbsp;\" }}\r\n            </ng-template>\r\n          </p-cellEditor>\r\n        </td>\r\n        <!-- link -->\r\n        <td pEditableColumn>\r\n          <p-cellEditor>\r\n            <ng-template pTemplate=\"input\">\r\n              <p-dropdown\r\n                [options]=\"links\"\r\n                [(ngModel)]=\"rowData.link\"\r\n                [showClear]=\"true\"\r\n              ></p-dropdown>\r\n                <!-- [style]=\"{'width': '42.5rem'}\" -->\r\n            </ng-template>\r\n            <ng-template pTemplate=\"output\">\r\n              {{ rowData.link || \"&nbsp;\" }}\r\n            </ng-template>\r\n          </p-cellEditor>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n  <div style=\"margin-top: 0.5rem; text-align: right;\">\r\n    <button type=\"button\" pButton (click)=\"updateFidConditionText()\" label=\"Update\" class=\"ui-button-success\"></button>\r\n  </div>\r\n  <div>\r\n    <p-checkbox binary=\"true\" [(ngModel)]=\"manualManipulation\"></p-checkbox>\r\n    <label>Manual Manipulation (use only to change an array position)</label>\r\n  </div>\r\n  <div>\r\n    <input type=\"text\" pInputText [(ngModel)]=\"fidConditionText\" [disabled]=\"!manualManipulation\" style=\"width:100%\">\r\n  </div>\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"showFidConditionDialog=false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    <button type=\"button\" pButton (click)=\"saveFidCondition()\" label=\"Apply\" class=\"ui-button-primary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!-- FnR specific functions dialog -->\r\n<p-dialog header=\"Description for usage of FnR specific functions\" modal=\"modal\" [(visible)]=\"showFnrFunctionsDescriptionDialog\" [responsive]=\"true\" [autoAlign]=\"true\" [contentStyle]=\"{'max-height':'60vh', 'width':'90vw'}\">\r\n  <p-table [value]=\"functionsDescriptionRows\">\r\n    <ng-template pTemplate=\"header\">\r\n      <tr>\r\n        <th style=\"width:25%\">Function Name</th>\r\n        <th style=\"width:75%\">Structure</th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-description>\r\n      <tr *ngIf=\"description.split\">\r\n        <!-- <th colspan=\"2\"><hr/></th> -->\r\n        <th colspan=\"2\">&nbsp;</th>\r\n      </tr>\r\n      <tr *ngIf=\"!description.split\" style=\"font-size: smaller\">\r\n        <td style=\"font-weight:bold\">{{ description.name }}</td>\r\n        <td [innerHTML]=\"description.structure\"></td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n  <p-footer>\r\n    <span style=\"float: left;\">See script details on <a href=\"http://msdn2.microsoft.com/en-us/library/t895bwkh(VS.71).aspx\" target=\"_blank\" style=\"color: #007bff !important;\">MSDN</a>...</span>\r\n    <button type=\"button\" pButton (click)=\"showFnrFunctionsDescriptionDialog=false\" label=\"Close\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!-- Bit-Decision syntax dialog -->\r\n<p-dialog header=\"Bit-Decision syntax\" modal=\"modal\" [(visible)]=\"showBitSyntaxDialog\" [responsive]=\"true\" [autoAlign]=\"true\">\r\n  <p>The value field contains the bit positions, which can be true or false ( ! ). To mark a bit</p>\r\n  <p>Example: if the value is <i>\"0; 2; !3\"</i>, bit0 and bit2 must be <i>true</i> and bit3 <i>false</i></p>\r\n  <p-footer>\r\n    <button type=\"button\" pButton (click)=\"showBitSyntaxDialog=false\" label=\"Close\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!-- Attention dialog -->\r\n<p-dialog header=\"Attention\" [(visible)]=\"showAttentionDialog\" modal=\"modal\" [responsive]=\"true\">\r\n  <span>{{ attentionMessage }}</span>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"showAttentionDialog=false\" label=\"Close\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!-- Change decision label dialog -->\r\n<p-dialog header=\"Change Decision Label\" [(visible)]=\"showChangeLabelDialog\" modal=\"modal\" [responsive]=\"true\" [autoAlign]=\"true\" [contentStyle]=\"{'padding':'2rem'}\">\r\n  <div class=\"form-group\">\r\n    <label for=\"current-decision-label\">Current Decision Label</label>\r\n    <input pInputText type=\"text\" class=\"form-control\" id=\"current-decision-label\" [(ngModel)]=\"changeLabelDialogParams.currentDecisionLabel\" [disabled]=\"true\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"new-decision-label\">New Decision Label</label>\r\n    <div class=\"primeng-form-control\">\r\n      <p-autoComplete\r\n        id=\"new-decision-label\"\r\n        [(ngModel)]=\"changeLabelDialogParams && changeLabelDialogParams.newDecisionLabel\"\r\n        [suggestions]=\"filteredLabelDescriptions\"\r\n        placeholder=\"Start typing a Label name to add as node...\"\r\n        [minLength]=\"1\"\r\n        [dropdown]=\"false\"\r\n        [autoHighlight]=\"true\"\r\n        [forceSelection]=\"true\"\r\n        size=\"60\"\r\n        [disabled]=\"labelDescriptionsSearchDisabled\"\r\n        (completeMethod)=\"filterLabelDescriptions($event.query)\"\r\n        (onClear)=\"changeLabelDialogParams && changeLabelDialogParams.newDecisionLabel=''\"\r\n        appendTo=\"body\"\r\n      ></p-autoComplete>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <button\r\n      pButton\r\n      type=\"button\"\r\n      (click)=\"changeDecisionLabel(changeLabelDialogParams.tabIdx, changeLabelDialogParams.levelIdx, changeLabelDialogParams.cardIdx)\"\r\n      label=\"OK\"\r\n      class=\"ui-button-primary\"\r\n      [disabled]=\"changeLabelDialogParams?.newDecisionLabel?.length == 0 || labelDescriptionsSearchDisabled\"\r\n    ></button>\r\n    <button type=\"button\" pButton icon=\"fa-close\" (click)=\"closeChangeDecisionLabelDialog()\" label=\"Close\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n<!-- Close confirm dialog -->\r\n<p-dialog header=\"Confirm\" [(visible)]=\"showCloseConfirmDialog\" modal=\"modal\" [responsive]=\"true\">\r\n  <span>Are you sure you want to close this page?</span>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"showCloseConfirmDialog=false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n    <button pButton type=\"button\" (click)=\"close()\" label=\"Yes\" class=\"ui-button-primary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/pages/failure-detail/fault-description/fault-description.component.scss":
/***/ (function(module, exports) {

module.exports = ".fault-description-tabs .form-group {\n  margin-bottom: .5rem; }\n\n.valueInput .ui-inputtext {\n  width: 100% !important; }\n\np-table.fid-releases-table th {\n  padding: 0.2rem 0.25rem !important; }\n\np-table.fid-releases-table td.fid-conditions-actions {\n  text-align: center; }\n\np-table.fid-releases-table td.fid-conditions-actions .ui-button {\n    border: none;\n    background-color: transparent;\n    width: 1rem;\n    height: 1rem;\n    vertical-align: middle; }\n\n.ui-autocomplete-panel .ui-autocomplete-list-item {\n  padding: 0 !important; }\n"

/***/ }),

/***/ "./src/app/pages/failure-detail/fault-description/fault-description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaultDescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fnr_functions_description__ = __webpack_require__("./src/app/pages/failure-detail/fault-description/fnr-functions-description.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_failures_service__ = __webpack_require__("./src/app/services/failures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_failure_field_mapper__ = __webpack_require__("./src/app/dao/failure-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_label_descriptions_service__ = __webpack_require__("./src/app/services/label-descriptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_channel_descriptions_service__ = __webpack_require__("./src/app/services/channel-descriptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dao_channel_description_field_mapper__ = __webpack_require__("./src/app/dao/channel-description-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FaultDescriptionComponent = /** @class */ (function () {
    function FaultDescriptionComponent(route, router, dataService, labeDescriptionsDataService, fidConditionsDataService, fidConditionFieldMapper, fieldMapper) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.labeDescriptionsDataService = labeDescriptionsDataService;
        this.fidConditionsDataService = fidConditionsDataService;
        this.fidConditionFieldMapper = fidConditionFieldMapper;
        this.fieldMapper = fieldMapper;
        this.visibleIn = false;
        this.visibleOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showChangeLabelDialog = false;
        this.changeLabelDialogParams = {
            tabIdx: null,
            levelIdx: null,
            cardIdx: null,
            currentDecisionLabel: '',
            newDecisionLabel: '',
        };
        this.showAttentionDialog = false;
        this.attentionMessage = '';
        this.comparissonOperators = [
            { label: '=', value: '=' },
            { label: '<', value: '<' },
            { label: '>', value: '>' },
            { label: '<=', value: '<=' },
            { label: '>=', value: '>=' },
            { label: '<>', value: '<>' },
            { label: 'Bit', value: 'Bit' },
        ];
        this.showBitSyntaxDialog = false;
        this.showFnrFunctionsDescriptionDialog = false;
        this.functionsDescriptionRows = __WEBPACK_IMPORTED_MODULE_2__fnr_functions_description__["a" /* fnrFunctionsDescription */];
        this.showCloseConfirmDialog = false;
        this.labelDescriptionsSearchDisabled = true;
        this.fidConditions = [];
        this.fidReleaseConditions = [];
        this.currentFidReleaseCondition = null;
        this.showFidConditionDialog = false;
        this.manualManipulation = false;
        this.fidConditionText = '';
        this.rules = [
            // { label: '', value: null },
            { label: '=', value: '=' },
            { label: '<', value: '<' },
            { label: '>', value: '>' },
            { label: '<=', value: '<=' },
            { label: '>=', value: '>=' },
            { label: '<>', value: '<>' },
            { label: 'Bit', value: 'Bit' },
            { label: 'Bit!', value: 'Bit!' },
        ];
        this.links = [
            { label: '', value: null },
            { label: 'AND', value: 'AND' },
            { label: 'OR', value: 'OR' },
        ];
        this.fidConditionRows = [
            {
                label: null,
                rule: null,
                value: null,
                link: null,
            }
        ];
    }
    FaultDescriptionComponent.prototype.ngOnInit = function () {
        this.resetFaultDescriptionTabs();
        this.failureId = this.route.snapshot.params['id'];
        this.getAllFaultDescriptions(this.failureId);
        this.getAllLabelDescriptions();
        this.getAllFidConditions();
    };
    FaultDescriptionComponent.prototype.resetFaultDescriptionTabs = function () {
        this.faultDescriptionTabs = [
            { id: 'generalRemark', label: 'General Remark', cards: [] },
            { id: 'testCondition', label: 'Test Condition', cards: [] },
            { id: 'faultDetection', label: 'Fault Detection', cards: [] },
            { id: 'defectDebouncin', label: 'Defect Debouncing', cards: [] },
            { id: 'faultHealing', label: 'Fault Healing', cards: [] },
            { id: 'healingDebouncing', label: 'Healing Debouncing', cards: [] },
            { id: 'systemReaction', label: 'System Reaction', cards: [] },
            { id: 'faultDisabling', label: 'Fault Disabling', cards: [] },
            { id: 'faultCause', label: 'Fault Cause', cards: [] },
            { id: 'faultRepair', label: 'Fault Repair', cards: [] },
        ];
        this.cardPositionByTabAndLabel = [];
        for (var idx = 0; idx < this.faultDescriptionTabs.length; idx++) {
            this.cardPositionByTabAndLabel[idx] = [];
        }
    };
    FaultDescriptionComponent.prototype.close = function () {
        this.visibleIn = false;
        this.showCloseConfirmDialog = false;
        this.showFnrFunctionsDescriptionDialog = false;
        this.visibleOut.emit(false);
    };
    FaultDescriptionComponent.prototype.saveFaultDescriptions = function () {
        var _this = this;
        var faultDescriptionsRequest = { id: this.failureId };
        for (var _i = 0, _a = this.faultDescriptionTabs; _i < _a.length; _i++) {
            var tab = _a[_i];
            var tabName = tab.id + 's';
            faultDescriptionsRequest[tabName] = [];
            for (var _b = 0, _c = tab.cards; _b < _c.length; _b++) {
                var cardLevel = _c[_b];
                for (var _d = 0, cardLevel_1 = cardLevel; _d < cardLevel_1.length; _d++) {
                    var card = cardLevel_1[_d];
                    for (var _e = 0, _f = card.conditions; _e < _f.length; _e++) {
                        var condition = _f[_e];
                        faultDescriptionsRequest[tabName].push({
                            id: condition.id || 0,
                            failureId: this.failureId,
                            inputLabel: card.inputLabel,
                            decisionOperator: condition.operator || '',
                            decisionValue: condition.value || '',
                            decisionText: condition.text || '',
                            outputLabel: condition.outputLabel || '',
                            comment: null,
                        });
                    }
                }
            }
        }
        this.dataService.updateFaultDescriptions(this.failureId, faultDescriptionsRequest).subscribe(function (result) { _this.close(); }, function (error) { alert('An error has occurred!'); console.log(error); });
    };
    FaultDescriptionComponent.prototype.getAllFaultDescriptions = function (failureId) {
        var _this = this;
        this.dataService.getFaultDescriptions(failureId).subscribe(function (result) {
            _this.failureWithFaults = result;
            _this.faultDescriptionTabs[0].cards = _this.groupCardsByLevel(_this.groupConditionsByCard(result['generalRemarks'], 0));
            _this.faultDescriptionTabs[1].cards = _this.groupCardsByLevel(_this.groupConditionsByCard(result['testConditions'], 1));
            _this.faultDescriptionTabs[2].cards = _this.groupCardsByLevel(_this.groupConditionsByCard(result['faultDetections'], 2));
            _this.faultDescriptionTabs[3].cards = _this.groupCardsByLevel(_this.groupConditionsByCard(result['defectsDebouncing'], 3));
            _this.faultDescriptionTabs[4].cards = _this.groupCardsByLevel(_this.groupConditionsByCard(result['faultHealings'], 4));
            _this.faultDescriptionTabs[5].cards = _this.groupCardsByLevel(_this.groupConditionsByCard(result['healingDebouncings'], 5));
            _this.faultDescriptionTabs[6].cards = _this.groupCardsByLevel(_this.groupConditionsByCard(result['systemReactions'], 6));
            _this.faultDescriptionTabs[7].cards = _this.groupCardsByLevel(_this.groupConditionsByCard(result['faultDisablings'], 7));
            _this.faultDescriptionTabs[8].cards = _this.groupCardsByLevel(_this.groupConditionsByCard(result['faultCauses'], 8));
            _this.faultDescriptionTabs[9].cards = _this.groupCardsByLevel(_this.groupConditionsByCard(result['faultRepairs'], 9));
        });
    };
    FaultDescriptionComponent.prototype.getAllLabelDescriptions = function () {
        var _this = this;
        this.labeDescriptionsDataService
            .getItems([], 'name', 'asc', null, null)
            .subscribe(function (result) {
            _this.labelDescriptions = result.data.map(function (label) { return label.name; });
            _this.filteredLabelDescriptions = _this.labelDescriptions;
            _this.labelDescriptionsSearchDisabled = false;
        });
    };
    FaultDescriptionComponent.prototype.getAllFidConditions = function () {
        var _this = this;
        this.fidConditions = [];
        this.fidConditionsDataService
            .getItems([{ field: this.fidConditionFieldMapper.fieldMap.name, value: 'FId_', matchMode: 'startsWith' }], this.fidConditionFieldMapper.fieldMap.name, 'asc', null, null)
            .subscribe(function (result) {
            // this.fidConditions = result.data;
            result.data.map(function (fidCondition) {
                _this.fidConditions.push({ value: fidCondition.id, label: fidCondition.name });
            });
        });
    };
    FaultDescriptionComponent.prototype.groupConditionsByCard = function (conditions, tabIdx) {
        var cards = [];
        var totalConditions = !conditions ? 0 : conditions.length;
        var tabCardPositionByLabel = this.cardPositionByTabAndLabel[tabIdx];
        tabCardPositionByLabel['Root'] = { level: 0, order: 0 };
        if (totalConditions === 0) {
            cards.push({
                level: 0,
                order: 0,
                inputLabel: 'Root',
                conditions: [{}],
            });
            return cards;
        }
        var _loop_1 = function (i) {
            var condition = conditions[i];
            var conditionForCard = {
                id: condition.id,
                text: condition.decisionText,
                operator: condition.decisionOperator,
                value: condition.decisionValue,
                outputLabel: condition.outputLabel,
            };
            var idx = cards.findIndex(function (card) { return card.inputLabel === condition.inputLabel; });
            if (idx > -1) {
                cards[idx].conditions.push(conditionForCard);
                if (conditionForCard.outputLabel && conditionForCard.outputLabel !== '') {
                    tabCardPositionByLabel[conditionForCard.outputLabel] =
                        tabCardPositionByLabel[conditionForCard.outputLabel] ||
                            { level: cards[idx].level + 1, order: cards[idx].conditions.length - 1 };
                }
            }
            else {
                var level = tabCardPositionByLabel[condition.inputLabel] ? tabCardPositionByLabel[condition.inputLabel].level : 1;
                var order = tabCardPositionByLabel[condition.inputLabel] ? tabCardPositionByLabel[condition.inputLabel].order : 0;
                cards.push({
                    level: level,
                    order: order,
                    inputLabel: condition.inputLabel,
                    conditions: [conditionForCard],
                });
                if (conditionForCard.outputLabel && conditionForCard.outputLabel !== '') {
                    tabCardPositionByLabel[conditionForCard.outputLabel] =
                        tabCardPositionByLabel[conditionForCard.outputLabel] || { level: level + 1, order: 0 };
                }
            }
        };
        for (var i = 0; i < totalConditions; i++) {
            _loop_1(i);
        }
        return cards;
    };
    FaultDescriptionComponent.prototype.groupCardsByLevel = function (cards) {
        var levels = [];
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var card = cards_1[_i];
            levels[card.level] = levels[card.level] || [];
            levels[card.level].push(card);
        }
        return levels;
    };
    FaultDescriptionComponent.prototype.filterLabelDescriptions = function (str) {
        if (!str || str === '') {
            this.filteredLabelDescriptions = this.labelDescriptions;
        }
        else {
            this.filteredLabelDescriptions = this.labelDescriptions.filter(function (name) {
                return name.toUpperCase().startsWith(str.toUpperCase());
            });
        }
    };
    FaultDescriptionComponent.prototype.addSelectedLabelDescriptionBlock = function (tabIdx, levelIdx, condition) {
        var tabCards = this.faultDescriptionTabs[tabIdx].cards;
        var currentCard = this.getCardByCondition(tabIdx, condition);
        var idxCurrentCard = tabCards[currentCard.level].findIndex(function (card) { return card.inputLabel === currentCard.inputLabel; });
        var idxCurrentCardCondition = tabCards[currentCard.level][idxCurrentCard].conditions.findIndex(function (cardCondition) { return cardCondition.outputLabel === condition.outputLabel; });
        var conditionsBeforeCurrent = 0;
        for (var levelCardsIdx = 0; levelCardsIdx < idxCurrentCard; levelCardsIdx++) {
            conditionsBeforeCurrent += tabCards[currentCard.level][levelCardsIdx].conditions.length;
        }
        var cardOrder = conditionsBeforeCurrent + idxCurrentCardCondition;
        // check if label exists
        var existingCard = this.getCardByTabAndInputLabel(tabIdx, condition.outputLabel);
        if (existingCard) {
            // check if selected label is the same node or a parent node
            // if so, don't create the relation, send an error message instead (don't allow loops)
            if (currentCard.inputLabel === condition.outputLabel || this.isCardParent(tabIdx, currentCard, existingCard)) {
                this.attentionMessage = 'A loop is attempted for node "'
                    + currentCard.inputLabel + '" where one of its branches references a parent node! Input can\'t be set.';
                this.showAttentionDialog = true;
                condition.outputLabel = '';
                return;
            }
            // check if label is a sibling,
            // if so, check if the referenced node is before or after the referencing condition branch
            if (existingCard.level === currentCard.level) {
                var idxExistingCard = tabCards[currentCard.level].findIndex(function (card) { return card.inputLabel === existingCard.inputLabel; });
                // if it is after, create the relation and move the referenced node to the next level
                if (idxCurrentCard < idxExistingCard) {
                    tabCards[levelIdx] = tabCards[levelIdx] || [];
                    existingCard.level++;
                    existingCard.order = cardOrder;
                    this.insertCard(tabIdx, existingCard);
                }
                // else { referenced node is before => don't do anything (leave the reference as is)! }
            }
            // else { it's a node on a higher level! => don't do anything (leave the reference as is)! }
        }
        else {
            var card = new ConditionCard();
            card.level = levelIdx;
            card.order = cardOrder;
            card.inputLabel = condition.outputLabel;
            card.conditions = [{}];
            this.insertCard(tabIdx, card);
        }
    };
    FaultDescriptionComponent.prototype.insertCard = function (tabIdx, card) {
        this.faultDescriptionTabs[tabIdx].cards[card.level] = this.faultDescriptionTabs[tabIdx].cards[card.level] || [];
        var levelCards = this.faultDescriptionTabs[tabIdx].cards[card.level];
        for (var _i = 0, levelCards_1 = levelCards; _i < levelCards_1.length; _i++) {
            var levelCard = levelCards_1[_i];
            if (levelCard.order >= card.order) {
                levelCard.order++;
            }
        }
        levelCards.push(card);
        levelCards = this.reorderCards(levelCards);
    };
    FaultDescriptionComponent.prototype.reorderCards = function (cards) {
        cards.sort(function (a, b) {
            return (a.order > b.order) ? 1 : ((a.order < b.order) ? -1 : 0);
        });
        return cards;
    };
    FaultDescriptionComponent.prototype.isCardParent = function (tabIdx, card, cardToTest) {
        var parentCards = this.getCardsByTabAndOutputLabel(tabIdx, card.inputLabel);
        for (var _i = 0, parentCards_1 = parentCards; _i < parentCards_1.length; _i++) {
            var parentCard = parentCards_1[_i];
            if (parentCard.inputLabel === cardToTest.inputLabel) {
                return true;
            }
            else {
                return this.isCardParent(tabIdx, parentCard, cardToTest);
            }
        }
        return false;
    };
    FaultDescriptionComponent.prototype.getCardByTabAndInputLabel = function (tabIdx, label) {
        for (var _i = 0, _a = this.faultDescriptionTabs[tabIdx].cards; _i < _a.length; _i++) {
            var card = _a[_i];
            var idx = card.findIndex(function (c) { return c.inputLabel === label; });
            if (idx > -1) {
                return card[idx];
            }
        }
        return null;
    };
    FaultDescriptionComponent.prototype.getCardsByTabAndOutputLabel = function (tabIdx, label) {
        var cards = [];
        for (var _i = 0, _a = this.faultDescriptionTabs[tabIdx].cards; _i < _a.length; _i++) {
            var card = _a[_i];
            var idx = card.findIndex(function (c) {
                return c.conditions.findIndex(function (condition) { return condition.outputLabel === label; }) > -1;
            });
            if (idx > -1) {
                cards.push(card[idx]);
            }
        }
        return cards;
    };
    FaultDescriptionComponent.prototype.getCardByCondition = function (tabIdx, condition) {
        for (var _i = 0, _a = this.faultDescriptionTabs[tabIdx].cards; _i < _a.length; _i++) {
            var card = _a[_i];
            var idx = card.findIndex(function (c) {
                return c.conditions.indexOf(condition) > -1;
            });
            if (idx > -1) {
                return card[idx];
            }
        }
        return null;
    };
    FaultDescriptionComponent.prototype.openChangeDecisionLabelDialog = function (tabIdx, levelIdx, cardIdx) {
        var tabCards = this.faultDescriptionTabs[tabIdx].cards;
        var card = tabCards[levelIdx][cardIdx];
        this.changeLabelDialogParams = {
            tabIdx: tabIdx,
            levelIdx: levelIdx,
            cardIdx: cardIdx,
            currentDecisionLabel: card.inputLabel,
            newDecisionLabel: '',
        };
        this.showChangeLabelDialog = true;
    };
    FaultDescriptionComponent.prototype.closeChangeDecisionLabelDialog = function () {
        this.showChangeLabelDialog = false;
        this.changeLabelDialogParams = {
            tabIdx: null,
            levelIdx: null,
            cardIdx: null,
            currentDecisionLabel: '',
            newDecisionLabel: '',
        };
    };
    FaultDescriptionComponent.prototype.changeDecisionLabel = function (tabIdx, levelIdx, cardIdx) {
        var tabCards = this.faultDescriptionTabs[tabIdx].cards;
        var card = tabCards[levelIdx][cardIdx];
        if (this.changeLabelDialogParams.currentDecisionLabel === this.changeLabelDialogParams.newDecisionLabel) {
            this.attentionMessage =
                'Selected label ("' + this.changeLabelDialogParams.newDecisionLabel + '") must be different from the current one.';
            this.showAttentionDialog = true;
            return;
        }
        if (this.getCardByTabAndInputLabel(tabIdx, this.changeLabelDialogParams.newDecisionLabel)) {
            this.attentionMessage =
                'A node with the selected label ("' + this.changeLabelDialogParams.newDecisionLabel + '") has already been added.';
            this.showAttentionDialog = true;
            return;
        }
        // change outputLabel on all conditions of the parent cards (there might be more than one!)
        for (var _i = 0, tabCards_1 = tabCards; _i < tabCards_1.length; _i++) {
            var levelCards = tabCards_1[_i];
            for (var _a = 0, levelCards_2 = levelCards; _a < levelCards_2.length; _a++) {
                var c = levelCards_2[_a];
                for (var _b = 0, _c = c.conditions; _b < _c.length; _b++) {
                    var condition = _c[_b];
                    if (condition.outputLabel === this.changeLabelDialogParams.currentDecisionLabel) {
                        condition.outputLabel = this.changeLabelDialogParams.newDecisionLabel;
                    }
                }
            }
        }
        // change inputLabel on the current card
        card.inputLabel = this.changeLabelDialogParams.newDecisionLabel;
        this.showChangeLabelDialog = false;
        this.changeLabelDialogParams = {
            tabIdx: null,
            levelIdx: null,
            cardIdx: null,
            currentDecisionLabel: '',
            newDecisionLabel: '',
        };
    };
    FaultDescriptionComponent.prototype.addConditionBlock = function (tabIdx, levelIdx, cardIdx) {
        this.faultDescriptionTabs[tabIdx].cards[levelIdx][cardIdx].conditions.push({});
    };
    FaultDescriptionComponent.prototype.removeConditionBlock = function (tabIdx, levelIdx, cardIdx, conditionIdx) {
        var tabCards = this.faultDescriptionTabs[tabIdx].cards;
        var levelCards = tabCards[levelIdx];
        var conditionOutputLabel = levelCards[cardIdx].conditions[conditionIdx].outputLabel;
        var referencingCards = [];
        // check if the condition is the last reference for another card
        if (conditionOutputLabel && conditionOutputLabel !== '') {
            var referencedCard = this.getCardByTabAndInputLabel(tabIdx, conditionOutputLabel);
            if (referencedCard) {
                referencingCards = this.getCardsByTabAndOutputLabel(tabIdx, referencedCard.inputLabel);
                if (referencingCards && referencingCards.length === 1) {
                    this.attentionMessage = 'Deleting this branch will remove the last reference to node "'
                        + referencingCards[0].inputLabel + '"! Delete the referenced node first.';
                    this.showAttentionDialog = true;
                    return; // don't delete it
                }
            }
        }
        // if the condition to remove is the last one in the card
        if (levelCards[cardIdx].conditions.length === 1) {
            var cardInputLabel = levelCards[cardIdx].inputLabel;
            // clear card references
            referencingCards = this.getCardsByTabAndOutputLabel(tabIdx, cardInputLabel);
            for (var _i = 0, referencingCards_1 = referencingCards; _i < referencingCards_1.length; _i++) {
                var card = referencingCards_1[_i];
                for (var _a = 0, _b = card.conditions; _a < _b.length; _a++) {
                    var condition = _b[_a];
                    if (condition.outputLabel === cardInputLabel) {
                        condition.outputLabel = '';
                    }
                }
            }
            // if the card is the last one in the level => remove the level
            if (levelCards.length === 1) {
                tabCards.splice(levelIdx, 1);
            }
            else {
                levelCards.splice(cardIdx, 1);
            }
        }
        else {
            levelCards[cardIdx].conditions.splice(conditionIdx, 1);
        }
    };
    FaultDescriptionComponent.prototype.addSelectedFidCondition = function () {
        var _this = this;
        if (this.fidReleaseConditions.findIndex(function (fidReleaseCondition) { return fidReleaseCondition.id === _this.selectedFidCondition; }) < 0) {
            var fidConditionIdx = this.fidConditions.findIndex(function (fidCondition) { return fidCondition.value === _this.selectedFidCondition; });
            this.fidReleaseConditions.push({
                id: this.fidConditions[fidConditionIdx].value,
                name: this.fidConditions[fidConditionIdx].label,
                inverted: false,
                condition: '',
            });
            this.selectedFidCondition = null;
            // remove the selected FID from the dropdown options
            this.fidConditions.splice(fidConditionIdx, 1);
        }
        else {
            alert('FID already added!');
        }
    };
    FaultDescriptionComponent.prototype.removeFidCondition = function (fidCondition) {
        // remove FID from table...
        var idx = this.fidReleaseConditions.findIndex(function (fid) { return fid.id = fidCondition.id; });
        this.fidReleaseConditions.splice(idx, 1);
        // add it back to the dropdown options (ordered by name)
        idx = this.fidConditions.findIndex(function (fid) { return fid.label.toLowerCase() > fidCondition.name.toLowerCase(); });
        if (idx >= 0) {
            this.fidConditions.splice(idx, 0, { value: fidCondition.id, label: fidCondition.name });
        }
        else {
            this.fidConditions.push({ value: fidCondition.id, label: fidCondition.name });
        }
    };
    FaultDescriptionComponent.prototype.editFidCondition = function (fidCondition) {
        if (fidCondition.condition) {
            this.fidConditionRows = this.parseFidConditionText(fidCondition.condition);
        }
        this.showFidConditionDialog = true;
        this.currentFidReleaseCondition = fidCondition;
    };
    FaultDescriptionComponent.prototype.onFidReleaseRowDblClick = function (fidCondition) {
        // fidCondition.condition += "dblClick_";
        this.editFidCondition(fidCondition);
    };
    FaultDescriptionComponent.prototype.updateFidConditionText = function () {
        var condition = '';
        var numRows = this.fidConditionRows.length;
        var emptyCells = false;
        for (var i = 0; i < numRows; i++) {
            var row = this.fidConditionRows[i];
            if (!row.label || !row.rule || !row.value) {
                emptyCells = true;
                break;
            }
            else {
                condition += '( ' + row.label + ' ' + row.rule + ' ' + row.value + ' )';
                // only add link if row is not the last
                if (i < numRows - 1) {
                    if (!row.link) {
                        emptyCells = true;
                        break;
                    }
                    condition += ' ' + row.link + ' ';
                }
            }
        }
        if (emptyCells) {
            alert('There are some empty cells! Please check.');
        }
        else {
            this.fidConditionText = condition;
        }
        return !emptyCells;
    };
    FaultDescriptionComponent.prototype.parseFidConditionText = function (condition) {
        var rows = condition.split('(');
        var numRows = rows.length;
        var conditions = [];
        // i = 1 because the first item is empty!
        for (var i = 1; i < numRows; i++) {
            var rowArr = rows[i].trim().replace(' )', '').split(' ');
            conditions.push({
                label: rowArr[0],
                rule: rowArr[1],
                value: rowArr[2],
                link: rowArr[3] || '',
            });
        }
        return conditions;
    };
    FaultDescriptionComponent.prototype.saveFidCondition = function () {
        if (this.updateFidConditionText()) {
            this.currentFidReleaseCondition.condition = this.fidConditionText;
            this.showFidConditionDialog = false;
            this.fidConditionRows = [];
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FaultDescriptionComponent.prototype, "visibleIn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FaultDescriptionComponent.prototype, "visibleOut", void 0);
    FaultDescriptionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fault-description',
            template: __webpack_require__("./src/app/pages/failure-detail/fault-description/fault-description.component.html"),
            styles: [__webpack_require__("./src/app/pages/failure-detail/fault-description/fault-description.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_failures_service__["a" /* FailuresService */],
            __WEBPACK_IMPORTED_MODULE_5__services_label_descriptions_service__["a" /* LabelDescriptionsService */],
            __WEBPACK_IMPORTED_MODULE_6__services_channel_descriptions_service__["a" /* ChannelDescriptionsService */],
            __WEBPACK_IMPORTED_MODULE_7__dao_channel_description_field_mapper__["a" /* ChannelDescriptionFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_4__dao_failure_field_mapper__["a" /* FailureFieldMapper */]])
    ], FaultDescriptionComponent);
    return FaultDescriptionComponent;
}());

var ConditionCard = /** @class */ (function () {
    function ConditionCard() {
    }
    return ConditionCard;
}());
var Condition = /** @class */ (function () {
    function Condition() {
    }
    return Condition;
}());


/***/ }),

/***/ "./src/app/pages/failure-detail/fault-description/fnr-functions-description.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fnrFunctionsDescription; });
var fnrFunctionsDescription = [
    {
        name: 'fnrFunctionCostumCode',
        structure: 'Function to evaluate simple script codes (in JScript) like if...then cases.<br/><br/>'
            + 'Examples: fnrFunctionCostumCode(var Output: String = ( ACComp_swtLd_C== 1) ? "Value was 1" : "Value was not 1";) --> '
            + 'Returns string \'Value was 1\' in case Label value was really 1<br/>'
            + 'fnrFunctionCostumCode((ACComp_swtLd_C + 1) * 3)--> Returns 6 if label value was 1<br/><br/>'
            + 'to return a result representing a number in fixed-point notation<br/>'
            + 'fnrFunctionCostumCode(((ACComp_swtLd_C + 1) * 3).toFixed(2))',
        split: false,
    },
    {
        name: 'fnrFunctionUpDownDebouncing',
        structure: 'Function to give back a standardized text for the \'Up and Down\' debouncing methode. '
            + 'First argument is either Heal or Defect debending on the debouncing type.The second and third argument are the label names '
            + 'for the duration and ratio repectively.<br/><br/>'
            + 'Examples: fnrFunctionUpDownDebouncing (Heal; DDRC_DurDeb...; DDRC_RatDeb...)',
        split: false,
    },
    {
        name: 'fnrFunctionMaskDescription',
        structure: 'Function to put together a description text of active mask condtions based on the bit value of the mask. '
            + 'Condition text is set if the corresponding bit is TRUE (=1).<br/><br/>'
            // tslint:disable-next-line:max-line-length
            + 'Structure of function call in a text: fnrFunctionMaskDescription(Label name; Header text; Bit0 condition text; Bit1 condition text;...)<br/>'
            + 'Text is only displayed if at least one condion is set.',
        split: false,
    },
    {
        name: 'fnrFunctionMaskDescriptionNot',
        structure: 'Function to put together a description text of active mask condtions based on the bit value of the mask. '
            + 'Condition text is set if the corresponding bit is FALSE (=0).<br/><br/>'
            // tslint:disable-next-line:max-line-length
            + 'Structure of function call in a text: fnrFunctionMaskDescriptionNot(Label name; Header text; Bit0 condition text; Bit1 condition text;...)<br/>'
            + 'Text is only displayed if at least one condion is set.',
        split: false,
    },
    {
        split: true,
    },
    {
        name: 'Desicion Label Change',
        // tslint:disable-next-line:max-line-length
        structure: 'This function change the whole Node. So it is possible to change the label without a completly demounting of the tree structure.<br/>'
            + '&nbsp;&nbsp;- Click on the button with the 2 arrows (green and red)<br/>'
            + '&nbsp;&nbsp;- choose the NEW label out of the list (in the new opend window<br/>'
            + '&nbsp;&nbsp;- the Desicion Label is changed!',
        split: false,
    },
    {
        name: 'Injection Group Failure',
        structure: 'Failure name: Instead of of the number (0, 1, 2, ...) the symbol %. (IVCtlTiDiff_0 --> IVCtlTiDiff_%)<br/>'
            + 'Everywhere which you would the cylinder number but the placeholder %?. While creation this pleaceholder will be replace with '
            + 'the corresponding cylinder number. (geometric) If you would the firing order index, but %!.',
        split: false,
    },
];


/***/ }),

/***/ "./src/app/pages/failures-projects/failures-projects.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"course\">\r\n    <div #containerDiv class=\"container\">\r\n      <div class=\"row\">\r\n\r\n        <div class=\"row\" style=\"width: 100%\">\r\n          <h4 class=\"list-title\" style=\"margin: 1rem;\">Failures <-> Projects</h4>    \r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <button pButton type=\"button\" (click)=\"openProjectSelectionDialog()\" \r\n            icon=\"fa-list-alt\" iconPos=\"left\" label=\"Configure displayed Projects\"\r\n            class=\"btn ui-button-secondary action-button\"\r\n          ></button>\r\n          <div style=\"margin: 1rem;\">\r\n            <span class=\"displayed-projects-info\">(Currently displaying {{ tableProjects.length }} of {{ allProjects.length }})</span>\r\n          </div>\r\n        </div>\r\n\r\n        <p-table #tt\r\n          [value]=\"items\"\r\n          [scrollable]=\"true\"\r\n          scrollHeight=\"450px\"\r\n          [style]=\"{width:tableWidth}\"\r\n          [resizableColumns]=\"true\"\r\n          [reorderableColumns]=\"true\"\r\n          [lazy]=\"true\" (onLazyLoad)=\"lazyLoadData($event)\"\r\n          [paginator]=\"true\" [rows]=\"pageSize\" [totalRecords]=\"totalRecords\" [rowsPerPageOptions]=\"rowsPerPageOptions\"\r\n          [loading]=\"loading\"\r\n          frozenWidth=\"180px\"\r\n        >\r\n\r\n          <ng-template pTemplate=\"frozencolgroup\">\r\n            <colgroup>\r\n              <col style=\"width:100px\">\r\n            </colgroup>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"colgroup\">\r\n            <colgroup>\r\n              <col style=\"width:250px\">\r\n            </colgroup>\r\n            <colgroup>\r\n              <col *ngFor=\"let project of tableProjects\" style=\"width:50px\">\r\n            </colgroup>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"frozenheader\">\r\n            <tr>\r\n              <th pResizableColumn [pSortableColumn]=\"columns[0].field\">\r\n                {{ columns[0].header }}\r\n                <p-sortIcon [field]=\"columns[0].field\"></p-sortIcon>\r\n              </th>\r\n            </tr>\r\n            <tr>\r\n              <th><input pInputText type=\"text\" (input)=\"tt.filter($event.target.value, columns[0].field, 'contains')\" style=\"width: 100%\"></th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"header\">\r\n            <tr>\r\n              <th pResizableColumn [pSortableColumn]=\"columns[1].field\">\r\n                {{ columns[1].header }}\r\n                <p-sortIcon [field]=\"columns[1].field\"></p-sortIcon>\r\n              </th>\r\n              <th *ngFor=\"let project of tableProjects\" pReorderableColumn rowspan=\"2\"\r\n                style=\"font-size: .875rem; overflow-wrap: break-word; padding-left: .15rem; padding-right: .15rem; text-align: center;\">\r\n                <div style=\"max-height: 4.2rem !important;\">\r\n                  {{ project.project }}<br/><span style=\"font-weight: normal\">{{ project.version }}</span>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n            <tr>\r\n              <th><input pInputText type=\"text\" (input)=\"tt.filter($event.target.value, columns[1].field, 'contains')\" style=\"width: 100%\"></th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"frozenbody\" let-item>\r\n            <tr [pSelectableRow]=\"item\">\r\n              <td class=\"ui-resizable-column\" style=\"overflow-wrap: break-word;\">{{item.name}}</td>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"body\" let-item>\r\n            <tr [pSelectableRow]=\"item\">\r\n              <td class=\"ui-resizable-column\" style=\"overflow-wrap: break-word; overflow: auto; font-size: .875rem;\"><div style=\"max-height: 2.25rem !important;\">{{item.title}}</div></td>\r\n              <td *ngFor=\"let project of tableProjects\" style=\"text-align: center;\">\r\n                <p-checkbox\r\n                  [name]=\"'failure_projects_' + item.id\"\r\n                  [value]=\"project.id\"\r\n                  [(ngModel)]=\"item.projects\"\r\n                  (onChange)=\"checkboxChanged(item.id, $event)\"\r\n                  [style]=\"{'margin-top':'-0.1rem'}\"\r\n                ></p-checkbox>\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"emptymessage\">\r\n            <tr>\r\n              <td [attr.colspan]=\"2 + tableProjects.length\">\r\n                No records found\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n\r\n        </p-table>\r\n\r\n        <div class=\"row\">\r\n          <button pButton type=\"button\" class=\"btn ui-button-secondary action-button\" (click)=\"cancel()\" label=\"Cancel\"></button>\r\n          <button pButton type=\"button\" class=\"btn ui-button-warning action-button\" (click)=\"discardChanges()\" label=\"Discard Changes\" [disabled]=\"dirtyFailureIds.length == 0\"></button>\r\n          <button pButton type=\"button\" class=\"btn ui-button-success action-button\" (click)=\"saveChanges()\" label=\"Save Changes\" [disabled]=\"dirtyFailureIds.length == 0\"></button>\r\n        </div>\r\n\r\n        <p-dialog [header]=\"dialogHeaderTitle\" [showHeader]=\"dialogShowHeader\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n          <span>{{ dialogMessage }}</span>\r\n          <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"showDialog=false\" label=\"Close\"></button>\r\n          </p-footer>\r\n        </p-dialog>\r\n\r\n        <p-dialog header=\"Project selection\" \r\n          [(visible)]=\"showProjectSelectionDialog\"\r\n          modal=\"modal\"\r\n          [responsive]=\"true\"\r\n          [width]=\"600\"\r\n          [minWidth]=\"400\"\r\n        >\r\n\r\n          <p-table #ttall\r\n            [columns]=\"projectSelectionColumns\" [value]=\"allProjects\"\r\n            [resizableColumns]=\"true\"\r\n            [lazy]=\"false\"\r\n            [paginator]=\"true\" [rows]=\"20\" [totalRecords]=\"allProjects.length\" [rowsPerPageOptions]=\"[10, 20, 30, 50, 100]\"\r\n            [scrollable]=\"true\" scrollHeight=\"35vh\"\r\n            [(selection)]=\"selectedProjectsTemp\"\r\n            dataKey=\"id\"\r\n          >\r\n            <ng-template pTemplate=\"colgroup\" let-columns>\r\n              <colgroup>\r\n                <col style=\"width:1.5em;\">\r\n                <col *ngFor=\"let col of columns\">\r\n              </colgroup>\r\n            </ng-template>\r\n  \r\n            <ng-template pTemplate=\"header\" let-columns>\r\n              <tr style=\"font-size:small;\">\r\n                <th style=\"padding: 2px;\">\r\n                  <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n                </th>\r\n                <th *ngFor=\"let col of columns\" pResizableColumn [pSortableColumn]=\"col.field\" style=\"padding: 2px;\">\r\n                  {{col.header}}\r\n                  <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                </th>\r\n              </tr>\r\n              <tr style=\"font-size:small;\">\r\n                <th></th>\r\n                <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.filterType\" style=\"padding: 2px;\">\r\n                  <input *ngSwitchDefault pInputText type=\"text\" (input)=\"ttall.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n                </th>\r\n              </tr>\r\n            </ng-template>\r\n  \r\n            <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n              <tr style=\"font-size:smaller\">\r\n                <td style=\"padding: 2px;\">\r\n                    <p-tableCheckbox [value]=\"item\"></p-tableCheckbox>\r\n                </td>\r\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\" style=\"padding: 2px;\">\r\n                  {{item[col.field]}}\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n  \r\n            <ng-template pTemplate=\"emptymessage\" let-columns>\r\n              <tr style=\"font-size:smaller\">\r\n                <td [attr.colspan]=\"columns.length + 1\">\r\n                  No projects to select!\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n  \r\n          </p-table>\r\n  \r\n          <p-footer>\r\n            <button type=\"button\" pButton (click)=\"closeProjectSelectionDialog()\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n            <button type=\"button\" pButton (click)=\"saveProjectSelectionDialog()\" label=\"Save selection\" class=\"ui-button-success\"></button>\r\n          </p-footer>\r\n        </p-dialog>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/failures-projects/failures-projects.component.scss":
/***/ (function(module, exports) {

module.exports = ".action-button {\n  margin: 1rem;\n  margin-right: 0; }\n\n.displayed-projects-info {\n  font-size: .875rem; }\n"

/***/ }),

/***/ "./src/app/pages/failures-projects/failures-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailuresProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_components_advanced_table_data__ = __webpack_require__("./src/app/common/components/advanced-table-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_failures_service__ = __webpack_require__("./src/app/services/failures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_failure_field_mapper__ = __webpack_require__("./src/app/dao/failure-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__failures_failures_datasource__ = __webpack_require__("./src/app/pages/failures/failures.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_projects_service__ = __webpack_require__("./src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dao_project_field_mapper__ = __webpack_require__("./src/app/dao/project-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var defaultNumberOfProjects = 30;
var FailuresProjectsComponent = /** @class */ (function () {
    function FailuresProjectsComponent(router, dataService, fieldMapper, projectsDataService, projectFieldMapper) {
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.projectsDataService = projectsDataService;
        this.projectFieldMapper = projectFieldMapper;
        this.listTitle = 'Failures <-> Projects';
        this.items = [];
        this.itemsOriginal = [];
        this.columns = [
            {
                header: 'Name',
                field: this.fieldMapper.fieldMap.name,
                filterType: 'text',
                filterMatchMode: 'contains',
                filterOptions: [],
            },
            {
                header: 'Title',
                field: this.fieldMapper.fieldMap.faultTitle,
                filterType: 'text',
                filterMatchMode: 'contains',
                filterOptions: [],
            },
        ];
        this.pageSize = 50;
        this.rowsPerPageOptions = [10, 20, 30, 50, 100];
        this.showDialog = false;
        this.dialogShowHeader = true;
        this.loading = true;
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_5__failures_failures_datasource__["a" /* FailuresDataSource */](this.dataService);
        this.dirtyFailureIds = [];
        this.allProjects = [];
        this.tableProjects = [];
        this.selectedProjectsTemp = [];
        this.showProjectSelectionDialog = false;
        this.loadingAllProjects = false;
        this.projectSelectionColumns = [
            {
                header: 'Project',
                field: this.projectFieldMapper.fieldMap['project'],
                filterMatchMode: 'contains'
            },
            {
                header: 'Version',
                field: this.projectFieldMapper.fieldMap['version'],
                filterMatchMode: 'contains'
            },
        ];
    }
    FailuresProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tableWidth = this.containerDiv.nativeElement.clientWidth + 'px';
        // get all projects
        var projectFields = [
            this.projectFieldMapper.fieldMap.id,
            this.projectFieldMapper.fieldMap.project,
            this.projectFieldMapper.fieldMap.version
        ];
        this.projectsDataService
            .getItems([], this.projectFieldMapper.fieldMap.project, 'asc', null, null, projectFields)
            .subscribe(function (result) {
            _this.allProjects = result.data.sort(function (a, b) {
                return a.project.localeCompare(b.project) || a.version.localeCompare(b.version);
            });
        }, function (error) { }, function () {
            _this.tableProjects = _this.allProjects.slice(0, defaultNumberOfProjects).map(function (project) {
                return { id: project.id, project: project.project, version: project.version };
            });
        });
    };
    FailuresProjectsComponent.prototype.lazyLoadData = function (event) {
        this.getItems(event);
    };
    FailuresProjectsComponent.prototype.getItems = function (event) {
        var _this = this;
        this.loading = true;
        var filters = [];
        var sortField = '';
        var sortOrder = '';
        var pageIndex = 0;
        if (event) {
            this.pageSize = event.rows;
            Object.keys(event.filters).forEach(function (field) {
                filters.push(new __WEBPACK_IMPORTED_MODULE_1__common_components_advanced_table_data__["a" /* AdvancedTableColumnFilter */](field, event.filters[field].value, event.filters[field].matchMode));
            });
            sortField = event.sortField;
            sortOrder = event.sortOrder === 1 ? 'asc' : 'desc';
            pageIndex = event.first / this.pageSize;
        }
        // get failures
        var failureFields = [
            this.fieldMapper.fieldMap.id,
            this.fieldMapper.fieldMap.name,
            this.fieldMapper.fieldMap.faultTitle,
            this.fieldMapper.fieldMap.projects
        ];
        this.dataSource.getData(filters, sortField, sortOrder, pageIndex, this.pageSize, failureFields).subscribe(function (result) {
            _this.items = result.data.map(function (failure) {
                return {
                    id: failure[_this.fieldMapper.fieldMap.id],
                    name: failure[_this.fieldMapper.fieldMap.name],
                    title: failure[_this.fieldMapper.fieldMap.faultTitle],
                    projects: failure[_this.fieldMapper.fieldMap.projects],
                };
            });
        }, function (error) { }, function () {
            _this.itemsOriginal = [];
            _this.items.map(function (obj) { _this.itemsOriginal.push(Object.assign({}, obj)); });
            _this.totalRecords = _this.items.length;
            _this.loading = false;
        });
    };
    FailuresProjectsComponent.prototype.checkboxChanged = function (failureId, checked) {
        var idxOriginal = this.itemsOriginal.findIndex(function (failure) { return failure.id === failureId; });
        if (idxOriginal < 0) {
            return;
        }
        var idx = this.items.findIndex(function (failure) { return failure.id === failureId; });
        if (idx < 0) {
            return;
        }
        var equalProjects = this.projectArraysEqual(this.items[idx].projects, this.itemsOriginal[idxOriginal].projects);
        // add failureId to array if it doesn't exist already
        if (this.dirtyFailureIds.indexOf(failureId) < 0 && !equalProjects) {
            this.dirtyFailureIds.push(failureId);
        }
        else {
            // remove if it's there and projects are equal to original
            idx = this.dirtyFailureIds.indexOf(failureId);
            if (idx > -1 && equalProjects) {
                this.dirtyFailureIds.splice(idx, 1);
            }
        }
    };
    FailuresProjectsComponent.prototype.projectArraysEqual = function (arr1, arr2) {
        if (!Array.isArray(arr1) || !Array.isArray(arr2) || arr1.length !== arr2.length) {
            return false;
        }
        var a1 = arr1.concat().sort();
        var a2 = arr2.concat().sort();
        for (var i = 0; i < a1.length; i++) {
            if (a1[i] !== a2[i]) {
                return false;
            }
        }
        return true;
    };
    FailuresProjectsComponent.prototype.discardChanges = function () {
        var _this = this;
        this.loading = true;
        this.items = [];
        this.dirtyFailureIds = [];
        this.itemsOriginal.map(function (obj) { _this.items.push(Object.assign({}, obj)); });
        this.loading = false;
    };
    FailuresProjectsComponent.prototype.saveChanges = function () {
        var _this = this;
        var uniqueDirtyFailureIds = Array.from(new Set(this.dirtyFailureIds)).slice();
        var dirtyFailures = [];
        this.items.map(function (failure) {
            if (uniqueDirtyFailureIds.findIndex(function (id) { return id === failure.id; }) > -1) {
                dirtyFailures.push((_a = {},
                    _a[_this.fieldMapper.fieldMap.id] = failure.id,
                    _a[_this.fieldMapper.fieldMap.projects] = failure.projects,
                    _a));
            }
            var _a;
        });
        this.dataService.updateFailuresProjects(dirtyFailures).subscribe(function (result) {
            _this.showDialog = false;
            _this.dialogHeaderTitle = 'Info';
            _this.dialogMessage = dirtyFailures.length + ' failure' + (dirtyFailures.length > 1 ? 's' : '') + ' successfully updated!';
            _this.showDialog = true;
            _this.dirtyFailureIds = [];
            _this.itemsOriginal = [];
            _this.items.map(function (obj) { _this.itemsOriginal.push(Object.assign({}, obj)); });
        }, function (error) {
            _this.showDialog = false;
            _this.dialogShowHeader = true;
            _this.dialogHeaderTitle = 'Error';
            _this.dialogMessage = 'An error has occurred!';
            _this.showDialog = true;
        });
    };
    FailuresProjectsComponent.prototype.cancel = function () {
        // TODO: home or back?
        this.router.navigate(['home']);
    };
    FailuresProjectsComponent.prototype.openProjectSelectionDialog = function () {
        this.selectedProjectsTemp = this.tableProjects;
        this.showProjectSelectionDialog = true;
    };
    FailuresProjectsComponent.prototype.closeProjectSelectionDialog = function () {
        this.showProjectSelectionDialog = false;
        this.selectedProjectsTemp = [];
    };
    FailuresProjectsComponent.prototype.saveProjectSelectionDialog = function () {
        this.tableProjects = this.selectedProjectsTemp.map(function (project) {
            return { id: project.id, project: project.project, version: project.version };
        });
        this.closeProjectSelectionDialog();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('containerDiv'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], FailuresProjectsComponent.prototype, "containerDiv", void 0);
    FailuresProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-failures-projects',
            template: __webpack_require__("./src/app/pages/failures-projects/failures-projects.component.html"),
            styles: [__webpack_require__("./src/app/pages/failures-projects/failures-projects.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_failures_service__["a" /* FailuresService */],
            __WEBPACK_IMPORTED_MODULE_4__dao_failure_field_mapper__["a" /* FailureFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_6__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_7__dao_project_field_mapper__["a" /* ProjectFieldMapper */]])
    ], FailuresProjectsComponent);
    return FailuresProjectsComponent;
}());



/***/ }),

/***/ "./src/app/pages/failures/failures.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"course\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <advanced-table #table\r\n          [listTitle]=\"listTitle\"\r\n          [advancedTableData]=\"advancedTableData\"\r\n          [hasAddButton]=true\r\n          (addItem)=\"addItem()\"\r\n          [hasMultipleDelete]=true>\r\n        </advanced-table>\r\n        <p-dialog header=\"Error\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n          <span>{{ dialogMessage }}</span>\r\n          <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"showDialog=false\" label=\"Close\"></button>\r\n          </p-footer>\r\n        </p-dialog>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/failures/failures.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/failures/failures.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailuresComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_failures_service__ = __webpack_require__("./src/app/services/failures.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__failures_datasource__ = __webpack_require__("./src/app/pages/failures/failures.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__ = __webpack_require__("./src/app/common/components/advanced-table/advanced-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dao_failure_field_mapper__ = __webpack_require__("./src/app/dao/failure-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FailuresComponent = /** @class */ (function () {
    function FailuresComponent(router, crudService, fieldMapper) {
        var _this = this;
        this.router = router;
        this.crudService = crudService;
        this.fieldMapper = fieldMapper;
        this.listTitle = 'Failures';
        this.advancedTableData = {
            columns: [
                {
                    description: 'Fault Name',
                    valueGetter: function (item) { return item.name; },
                    matColumnDefValue: this.fieldMapper.fieldMap['name'],
                    filterMatchMode: 'contains'
                },
                {
                    description: 'Fault Title',
                    valueGetter: function (item) { return item.faultTitle; },
                    matColumnDefValue: this.fieldMapper.fieldMap['faultTitle'],
                    filterMatchMode: 'contains'
                },
                {
                    description: 'Component',
                    valueGetter: function (item) { return String(item.componentId); },
                    matColumnDefValue: this.fieldMapper.fieldMap['component'],
                    filterMatchMode: 'equals'
                },
                {
                    description: 'Failure Group',
                    valueGetter: function (item) { return String(item.failureGroupId); },
                    matColumnDefValue: this.fieldMapper.fieldMap['failureGroupId'],
                    filterMatchMode: 'equals'
                },
                {
                    description: 'Responsible',
                    valueGetter: function (item) { return String(item.responsibleId); },
                    matColumnDefValue: this.fieldMapper.fieldMap['responsible'],
                    filterMatchMode: 'equals'
                },
                {
                    description: 'Comment',
                    valueGetter: function (item) { return item.comment; },
                    matColumnDefValue: this.fieldMapper.fieldMap['comment'],
                    filterMatchMode: 'contains'
                },
                {
                    description: 'Full Name',
                    valueGetter: function (item) { return item.cameTitle; },
                    matColumnDefValue: this.fieldMapper.fieldMap['cameTitle'],
                    filterMatchMode: 'contains'
                },
                {
                    description: 'Monitoring Strategy',
                    valueGetter: function (item) { return item.monitorStrategyDescription; },
                    matColumnDefValue: this.fieldMapper.fieldMap['monitorStrategyDescription'],
                    filterMatchMode: 'contains'
                },
                {
                    description: 'CARB Component',
                    valueGetter: function (item) { return String(item.carbComponentId); },
                    matColumnDefValue: this.fieldMapper.fieldMap['carbComponentId'],
                    filterMatchMode: 'contains'
                },
                {
                    description: 'Time Required',
                    valueGetter: function (item) { return String(item.timeRequired); },
                    matColumnDefValue: this.fieldMapper.fieldMap['timeRequired'],
                    filterMatchMode: 'contains'
                }
            ],
            displayedColumns: [
                this.fieldMapper.fieldMap['name'],
                this.fieldMapper.fieldMap['faultTitle'],
                this.fieldMapper.fieldMap['component'],
                this.fieldMapper.fieldMap['responsible'],
                this.fieldMapper.fieldMap['comment'],
                this.fieldMapper.fieldMap['fullName'],
                this.fieldMapper.fieldMap['monitorStrategyDescription'],
                this.fieldMapper.fieldMap['carbStandardizedComponent'],
                this.fieldMapper.fieldMap['timeRequired']
            ],
            dataSource: new __WEBPACK_IMPORTED_MODULE_3__failures_datasource__["a" /* FailuresDataSource */](this.crudService),
            actions: [
                {
                    icon: 'edit',
                    disabled: function (any) { return false; },
                    event: function (x) { return _this.onEdit(x); }
                },
                {
                    icon: 'trash',
                    disabled: function (any) { return false; },
                    event: function (x) {
                        return _this.onDelete(x);
                    }
                }
            ]
        };
        this.showDialog = false;
    }
    FailuresComponent.prototype.onEdit = function (row) {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].failures, row.id]);
    };
    FailuresComponent.prototype.onDelete = function (row) {
        var _this = this;
        this.crudService.lockItem(row.id).subscribe(function (item) {
            // if record is successfully locked => proceed to delete
            _this.crudService.removeItem(row.id).subscribe(function (result) {
                _this.table.items.splice(_this.table.items.indexOf(row), 1);
            });
        }, function (error) {
            if (error.status === 409) {
                _this.dialogMessage = 'Record locked by another user!';
                _this.showDialog = true;
            }
        });
    };
    FailuresComponent.prototype.addItem = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].failures, 'new']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__["a" /* AdvancedTableComponent */])
    ], FailuresComponent.prototype, "table", void 0);
    FailuresComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-failures',
            template: __webpack_require__("./src/app/pages/failures/failures.component.html"),
            styles: [__webpack_require__("./src/app/pages/failures/failures.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_failures_service__["a" /* FailuresService */],
            __WEBPACK_IMPORTED_MODULE_6__dao_failure_field_mapper__["a" /* FailureFieldMapper */]])
    ], FailuresComponent);
    return FailuresComponent;
}());



/***/ }),

/***/ "./src/app/pages/failures/failures.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailuresDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__ = __webpack_require__("./src/app/common/components/base-data-source.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FailuresDataSource = /** @class */ (function (_super) {
    __extends(FailuresDataSource, _super);
    function FailuresDataSource(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    FailuresDataSource.prototype.getData = function (filter, sortField, sortDirection, pageIndex, pageSize, fields) {
        if (filter === void 0) { filter = []; }
        if (sortField === void 0) { sortField = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        return this.service.getItems(filter, sortField, sortDirection, pageIndex, pageSize, fields);
    };
    return FailuresDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__["a" /* BaseDataSource */]));



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <app-dashboard [items]=\"dashboardItems\"></app-dashboard>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "app-dashboard {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(accountService) {
        this.accountService = accountService;
        this.dashboardItems = [
            {
                label: 'Create',
                description: 'Create',
                href: '/create',
                hrefLabel: 'View details »',
                icons: ['fa-file-text-o'],
            },
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.getUserInfo()
            .subscribe(function (result) {
            if (result.roles[0] === 'Admin') {
                _this.dashboardItems.push({
                    label: 'Projects',
                    description: 'View projects list',
                    href: '/projects',
                    hrefLabel: 'View details »',
                    icons: ['fa-list-alt'],
                }, {
                    label: 'Failures',
                    description: 'View failures list',
                    href: '/failures',
                    hrefLabel: 'View details »',
                    icons: ['fa-warning'],
                }, {
                    label: 'Failures - Projects',
                    description: 'View a failures list with the possibility to assign/unassign them to/from projects',
                    href: '/failures-projects',
                    hrefLabel: 'View details »',
                    icons: ['fa-warning', 'fa-list-alt'],
                });
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/iso-code-detail/iso-code-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"container\">\r\n\r\n      <h3>ISO Code</h3>\r\n\r\n      <app-dynamic-form\r\n        [vm]=\"item\"\r\n        [vmDefinition]=\"itemDefinition\"\r\n        [errorMessage]=\"errorMessage\"\r\n        [hasSaveButton]=\"lockedByCurrentUser\"\r\n        (cancel)=\"cancel()\"\r\n        (save)=\"save($event)\"\r\n      ></app-dynamic-form>\r\n\r\n      <p-dialog header=\"Warning\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n        <span>{{ dialogMessage }}</span>\r\n        <p-footer>\r\n          <button type=\"button\" pButton icon=\"fa-unlock\" (click)=\"dialogUnlock()\" label=\"Unlock it\" class=\"ui-button-success\"></button>\r\n          <button type=\"button\" pButton icon=\"fa-lock\" (click)=\"dialogKeepLock()\" label=\"Keep it locked\" class=\"ui-button-danger\"></button>\r\n        </p-footer>\r\n      </p-dialog>\r\n\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/iso-code-detail/iso-code-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/iso-code-detail/iso-code-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsoCodeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_iso_codes_service__ = __webpack_require__("./src/app/services/iso-codes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_iso_code_field_mapper__ = __webpack_require__("./src/app/dao/iso-code-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IsoCodeDetailComponent = /** @class */ (function () {
    function IsoCodeDetailComponent(route, router, dataService, fieldMapper) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.itemDefinition = [
            {
                key: this.fieldMapper.fieldMap['id'],
                label: 'Id',
                type: 'number',
                hidden: true,
                isId: true,
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['status'],
                label: '',
                type: 'label',
            },
            {
                key: this.fieldMapper.fieldMap['code'],
                label: 'ISO Code',
                type: 'text',
                disabled: true,
            },
            {
                key: this.fieldMapper.fieldMap['pcode'],
                label: 'P Code',
                type: 'text',
                disabled: true,
            },
            {
                key: this.fieldMapper.fieldMap['description'],
                label: 'Description',
                type: 'textarea',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['comment'],
                label: 'Comment',
                type: 'textarea',
            },
        ];
        this.showDialog = false;
        this.lockedByCurrentUser = false;
    }
    IsoCodeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isNew = this.route.snapshot.url[1].path === 'new';
        if (this.isNew) {
            this.lockedByCurrentUser = true;
            this.item = {
                id: 0,
                code: null,
                pcode: null,
                description: null,
                comment: null,
            };
        }
        else {
            var id = this.route.snapshot.params['id'];
            var statusIndex_1 = this.itemDefinition.findIndex(function (item) { return item.key === _this.fieldMapper.fieldMap['status']; });
            this.dataService.lockItem(id).subscribe(function (success) {
                _this.lockedByCurrentUser = true;
                _this.itemDefinition[statusIndex_1].label = 'Locked by you';
                _this.getItem();
            }, function (error) {
                if (error.status === 409) {
                    _this.lockedByCurrentUser = false;
                    _this.itemDefinition[statusIndex_1].label = 'Locked by another user';
                    _this.getItem();
                }
            });
        }
    };
    IsoCodeDetailComponent.prototype.getItem = function () {
        var _this = this;
        this.dataService.getItem(this.route.snapshot.params['id'])
            .subscribe(function (item) {
            _this.item = item;
        });
    };
    IsoCodeDetailComponent.prototype.cancel = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].isoCodes]);
    };
    IsoCodeDetailComponent.prototype.save = function (item) {
        if (this.isNew) {
            this.create(item);
        }
        else {
            this.update(item);
        }
        this.cancel();
    };
    IsoCodeDetailComponent.prototype.update = function (item) {
        this.dataService.editItem(item.id, item)
            .subscribe(function (x) {
            console.log('iso code ' + item.id + ' updated');
        });
    };
    IsoCodeDetailComponent.prototype.create = function (item) {
        // TODO: ERROR (No 'Access-Control-Allow-Origin' header is present on the requested resource)
        this.dataService.addItem(item)
            .subscribe(function (x) {
            console.log('iso code ' + x.id + ' created');
        });
    };
    IsoCodeDetailComponent.prototype.dialogKeepLock = function () {
        this.showDialog = false;
        this.lockedByCurrentUser = false;
        this.cancel();
    };
    IsoCodeDetailComponent.prototype.dialogUnlock = function () {
        var _this = this;
        this.showDialog = false;
        this.dataService.unlockItem(this.route.snapshot.params['id']).subscribe(function (success) {
            _this.lockedByCurrentUser = false;
            _this.cancel();
        }, function (error) {
            console.log('error unlocking');
        });
    };
    IsoCodeDetailComponent.prototype.canDeactivate = function () {
        if (!this.lockedByCurrentUser) {
            return true;
        }
        this.dialogMessage = 'You have locked this iso code, which prevents other users from editing it! What would you like to do?';
        this.showDialog = true;
    };
    IsoCodeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-iso-code-detail',
            template: __webpack_require__("./src/app/pages/iso-code-detail/iso-code-detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/iso-code-detail/iso-code-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_iso_codes_service__["a" /* IsoCodesService */],
            __WEBPACK_IMPORTED_MODULE_4__dao_iso_code_field_mapper__["a" /* IsoCodeFieldMapper */]])
    ], IsoCodeDetailComponent);
    return IsoCodeDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/iso-codes/iso-codes.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"course\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <advanced-table #table\r\n          [listTitle]=\"listTitle\"\r\n          [advancedTableData]=\"advancedTableData\"\r\n          [hasAddButton]=true\r\n          (addItem)=\"addItem()\"\r\n          [hasMultipleDelete]=true>\r\n        </advanced-table>\r\n        <p-dialog header=\"Error\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n          <span>{{ dialogMessage }}</span>\r\n          <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"showDialog=false\" label=\"Close\"></button>\r\n          </p-footer>\r\n        </p-dialog>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/iso-codes/iso-codes.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/iso-codes/iso-codes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsoCodesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_iso_codes_service__ = __webpack_require__("./src/app/services/iso-codes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iso_codes_datasource__ = __webpack_require__("./src/app/pages/iso-codes/iso-codes.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__ = __webpack_require__("./src/app/common/components/advanced-table/advanced-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dao_iso_code_field_mapper__ = __webpack_require__("./src/app/dao/iso-code-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IsoCodesComponent = /** @class */ (function () {
    function IsoCodesComponent(router, crudService, fieldMapper) {
        var _this = this;
        this.router = router;
        this.crudService = crudService;
        this.fieldMapper = fieldMapper;
        this.listTitle = 'ISO Codes';
        this.advancedTableData = {
            columns: [
                {
                    description: 'ISO Code',
                    valueGetter: function (item) { return item.code; },
                    matColumnDefValue: this.fieldMapper.fieldMap['code']
                },
                {
                    description: 'P Code',
                    valueGetter: function (item) { return item.pcode; },
                    matColumnDefValue: this.fieldMapper.fieldMap['pcode']
                },
                {
                    description: 'Description',
                    valueGetter: function (item) { return item.description; },
                    matColumnDefValue: this.fieldMapper.fieldMap['description']
                }
            ],
            displayedColumns: [
                this.fieldMapper.fieldMap['isoCode'],
                this.fieldMapper.fieldMap['pcode'],
                this.fieldMapper.fieldMap['description']
            ],
            dataSource: new __WEBPACK_IMPORTED_MODULE_3__iso_codes_datasource__["a" /* IsoCodesDataSource */](this.crudService),
            actions: [
                {
                    icon: 'edit',
                    disabled: function (any) { return false; },
                    event: function (x) { return _this.onEdit(x); }
                },
                {
                    icon: 'trash',
                    disabled: function (any) { return false; },
                    event: function (x) { return _this.onDelete(x); }
                }
            ]
        };
        this.showDialog = false;
    }
    IsoCodesComponent.prototype.onEdit = function (row) {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].isoCodes, row.id]);
    };
    IsoCodesComponent.prototype.onDelete = function (row) {
        var _this = this;
        this.crudService.lockItem(row.id).subscribe(function (item) {
            // if record is successfully locked => proceed to delete
            _this.crudService.removeItem(row.id).subscribe(function (result) {
                _this.table.items.splice(_this.table.items.indexOf(row), 1);
            });
        }, function (error) {
            if (error.status === 409) {
                _this.dialogMessage = 'Record locked by another user!';
                _this.showDialog = true;
            }
        });
    };
    IsoCodesComponent.prototype.addItem = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].isoCodes, 'new']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__["a" /* AdvancedTableComponent */])
    ], IsoCodesComponent.prototype, "table", void 0);
    IsoCodesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-iso-codes',
            template: __webpack_require__("./src/app/pages/iso-codes/iso-codes.component.html"),
            styles: [__webpack_require__("./src/app/pages/iso-codes/iso-codes.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_iso_codes_service__["a" /* IsoCodesService */],
            __WEBPACK_IMPORTED_MODULE_6__dao_iso_code_field_mapper__["a" /* IsoCodeFieldMapper */]])
    ], IsoCodesComponent);
    return IsoCodesComponent;
}());



/***/ }),

/***/ "./src/app/pages/iso-codes/iso-codes.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsoCodesDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__ = __webpack_require__("./src/app/common/components/base-data-source.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IsoCodesDataSource = /** @class */ (function (_super) {
    __extends(IsoCodesDataSource, _super);
    function IsoCodesDataSource(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    IsoCodesDataSource.prototype.getData = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = []; }
        if (sortField === void 0) { sortField = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        return this.service.getItems(filter, sortField, sortDirection, pageIndex, pageSize);
    };
    return IsoCodesDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__["a" /* BaseDataSource */]));



/***/ }),

/***/ "./src/app/pages/label-description-detail/label-description-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"container\">\r\n\r\n      <h3>Label Description</h3>\r\n\r\n      <app-dynamic-form\r\n        [vm]=\"item\"\r\n        [vmDefinition]=\"itemDefinition\"\r\n        [errorMessage]=\"errorMessage\"\r\n        (cancel)=\"cancel()\"\r\n        [hasSaveButton]=false\r\n      ></app-dynamic-form>\r\n\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/label-description-detail/label-description-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/label-description-detail/label-description-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelDescriptionDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_label_descriptions_service__ = __webpack_require__("./src/app/services/label-descriptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_label_description_field_mapper__ = __webpack_require__("./src/app/dao/label-description-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LabelDescriptionDetailComponent = /** @class */ (function () {
    function LabelDescriptionDetailComponent(route, router, dataService, fieldMapper) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.itemDefinition = [
            {
                key: this.fieldMapper.fieldMap['id'],
                label: 'Id',
                type: 'number',
                hidden: true,
                disabled: true,
                isId: true,
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['name'],
                label: 'Name',
                type: 'text',
                disabled: true,
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['unit'],
                label: 'Unit',
                type: 'text',
                disabled: true,
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['description'],
                label: 'Description',
                type: 'text',
                disabled: true,
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['projectId'],
                label: 'Used in Project',
                type: 'number',
                disabled: true,
            },
            {
                key: this.fieldMapper.fieldMap['comment'],
                label: 'Comment',
                type: 'textarea',
                disabled: true,
            },
        ];
    }
    LabelDescriptionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isNew = this.route.snapshot.url[1].path === 'new';
        if (this.isNew) {
            this.item = {
                id: 0,
                name: null,
                unit: null,
                description: null,
                projectId: null,
                comment: null,
            };
        }
        else {
            this.dataService.getItem(this.route.snapshot.params['id'])
                .subscribe(function (item) {
                _this.item = item;
            });
        }
    };
    LabelDescriptionDetailComponent.prototype.cancel = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].labelDescriptions]);
    };
    LabelDescriptionDetailComponent.prototype.save = function (item) {
        // TODO: API endpoints?
        // if (this.isNew) {
        //   this.create(item);
        // }
        // else {
        //   this.update(item);
        // }
        // this.cancel();
    };
    LabelDescriptionDetailComponent.prototype.update = function (item) {
        // TODO: API endpoint?
        // this.dataService.editItem(item.id, item)
        //   .subscribe((x: any) => {
        //     console.log("label description " + item.id + " updated");
        //   }
        // );
    };
    LabelDescriptionDetailComponent.prototype.create = function (item) {
        // TODO: API endpoint?
        // this.dataService.addItem(item)
        //   .subscribe((x: any) => {
        //     console.log("label description " + x.id + " created");
        //   }
        // );
    };
    LabelDescriptionDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-label-description-detail',
            template: __webpack_require__("./src/app/pages/label-description-detail/label-description-detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/label-description-detail/label-description-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_label_descriptions_service__["a" /* LabelDescriptionsService */],
            __WEBPACK_IMPORTED_MODULE_4__dao_label_description_field_mapper__["a" /* LabelDescriptionFieldMapper */]])
    ], LabelDescriptionDetailComponent);
    return LabelDescriptionDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/label-descriptions/label-descriptions.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"course\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <advanced-table #table\r\n          [listTitle]=\"listTitle\"\r\n          [advancedTableData]=\"advancedTableData\"\r\n          [hasAddButton]=false\r\n          [hasMultipleDelete]=false>\r\n        </advanced-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/label-descriptions/label-descriptions.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/label-descriptions/label-descriptions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelDescriptionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_label_descriptions_service__ = __webpack_require__("./src/app/services/label-descriptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label_descriptions_datasource__ = __webpack_require__("./src/app/pages/label-descriptions/label-descriptions.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_components_advanced_table_advanced_table_component__ = __webpack_require__("./src/app/common/components/advanced-table/advanced-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dao_label_description_field_mapper__ = __webpack_require__("./src/app/dao/label-description-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LabelDescriptionsComponent = /** @class */ (function () {
    function LabelDescriptionsComponent(router, itemsManagementService, fieldMapper) {
        var _this = this;
        this.router = router;
        this.itemsManagementService = itemsManagementService;
        this.fieldMapper = fieldMapper;
        this.listTitle = 'Label Descriptions';
        this.advancedTableData = {
            columns: [
                {
                    description: 'Label Name',
                    valueGetter: function (item) { return item.name; },
                    matColumnDefValue: this.fieldMapper.fieldMap['name']
                },
                {
                    description: 'Unit',
                    valueGetter: function (item) { return item.unit; },
                    matColumnDefValue: this.fieldMapper.fieldMap['unit']
                },
                {
                    description: 'Description',
                    valueGetter: function (item) { return item.description; },
                    matColumnDefValue: this.fieldMapper.fieldMap['description']
                },
                {
                    description: 'Used in project',
                    valueGetter: function (item) { return String(item.projectId); },
                    matColumnDefValue: this.fieldMapper.fieldMap['projectId']
                },
                {
                    description: 'Comment',
                    valueGetter: function (item) { return item.comment; },
                    matColumnDefValue: this.fieldMapper.fieldMap['comment']
                }
            ],
            displayedColumns: [
                this.fieldMapper.fieldMap['name'],
                this.fieldMapper.fieldMap['unit'],
                this.fieldMapper.fieldMap['description'],
                this.fieldMapper.fieldMap['projectId'],
                this.fieldMapper.fieldMap['comment']
            ],
            dataSource: new __WEBPACK_IMPORTED_MODULE_2__label_descriptions_datasource__["a" /* LabelDescriptionsDataSource */](this.itemsManagementService),
            actions: [
                {
                    icon: 'edit',
                    disabled: function (any) { return false; },
                    event: function (x) { return _this.onEdit(x); }
                }
            ]
        };
    }
    LabelDescriptionsComponent.prototype.onEdit = function (row) {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].labelDescriptions, row.id]);
    };
    LabelDescriptionsComponent.prototype.onDelete = function (row) {
        var _this = this;
        this.itemsManagementService.removeItem(row.id).subscribe(function (result) {
            _this.table.items.splice(_this.table.items.indexOf(row), 1);
        });
    };
    LabelDescriptionsComponent.prototype.addItem = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].labelDescriptions, 'new']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__common_components_advanced_table_advanced_table_component__["a" /* AdvancedTableComponent */])
    ], LabelDescriptionsComponent.prototype, "table", void 0);
    LabelDescriptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-label-descriptions',
            template: __webpack_require__("./src/app/pages/label-descriptions/label-descriptions.component.html"),
            styles: [__webpack_require__("./src/app/pages/label-descriptions/label-descriptions.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__services_label_descriptions_service__["a" /* LabelDescriptionsService */],
            __WEBPACK_IMPORTED_MODULE_6__dao_label_description_field_mapper__["a" /* LabelDescriptionFieldMapper */]])
    ], LabelDescriptionsComponent);
    return LabelDescriptionsComponent;
}());



/***/ }),

/***/ "./src/app/pages/label-descriptions/label-descriptions.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelDescriptionsDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__ = __webpack_require__("./src/app/common/components/base-data-source.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LabelDescriptionsDataSource = /** @class */ (function (_super) {
    __extends(LabelDescriptionsDataSource, _super);
    function LabelDescriptionsDataSource(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    LabelDescriptionsDataSource.prototype.getData = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = []; }
        if (sortField === void 0) { sortField = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        return this.service.getItems(filter, sortField, sortDirection, pageIndex, pageSize);
    };
    return LabelDescriptionsDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__["a" /* BaseDataSource */]));



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\r\n    <div class=\"text-center align-middle\">\r\n        <h1 class=\"h3 mb-3 font-weight-normal\">Please sign in</h1>\r\n        <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate class=\"form-signin\">\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n                <input #usernameInput  type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required  placeholder=\"Username\"/>\r\n                <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n            </div>\r\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n                <input #passwordInput type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required  placeholder=\"Password\"/>\r\n                <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button [disabled]=\"loading && f.form.valid\" class=\"btn btn-primary\">Login</button>\r\n                <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\r\n                />\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n\n.form-signin .checkbox {\n  font-weight: 400; }\n\n.form-signin .form-control {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n.form-signin .form-control:focus {\n  z-index: 2; }\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, accountService) {
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.accountService.logout().subscribe(function (response) { });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'home';
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.usernameInput.first.nativeElement.focus();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.accountService
            .login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.loading = false;
            if (!Object(__WEBPACK_IMPORTED_MODULE_3_util__["isString"])(_this.returnUrl)) {
                _this.returnUrl = 'home';
            }
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.loading = false;
            _this.usernameInput.first.nativeElement.focus();
            _this.usernameInput.first.nativeElement.select();
        }, function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])('usernameInput'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "usernameInput", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__("./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/performance-limiter-calibration-detail/performance-limiter-calibration-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<main role=\"main\">\r\n  <div class=\"container\">\r\n\r\n      <h3>Performance Limiter and Engine Off Calibration (FID)</h3>\r\n\r\n      <form [formGroup]=\"form\">\r\n\r\n        <div *ngFor=\"let field of itemDefinition\">\r\n          <app-dynamic-field\r\n            [field]=\"field\"\r\n            [form]=\"form\"\r\n            [submitted]=\"submitted\"\r\n          ></app-dynamic-field>\r\n        </div>\r\n\r\n        <div class=\"form-group ui-fluid\">\r\n          <label htmlFor=\"selectedProjects\">Project Selection</label>\r\n          <button pButton type=\"button\" icon=\"fa-edit\" class=\"ui-button-secondary\" (click)=\"openProjectSelectionDialog()\" style=\"width:auto;\"></button>\r\n          <p-table #tt\r\n            [columns]=\"selectedProjectsColumns\"\r\n            [value]=\"selectedProjects\"\r\n            [resizableColumns]=\"true\"\r\n            [lazy]=\"false\"\r\n            [paginator]=\"false\"\r\n            [loading]=\"loadingSelectedProjects\"\r\n            [scrollable]=\"true\"\r\n            scrollHeight=\"120px\"\r\n            dataKey=\"id\"\r\n          >\r\n            <ng-template pTemplate=\"colgroup\" let-columns>\r\n              <colgroup>\r\n                <col *ngFor=\"let col of columns\">\r\n                <col style=\"width:24px;\">\r\n              </colgroup>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n              <tr style=\"font-size:small\">\r\n                <th *ngFor=\"let col of columns\" pResizableColumn [pSortableColumn]=\"col.field\" style=\"padding:2px;\">\r\n                  {{col.header}}\r\n                  <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                </th>\r\n                <th style=\"padding:2px;\"></th>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n              <tr style=\"font-size:smaller\">\r\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\" style=\"line-height: 0.5; padding:2px;\">\r\n                  {{item[col.field]}}\r\n                </td>\r\n                <td style=\"line-height: 0.5; padding:2px;\">\r\n                  <button pButton type=\"button\" icon=\"fa-remove\" (click)=\"unselectProject(item);\" class=\"ui-button-warning\" style=\"width:16px; height:16px;\"></button>\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n\r\n            <ng-template pTemplate=\"emptymessage\" let-columns>\r\n              <tr style=\"font-size:smaller\">\r\n                <td [attr.colspan]=\"columns.length + 1\">\r\n                  No projects selected!\r\n                </td>\r\n              </tr>\r\n            </ng-template>\r\n\r\n          </p-table>\r\n        </div>\r\n\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\r\n          {{ errorMessage }}\r\n        </div>\r\n    \r\n        <div class=\"dynamic-form-buttons\">\r\n          <button type=\"button\" class=\"btn\" (click)=\"cancel()\">Back</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\" *ngIf=\"lockedByCurrentUser\">Save</button>\r\n        </div>\r\n\r\n      </form>\r\n\r\n      <p-confirmDialog></p-confirmDialog>\r\n\r\n      <p-dialog header=\"Warning\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n        <span>{{ dialogMessage }}</span>\r\n        <p-footer>\r\n          <button type=\"button\" pButton icon=\"fa-unlock\" (click)=\"dialogUnlock()\" label=\"Unlock it\" class=\"ui-button-success\"></button>\r\n          <button type=\"button\" pButton icon=\"fa-lock\" (click)=\"dialogKeepLock()\" label=\"Keep it locked\" class=\"ui-button-danger\"></button>\r\n        </p-footer>\r\n      </p-dialog>\r\n\r\n      <p-dialog\r\n        header=\"Project selection\"\r\n        [(visible)]=\"showProjectSelectionDialog\"\r\n        modal=\"modal\"\r\n        [responsive]=\"true\"\r\n        [autoAlign]=\"true\"\r\n        [contentStyle]=\"{'width':'85vw', 'max-height':'77vh'}\"\r\n        [closeOnEscape]=\"false\"\r\n        [closable]=\"false\"\r\n        [resizable]=\"false\"\r\n      >\r\n\r\n        <p-table #ttall\r\n          [columns]=\"projectSelectionColumns\" [value]=\"allProjects\"\r\n          [resizableColumns]=\"true\"\r\n          [lazy]=\"false\"\r\n          [paginator]=\"true\" [rows]=\"20\" [totalRecords]=\"allProjects.length\" [rowsPerPageOptions]=\"[10, 20, 30, 50, 100]\"\r\n          [loading]=\"loadingAllProjects\"\r\n          [scrollable]=\"true\" scrollHeight=\"50vh\"\r\n          [(selection)]=\"selectedProjectsTemp\"\r\n          dataKey=\"id\"\r\n        >\r\n          <ng-template pTemplate=\"colgroup\" let-columns>\r\n            <colgroup>\r\n              <col style=\"width:1.5em;\">\r\n              <col *ngFor=\"let col of columns\">\r\n            </colgroup>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"header\" let-columns>\r\n            <tr style=\"font-size:small;\">\r\n              <th style=\"padding: 2px;\">\r\n                <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\r\n              </th>\r\n              <th *ngFor=\"let col of columns\" pResizableColumn [pSortableColumn]=\"col.field\" style=\"padding: 2px;\">\r\n                {{col.header}}\r\n                <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n              </th>\r\n            </tr>\r\n            <tr style=\"font-size:small;\">\r\n              <th></th>\r\n              <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.filterType\" style=\"padding: 2px;\">\r\n                <!-- <p-dropdown *ngSwitchCase=\"'dropdown'\" [options]=\"col.filterOptions\" (input)=\"ttall.filter($event.target.value, col.field, 'equals')\"></p-dropdown>\r\n                <p-multiSelect *ngSwitchCase=\"'multiSelect'\" [options]=\"col.filterOptions\" (input)=\"ttall.filter($event.target.value, col.field, 'in')\"></p-multiSelect> -->\r\n                <input *ngSwitchDefault pInputText type=\"text\" (input)=\"ttall.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n              </th>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"body\" let-item let-columns=\"columns\">\r\n            <tr style=\"font-size:smaller\">\r\n              <td style=\"padding: 2px;\">\r\n                  <p-tableCheckbox [value]=\"item\"></p-tableCheckbox>\r\n              </td>\r\n              <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\" style=\"padding: 2px;\">\r\n                {{item[col.field]}}\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n\r\n          <ng-template pTemplate=\"emptymessage\" let-columns>\r\n            <tr style=\"font-size:smaller\">\r\n              <td [attr.colspan]=\"columns.length + 1\">\r\n                No projects to select!\r\n              </td>\r\n            </tr>\r\n          </ng-template>\r\n\r\n        </p-table>\r\n\r\n        <p-footer>\r\n          <button type=\"button\" pButton (click)=\"closeProjectSelectionDialog()\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\r\n          <button type=\"button\" pButton (click)=\"saveProjectSelectionDialog()\" label=\"Save selection\" class=\"ui-button-success\"></button>\r\n        </p-footer>\r\n      </p-dialog>\r\n\r\n  </div>\r\n</main>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/performance-limiter-calibration-detail/performance-limiter-calibration-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "app-details-page {\n  width: 100%; }\n\np-card.details-card {\n  width: 100%; }\n\n.form-details-input {\n  padding-top: 1.5em; }\n\n.form-details-footer {\n  padding-top: 2em; }\n\n.form-details-input input {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/performance-limiter-calibration-detail/performance-limiter-calibration-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceLimiterCalibrationDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_performance_limiter_calibration_service__ = __webpack_require__("./src/app/services/performance-limiter-calibration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dao_performance_limiter_calibration_field_mapper__ = __webpack_require__("./src/app/dao/performance-limiter-calibration-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_projects_service__ = __webpack_require__("./src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dao_project_field_mapper__ = __webpack_require__("./src/app/dao/project-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_channel_descriptions_service__ = __webpack_require__("./src/app/services/channel-descriptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dao_channel_description_field_mapper__ = __webpack_require__("./src/app/dao/channel-description-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dao_fid_reaction__ = __webpack_require__("./src/app/dao/fid-reaction.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_util__ = __webpack_require__("./node_modules/util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_components_common_confirmationservice__ = __webpack_require__("./node_modules/primeng/components/common/confirmationservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_components_common_confirmationservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_components_common_confirmationservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var PerformanceLimiterCalibrationDetailComponent = /** @class */ (function () {
    function PerformanceLimiterCalibrationDetailComponent(route, router, dataService, fieldMapper, projectsDataService, projectFieldMapper, channelDescriptionsDataService, channelDescriptionFieldMapper, confirmationService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.projectsDataService = projectsDataService;
        this.projectFieldMapper = projectFieldMapper;
        this.channelDescriptionsDataService = channelDescriptionsDataService;
        this.channelDescriptionFieldMapper = channelDescriptionFieldMapper;
        this.confirmationService = confirmationService;
        this.itemDefinition = [
            {
                key: this.fieldMapper.fieldMap['id'],
                label: 'Id',
                type: 'number',
                hidden: true,
                isId: true,
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['status'],
                label: '',
                type: 'label',
            },
            {
                key: this.fieldMapper.fieldMap['fid'],
                label: 'FID',
                type: 'select',
                // options will be set on ngOnInit
                selectedOptions: [],
                placeholder: 'Select FID',
            },
            {
                key: this.fieldMapper.fieldMap['reactionId'],
                label: 'Reaction',
                type: 'select',
                // options will be set on ngOnInit
                selectedOptions: [],
            },
        ];
        this.submitted = false;
        this.selectedProjectsTemp = [];
        this.selectedProjectsColumns = [
            {
                header: 'Project',
                field: this.projectFieldMapper.fieldMap['project'],
                filterMatchMode: 'contains'
            },
            {
                header: 'Version',
                field: this.projectFieldMapper.fieldMap['version'],
                filterMatchMode: 'contains'
            },
            {
                header: 'ECU',
                field: this.projectFieldMapper.fieldMap['ecu'],
                filterMatchMode: 'contains'
            },
        ];
        this.loadingSelectedProjects = false;
        this.allProjects = [];
        this.projectSelectionColumns = this.selectedProjectsColumns.concat([
            {
                header: 'DSM Structure',
                field: this.projectFieldMapper.fieldMap['dsmStructure'],
                filterMatchMode: 'contains',
            },
            {
                header: 'Revision',
                field: this.projectFieldMapper.fieldMap['revision'],
                filterMatchMode: 'contains',
            },
        ]);
        this.loadingAllProjects = false;
        this.showProjectSelectionDialog = false;
        this.showDialog = false;
        this.lockedByCurrentUser = false;
    }
    PerformanceLimiterCalibrationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedProjects = [];
        // get options for reaction dropdown
        var reactionOptions = [{ value: 0, label: 'Select an option' }];
        __WEBPACK_IMPORTED_MODULE_10__dao_fid_reaction__["a" /* FidReactions */].fidReactions.map(function (fidReaction) {
            reactionOptions.push({ value: fidReaction.id, label: fidReaction.name });
        });
        var reactionFieldDefinitionIdx = this.itemDefinition.findIndex(function (item) { return item.key === _this.fieldMapper.fieldMap['reactionId']; });
        this.itemDefinition[reactionFieldDefinitionIdx].options = reactionOptions;
        // get options for fid dropdown
        // in legacy app, the fid dropdown displays all the channel descriptions that start with "FId_"
        var fidOptions = [];
        this.channelDescriptionsDataService
            .getItems([{ field: this.channelDescriptionFieldMapper.fieldMap.name, value: 'FId_', matchMode: 'startsWith' }], this.channelDescriptionFieldMapper.fieldMap.name, 'asc', null, null)
            .subscribe(function (result) {
            result.data.map(function (channelDescription) {
                fidOptions.push({ value: channelDescription.name, label: channelDescription.name });
            });
            var fidFieldDefinitionIdx = _this.itemDefinition.findIndex(function (item) { return item.key === _this.fieldMapper.fieldMap['fid']; });
            _this.itemDefinition[fidFieldDefinitionIdx].options = fidOptions;
            _this.itemDefinition[fidFieldDefinitionIdx].required = true;
        });
        // get records for projects dialog
        this.projectsDataService
            .getItems([], '', '', null, null)
            .subscribe(function (result) {
            _this.allProjects = result.data;
        });
        this.isNew = this.route.snapshot.url[1].path === 'new';
        if (this.isNew) {
            this.lockedByCurrentUser = true;
            this.item = {
                id: 0,
                fid: null,
                reactionId: null,
                projects: null,
            };
        }
        else {
            var id = this.route.snapshot.params['id'];
            var statusIndex_1 = this.itemDefinition.findIndex(function (item) { return item.key === _this.fieldMapper.fieldMap['status']; });
            this.dataService.lockItem(id).subscribe(function (success) {
                _this.lockedByCurrentUser = true;
                _this.itemDefinition[statusIndex_1].label = 'Locked by you';
            }, function (error) {
                if (error.status === 409) {
                    _this.lockedByCurrentUser = false;
                    _this.itemDefinition[statusIndex_1].label = 'Locked by another user';
                }
            }, function () {
                _this.getItem();
            });
        }
        this.resetForm();
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.resetForm = function () {
        var group = {};
        this.itemDefinition.forEach(function (field) {
            group[field.key] = field.required ?
                new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: field, disabled: field.disabled }, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required) :
                new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ value: field, disabled: field.disabled });
        });
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"](group);
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.getItem = function () {
        var _this = this;
        this.dataService.getItem(this.route.snapshot.params['id'])
            .subscribe(function (item) {
            // let projectFieldDefinitionIdx = this.itemDefinition.findIndex(item => item.key === "projects");
            // //the following map is needed because the api returns an array of Projects
            // this.itemDefinition[projectFieldDefinitionIdx].selectedOptions = item.projects.map((project: Project) => project.id.toString());
            var fidFieldDefinitionIdx = _this.itemDefinition.findIndex(function (itemDef) { return itemDef.key === 'fid'; });
            _this.itemDefinition[fidFieldDefinitionIdx].selectedOptions = [item.fid];
            var reactionFieldDefinitionIdx = _this.itemDefinition.findIndex(function (itemDef) { return itemDef.key === 'reactionId'; });
            _this.itemDefinition[reactionFieldDefinitionIdx].selectedOptions = [item.reactionId.toString()];
            _this.item = item;
            _this.selectedProjects = item.projects;
        });
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.cancel = function (bypass) {
        var _this = this;
        if (bypass === void 0) { bypass = false; }
        if (bypass || this.form.pristine) {
            this.errorMessage = null;
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__utils_routing_paths__["a" /* RoutingPaths */].performanceLimiterCalibrations]);
        }
        else {
            this.confirmationService.confirm({
                message: 'Unsaved changes will be lost! Are you sure that you want to proceed?',
                header: 'Confirmation',
                icon: 'fa fa-question-circle',
                accept: function () {
                    _this.errorMessage = null;
                    _this.router.navigate([__WEBPACK_IMPORTED_MODULE_3__utils_routing_paths__["a" /* RoutingPaths */].performanceLimiterCalibrations]);
                }
            });
        }
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.save = function () {
        var itemCopy = Object.assign({}, this.item);
        itemCopy.fid = Object(__WEBPACK_IMPORTED_MODULE_11_util__["isArray"])(this.form.value.fid) ? this.form.value.fid[0] : this.form.value.fid;
        itemCopy.reactionId = Object(__WEBPACK_IMPORTED_MODULE_11_util__["isArray"])(this.form.value.reactionId) ? this.form.value.reactionId[0] : this.form.value.reactionId;
        itemCopy.projects = this.selectedProjects.map(function (project) { return project.id; });
        this.submitted = true;
        if (this.isNew) {
            this.create(itemCopy);
        }
        else {
            this.update(itemCopy);
        }
        this.cancel(true);
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.update = function (item) {
        this.dataService.editItem(item.id, item)
            .subscribe(function (x) {
            console.log('performance limiter calibration ' + item.id + ' updated');
        });
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.create = function (item) {
        this.dataService.addItem(item)
            .subscribe(function (x) {
            console.log('performance limiter calibration ' + x.id + ' created');
        });
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.dialogKeepLock = function () {
        this.showDialog = false;
        this.lockedByCurrentUser = false;
        this.cancel(true);
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.dialogUnlock = function () {
        var _this = this;
        this.showDialog = false;
        this.dataService.unlockItem(this.route.snapshot.params['id']).subscribe(function (success) {
            _this.lockedByCurrentUser = false;
            _this.cancel(true);
        }, function (error) {
            console.log('error unlocking');
        });
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.canDeactivate = function () {
        if (!this.lockedByCurrentUser) {
            return true;
        }
        this.dialogMessage = 'You have locked this performance limiter calibration, '
            + 'which prevents other users from editing it! What would you like to do?';
        this.showDialog = true;
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.unselectProject = function (project) {
        var projectIdx = this.selectedProjects.findIndex(function (proj) { return proj.id === project.id; });
        if (projectIdx > -1) {
            this.selectedProjects.splice(projectIdx, 1);
        }
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.openProjectSelectionDialog = function () {
        this.selectedProjectsTemp = this.selectedProjects;
        this.showProjectSelectionDialog = true;
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.closeProjectSelectionDialog = function () {
        this.showProjectSelectionDialog = false;
        this.selectedProjectsTemp = [];
    };
    PerformanceLimiterCalibrationDetailComponent.prototype.saveProjectSelectionDialog = function () {
        this.selectedProjects = this.selectedProjectsTemp;
        this.closeProjectSelectionDialog();
    };
    PerformanceLimiterCalibrationDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-performance-limiter-calibration-detail',
            template: __webpack_require__("./src/app/pages/performance-limiter-calibration-detail/performance-limiter-calibration-detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/performance-limiter-calibration-detail/performance-limiter-calibration-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_performance_limiter_calibration_service__["a" /* PerformanceLimiterCalibrationService */],
            __WEBPACK_IMPORTED_MODULE_5__dao_performance_limiter_calibration_field_mapper__["a" /* PerformanceLimiterCalibrationFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_6__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_7__dao_project_field_mapper__["a" /* ProjectFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_8__services_channel_descriptions_service__["a" /* ChannelDescriptionsService */],
            __WEBPACK_IMPORTED_MODULE_9__dao_channel_description_field_mapper__["a" /* ChannelDescriptionFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_12_primeng_components_common_confirmationservice__["ConfirmationService"]])
    ], PerformanceLimiterCalibrationDetailComponent);
    return PerformanceLimiterCalibrationDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/performance-limiter-calibrations/performance-limiter-calibrations.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"course\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <advanced-table #table\r\n          [listTitle]=\"listTitle\"\r\n          [advancedTableData]=\"advancedTableData\"\r\n          [hasAddButton]=true\r\n          (addItem)=\"addItem()\"\r\n          [hasMultipleDelete]=true>\r\n        </advanced-table>\r\n        <p-dialog header=\"Error\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n          <span>{{ dialogMessage }}</span>\r\n          <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"showDialog=false\" label=\"Close\"></button>\r\n          </p-footer>\r\n        </p-dialog>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/performance-limiter-calibrations/performance-limiter-calibrations.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/performance-limiter-calibrations/performance-limiter-calibrations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceLimiterCalibrationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_performance_limiter_calibration_service__ = __webpack_require__("./src/app/services/performance-limiter-calibration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__performance_limiter_calibrations_datasource__ = __webpack_require__("./src/app/pages/performance-limiter-calibrations/performance-limiter-calibrations.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__ = __webpack_require__("./src/app/common/components/advanced-table/advanced-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dao_performance_limiter_calibration_field_mapper__ = __webpack_require__("./src/app/dao/performance-limiter-calibration-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dao_fid_reaction__ = __webpack_require__("./src/app/dao/fid-reaction.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PerformanceLimiterCalibrationsComponent = /** @class */ (function () {
    function PerformanceLimiterCalibrationsComponent(router, crudService, fieldMapper) {
        var _this = this;
        this.router = router;
        this.crudService = crudService;
        this.fieldMapper = fieldMapper;
        this.listTitle = 'Performance Limiter Calibration';
        this.advancedTableData = {
            columns: [
                {
                    description: 'FID',
                    valueGetter: function (item) { return item.fid; },
                    matColumnDefValue: this.fieldMapper.fieldMap['fid'],
                    filterMatchMode: 'contains'
                },
                {
                    description: 'Reaction',
                    valueGetter: function (item) { return __WEBPACK_IMPORTED_MODULE_7__dao_fid_reaction__["a" /* FidReactions */].getFidReactionById(item.reactionId).name; },
                    matColumnDefValue: this.fieldMapper.fieldMap['reactionId'],
                    filterMatchMode: 'contains'
                },
                {
                    description: 'In Project',
                    valueGetter: function (item) { return item.projects.map(function (project) { return project.project + project.version; }).join(' | '); },
                    matColumnDefValue: this.fieldMapper.fieldMap['projects'],
                    filterMatchMode: 'contains'
                },
            ],
            displayedColumns: [
                this.fieldMapper.fieldMap['fid'],
                this.fieldMapper.fieldMap['reactionId'],
                this.fieldMapper.fieldMap['projects'],
            ],
            dataSource: new __WEBPACK_IMPORTED_MODULE_3__performance_limiter_calibrations_datasource__["a" /* PerformanceLimiterCalibrationDataSource */](this.crudService),
            actions: [
                {
                    icon: 'edit',
                    disabled: function (any) { return false; },
                    event: function (x) { return _this.onEdit(x); }
                },
                {
                    icon: 'trash',
                    disabled: function (any) { return false; },
                    event: function (x) { return _this.onDelete(x); }
                }
            ]
        };
        this.showDialog = false;
    }
    PerformanceLimiterCalibrationsComponent.prototype.onEdit = function (row) {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].performanceLimiterCalibrations, row.id]);
    };
    PerformanceLimiterCalibrationsComponent.prototype.onDelete = function (row) {
        var _this = this;
        this.crudService.lockItem(row.id).subscribe(function (item) {
            // if record is successfully locked => proceed to delete
            _this.crudService.removeItem(row.id).subscribe(function (result) {
                _this.table.items.splice(_this.table.items.indexOf(row), 1);
            });
        }, function (error) {
            if (error.status === 409) {
                _this.dialogMessage = 'Record locked by another user!';
                _this.showDialog = true;
            }
        });
    };
    PerformanceLimiterCalibrationsComponent.prototype.addItem = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].performanceLimiterCalibrations, 'new']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__["a" /* AdvancedTableComponent */])
    ], PerformanceLimiterCalibrationsComponent.prototype, "table", void 0);
    PerformanceLimiterCalibrationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-performance-limiter-calibrations',
            template: __webpack_require__("./src/app/pages/performance-limiter-calibrations/performance-limiter-calibrations.component.html"),
            styles: [__webpack_require__("./src/app/pages/performance-limiter-calibrations/performance-limiter-calibrations.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_performance_limiter_calibration_service__["a" /* PerformanceLimiterCalibrationService */],
            __WEBPACK_IMPORTED_MODULE_6__dao_performance_limiter_calibration_field_mapper__["a" /* PerformanceLimiterCalibrationFieldMapper */]])
    ], PerformanceLimiterCalibrationsComponent);
    return PerformanceLimiterCalibrationsComponent;
}());



/***/ }),

/***/ "./src/app/pages/performance-limiter-calibrations/performance-limiter-calibrations.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceLimiterCalibrationDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__ = __webpack_require__("./src/app/common/components/base-data-source.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PerformanceLimiterCalibrationDataSource = /** @class */ (function (_super) {
    __extends(PerformanceLimiterCalibrationDataSource, _super);
    function PerformanceLimiterCalibrationDataSource(performanceLimiterCalibrationsService) {
        var _this = _super.call(this) || this;
        _this.performanceLimiterCalibrationsService = performanceLimiterCalibrationsService;
        return _this;
    }
    PerformanceLimiterCalibrationDataSource.prototype.getData = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = []; }
        if (sortField === void 0) { sortField = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        return this.performanceLimiterCalibrationsService.getItems(filter, sortField, sortDirection, pageIndex, pageSize);
    };
    return PerformanceLimiterCalibrationDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__["a" /* BaseDataSource */]));



/***/ }),

/***/ "./src/app/pages/project-detail/project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-details-page\r\n  title=\"Project details\"\r\n  [formDetails]=\"formDetails\"\r\n  [itemsService]=\"projectService\"\r\n  [createItemMethod]=\"createItem\"\r\n  (cancel)=\"back()\"\r\n></app-details-page> -->\r\n\r\n<app-header></app-header>\r\n\r\n<main role=\"main\">\r\n  <div class=\"container\">\r\n\r\n      <h3>Project</h3>\r\n\r\n      <app-dynamic-form\r\n        [vm]=\"item\"\r\n        [vmDefinition]=\"itemDefinition\"\r\n        [errorMessage]=\"errorMessage\"\r\n        [hasSaveButton]=\"lockedByCurrentUser\"\r\n        (cancel)=\"cancel()\"\r\n        (save)=\"save($event)\"\r\n      ></app-dynamic-form>\r\n\r\n      <p-dialog header=\"Warning\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n        <span>{{ dialogMessage }}</span>\r\n        <p-footer>\r\n          <button type=\"button\" pButton icon=\"fa-unlock\" (click)=\"dialogUnlock()\" label=\"Unlock it\" class=\"ui-button-success\"></button>\r\n          <button type=\"button\" pButton icon=\"fa-lock\" (click)=\"dialogKeepLock()\" label=\"Keep it locked\" class=\"ui-button-danger\"></button>\r\n        </p-footer>\r\n      </p-dialog>\r\n\r\n  </div>\r\n</main>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/project-detail/project-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "app-details-page {\n  width: 100%; }\n\np-card.details-card {\n  width: 100%; }\n\n.form-details-input {\n  padding-top: 1.5em; }\n\n.form-details-footer {\n  padding-top: 2em; }\n\n.form-details-input input {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/project-detail/project-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_projects_service__ = __webpack_require__("./src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_project_field_mapper__ = __webpack_require__("./src/app/dao/project-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(route, router, dataService, fieldMapper) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.itemDefinition = [
            {
                key: this.fieldMapper.fieldMap['id'],
                label: 'Id',
                type: 'number',
                hidden: true,
                isId: true,
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['status'],
                label: '',
                type: 'label',
            },
            {
                key: this.fieldMapper.fieldMap['name'],
                label: 'Project Name',
                type: 'text',
                disabled: true,
            },
            {
                key: this.fieldMapper.fieldMap['ecu'],
                label: 'Ecu',
                type: 'text',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['project'],
                label: 'Project',
                type: 'text',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['version'],
                label: 'Version',
                type: 'text',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['dsmStructure'],
                label: 'DSM Structure',
                type: 'select',
                options: [
                    { value: null, label: 'Select an option' },
                    { value: '0', label: '0' },
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                ],
                selectedOptions: [''],
                placeholder: 'Select an option',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['revision'],
                label: 'Revision',
                type: 'number',
                placeholder: 'Revision number',
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap['comment'],
                label: 'Comment',
                type: 'textarea',
                placeholder: 'Comment',
            },
        ];
        this.showDialog = false;
        this.lockedByCurrentUser = false;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isNew = this.route.snapshot.url[1].path === 'new';
        if (this.isNew) {
            this.lockedByCurrentUser = true;
            this.item = {
                id: 0,
                name: null,
                ecu: null,
                project: null,
                version: null,
                dsmStructure: null,
                revision: null,
                comment: null,
            };
        }
        else {
            var id = this.route.snapshot.params['id'];
            var statusIndex_1 = this.itemDefinition.findIndex(function (item) { return item.key === _this.fieldMapper.fieldMap['status']; });
            this.dataService.lockItem(id).subscribe(function (success) {
                _this.lockedByCurrentUser = true;
                _this.itemDefinition[statusIndex_1].label = 'Locked by you';
                _this.getItem();
            }, function (error) {
                if (error.status === 409) {
                    _this.lockedByCurrentUser = false;
                    _this.itemDefinition[statusIndex_1].label = 'Locked by another user';
                    _this.getItem();
                }
            });
        }
    };
    ProjectDetailComponent.prototype.getItem = function () {
        var _this = this;
        this.dataService.getItem(this.route.snapshot.params['id'])
            .subscribe(function (item) {
            _this.item = item;
        });
    };
    ProjectDetailComponent.prototype.cancel = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].projects]);
    };
    ProjectDetailComponent.prototype.save = function (item) {
        if (this.isNew) {
            this.create(item);
        }
        else {
            this.update(item);
        }
        this.cancel();
    };
    ProjectDetailComponent.prototype.update = function (item) {
        this.dataService.editItem(item.id, item)
            .subscribe(function (x) {
            console.log('project ' + item.id + ' updated');
        });
    };
    ProjectDetailComponent.prototype.create = function (item) {
        item.name = item.ecu + '_' + item.project + '_' + item.version + '_' + item.revision;
        this.dataService.addItem(item)
            .subscribe(function (x) {
            console.log('project ' + x.id + ' created');
        });
    };
    ProjectDetailComponent.prototype.dialogKeepLock = function () {
        this.showDialog = false;
        this.lockedByCurrentUser = true;
        this.cancel();
    };
    ProjectDetailComponent.prototype.dialogUnlock = function () {
        var _this = this;
        this.showDialog = false;
        this.dataService.unlockItem(this.route.snapshot.params['id']).subscribe(function (success) {
            _this.lockedByCurrentUser = false;
            _this.cancel();
        }, function (error) {
            console.log('error unlocking');
        });
    };
    ProjectDetailComponent.prototype.canDeactivate = function () {
        if (!this.lockedByCurrentUser) {
            return true;
        }
        this.dialogMessage = 'You have locked this project, which prevents other users from editing it! What would you like to do?';
        this.showDialog = true;
    };
    ProjectDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__("./src/app/pages/project-detail/project-detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/project-detail/project-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_4__dao_project_field_mapper__["a" /* ProjectFieldMapper */]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"course\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <advanced-table #table\r\n          [listTitle]=\"listTitle\"\r\n          [advancedTableData]=\"advancedTableData\"\r\n          [hasAddButton]=true\r\n          (addItem)=\"addItem()\"\r\n          [hasMultipleDelete]=true>\r\n        </advanced-table>\r\n        <p-dialog header=\"Error\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n          <span>{{ dialogMessage }}</span>\r\n          <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"showDialog=false\" label=\"Close\"></button>\r\n          </p-footer>\r\n        </p-dialog>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_projects_service__ = __webpack_require__("./src/app/services/projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_datasource__ = __webpack_require__("./src/app/pages/projects/projects.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__ = __webpack_require__("./src/app/common/components/advanced-table/advanced-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dao_project_field_mapper__ = __webpack_require__("./src/app/dao/project-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(router, crudService, fieldMapper) {
        var _this = this;
        this.router = router;
        this.crudService = crudService;
        this.fieldMapper = fieldMapper;
        this.listTitle = 'Projects';
        this.advancedTableData = {
            columns: [
                {
                    description: 'ECU',
                    valueGetter: function (item) { return item.ecu; },
                    matColumnDefValue: this.fieldMapper.fieldMap['ecu'],
                    filterMatchMode: 'contains'
                },
                {
                    description: 'Project',
                    valueGetter: function (item) { return item.project; },
                    matColumnDefValue: this.fieldMapper.fieldMap['project'],
                    filterMatchMode: 'contains'
                },
                {
                    description: 'Version',
                    valueGetter: function (item) { return item.version; },
                    matColumnDefValue: this.fieldMapper.fieldMap['version'],
                    filterMatchMode: 'contains'
                },
                {
                    description: 'DSM Structure',
                    valueGetter: function (item) { return String(item.dsmStructure); },
                    matColumnDefValue: this.fieldMapper.fieldMap['dsmStructure'],
                    filterMatchMode: 'in',
                },
                {
                    description: 'Revision',
                    valueGetter: function (item) { return String(item.revision); },
                    matColumnDefValue: this.fieldMapper.fieldMap['revision'],
                    filterMatchMode: 'in'
                }
            ],
            displayedColumns: [
                this.fieldMapper.fieldMap['ecu'],
                this.fieldMapper.fieldMap['project'],
                this.fieldMapper.fieldMap['version'],
                this.fieldMapper.fieldMap['dsmStructure'],
                this.fieldMapper.fieldMap['revision']
            ],
            dataSource: new __WEBPACK_IMPORTED_MODULE_3__projects_datasource__["a" /* ProjectsDataSource */](this.crudService),
            actions: [
                {
                    icon: 'edit',
                    disabled: function (any) { return false; },
                    event: function (x) { return _this.onEdit(x); }
                },
                {
                    icon: 'trash',
                    disabled: function (any) { return false; },
                    event: function (x) { return _this.onDelete(x); }
                }
            ]
        };
        this.showDialog = false;
    }
    ProjectsComponent.prototype.onEdit = function (row) {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].projects, row.id]);
    };
    ProjectsComponent.prototype.onDelete = function (row) {
        var _this = this;
        this.crudService.lockItem(row.id).subscribe(function (item) {
            // if record is successfully locked => proceed to delete
            _this.crudService.removeItem(row.id).subscribe(function (result) {
                _this.table.items.splice(_this.table.items.indexOf(row), 1);
            });
        }, function (error) {
            if (error.status === 409) {
                _this.dialogMessage = 'Record locked by another user!';
                _this.showDialog = true;
            }
        });
    };
    ProjectsComponent.prototype.addItem = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].projects, 'new']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__["a" /* AdvancedTableComponent */])
    ], ProjectsComponent.prototype, "table", void 0);
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__("./src/app/pages/projects/projects.component.html"),
            styles: [__webpack_require__("./src/app/pages/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_projects_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_6__dao_project_field_mapper__["a" /* ProjectFieldMapper */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__ = __webpack_require__("./src/app/common/components/base-data-source.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ProjectsDataSource = /** @class */ (function (_super) {
    __extends(ProjectsDataSource, _super);
    function ProjectsDataSource(projectsService) {
        var _this = _super.call(this) || this;
        _this.projectsService = projectsService;
        return _this;
    }
    ProjectsDataSource.prototype.getData = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = []; }
        if (sortField === void 0) { sortField = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        return this.projectsService.getItems(filter, sortField, sortDirection, pageIndex, pageSize);
    };
    return ProjectsDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__["a" /* BaseDataSource */]));



/***/ }),

/***/ "./src/app/pages/unauthorized-access/unauthorized-access.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"course\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <p style=\"margin: 0 auto; font-size: 2rem; font-weight: bold;\">You tried to access restricted content!</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/unauthorized-access/unauthorized-access.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/unauthorized-access/unauthorized-access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnauthorizedAccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UnauthorizedAccessComponent = /** @class */ (function () {
    function UnauthorizedAccessComponent() {
    }
    UnauthorizedAccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-unauthorized-access',
            template: __webpack_require__("./src/app/pages/unauthorized-access/unauthorized-access.component.html"),
            styles: [__webpack_require__("./src/app/pages/unauthorized-access/unauthorized-access.component.scss")]
        })
    ], UnauthorizedAccessComponent);
    return UnauthorizedAccessComponent;
}());



/***/ }),

/***/ "./src/app/pages/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"container\">\r\n\r\n      <h3>User</h3>\r\n\r\n      <app-dynamic-form\r\n        [vm]=\"item\"\r\n        [vmDefinition]=\"itemDefinition\"\r\n        [errorMessage]=\"errorMessage\"\r\n        (cancel)=\"cancel()\"\r\n        [hasSaveButton]=true\r\n        (save)=\"save($event)\"\r\n      ></app-dynamic-form>\r\n\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/user-detail/user-detail.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dao_user_field_mapper__ = __webpack_require__("./src/app/dao/user-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_roles_service__ = __webpack_require__("./src/app/services/roles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dao_role_field_mapper__ = __webpack_require__("./src/app/dao/role-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(route, router, dataService, fieldMapper, rolesDataService, rolesFieldMapper) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.fieldMapper = fieldMapper;
        this.rolesDataService = rolesDataService;
        this.rolesFieldMapper = rolesFieldMapper;
        this.roles = [];
        this.itemDefinition = [
            {
                key: this.fieldMapper.fieldMap.id,
                label: 'Id',
                type: 'number',
                hidden: true,
                disabled: true,
                isId: true,
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap.username,
                label: 'Username',
                type: 'text',
                disabled: true,
                required: true,
            },
            {
                key: this.fieldMapper.fieldMap.roleId,
                label: 'Role',
                type: 'select',
                disabled: false,
                required: true,
                options: [],
                selectedOptions: [],
            },
        ];
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        var userInfo = JSON.parse(localStorage.getItem('user'))._value;
        if (userInfo.id === id) {
            alert('You cannot edit your own role!');
            this.cancel();
        }
        // get roles from api
        this.rolesDataService.getItems([], this.rolesFieldMapper.fieldMap.name, 'asc', 0, 0)
            .subscribe(function (result) {
            _this.roles = result.data.map(function (role) {
                return { label: role[_this.rolesFieldMapper.fieldMap.name], value: role[_this.rolesFieldMapper.fieldMap.id] };
            });
            var rolesFieldDefinitionIdx = _this.itemDefinition.findIndex(function (item) { return item.key === _this.fieldMapper.fieldMap.roleId; });
            _this.itemDefinition[rolesFieldDefinitionIdx].options = _this.roles;
            // get user info
            _this.dataService.getItem(id)
                .subscribe(function (item) {
                _this.item = item;
                _this.itemDefinition[rolesFieldDefinitionIdx].selectedOptions = [_this.item.roleId.toString()];
            });
        });
    };
    UserDetailComponent.prototype.cancel = function () {
        this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__utils_routing_paths__["a" /* RoutingPaths */].users]);
    };
    UserDetailComponent.prototype.save = function (item) {
        this.update(item);
    };
    UserDetailComponent.prototype.update = function (item) {
        var _this = this;
        var newRoleId = typeof item.roleId === 'number' ? item.roleId : item.roleId[0];
        // update only if selected role is different from the current one
        if (newRoleId !== this.item.roleId) {
            this.dataService.editItem(this.item.id, item)
                .subscribe(function (x) {
                console.log('userId #' + _this.item.id + ' updated with roleId #' + newRoleId);
            }, function (error) { }, function () {
                _this.cancel();
            });
        }
        else {
            alert('Nothing to update! Selected role is equal to current role!');
        }
    };
    UserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__("./src/app/pages/user-detail/user-detail.component.html"),
            styles: [__webpack_require__("./src/app/pages/user-detail/user-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_4__dao_user_field_mapper__["a" /* UserFieldMapper */],
            __WEBPACK_IMPORTED_MODULE_5__services_roles_service__["a" /* RolesService */],
            __WEBPACK_IMPORTED_MODULE_6__dao_role_field_mapper__["a" /* RoleFieldMapper */]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<main role=\"main\">\r\n  <div class=\"course\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <advanced-table #table\r\n          [listTitle]=\"listTitle\"\r\n          [advancedTableData]=\"advancedTableData\"\r\n          [hasAddButton]=false\r\n          [hasMultipleDelete]=false>\r\n        </advanced-table>\r\n        <!-- (addItem)=\"addItem()\" -->\r\n        <p-dialog header=\"Error\" [(visible)]=\"showDialog\" modal=\"modal\" [responsive]=\"true\">\r\n          <span>{{ dialogMessage }}</span>\r\n          <p-footer>\r\n            <button type=\"button\" pButton icon=\"fa-close\" (click)=\"showDialog=false\" label=\"Close\"></button>\r\n          </p-footer>\r\n        </p-dialog>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</main>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pages/users/users.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("./src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_datasource__ = __webpack_require__("./src/app/pages/users/users.datasource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__ = __webpack_require__("./src/app/common/components/advanced-table/advanced-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__ = __webpack_require__("./src/app/utils/routing-paths.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dao_user_field_mapper__ = __webpack_require__("./src/app/dao/user-field-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UsersComponent = /** @class */ (function () {
    function UsersComponent(router, crudService, fieldMapper) {
        var _this = this;
        this.router = router;
        this.crudService = crudService;
        this.fieldMapper = fieldMapper;
        this.listTitle = 'Users';
        this.advancedTableData = {
            columns: [
                {
                    description: 'Username',
                    valueGetter: function (item) { return item.username; },
                    matColumnDefValue: this.fieldMapper.fieldMap.username,
                    filterMatchMode: 'contains',
                },
                {
                    description: 'Role',
                    valueGetter: function (item) { return item.role; },
                    matColumnDefValue: this.fieldMapper.fieldMap.role,
                    filterMatchMode: 'contains',
                }
            ],
            displayedColumns: [
                this.fieldMapper.fieldMap.username,
                this.fieldMapper.fieldMap.role,
            ],
            dataSource: new __WEBPACK_IMPORTED_MODULE_3__users_datasource__["a" /* UsersDataSource */](this.crudService),
            actions: [
                {
                    icon: 'edit',
                    disabled: function (any) { return false; },
                    event: function (x) { return _this.onEdit(x); },
                },
            ]
        };
        this.showDialog = false;
    }
    UsersComponent.prototype.onEdit = function (row) {
        var id = row.id;
        var userInfo = JSON.parse(localStorage.getItem('user'))._value;
        if (userInfo.id === id) {
            alert('You cannot edit your own role!');
        }
        else {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_5__utils_routing_paths__["a" /* RoutingPaths */].users, id]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__common_components_advanced_table_advanced_table_component__["a" /* AdvancedTableComponent */])
    ], UsersComponent.prototype, "table", void 0);
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("./src/app/pages/users/users.component.html"),
            styles: [__webpack_require__("./src/app/pages/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_6__dao_user_field_mapper__["a" /* UserFieldMapper */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/users.datasource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersDataSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__ = __webpack_require__("./src/app/common/components/base-data-source.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var UsersDataSource = /** @class */ (function (_super) {
    __extends(UsersDataSource, _super);
    function UsersDataSource(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    UsersDataSource.prototype.getData = function (filter, sortField, sortDirection, pageIndex, pageSize) {
        if (filter === void 0) { filter = []; }
        if (sortField === void 0) { sortField = ''; }
        if (sortDirection === void 0) { sortDirection = 'asc'; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 10; }
        return this.service.getItems(filter, sortField, sortDirection, pageIndex, pageSize);
    };
    return UsersDataSource;
}(__WEBPACK_IMPORTED_MODULE_0__common_components_base_data_source__["a" /* BaseDataSource */]));



/***/ }),

/***/ "./src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountService = /** @class */ (function () {
    function AccountService(apisService) {
        this.apisService = apisService;
    }
    AccountService.prototype.login = function (username, password) {
        return this.apisService.login(username, password);
    };
    AccountService.prototype.logout = function () {
        return this.apisService.logout();
    };
    Object.defineProperty(AccountService.prototype, "isLoggedIn", {
        get: function () {
            return this.apisService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    AccountService.prototype.getUserInfo = function () {
        return this.apisService.getUserInfo();
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__["a" /* ApisService */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/services/channel-descriptions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelDescriptionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dao_channel_description_field_mapper__ = __webpack_require__("./src/app/dao/channel-description-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_lockable_crud_service__ = __webpack_require__("./src/app/common/services/lockable-crud.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChannelDescriptionsService = /** @class */ (function (_super) {
    __extends(ChannelDescriptionsService, _super);
    function ChannelDescriptionsService(apisService, fieldMapper) {
        return _super.call(this, apisService, fieldMapper) || this;
    }
    Object.defineProperty(ChannelDescriptionsService.prototype, "apiRoot", {
        get: function () {
            return 'ChannelDescriptions';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChannelDescriptionsService.prototype, "lockResourceType", {
        get: function () {
            return 'channeldescription';
        },
        enumerable: true,
        configurable: true
    });
    ChannelDescriptionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__["a" /* ApisService */], __WEBPACK_IMPORTED_MODULE_2__dao_channel_description_field_mapper__["a" /* ChannelDescriptionFieldMapper */]])
    ], ChannelDescriptionsService);
    return ChannelDescriptionsService;
}(__WEBPACK_IMPORTED_MODULE_3__common_services_lockable_crud_service__["a" /* LockableCrudService */]));



/***/ }),

/***/ "./src/app/services/failures.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FailuresService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dao_failure_field_mapper__ = __webpack_require__("./src/app/dao/failure-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_services_lockable_crud_service__ = __webpack_require__("./src/app/common/services/lockable-crud.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FailuresService = /** @class */ (function (_super) {
    __extends(FailuresService, _super);
    function FailuresService(apisService, fieldMapper) {
        return _super.call(this, apisService, fieldMapper) || this;
    }
    Object.defineProperty(FailuresService.prototype, "apiRoot", {
        get: function () {
            return 'Failures';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FailuresService.prototype, "lockResourceType", {
        get: function () {
            return 'failure';
        },
        enumerable: true,
        configurable: true
    });
    FailuresService.prototype.copyFailures = function (failures, comment) {
        if (comment === void 0) { comment = ''; }
        var failureIdsToCopy = failures.map(function (failure) { return failure.id; });
        return this.apisService.performPut(this.baseApiUrlWithRoot + '/copy', {
            failures: failureIdsToCopy,
            comment: comment,
        }, true);
    };
    FailuresService.prototype.updateFailuresProjects = function (failures) {
        return this.apisService.performPut(this.baseApiUrlWithRoot, { failures: failures }, true);
    };
    FailuresService.prototype.getFaultDescriptions = function (failureId) {
        return this.getSubUrl(failureId, 'faults');
    };
    FailuresService.prototype.updateFaultDescriptions = function (failureId, faultDescriptions) {
        return this.apisService.performPut(this.baseApiUrlWithRoot + '/' + failureId + '/faults', faultDescriptions, true);
    };
    FailuresService.prototype.getAmbientConditions = function (failureId) {
        return this.getSubUrl(failureId, 'ambients');
    };
    // TODO: create a service for ambient conditions only
    FailuresService.prototype.updateAmbientCondition = function (ambientCondition) {
        return this.apisService.performPut(this.apisService.baseApiUrl + '/AmbientConditions/' + ambientCondition['id'], 
        // this.baseApiUrlWithRoot + "/" + failureId + "/faults",
        ambientCondition, true);
    };
    FailuresService.prototype.getCarbDescriptions = function (failureId) {
        return this.getSubUrl(failureId, 'carbs');
    };
    FailuresService.prototype.updateCarbDescriptions = function (failureId, carbDescriptions) {
        return this.apisService.performPut(this.baseApiUrlWithRoot + '/' + failureId + '/carbs', carbDescriptions, true);
    };
    // getCarbFids(failureId: number): Observable<object> {
    FailuresService.prototype.getCarbFids = function (failureId) {
        return this.getSubUrl(failureId, 'fids');
    };
    FailuresService.prototype.updateCarbFids = function (failureId, carbFids) {
        // TODO
        console.log('TODO: save CARB FIDs (missing endpoint in api!)');
        console.log(carbFids);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({});
        // return this.apisService.performPut(
        //   this.baseApiUrlWithRoot + '/' + failureId + '/fids',
        //   carbFids,
        //   true
        // );
    };
    FailuresService.prototype.getSubUrl = function (failureId, subUrl) {
        return this.apisService.performGet(this.baseApiUrlWithRoot + '/' + failureId + '/' + subUrl, true);
    };
    FailuresService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_services_apis_service__["a" /* ApisService */], __WEBPACK_IMPORTED_MODULE_3__dao_failure_field_mapper__["a" /* FailureFieldMapper */]])
    ], FailuresService);
    return FailuresService;
}(__WEBPACK_IMPORTED_MODULE_4__common_services_lockable_crud_service__["a" /* LockableCrudService */]));



/***/ }),

/***/ "./src/app/services/iso-codes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsoCodesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dao_iso_code_field_mapper__ = __webpack_require__("./src/app/dao/iso-code-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_lockable_crud_service__ = __webpack_require__("./src/app/common/services/lockable-crud.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IsoCodesService = /** @class */ (function (_super) {
    __extends(IsoCodesService, _super);
    function IsoCodesService(apisService, fieldMapper) {
        return _super.call(this, apisService, fieldMapper) || this;
    }
    Object.defineProperty(IsoCodesService.prototype, "apiRoot", {
        get: function () {
            return 'IsoCodes';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IsoCodesService.prototype, "lockResourceType", {
        get: function () {
            return 'isocode';
        },
        enumerable: true,
        configurable: true
    });
    IsoCodesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__["a" /* ApisService */], __WEBPACK_IMPORTED_MODULE_2__dao_iso_code_field_mapper__["a" /* IsoCodeFieldMapper */]])
    ], IsoCodesService);
    return IsoCodesService;
}(__WEBPACK_IMPORTED_MODULE_3__common_services_lockable_crud_service__["a" /* LockableCrudService */]));



/***/ }),

/***/ "./src/app/services/label-description-check.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LabelDescriptionCheckService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelDescriptionCheckRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LabelDescriptionCheckService = /** @class */ (function () {
    // constructor(apisService: ApisService, fieldMapper: LabelDescriptionCheckFieldMapper) {}
    function LabelDescriptionCheckService(apisService) {
        this.apisService = apisService;
    }
    Object.defineProperty(LabelDescriptionCheckService.prototype, "apiRoot", {
        get: function () {
            return 'LabelDescriptions/check';
        },
        enumerable: true,
        configurable: true
    });
    LabelDescriptionCheckService.prototype.check = function (requestParams) {
        var url = this.apisService.baseApiUrl + '/' + this.apiRoot + requestParams.getQueryString();
        return this.apisService.performGet(url, true).map(function (result) {
            return result;
        });
    };
    LabelDescriptionCheckService.prototype.getTxtReport = function (requestParams) {
        var url = this.apisService.baseApiUrl + '/' + this.apiRoot + '/reportTXT' + requestParams.getQueryString();
        return this.apisService.performGetText(url, true, 'text');
    };
    LabelDescriptionCheckService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__["a" /* ApisService */]])
    ], LabelDescriptionCheckService);
    return LabelDescriptionCheckService;
}());

var LabelDescriptionCheckRequest = /** @class */ (function () {
    function LabelDescriptionCheckRequest() {
        this.generalRemark = true;
        this.testCondition = true;
        this.faultDetection = true;
        this.defectDebouncing = true;
        this.faultHealing = true;
        this.healingDebouncing = true;
        this.systemReaction = true;
        this.faultDisabling = true;
        this.faultCause = true;
        this.faultRepair = true;
    }
    LabelDescriptionCheckRequest.prototype.getQueryString = function () {
        return '?GeneralRemark=' + this.generalRemark +
            '&TestCondition=' + this.testCondition +
            '&FaultDetection=' + this.faultDetection +
            '&DefectDebouncing=' + this.defectDebouncing +
            '&FaultHealing=' + this.faultHealing +
            '&HealingDebouncing=' + this.healingDebouncing +
            '&SystemReaction=' + this.systemReaction +
            '&FaultDisabling=' + this.faultDisabling +
            '&FaultCause=' + this.faultCause +
            '&FaultRepair=' + this.faultRepair +
            (this.projectId ? '&ProjectId=' + this.projectId : '');
    };
    return LabelDescriptionCheckRequest;
}());



/***/ }),

/***/ "./src/app/services/label-descriptions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelDescriptionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_crud_service__ = __webpack_require__("./src/app/common/services/crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dao_label_description_field_mapper__ = __webpack_require__("./src/app/dao/label-description-field-mapper.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LabelDescriptionsService = /** @class */ (function (_super) {
    __extends(LabelDescriptionsService, _super);
    function LabelDescriptionsService(apisService, fieldMapper) {
        return _super.call(this, apisService, fieldMapper) || this;
    }
    Object.defineProperty(LabelDescriptionsService.prototype, "apiRoot", {
        get: function () {
            return 'LabelDescriptions';
        },
        enumerable: true,
        configurable: true
    });
    LabelDescriptionsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__common_services_apis_service__["a" /* ApisService */], __WEBPACK_IMPORTED_MODULE_3__dao_label_description_field_mapper__["a" /* LabelDescriptionFieldMapper */]])
    ], LabelDescriptionsService);
    return LabelDescriptionsService;
}(__WEBPACK_IMPORTED_MODULE_1__common_services_crud_service__["a" /* CrudService */]));



/***/ }),

/***/ "./src/app/services/performance-limiter-calibration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceLimiterCalibrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dao_performance_limiter_calibration_field_mapper__ = __webpack_require__("./src/app/dao/performance-limiter-calibration-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_lockable_crud_service__ = __webpack_require__("./src/app/common/services/lockable-crud.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PerformanceLimiterCalibrationService = /** @class */ (function (_super) {
    __extends(PerformanceLimiterCalibrationService, _super);
    function PerformanceLimiterCalibrationService(apisService, fieldMapper) {
        return _super.call(this, apisService, fieldMapper) || this;
    }
    Object.defineProperty(PerformanceLimiterCalibrationService.prototype, "apiRoot", {
        get: function () {
            return 'FIDReactions';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PerformanceLimiterCalibrationService.prototype, "lockResourceType", {
        get: function () {
            return 'fidreaction';
        },
        enumerable: true,
        configurable: true
    });
    PerformanceLimiterCalibrationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__["a" /* ApisService */], __WEBPACK_IMPORTED_MODULE_2__dao_performance_limiter_calibration_field_mapper__["a" /* PerformanceLimiterCalibrationFieldMapper */]])
    ], PerformanceLimiterCalibrationService);
    return PerformanceLimiterCalibrationService;
}(__WEBPACK_IMPORTED_MODULE_3__common_services_lockable_crud_service__["a" /* LockableCrudService */]));



/***/ }),

/***/ "./src/app/services/projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dao_project_field_mapper__ = __webpack_require__("./src/app/dao/project-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_lockable_crud_service__ = __webpack_require__("./src/app/common/services/lockable-crud.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsService = /** @class */ (function (_super) {
    __extends(ProjectsService, _super);
    function ProjectsService(apisService, fieldMapper) {
        return _super.call(this, apisService, fieldMapper) || this;
    }
    Object.defineProperty(ProjectsService.prototype, "apiRoot", {
        get: function () {
            return 'Projects';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProjectsService.prototype, "lockResourceType", {
        get: function () {
            return 'project';
        },
        enumerable: true,
        configurable: true
    });
    ProjectsService.prototype.editProject = function (projectId, formData) {
        return this.apisService.performPutFormData(this.apisService.baseApiUrl + '/' + this.apiRoot + '/Edit/' + projectId, formData, true);
    };
    ProjectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__["a" /* ApisService */], __WEBPACK_IMPORTED_MODULE_2__dao_project_field_mapper__["a" /* ProjectFieldMapper */]])
    ], ProjectsService);
    return ProjectsService;
}(__WEBPACK_IMPORTED_MODULE_3__common_services_lockable_crud_service__["a" /* LockableCrudService */]));



/***/ }),

/***/ "./src/app/services/roles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RolesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dao_role_field_mapper__ = __webpack_require__("./src/app/dao/role-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_crud_service__ = __webpack_require__("./src/app/common/services/crud.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RolesService = /** @class */ (function (_super) {
    __extends(RolesService, _super);
    function RolesService(apisService, fieldMapper) {
        return _super.call(this, apisService, fieldMapper) || this;
    }
    Object.defineProperty(RolesService.prototype, "apiRoot", {
        get: function () {
            return 'Roles';
        },
        enumerable: true,
        configurable: true
    });
    RolesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__["a" /* ApisService */], __WEBPACK_IMPORTED_MODULE_2__dao_role_field_mapper__["a" /* RoleFieldMapper */]])
    ], RolesService);
    return RolesService;
}(__WEBPACK_IMPORTED_MODULE_3__common_services_crud_service__["a" /* CrudService */]));



/***/ }),

/***/ "./src/app/services/upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UploadService = /** @class */ (function () {
    function UploadService(apisService) {
        this.apisService = apisService;
    }
    UploadService.prototype.getUploadA2LUrl = function () {
        return this.apisService.baseApiUrl + '/uploadfiles/a2l';
    };
    UploadService.prototype.getUploadHexUrl = function () {
        return this.apisService.baseApiUrl + '/uploadfiles/hex';
    };
    UploadService.prototype.uploadA2L = function (formData) {
        return this.upload(formData, this.getUploadA2LUrl());
    };
    UploadService.prototype.uploadHex = function (formData) {
        return this.upload(formData, this.getUploadHexUrl());
    };
    UploadService.prototype.parseUploadedFiles = function (data) {
        return this.apisService.performPut(this.apisService.baseApiUrl + '/upload', data, false, 'application/json');
    };
    UploadService.prototype.parseUploadedFileToAddProject = function (data) {
        return this.apisService.performPost(this.apisService.baseApiUrl + '/upload', data, false, 'application/json');
    };
    UploadService.prototype.upload = function (formData, url) {
        return this.apisService.performPostFormDataWithProgress(url, formData, false);
    };
    UploadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__["a" /* ApisService */]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__ = __webpack_require__("./src/app/common/services/apis.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dao_user_field_mapper__ = __webpack_require__("./src/app/dao/user-field-mapper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_services_crud_service__ = __webpack_require__("./src/app/common/services/crud.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = /** @class */ (function (_super) {
    __extends(UsersService, _super);
    function UsersService(apisService, fieldMapper) {
        return _super.call(this, apisService, fieldMapper) || this;
    }
    Object.defineProperty(UsersService.prototype, "apiRoot", {
        get: function () {
            return 'Users';
        },
        enumerable: true,
        configurable: true
    });
    UsersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__common_services_apis_service__["a" /* ApisService */], __WEBPACK_IMPORTED_MODULE_2__dao_user_field_mapper__["a" /* UserFieldMapper */]])
    ], UsersService);
    return UsersService;
}(__WEBPACK_IMPORTED_MODULE_3__common_services_crud_service__["a" /* CrudService */]));



/***/ }),

/***/ "./src/app/utils/routing-paths.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingPaths; });
var RoutingPaths = /** @class */ (function () {
    function RoutingPaths() {
    }
    // public static readonly about: string = 'about';
    // public static readonly calibrationTest: string = 'calibration-test';
    // public static readonly carbCreate: string = 'carb-create';
    RoutingPaths.channelDescriptions = 'channel-descriptions';
    RoutingPaths.checkLabelsExistence = 'check-labels';
    RoutingPaths.copyFailuresList = 'copy-failures-list';
    RoutingPaths.create = 'create';
    RoutingPaths.editProject = 'edit-project';
    RoutingPaths.failures = 'failures';
    RoutingPaths.failuresProjects = 'failures-projects';
    RoutingPaths.home = 'home';
    RoutingPaths.isoCodes = 'iso-codes';
    RoutingPaths.labelDescriptions = 'label-descriptions';
    RoutingPaths.login = 'login';
    RoutingPaths.performanceLimiterCalibrations = 'performance-limiter-calibrations';
    RoutingPaths.projects = 'projects';
    RoutingPaths.unauthorized = 'unauthorized';
    RoutingPaths.users = 'users';
    return RoutingPaths;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    // apisBaseUrl: 'https://fptfnr-be-sf.altran.it/api',
    apisBaseUrl: 'http://fnrtool.northeurope.cloudapp.azure.com:5002/api',
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map