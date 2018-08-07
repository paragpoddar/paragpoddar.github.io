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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var _report_report_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report/report.module */ "./src/app/report/report.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFound"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: '', redirectTo: '/report/dashboard', pathMatch: 'full' },
                    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFound"] }
                ]),
                _report_report_module__WEBPACK_IMPORTED_MODULE_6__["ReportModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return PageNotFound; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFound = /** @class */ (function () {
    function PageNotFound() {
    }
    PageNotFound = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: "\n        <h1> Page Not Found.. </h1>\n    "
        })
    ], PageNotFound);
    return PageNotFound;
}());



/***/ }),

/***/ "./src/app/report/checkCategory/component.html":
/*!*****************************************************!*\
  !*** ./src/app/report/checkCategory/component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row>\n    <span class=\"example-spacer\"></span>\n    <button mat-button [matMenuTriggerFor]=\"menu\" [disabled]=\"regionSelectValidate\" >{{selectedRegion}}</button>\n    <mat-menu #menu=\"matMenu\">\n      <div style=\"height: 300px;\">\n          <button mat-menu-item *ngIf=\"regions && regions.length>1\" (click)=\"onRegionChange('all')\">all</button>\n          <button mat-menu-item *ngFor=\"let region of regions\" (click)=\"onRegionChange(region)\"> {{region}}</button>\n      </div>\n    </mat-menu>\n    <!-- <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>Item 1</button>\n        <button mat-menu-item>Item 2</button>\n      </mat-menu> -->\n    <!-- <div class=\"toolbar-region-container\">\n      <button mat-button class=\"toolbar-region-button\" (click)=\"isOpen=!isOpen\" [class.open]=\"isOpen\">{{selectedRegion}}</button>\n      <div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\n        <p>dropdown content</p>\n      </div>\n    </div> -->\n    <!-- <app-regionmenu [selectedRegion]=\"selectedRegion\" [regions]=\"regions\"></app-regionmenu> -->\n\n    <a mat-button routerLink=\"/\">Main Dashboard</a>\n  </mat-toolbar-row>\n</mat-toolbar>\n<div class=\"container-one\">\n  <!-- <mat-form-field *ngIf=\"!globalService\">\n    <mat-select placeholder=\"Regions\" (selectionChange)=\"onRegionChange(regionName)\" [(ngModel)]=\"regionName\">\n      <mat-option *ngFor=\"let region of regions\" [value]=\"region\">{{region}}</mat-option>\n    </mat-select>\n  </mat-form-field> -->\n  <div class=\"detail-container\">\n    <div *ngFor=\"let checkCategory of checkCategories\">\n      <mat-card class=\"example-card\">\n        <mat-card-header mat-card-image [ngClass]=\"checkCategory.goodConditionCount>checkCategory.badConditionCount ? 'condition-good' : 'condition-bad'\" >\n          <mat-card-title>\n            <h3>{{checkCategory.checkCategoryName}}</h3>\n          </mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <p>Number of check of resources in good conditon : {{checkCategory.goodConditionCount}}</p>\n          <p>Number of check of resources in bad conditon : {{checkCategory.badConditionCount}}</p>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-button (click)=\"goToCheckDetail(checkCategory)\">Details</button>\n          </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/report/checkCategory/component.scss":
/*!*****************************************************!*\
  !*** ./src/app/report/checkCategory/component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.detail-container {\n  display: flex;\n  flex-wrap: wrap; }\n\n.example-card {\n  margin-right: 20px;\n  margin-left: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  max-width: 400px;\n  min-width: 200px;\n  flex: 1; }\n\n.condition-good {\n  background-color: #06a520; }\n\n.condition-bad {\n  background-color: #dd1f06; }\n\n.container-one {\n  display: flex;\n  flex-direction: column; }\n\n.container-two {\n  display: flex; }\n"

/***/ }),

/***/ "./src/app/report/checkCategory/component.ts":
/*!***************************************************!*\
  !*** ./src/app/report/checkCategory/component.ts ***!
  \***************************************************/
/*! exports provided: CloudReportCheckCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudReportCheckCategoryComponent", function() { return CloudReportCheckCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../report.service */ "./src/app/report/report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CloudReportCheckCategoryComponent = /** @class */ (function () {
    function CloudReportCheckCategoryComponent(route, cloudReportService, elementRef, router) {
        this.route = route;
        this.cloudReportService = cloudReportService;
        this.elementRef = elementRef;
        this.router = router;
        this.regionSelectValidate = false;
    }
    CloudReportCheckCategoryComponent.prototype.ngOnInit = function () {
        this.loadCheckCategoryPageData();
    };
    CloudReportCheckCategoryComponent.prototype.loadCheckCategoryPageData = function () {
        var _this = this;
        this.service = this.route.snapshot.paramMap.get('service');
        this.cloudReportService.getScanReportData()
            .subscribe(function (data) {
            _this.scanReportData = data;
            var regionsHaveData = _this.cloudReportService.getRegionsHaveData('aws.' + _this.service, data);
            if (regionsHaveData.length === 1) {
                _this.selectedRegion = regionsHaveData[0];
                _this.regionSelectValidate = true;
                _this.regions = regionsHaveData;
            }
            else {
                _this.regions = regionsHaveData;
                _this.selectedRegion = _this.cloudReportService.manageRegion(undefined, 'aws.' + _this.service, data);
            }
            _this.checkCategories = _this.cloudReportService.getCheckCategoryData('aws.' + _this.service, _this.selectedRegion, data);
        });
    };
    CloudReportCheckCategoryComponent.prototype.onRegionChange = function (region) {
        this.cloudReportService.manageRegion(region);
        this.ngOnInit();
    };
    CloudReportCheckCategoryComponent.prototype.goToCheckDetail = function (checkCategory) {
        this.router.navigate(['/report/checkDetail',
            {
                checkCategory: checkCategory['checkCategoryName'],
                region: this.selectedRegion,
                service: this.service
            }
        ]);
    };
    CloudReportCheckCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cloudreportcheckdetailcomponent',
            template: __webpack_require__(/*! ./component.html */ "./src/app/report/checkCategory/component.html"),
            styles: [__webpack_require__(/*! ./component.scss */ "./src/app/report/checkCategory/component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _report_service__WEBPACK_IMPORTED_MODULE_2__["CloudReportService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CloudReportCheckCategoryComponent);
    return CloudReportCheckCategoryComponent;
}());



/***/ }),

/***/ "./src/app/report/checkDetail/component.html":
/*!***************************************************!*\
  !*** ./src/app/report/checkDetail/component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"\n  display: flex;\n  padding-top: 20px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 10px;\n  background-color: #8080801f;\n  \">\n  <div style=\"margin-right: 10px\">\n    <mat-form-field>\n      <mat-select placeholder=\"Services\" [(value)]=\"selectedService\" (selectionChange)=\"fetchServiceCheckCateroies()\">\n        <mat-option *ngFor=\"let service of services\" [value]=\"service\">{{service}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div style=\"margin-right: 10px\">\n    <mat-form-field>\n      <mat-select placeholder=\"Checks\" [(value)]=\"selectedServiceCheckCategory\" (selectionChange)=\"fetchServiceCheckCateroyRegions()\">\n        <mat-option *ngFor=\"let serviceCheckCategory of serviceCheckCategories\" [value]=\"serviceCheckCategory\">{{serviceCheckCategory}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div style=\"margin-right: 10px\">\n    <mat-form-field>\n      <mat-select placeholder=\"Regions\" [(value)]=\"selectedServiceCheckCategoryRegion\" (selectionChange)=reload()>\n        <mat-option *ngIf=\"serviceCheckCategoryRegions && (serviceCheckCategoryRegions.length > 1)\" [value]=\"'all'\">all</mat-option>\n        <mat-option *ngFor=\"let serviceCheckCategoryRegion of serviceCheckCategoryRegions\" [value]=\"serviceCheckCategoryRegion\">{{serviceCheckCategoryRegion}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <!-- <div style=\"margin-right: 10px\">\n    <button mat-flat-button (click)=\"reload()\">Go</button>\n  </div> -->\n  <div class=\"example-spacer\"></div>\n  <div>\n      <button mat-button (click)=\"goToServiceDashboard()\">Service dashboard</button>\n    </div>\n  <div>\n    <button mat-button routerLink=\"/\">Main dashboard</button>\n  </div>\n</div>\n\n<mat-form-field>\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n<div class=\"check-detail-container mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <ng-container matColumnDef=\"resourceName\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>Resource Name </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.severity=='Good' ?  'good': (element.severity=='Warning' || element.severity=='Info' ? 'warning' : 'failure')\">\n        {{element.resourceSummary.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"resourceValue\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Resource Value </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.severity=='Good' ?  'good': (element.severity=='Warning' || element.severity=='Info' ? 'warning' : 'failure')\">\n        {{element.resourceSummary.value}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"region\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Region </th>\n        <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.severity=='Good' ?  'good': (element.severity=='Warning' || element.severity=='Info' ? 'warning' : 'failure')\">\n          {{element.region}} </td>\n      </ng-container>\n\n    <ng-container matColumnDef=\"message\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Message </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.severity=='Good' ?  'good': (element.severity=='Warning' || element.severity=='Info' ?  'warning' : 'failure')\">\n        {{element.message}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"severity\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Severity </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.severity=='Good' ?  'good': (element.severity=='Warning' || element.severity=='Info' ? 'warning' : 'failure')\">\n        {{element.severity}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n  <mat-paginator [length]=\"resultLength\" [pageSize]=\"10\" showFirstLastButtons></mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/report/checkDetail/component.scss":
/*!***************************************************!*\
  !*** ./src/app/report/checkDetail/component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto; }\n\ntable {\n  width: 100%; }\n\n.good {\n  background-color: #5faa5f; }\n\n.warning {\n  background-color: #caca00; }\n\n.failure {\n  background-color: #da6868; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/report/checkDetail/component.ts":
/*!*************************************************!*\
  !*** ./src/app/report/checkDetail/component.ts ***!
  \*************************************************/
/*! exports provided: CloudReportCheckDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudReportCheckDetailComponent", function() { return CloudReportCheckDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../report.service */ "./src/app/report/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CloudReportCheckDetailComponent = /** @class */ (function () {
    function CloudReportCheckDetailComponent(cloudReportService, route, router) {
        this.cloudReportService = cloudReportService;
        this.route = route;
        this.router = router;
        this.displayedColumns = ['resourceName', 'resourceValue', 'region', 'message', 'severity'];
        this.urlData = {};
        this.resultLength = 0;
        this.hasNoRegions = true;
    }
    CloudReportCheckDetailComponent.prototype.ngOnInit = function () {
        this.loadCheckDetailPageData();
    };
    CloudReportCheckDetailComponent.prototype.loadCheckDetailPageData = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.urlData['checkCategory'] = params['checkCategory'];
            _this.urlData['region'] = params['region'];
            _this.urlData['service'] = params['service'];
            _this.cloudReportService.getScanReportData()
                .subscribe(function (data) {
                _this.scanReportData = data;
                _this.services = _this.cloudReportService.getServices(data);
                _this.selectedService = _this.urlData['service'];
                _this.serviceCheckCategories = _this.cloudReportService.getServiceCheckCategories('aws.' + _this.selectedService, data);
                _this.selectedServiceCheckCategory = _this.urlData['checkCategory'];
                _this.serviceCheckCategoryRegions = _this.cloudReportService.getServiceCheckCategoryRegions('aws.' + _this.selectedService, _this.selectedServiceCheckCategory, data);
                _this.selectedServiceCheckCategoryRegion = _this.urlData['region'];
                var checkDetailData = _this.cloudReportService.getCheckDetailData(_this.urlData['region'], 'aws.' + _this.urlData['service'], _this.urlData['checkCategory'], data);
                checkDetailData = checkDetailData.map(function (eachData) {
                    eachData['resourceSummaryName'] = eachData['resourceSummary']['name'];
                    eachData['resourceSummaryValue'] = eachData['resourceSummary']['value'];
                    eachData['message'] = eachData['message'];
                    eachData['severity'] = eachData['severity'];
                    return eachData;
                });
                _this.resultLength = checkDetailData.length;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](checkDetailData);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }, function (error) {
                console.log(error);
            });
        });
    };
    CloudReportCheckDetailComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CloudReportCheckDetailComponent.prototype.fetchServiceCheckCateroies = function () {
        this.serviceCheckCategories = this.cloudReportService.getServiceCheckCategories('aws.' + this.selectedService, this.scanReportData);
        this.serviceCheckCategoryRegions = [];
    };
    CloudReportCheckDetailComponent.prototype.fetchServiceCheckCateroyRegions = function () {
        this.selectedServiceCheckCategoryRegion = undefined;
        this.serviceCheckCategoryRegions = this.cloudReportService.getServiceCheckCategoryRegions('aws.' + this.selectedService, this.selectedServiceCheckCategory, this.scanReportData);
        this.reload();
    };
    CloudReportCheckDetailComponent.prototype.reload = function () {
        if (!this.selectedService || !this.selectedServiceCheckCategory || !this.selectedServiceCheckCategoryRegion) {
            console.log('something is missing in selectedService = ' + this.selectedService + ' or selectedServiceCheckCategory = ' + this.selectedServiceCheckCategory + ' or selectedServiceCheckCategoryRegion =' + this.selectedServiceCheckCategoryRegion);
            return;
        }
        console.log('all data is present, selectedService = ' + this.selectedService + ' or selectedServiceCheckCategory = ' + this.selectedServiceCheckCategory + ' or selectedServiceCheckCategoryRegion =' + this.selectedServiceCheckCategoryRegion + ' and reloading page');
        this.router.navigate(['/report/checkDetail', {
                checkCategory: this.selectedServiceCheckCategory,
                region: this.selectedServiceCheckCategoryRegion,
                service: this.selectedService
            }]);
    };
    CloudReportCheckDetailComponent.prototype.goToServiceDashboard = function () {
        this.router.navigate(['/report/checkCategory', this.selectedService]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], CloudReportCheckDetailComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], CloudReportCheckDetailComponent.prototype, "sort", void 0);
    CloudReportCheckDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cloudreportcheckdetail',
            template: __webpack_require__(/*! ./component.html */ "./src/app/report/checkDetail/component.html"),
            styles: [__webpack_require__(/*! ./component.scss */ "./src/app/report/checkDetail/component.scss")]
        }),
        __metadata("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_1__["CloudReportService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CloudReportCheckDetailComponent);
    return CloudReportCheckDetailComponent;
}());



/***/ }),

/***/ "./src/app/report/dashboard/component.html":
/*!*************************************************!*\
  !*** ./src/app/report/dashboard/component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n        \n        <ng-container matColumnDef=\"services\">\n            <th mat-header-cell *matHeaderCellDef class=\"column-header column-desc-normal\"> Services  </th>\n            <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.noOfFailures>0 ?  'column-desc-alert': 'column-desc-good'\"> {{element.service}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"noOfChecks\">\n            <th mat-header-cell *matHeaderCellDef class=\"column-header column-desc-normal\"> No. of checks </th>\n            <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.noOfFailures>0 ?  'column-desc-alert': 'column-desc-good'\"> {{element.noOfChecks}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"noOfFailures\">\n            <th mat-header-cell *matHeaderCellDef class=\"column-header column-desc-normal\"> No. of failures </th>\n            <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.noOfFailures>0 ?  'column-desc-alert': 'column-desc-good'\"> {{element.noOfFailures}} </td>\n        </ng-container>\n\n        \n        <ng-container matColumnDef=\"action\">\n            <th mat-header-cell *matHeaderCellDef class=\"column-header column-desc-normal\"> Action </th>\n            <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.noOfFailures>0 ?  'column-desc-alert': 'column-desc-good'\"> <button mat-button (click)=\"goToService(element)\">View details</button> </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n</mat-card>"

/***/ }),

/***/ "./src/app/report/dashboard/component.scss":
/*!*************************************************!*\
  !*** ./src/app/report/dashboard/component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.column-header {\n  font-size: 120%; }\n\n.column-desc-good {\n  text-align: center;\n  background-color: #099b09; }\n\n.column-desc-alert {\n  text-align: center;\n  background-color: #da6868; }\n\n.column-desc-normal {\n  text-align: center;\n  background-color: lightgray; }\n"

/***/ }),

/***/ "./src/app/report/dashboard/component.ts":
/*!***********************************************!*\
  !*** ./src/app/report/dashboard/component.ts ***!
  \***********************************************/
/*! exports provided: CloudReportDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudReportDashboardComponent", function() { return CloudReportDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../report.service */ "./src/app/report/report.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CloudReportDashboardComponent = /** @class */ (function () {
    function CloudReportDashboardComponent(cloudReportService, router) {
        this.cloudReportService = cloudReportService;
        this.router = router;
        this.displayedColumns = ['services', 'noOfChecks', 'noOfFailures', 'action'];
    }
    CloudReportDashboardComponent.prototype.ngOnInit = function () {
        this.loadDashboardData();
    };
    CloudReportDashboardComponent.prototype.loadDashboardData = function () {
        var _this = this;
        this.cloudReportService.getScanReportData()
            .subscribe(function (data) {
            var dashboardData = _this.cloudReportService.getDashboardData(data);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](dashboardData);
        }, function (error) {
            console.log(error);
        });
    };
    CloudReportDashboardComponent.prototype.goToService = function (element) {
        this.router.navigate(['report/checkCategory', element.service]);
    };
    CloudReportDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cloudreportdashboardcomponent',
            template: __webpack_require__(/*! ./component.html */ "./src/app/report/dashboard/component.html"),
            styles: [__webpack_require__(/*! ./component.scss */ "./src/app/report/dashboard/component.scss")]
        }),
        __metadata("design:paramtypes", [_report_service__WEBPACK_IMPORTED_MODULE_1__["CloudReportService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CloudReportDashboardComponent);
    return CloudReportDashboardComponent;
}());



/***/ }),

/***/ "./src/app/report/report.module.ts":
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _checkDetail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkDetail/component */ "./src/app/report/checkDetail/component.ts");
/* harmony import */ var _checkCategory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkCategory/component */ "./src/app/report/checkCategory/component.ts");
/* harmony import */ var _report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.service */ "./src/app/report/report.service.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/component */ "./src/app/report/dashboard/component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ReportModule = /** @class */ (function () {
    function ReportModule() {
    }
    ReportModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["CloudReportDashboardComponent"],
                _checkCategory_component__WEBPACK_IMPORTED_MODULE_1__["CloudReportCheckCategoryComponent"],
                _checkDetail_component__WEBPACK_IMPORTED_MODULE_0__["CloudReportCheckDetailComponent"]
            ],
            imports: [
                _node_modules_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'report/dashboard', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["CloudReportDashboardComponent"] },
                    { path: 'report/checkCategory/:service', component: _checkCategory_component__WEBPACK_IMPORTED_MODULE_1__["CloudReportCheckCategoryComponent"] },
                    { path: 'report/checkDetail', component: _checkDetail_component__WEBPACK_IMPORTED_MODULE_0__["CloudReportCheckDetailComponent"] }
                ]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_report_service__WEBPACK_IMPORTED_MODULE_2__["CloudReportService"]]
        })
    ], ReportModule);
    return ReportModule;
}());



/***/ }),

/***/ "./src/app/report/report.service.ts":
/*!******************************************!*\
  !*** ./src/app/report/report.service.ts ***!
  \******************************************/
/*! exports provided: CloudReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudReportService", function() { return CloudReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CloudReportService = /** @class */ (function () {
    function CloudReportService(http) {
        this.http = http;
    }
    CloudReportService.prototype.getScanReportData = function () {
        return this.http.get('assets/data.json');
    };
    /**
     * Get report dashboard data
    */
    CloudReportService.prototype.getDashboardData = function (scanReportData) {
        console.log(scanReportData);
        var data = scanReportData;
        var dashboardData = [];
        for (var serviceObjectKey in data) {
            var serviceData = {};
            serviceData['service'] = serviceObjectKey.split('.')[1];
            serviceData['noOfChecks'] = 0;
            serviceData['noOfFailures'] = 0;
            for (var checkObjectKey in data[serviceObjectKey]) {
                if (data[serviceObjectKey][checkObjectKey].regions.hasOwnProperty('global')) {
                    var resources = data[serviceObjectKey][checkObjectKey].regions.global;
                    for (var i = 0; i < resources.length; i++) {
                        var severity = resources[i].severity;
                        serviceData['noOfChecks']++;
                        if (severity === 'Warning' || severity === 'Failure') {
                            serviceData['noOfFailures']++;
                        }
                    }
                }
                else {
                    for (var region in data[serviceObjectKey][checkObjectKey].regions) {
                        var resources = data[serviceObjectKey][checkObjectKey].regions[region];
                        // console.log(resources)
                        for (var i = 0; i < resources.length; i++) {
                            var severity = resources[i].severity;
                            // console.log(serviceObjectKey +' '+ checkObjectKey +' '+ severity);
                            serviceData['noOfChecks']++;
                            if (severity === 'Warning' || severity === 'Failure') {
                                serviceData['noOfFailures']++;
                            }
                        }
                    }
                }
            }
            if (serviceData['noOfChecks'] == 0) {
                continue;
            }
            dashboardData.push(serviceData);
        }
        return dashboardData;
    };
    /**
     * Return true if has data
     * otherwise false
    */
    CloudReportService.prototype.checkServiceCheckCategoryHasData = function (checkCategoryObject) {
        var regionsObject = checkCategoryObject['regions'];
        for (var regionsObjectKey in regionsObject) {
            if (regionsObject[regionsObjectKey].length >= 1) {
                return true;
            }
        }
        return false;
    };
    CloudReportService.prototype.checkServiceHasData = function (serviceObject) {
        for (var checkCategoryObjectKey in serviceObject) {
            var regionsObject = serviceObject[checkCategoryObjectKey]['regions'];
            for (var regionsObjectKey in regionsObject) {
                if (regionsObject[regionsObjectKey].length >= 1) {
                    return true;
                }
            }
        }
        return false;
    };
    CloudReportService.prototype.getRegions = function () {
        return [
            'us-east-2',
            'us-east-1',
            'us-west-1',
            'us-west-2',
            'ap-northeast-1',
            'ap-northeast-2',
            'ap-northeast-3',
            'ap-south-1',
            'ap-southeast-1',
            'ap-southeast-2',
            'ca-central-1',
            'cn-north-1',
            'cn-northwest-1',
            'eu-central-1',
            'eu-west-1',
            'eu-west-2',
            'eu-west-3',
            'sa-east-1'
        ];
    };
    CloudReportService.prototype.replaceUnderscoreWithSpace = function (string) {
        return string.split('_').join(' ');
    };
    CloudReportService.prototype.replaceSpaceWithUnderscore = function (string) {
        return string.split(' ').join('_');
    };
    CloudReportService.prototype.checkHasData = function (data, dataArray) {
        for (var i = 0; i < dataArray.length; i++) {
            if (data === dataArray[i]) {
                return true;
            }
        }
        return false;
    };
    CloudReportService.prototype.isServiceGlobal = function (service) {
        if (service === 's3' || service === 'cloudfront' || service === 'cloudformation') {
            return true;
        }
        return false;
    };
    /**
     * Check Category functions
     * */
    CloudReportService.prototype.getCheckCategoryData = function (service, region, data) {
        // console.log(service, region)
        var checkCategoryData = [];
        var regionsHaveData = [];
        for (var serviceObjectKey in data) {
            if (serviceObjectKey === service) {
                for (var checkCategoryObjectKey in data[serviceObjectKey]) {
                    var serviceData = {};
                    serviceData['badConditionCount'] = 0;
                    serviceData['goodConditionCount'] = 0;
                    serviceData['checkCategoryName'] = this.replaceUnderscoreWithSpace(checkCategoryObjectKey);
                    var regionsObject = data[serviceObjectKey][checkCategoryObjectKey]['regions'];
                    if (regionsObject.hasOwnProperty('global')) {
                        if (regionsObject.global.length < 1) {
                            continue;
                        }
                        else if (regionsObject.global.length > 1) {
                            if (!this.checkHasData('global', regionsHaveData)) {
                                regionsHaveData.push('global');
                                serviceData['regionsHaveData'] = regionsHaveData;
                            }
                            for (var i = 0; i < regionsObject.global.length; i++) {
                                var resourceObject = regionsObject.global[i];
                                var severity = resourceObject.severity;
                                if (resourceObject.severity === 'Good') {
                                    serviceData['goodConditionCount']++;
                                }
                                else if (severity === 'Warning' || severity === 'Failure') {
                                    serviceData['badConditionCount']++;
                                }
                            }
                        }
                    }
                    else if (region === 'all') {
                        for (var regionsObjectKey in regionsObject) {
                            var regionData = regionsObject[regionsObjectKey];
                            if (regionData.length < 1) {
                                continue;
                            }
                            else if (regionData.length >= 1) {
                                if (!this.checkHasData(regionsObjectKey, regionsHaveData))
                                    regionsHaveData.push(regionsObjectKey);
                                for (var i = 0; i < regionData.length; i++) {
                                    var resourceObject = regionData[i];
                                    var severity = resourceObject.severity;
                                    if (resourceObject.severity === 'Good') {
                                        serviceData['goodConditionCount']++;
                                    }
                                    else if (severity === 'Warning' || severity === 'Failure') {
                                        serviceData['badConditionCount']++;
                                    }
                                }
                            }
                        }
                        serviceData['regionsHaveData'] = regionsHaveData;
                    }
                    else {
                        for (var regionsObjectKey in regionsObject) {
                            if (regionsObjectKey === region) {
                                var regionData = regionsObject[regionsObjectKey];
                                if (regionData.length < 1) {
                                    continue;
                                }
                                else if (regionData.length >= 1) {
                                    for (var i = 0; i < regionData.length; i++) {
                                        var resourceObject = regionData[i];
                                        var severity = resourceObject.severity;
                                        if (resourceObject.severity === 'Good') {
                                            serviceData['goodConditionCount']++;
                                        }
                                        else if (severity === 'Warning' || severity === 'Failure') {
                                            serviceData['badConditionCount']++;
                                        }
                                    }
                                    if (!this.checkHasData(region, regionsHaveData))
                                        regionsHaveData.push(region);
                                }
                            }
                        }
                        serviceData['regionsHaveData'] = regionsHaveData;
                    }
                    if (serviceData['badConditionCount'] == 0 && serviceData['goodConditionCount'] == 0) {
                        continue;
                    }
                    checkCategoryData.push(serviceData);
                }
            }
        }
        return checkCategoryData;
    };
    CloudReportService.prototype.getRegionsHaveData = function (service, data) {
        // console.log(service)
        var regionsHaveData = [];
        for (var serviceObjectKey in data) {
            if (serviceObjectKey === service) {
                for (var checkCategoryKey in data[serviceObjectKey]) {
                    for (var regionObjectKey in data[serviceObjectKey][checkCategoryKey].regions) {
                        if (data[serviceObjectKey][checkCategoryKey].regions[regionObjectKey].length >= 1) {
                            if (!this.checkHasData(regionObjectKey, regionsHaveData))
                                regionsHaveData.push(regionObjectKey);
                        }
                    }
                }
            }
        }
        return regionsHaveData;
    };
    CloudReportService.prototype.manageRegion = function (region, service, data) {
        if (!region && !localStorage.getItem('awsRegion')) {
            localStorage.setItem('awsRegion', 'all');
        }
        else if (region) {
            localStorage.setItem('awsRegion', region);
        }
        else if (service) {
            var selectedRegion = localStorage.getItem('awsRegion');
            var regionsHaveData = this.getRegionsHaveData(service, data);
            // console.log(selectedRegion, regionsHaveData)
            for (var i = 0; i < regionsHaveData.length; i++) {
                if (selectedRegion == regionsHaveData[i]) {
                    return localStorage.getItem('awsRegion');
                }
            }
            localStorage.setItem('awsRegion', 'all');
        }
        return localStorage.getItem('awsRegion');
    };
    CloudReportService.prototype.getCheckDetailData = function (region, service, checkCategory, data) {
        checkCategory = this.replaceSpaceWithUnderscore(checkCategory.toLowerCase()); // Modify checkCategory name
        // console.log(service + ' ' + region + ' ' + checkCategory)
        var checkDetailData = [];
        for (var serviceObjectKey in data) {
            if (serviceObjectKey === service) {
                for (var checkCategoryObjectKey in data[serviceObjectKey]) {
                    if (checkCategoryObjectKey === checkCategory) {
                        var regionsObject = data[serviceObjectKey][checkCategoryObjectKey]['regions'];
                        if (regionsObject.hasOwnProperty('global') && region === 'global') {
                            for (var i = 0; i < regionsObject['global'].length; i++) {
                                regionsObject['global'][i].region = 'global';
                                checkDetailData.push(regionsObject['global'][i]);
                            }
                        }
                        else if (region == 'all') {
                            for (var regionKey in regionsObject) {
                                for (var i = 0; i < regionsObject[regionKey].length; i++) {
                                    regionsObject[regionKey][i].region = regionKey;
                                    checkDetailData.push(regionsObject[regionKey][i]);
                                }
                            }
                        }
                        else {
                            for (var regionKey in regionsObject) {
                                if (regionKey === region) {
                                    for (var i = 0; i < regionsObject[regionKey].length; i++) {
                                        regionsObject[regionKey][i].region = regionKey;
                                        checkDetailData.push(regionsObject[regionKey][i]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        // console.log(checkDetailData)
        return checkDetailData;
    };
    /**
     * Return services which are
     * present in report data and have data
     */
    CloudReportService.prototype.getServices = function (data) {
        var services = [];
        for (var serviceObjectKey in data) {
            if (this.checkServiceHasData(data[serviceObjectKey])) {
                services.push(serviceObjectKey.split('.')[1]);
            }
        }
        return services;
    };
    /**
     * Return check categories
     * based on service
    */
    CloudReportService.prototype.getServiceCheckCategories = function (service, data) {
        var checkCategories = [];
        for (var serviceObjectKey in data) {
            if (service === serviceObjectKey) {
                for (var checkCategoryObjectKey in data[serviceObjectKey]) {
                    var checkCategoryObject = data[serviceObjectKey][checkCategoryObjectKey];
                    if (this.checkServiceCheckCategoryHasData(checkCategoryObject)) {
                        checkCategories.push(this.replaceUnderscoreWithSpace(checkCategoryObjectKey));
                    }
                }
            }
        }
        return checkCategories;
    };
    /**
     * Return regions based on service and check category
    */
    CloudReportService.prototype.getServiceCheckCategoryRegions = function (service, serviceCheckCategory, data) {
        var regionsHaveData = [];
        serviceCheckCategory = this.replaceSpaceWithUnderscore(serviceCheckCategory);
        for (var serviceObjectKey in data) {
            if (serviceObjectKey === service) {
                for (var checkCategoryKey in data[serviceObjectKey]) {
                    if (checkCategoryKey === serviceCheckCategory) {
                        for (var regionObjectKey in data[serviceObjectKey][checkCategoryKey].regions) {
                            if (data[serviceObjectKey][checkCategoryKey].regions[regionObjectKey].length >= 1) {
                                if (!this.checkHasData(regionObjectKey, regionsHaveData))
                                    regionsHaveData.push(regionObjectKey);
                            }
                        }
                    }
                }
            }
        }
        // console.log(regionsHaveData)
        return regionsHaveData;
    };
    CloudReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CloudReportService);
    return CloudReportService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paragpoddar/workspace/tensult-opensource/cloud-reports-final-report/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map