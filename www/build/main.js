webpackJsonp([16],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsActivityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_variable_global_variable__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__o_auth_oauthProvider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_storageProvider__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the MsActivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MsActivityProvider = /** @class */ (function () {
    function MsActivityProvider(http, httpNative, oauthProvider, storageProvider, helperMethod, globalVal) {
        this.http = http;
        this.httpNative = httpNative;
        this.oauthProvider = oauthProvider;
        this.storageProvider = storageProvider;
        this.helperMethod = helperMethod;
        this.globalVal = globalVal;
        console.log('Hello MsActivityProvider Provider');
    }
    MsActivityProvider.prototype.getAllData = function (user) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        console.log(headers);
        this.httpNative.setDataSerializer('json');
        console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.msActivityAPI);
        this.httpNative.setRequestTimeout(10);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.msActivityAPI, user, headers);
    };
    MsActivityProvider.prototype.getIdByActivityCode = function (activityType) {
        var _this = this;
        this.msActivityList.forEach(function (element) {
            if (element.activity_type == activityType) {
                _this.activityID = element.activity_id;
                return;
            }
        });
    };
    MsActivityProvider.prototype.save = function () {
        this.storageProvider.save('Ms_Activity', this.msActivityList);
    };
    MsActivityProvider.prototype.loadDataFromStorage = function () {
        var _this = this;
        this.storageProvider.getStorageByKey('Ms_Activity')
            .then(function (response) {
            _this.msActivityList = response;
        }).catch(function (error) {
            _this.helperMethod.presentToast('Load Error', 3000, 3);
        });
    };
    MsActivityProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_5__o_auth_oauthProvider__["a" /* OAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__storage_storageProvider__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1__helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_0__global_variable_global_variable__["a" /* GlobalVariableProvider */]])
    ], MsActivityProvider);
    return MsActivityProvider;
}());

//# sourceMappingURL=msActivityProvider.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsProjectProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_variable_global_variable__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__o_auth_oauthProvider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_storageProvider__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the MsProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MsProjectProvider = /** @class */ (function () {
    function MsProjectProvider(http, httpNative, oauthProvider, storageProvider, helperMethod, globalVal) {
        this.http = http;
        this.httpNative = httpNative;
        this.oauthProvider = oauthProvider;
        this.storageProvider = storageProvider;
        this.helperMethod = helperMethod;
        this.globalVal = globalVal;
        console.log('Hello MsProjectProvider Provider');
    }
    MsProjectProvider.prototype.getAllData = function (user) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        console.log(headers);
        this.httpNative.setDataSerializer('json');
        console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.msProjectAPI);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.msProjectAPI, user, headers);
    };
    MsProjectProvider.prototype.getIdByProjectCode = function (projectCode) {
        var _this = this;
        this.msProjectList.forEach(function (element) {
            if (element.project_code == projectCode) {
                _this.projectID = element.project_id;
                return;
            }
        });
    };
    MsProjectProvider.prototype.save = function () {
        this.storageProvider.save('Ms_Project', this.msProjectList);
    };
    MsProjectProvider.prototype.loadDataFromStorage = function () {
        var _this = this;
        this.storageProvider.getStorageByKey('Ms_Project')
            .then(function (response) {
            _this.msProjectList = response;
        }).catch(function (error) {
            _this.helperMethod.presentToast('Load Error', 3000, 3);
        });
    };
    MsProjectProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_5__o_auth_oauthProvider__["a" /* OAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__storage_storageProvider__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1__helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_0__global_variable_global_variable__["a" /* GlobalVariableProvider */]])
    ], MsProjectProvider);
    return MsProjectProvider;
}());

//# sourceMappingURL=msProjectProvider.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_usersProvider__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_variable_global_variable__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__o_auth_oauthProvider__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the TimesheetsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TimesheetsProvider = /** @class */ (function () {
    function TimesheetsProvider(httpNative, globalVal, userProvider, oauthProvider) {
        this.httpNative = httpNative;
        this.globalVal = globalVal;
        this.userProvider = userProvider;
        this.oauthProvider = oauthProvider;
        this.baseUrl = "https://jsonplaceholder.typicode.com/posts";
        console.log('Hello TimesheetsProvider Provider');
    }
    TimesheetsProvider.prototype.getAllTimeSheetsByUserLoggedIn = function (user) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        console.log(headers);
        this.httpNative.setDataSerializer('json');
        console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetAPI);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetAPI, user, headers);
    };
    TimesheetsProvider.prototype.updateGoRealTimeSheet = function (timeSheetData) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        this.httpNative.setDataSerializer('json');
        console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetGoRealAPI);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetGoRealAPI, timeSheetData, headers);
    };
    TimesheetsProvider.prototype.addNewTimeSheet = function (timeSheet) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        this.httpNative.setDataSerializer('json');
        console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetAddAPI);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetAddAPI, timeSheet, headers);
    };
    TimesheetsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_2__global_variable_global_variable__["a" /* GlobalVariableProvider */],
            __WEBPACK_IMPORTED_MODULE_0__users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_4__o_auth_oauthProvider__["a" /* OAuthProvider */]])
    ], TimesheetsProvider);
    return TimesheetsProvider;
}());

//# sourceMappingURL=timesheetsProvider.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperMethodProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the HelperMethodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HelperMethodProvider = /** @class */ (function () {
    function HelperMethodProvider(http, loadingController, toastController) {
        this.http = http;
        this.loadingController = loadingController;
        this.toastController = toastController;
        // public ipUrl : string = 'http://172.18.1.17:8080/';
        // public ipUrl : string = 'http://17-05-0049-0115:8580/'
        // public baseUrl : string = 'com.adins.mss.webservices/services/m/';
        // public baseUrl : string = 'msa.services/services/m/'
        // public userLoginAPI : string  ='user/login';
        this.personUrl = 'assets/jsonFile/personResponse.json';
        this.timeSheetUrl = 'assets/jsonFile/timesheetResponse.json';
        this.bulkItemUrl = 'assets/jsonFile/bulkitemResponse.json';
        this.backlogitemUrl = 'assets/jsonFile/backlogitemResponse.json';
        console.log('Hello HelperMethodProvider Provider');
    }
    HelperMethodProvider.prototype.loadingService = function (message) {
        this.loading = this.loadingController.create({
            spinner: 'bubbles',
            content: message
        });
        this.loading.present();
    };
    HelperMethodProvider.prototype.presentToast = function (message, duration, position) {
        if (position == 1)
            position = 'top';
        if (position == 2)
            position = 'middle';
        if (position == 3)
            position = 'bottom';
        var toast = this.toastController.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    };
    HelperMethodProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
    ], HelperMethodProvider);
    return HelperMethodProvider;
}());

//# sourceMappingURL=helper-method.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulkItemDetailedDeveloperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_perfomance_perfomanceProvider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprint_detailed_developer_sprint_detailed_developer__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_progressbar__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the BulkItemDetailedDeveloperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BulkItemDetailedDeveloperPage = /** @class */ (function () {
    function BulkItemDetailedDeveloperPage(navCtrl, navParams, perfomanceProv, helperMethod, userProv, ngProgress, errorHandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.perfomanceProv = perfomanceProv;
        this.helperMethod = helperMethod;
        this.userProv = userProv;
        this.ngProgress = ngProgress;
        this.errorHandler = errorHandler;
        this.bulkItemSelected = this.navParams.get('bulkItem');
    }
    BulkItemDetailedDeveloperPage.prototype.ionViewDidLoad = function () {
        if (this.bulkItemSelected == null) {
            this.navCtrl.pop();
            this.helperMethod.presentToast('Please Try Again', 3000, 2);
        }
        else {
            this.getDetailedBulkItem();
            // this.getDetailedBulkItemBrowser();
        }
        console.log('ionViewDidLoad BulkItemDetailedDeveloperPage');
    };
    BulkItemDetailedDeveloperPage.prototype.getDetailedBulkItem = function () {
        var _this = this;
        var request = {
            bulk_id: this.bulkItemSelected.bulk_id,
            person_id: this.userProv.user.person_id
        };
        this.ngProgress.start();
        this.perfomanceProv.getDetailedBulkItemDeveloper(request)
            .then(function (response) {
            _this.ngProgress.done();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.bulkItemDetail = responseData;
                _this.bulkItemSprint = responseData.bulkItemSprintDeveloperBeans;
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.ngProgress.done();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    BulkItemDetailedDeveloperPage.prototype.onItemPressed = function (item) {
        // this.getSprintDetailed(item);
        var sprintRequest = {
            sprint: item.item.sprint,
            bulk_id: this.bulkItemSelected.bulk_id,
            person_id: this.userProv.user.person_id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sprint_detailed_developer_sprint_detailed_developer__["a" /* SprintDetailedDeveloperPage */], { sprintRequest: sprintRequest });
        // this.getSprintDetailedByBrowser();
    };
    BulkItemDetailedDeveloperPage.prototype.getSprintDetailedByBrowser = function () {
        var fakeData = [
            {
                backlog_sprint_id: "1",
                backlog_id: "2",
                person_id: "32",
                person_name: "Mantab",
                sprint_id: "Waa221",
                sprint_backlog: "Mantab",
                definition_of_done: "Mantab",
                duration: "Mantab",
                statusSprint: "Mantab",
                dtm_crt: "22/01/2012",
                dtm_upd: null,
                is_active: "1",
                sprint: "2",
                mandays: "6"
            },
            {
                backlog_sprint_id: "2",
                backlog_id: "2",
                person_id: "X",
                person_name: "UnClaimed",
                sprint_id: "Waa221",
                sprint_backlog: "Mantab",
                definition_of_done: "Mantab",
                duration: "Mantab",
                statusSprint: "Mantab",
                dtm_crt: "22/01/2012",
                dtm_upd: null,
                is_active: "1",
                sprint: "2",
                mandays: "6"
            },
            {
                backlog_sprint_id: "3",
                backlog_id: "2",
                person_id: "32",
                person_name: "Mantab",
                sprint_id: "Waa221",
                sprint_backlog: "Mantab",
                definition_of_done: "Mantab",
                duration: "Mantab",
                statusSprint: "Mantab",
                dtm_crt: "22/01/2012",
                dtm_upd: null,
                is_active: "1",
                sprint: "2",
                mandays: "6"
            },
            {
                backlog_sprint_id: "4",
                backlog_id: "2",
                person_id: "32",
                person_name: "Mantab",
                sprint_id: "Waa221",
                sprint_backlog: "Mantab",
                definition_of_done: "Mantab",
                duration: "Mantab",
                statusSprint: "Mantab",
                dtm_crt: "22/01/2012",
                dtm_upd: null,
                is_active: "1",
                sprint: "2",
                mandays: "6"
            },
            {
                backlog_sprint_id: "5",
                backlog_id: "2",
                person_id: "32",
                person_name: "Mantab",
                sprint_id: "Waa221",
                sprint_backlog: "Mantab",
                definition_of_done: "Mantab",
                duration: "Mantab",
                statusSprint: "Mantab",
                dtm_crt: "22/01/2012",
                dtm_upd: null,
                is_active: "1",
                sprint: "2",
                mandays: "6"
            }
        ];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sprint_detailed_developer_sprint_detailed_developer__["a" /* SprintDetailedDeveloperPage */], { sprintDetailList: fakeData });
    };
    BulkItemDetailedDeveloperPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-bulk-item-detailed-developer',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\bulk-item-detailed-developer\bulk-item-detailed-developer.html"*/'<!--\n  Generated template for the BulkItemDetailedDeveloperPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BulkItemDetailedDeveloperPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="ionContent">\n\n  <ng-progress class="ng-progress" [color]="\'#216fed\'"></ng-progress>\n\n  <ng-container *ngIf="bulkItemDetail == null; else elseTemplate">\n    <ion-item class="loadingItem">\n      Loading Item Please Wait...\n    </ion-item>\n  </ng-container>\n  <ng-template #elseTemplate>\n\n    <ion-item class="ionItemBulkDetail">\n      <h1 style="font-weight: bold">{{bulkItemDetail.bulk_name}}</h1>\n      <br/>\n      <tr>\n        <td>\n          <h2>Start Date</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;{{bulkItemDetail.dtm_crt}}</h2>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <h2>Total Item</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;{{bulkItemDetail.total_sprint}} Items</h2>\n        </td>\n      </tr>\n      <br/>\n\n    </ion-item>\n    <!-- <progress-bar \n      [progress]="bulkItemDetail.percentage" \n      [color-degraded]="{\'0\': \'#00cbcb\',  \'50\': \'#f9c3d3\', \'75\': \'#fd8c8e\'}"\n      class="progress-bar" >\n    </progress-bar> -->\n    <ion-item class="ionItemBulkProgress">\n      <ion-row class="row1">\n        <ion-col>\n          <strong>Done</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="bulkItemDetail.done_sprint" \n              [max]="bulkItemDetail.total_sprint"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{bulkItemDetail.done_sprint}}/{{bulkItemDetail.total_sprint}}\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <strong>Review</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="bulkItemDetail.review" \n              [max]="bulkItemDetail.total_sprint"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{bulkItemDetail.review}}/{{bulkItemDetail.total_sprint}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row class="row2">\n        <ion-col>\n          <strong>On Progress</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="bulkItemDetail.on_progress" \n              [max]="bulkItemDetail.total_sprint"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{bulkItemDetail.on_progress}}/{{bulkItemDetail.total_sprint}}\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <strong>Todo</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="bulkItemDetail.to_do" \n              [max]="bulkItemDetail.total_sprint"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{bulkItemDetail.to_do}}/{{bulkItemDetail.total_sprint}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n    </ion-item>\n\n    <ion-row class="headerSprint">\n        <ion-col>Sprint</ion-col>\n        <ion-col>Todo</ion-col>\n    </ion-row>\n\n  </ng-template>\n    \n  <ion-list [virtualScroll]="bulkItemSprint">\n    <button ion-item *virtualItem="let sprintItem" (click)="onItemPressed({item:sprintItem})">\n      <ion-row>\n        <ion-col>\n          {{sprintItem.sprint}}\n        </ion-col>\n        <ion-col>\n          {{sprintItem.todo}}/{{sprintItem.total_sprint_item}}\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\bulk-item-detailed-developer\bulk-item-detailed-developer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_perfomance_perfomanceProvider__["a" /* PerfomanceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */]])
    ], BulkItemDetailedDeveloperPage);
    return BulkItemDetailedDeveloperPage;
}());

//# sourceMappingURL=bulk-item-detailed-developer.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SprintDetailedDeveloperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprint_item_sprint_item__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_error_handler_error_handler__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_perfomance_perfomanceProvider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SprintDetailedDeveloperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SprintDetailedDeveloperPage = /** @class */ (function () {
    function SprintDetailedDeveloperPage(navCtrl, navParams, helperMethod, perfomanceProvider, ngProgress, errorHandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helperMethod = helperMethod;
        this.perfomanceProvider = perfomanceProvider;
        this.ngProgress = ngProgress;
        this.errorHandler = errorHandler;
        this.sprintRequest = navParams.get("sprintRequest");
    }
    SprintDetailedDeveloperPage.prototype.ionViewDidLoad = function () {
        if (this.sprintRequest == null) {
            this.navCtrl.pop();
            this.helperMethod.presentToast('Please Try Again', 3000, 2);
        }
        else {
            this.getSprintDetailed();
        }
        console.log('ionViewDidLoad SprintDetailedDeveloperPage');
    };
    SprintDetailedDeveloperPage.prototype.onItemPressed = function (item) {
        console.log("Sprint Detailed");
        console.log(item.item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__sprint_item_sprint_item__["a" /* SprintItemPage */], { item: item.item });
    };
    SprintDetailedDeveloperPage.prototype.getSprintDetailed = function () {
        var _this = this;
        this.ngProgress.start();
        this.perfomanceProvider.getSprintDetailBySprint(this.sprintRequest)
            .then(function (response) {
            _this.ngProgress.done();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.sprintDetailedList = responseData.sprintDetailedList;
                _this.sprintSummary = responseData.sprintSummary;
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.ngProgress.done();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    SprintDetailedDeveloperPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-sprint-detailed-developer',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\sprint-detailed-developer\sprint-detailed-developer.html"*/'<!--\n  Generated template for the SprintDetailedDeveloperPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SprintDetailedDeveloperPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="ionContent">\n\n  <ng-progress class="ng-progress" [color]="\'#216fed\'"></ng-progress>\n  \n  <ng-container *ngIf="sprintSummary == null; else elseTemplate">\n    <ion-item class="loadingItem">\n      Loading Item Please Wait...\n    </ion-item>\n  </ng-container>\n  <ng-template #elseTemplate>\n\n    <ion-item class="ionItemBulkDetail">\n      <h1 style="font-weight: bold">{{sprintSummary.bulk_name}}</h1>\n      <h2 style="font-weight: bold">Sprint : {{sprintSummary.sprint}}</h2>\n      <br/>\n      <tr>\n        <td>\n          <h2>Start Date</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;{{sprintSummary.dtm_crt}}</h2>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <h2>Total Item</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;{{sprintSummary.total_item}} Items</h2>\n        </td>\n      </tr>\n      <br/>\n\n    </ion-item>\n    <!-- <progress-bar \n      [progress]="sprintSummary.percentage" \n      [color-degraded]="{\'0\': \'#00cbcb\',  \'50\': \'#f9c3d3\', \'75\': \'#fd8c8e\'}"\n      class="progress-bar" >\n    </progress-bar> -->\n    <ion-item class="ionItemBulkProgress">\n      <ion-row class="row1">\n        <ion-col>\n          <strong>Done</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="sprintSummary.done" \n              [max]="sprintSummary.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{sprintSummary.done}}/{{sprintSummary.total_item}}\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <strong>Review</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="sprintSummary.review" \n              [max]="sprintSummary.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{sprintSummary.review}}/{{sprintSummary.total_item}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row class="row2">\n        <ion-col>\n          <strong>On Progress</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="sprintSummary.on_progress" \n              [max]="sprintSummary.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{sprintSummary.on_progress}}/{{sprintSummary.total_item}}\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <strong>Todo</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="sprintSummary.to_do" \n              [max]="sprintSummary.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{sprintSummary.to_do}}/{{sprintSummary.total_item}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n    </ion-item>\n\n    <ion-row class="headerSprint">\n        <ion-col>Sprint</ion-col>\n        <ion-col>Status</ion-col>\n        <ion-col>Duration</ion-col>\n    </ion-row>\n\n  </ng-template>\n    \n  <ion-list [virtualScroll]="sprintDetailedList">\n    <button ion-item *virtualItem="let sprintItem" (click)="onItemPressed({item:sprintItem})">\n      <ion-row>\n        <ion-col style="white-space:normal">\n          {{sprintItem.sprint_id}}\n        </ion-col>\n        <ion-col style="white-space:normal">\n          {{sprintItem.statusSprint}}\n        </ion-col>\n        <ion-col style="white-space:normal">\n          {{sprintItem.duration}}\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\sprint-detailed-developer\sprint-detailed-developer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_perfomance_perfomanceProvider__["a" /* PerfomanceProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_1__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */]])
    ], SprintDetailedDeveloperPage);
    return SprintDetailedDeveloperPage;
}());

//# sourceMappingURL=sprint-detailed-developer.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulkItemDetailedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprint_detailed_sprint_detailed__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_error_handler_error_handler__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_report_reportProvider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the BulkItemDetailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BulkItemDetailedPage = /** @class */ (function () {
    function BulkItemDetailedPage(navCtrl, navParams, reportProvider, helperMethod, ngProgress, errorHandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.reportProvider = reportProvider;
        this.helperMethod = helperMethod;
        this.ngProgress = ngProgress;
        this.errorHandler = errorHandler;
        this.bulkItemSelected = this.navParams.get('bulkItem');
    }
    BulkItemDetailedPage.prototype.ionViewDidLoad = function () {
        if (this.bulkItemSelected == null) {
            this.navCtrl.pop();
            this.helperMethod.presentToast('Please Try Again', 3000, 2);
        }
        else {
            this.getDetailedBulkItem();
            // this.getDetailedBulkItemBrowser();
        }
    };
    BulkItemDetailedPage.prototype.getDetailedBulkItem = function () {
        var _this = this;
        this.ngProgress.start();
        this.reportProvider.getDetailedBulkItem(this.bulkItemSelected)
            .then(function (response) {
            _this.ngProgress.done();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.bulkItemDetail = responseData;
                _this.bulkItemSprint = responseData.bulk_item_sprint_list;
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.ngProgress.done();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    BulkItemDetailedPage.prototype.getDetailedBulkItemBrowser = function () {
        var _this = this;
        this.ngProgress.start();
        setTimeout(function () {
            _this.bulkItemDetail = {
                bulk_id: '1',
                project_code: 'ganteng',
                bulk_name: 'Tampan21',
                mandays: '2',
                dtm_crt: '22/01/2019',
                dtm_upd: '22/01/2019',
                percentage: '52',
                all_backlog_item: '20',
                done_backlog_item: '5',
                review_backlog_item: '7',
                onprogress_backlog_item: '9',
                todo_backlog_item: '12'
            };
            _this.bulkItemSprint = [
                {
                    sprint: '1',
                    dtm_crt: '22/01/2018',
                    total_sprint_item: '9'
                },
                {
                    sprint: '2',
                    dtm_crt: '25/01/2018',
                    total_sprint_item: '23'
                },
                {
                    sprint: '3',
                    dtm_crt: '27/01/2018',
                    total_sprint_item: '12'
                },
                {
                    sprint: '4',
                    dtm_crt: '29/01/2018',
                    total_sprint_item: '16'
                }
            ];
            _this.ngProgress.done();
        }, 1000);
    };
    BulkItemDetailedPage.prototype.onItemPressed = function (item) {
        // this.getSprintDetailed(item);
        var sprintRequest = {
            sprint: item.item.sprint,
            bulk_id: this.bulkItemSelected.bulk_id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__sprint_detailed_sprint_detailed__["a" /* SprintDetailedPage */], { sprintRequest: sprintRequest });
        // this.getSprintDetailedByBrowser();
    };
    BulkItemDetailedPage.prototype.getSprintDetailedByBrowser = function () {
        var fakeData = [
            {
                backlog_sprint_id: "1",
                backlog_id: "2",
                person_id: "32",
                person_name: "Mantab",
                sprint_id: "Waa221",
                sprint_backlog: "Mantab",
                definition_of_done: "Mantab",
                duration: "Mantab",
                statusSprint: "Mantab",
                dtm_crt: "22/01/2012",
                dtm_upd: null,
                is_active: "1",
                sprint: "2",
                mandays: "6"
            },
            {
                backlog_sprint_id: "2",
                backlog_id: "2",
                person_id: "X",
                person_name: "UnClaimed",
                sprint_id: "Waa221",
                sprint_backlog: "Mantab",
                definition_of_done: "Mantab",
                duration: "Mantab",
                statusSprint: "Mantab",
                dtm_crt: "22/01/2012",
                dtm_upd: null,
                is_active: "1",
                sprint: "2",
                mandays: "6"
            },
            {
                backlog_sprint_id: "3",
                backlog_id: "2",
                person_id: "32",
                person_name: "Mantab",
                sprint_id: "Waa221",
                sprint_backlog: "Mantab",
                definition_of_done: "Mantab",
                duration: "Mantab",
                statusSprint: "Mantab",
                dtm_crt: "22/01/2012",
                dtm_upd: null,
                is_active: "1",
                sprint: "2",
                mandays: "6"
            },
            {
                backlog_sprint_id: "4",
                backlog_id: "2",
                person_id: "32",
                person_name: "Mantab",
                sprint_id: "Waa221",
                sprint_backlog: "Mantab",
                definition_of_done: "Mantab",
                duration: "Mantab",
                statusSprint: "Mantab",
                dtm_crt: "22/01/2012",
                dtm_upd: null,
                is_active: "1",
                sprint: "2",
                mandays: "6"
            },
            {
                backlog_sprint_id: "5",
                backlog_id: "2",
                person_id: "32",
                person_name: "Mantab",
                sprint_id: "Waa221",
                sprint_backlog: "Mantab",
                definition_of_done: "Mantab",
                duration: "Mantab",
                statusSprint: "Mantab",
                dtm_crt: "22/01/2012",
                dtm_upd: null,
                is_active: "1",
                sprint: "2",
                mandays: "6"
            }
        ];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__sprint_detailed_sprint_detailed__["a" /* SprintDetailedPage */], { sprintDetailList: fakeData });
    };
    BulkItemDetailedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-bulk-item-detailed',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\bulk-item-detailed\bulk-item-detailed.html"*/'<!--\n  Generated template for the BulkItemDetailedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BulkItemDetailedPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="ionContent">\n\n  <ng-progress class="ng-progress" [color]="\'#216fed\'"></ng-progress>\n\n  <ng-container *ngIf="bulkItemDetail == null; else elseTemplate">\n    <ion-item class="loadingItem">\n      Loading Item Please Wait...\n    </ion-item>\n  </ng-container>\n  <ng-template #elseTemplate>\n\n    <ion-item class="ionItemBulkDetail">\n      <h1 style="font-weight: bold">{{bulkItemDetail.bulk_name}}</h1>\n      <h2 style="font-weight: bold">{{bulkItemDetail.project_code}}</h2>\n      <br/>\n      <tr>\n        <td>\n          <h2>Start Date</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;{{bulkItemDetail.dtm_crt}}</h2>\n        </td>\n      </tr>\n      <ng-container *ngIf="bulkItemDetail.dtm_upd != null; else elseTemplate">\n        <tr>\n          <td>\n            <h2>Last Update</h2>\n          </td>\n          <td>\n            <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n          </td>\n          <td>\n            <h2>&nbsp;&nbsp;&nbsp;{{bulkItemDetail.dtm_upd}}</h2>\n          </td>\n        </tr>\n      </ng-container>\n      <ng-template #elseTemplate>\n      </ng-template>\n      <tr>\n        <td>\n          <h2>Mandays</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;{{bulkItemDetail.mandays}} Mandays</h2>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <h2>Total Item</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;{{bulkItemDetail.all_backlog_item}} Items</h2>\n        </td>\n      </tr>\n      <br/>\n\n    </ion-item>\n    <!-- <progress-bar \n      [progress]="bulkItemDetail.percentage" \n      [color-degraded]="{\'0\': \'#00cbcb\',  \'50\': \'#f9c3d3\', \'75\': \'#fd8c8e\'}"\n      class="progress-bar" >\n    </progress-bar> -->\n    <ion-item class="ionItemBulkProgress">\n      <ion-row class="row1">\n        <ion-col>\n          <strong>Done</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="bulkItemDetail.done_backlog_item" \n              [max]="bulkItemDetail.all_backlog_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{bulkItemDetail.done_backlog_item}}/{{bulkItemDetail.all_backlog_item}}\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <strong>Review</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="bulkItemDetail.review_backlog_item" \n              [max]="bulkItemDetail.all_backlog_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{bulkItemDetail.review_backlog_item}}/{{bulkItemDetail.all_backlog_item}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row class="row2">\n        <ion-col>\n          <strong>On Progress</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="bulkItemDetail.onprogress_backlog_item" \n              [max]="bulkItemDetail.all_backlog_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{bulkItemDetail.onprogress_backlog_item}}/{{bulkItemDetail.all_backlog_item}}\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <strong>Todo</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="bulkItemDetail.todo_backlog_item" \n              [max]="bulkItemDetail.all_backlog_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{bulkItemDetail.todo_backlog_item}}/{{bulkItemDetail.all_backlog_item}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n    </ion-item>\n\n    <ion-row class="headerSprint">\n        <ion-col>Sprint</ion-col>\n        <ion-col>Start Date</ion-col>\n        <ion-col>Total Item</ion-col>\n    </ion-row>\n\n  </ng-template>\n    \n  <ion-list [virtualScroll]="bulkItemSprint">\n    <button ion-item *virtualItem="let sprintItem" (click)="onItemPressed({item:sprintItem})">\n      <ion-row>\n        <ion-col>\n          {{sprintItem.sprint}}\n        </ion-col>\n        <ion-col>\n          {{sprintItem.dtm_crt}}\n        </ion-col>\n        <ion-col>\n          {{sprintItem.total_sprint_item}}\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\bulk-item-detailed\bulk-item-detailed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_report_reportProvider__["a" /* ReportProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_1__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */]])
    ], BulkItemDetailedPage);
    return BulkItemDetailedPage;
}());

//# sourceMappingURL=bulk-item-detailed.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SprintDetailedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprint_item_sprint_item__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_error_handler_error_handler__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_report_reportProvider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SprintDetailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SprintDetailedPage = /** @class */ (function () {
    function SprintDetailedPage(navCtrl, navParams, helperMethod, reportProvider, ngProgress, errorHandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.helperMethod = helperMethod;
        this.reportProvider = reportProvider;
        this.ngProgress = ngProgress;
        this.errorHandler = errorHandler;
        this.sprintRequest = navParams.get("sprintRequest");
    }
    SprintDetailedPage.prototype.ionViewDidLoad = function () {
        if (this.sprintRequest == null) {
            this.navCtrl.pop();
            this.helperMethod.presentToast('Please Try Again', 3000, 2);
        }
        else {
            this.getSprintDetailed();
        }
        console.log('ionViewDidLoad SprintDetailedPage');
    };
    SprintDetailedPage.prototype.onItemPressed = function (item) {
        console.log("Sprint Detailed");
        console.log(item.item);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__sprint_item_sprint_item__["a" /* SprintItemPage */], { item: item.item });
    };
    SprintDetailedPage.prototype.getSprintDetailed = function () {
        var _this = this;
        this.ngProgress.start();
        this.reportProvider.getSprintDetailBySprint(this.sprintRequest)
            .then(function (response) {
            _this.ngProgress.done();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.sprintDetailedList = responseData.sprintDetailedList;
                _this.sprintSummary = responseData.sprintSummary;
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.ngProgress.done();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    SprintDetailedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-sprint-detailed',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\sprint-detailed\sprint-detailed.html"*/'<!--\n  Generated template for the SprintDetailedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SprintDetailedPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="ionContent">\n\n  <ng-progress class="ng-progress" [color]="\'#216fed\'"></ng-progress>\n  \n  <ng-container *ngIf="sprintSummary == null; else elseTemplate">\n    <ion-item class="loadingItem">\n      Loading Item Please Wait...\n    </ion-item>\n  </ng-container>\n  <ng-template #elseTemplate>\n\n    <ion-item class="ionItemBulkDetail">\n      <h1 style="font-weight: bold">{{sprintSummary.bulk_name}}</h1>\n      <h2 style="font-weight: bold">Sprint : {{sprintSummary.sprint}}</h2>\n      <br/>\n      <tr>\n        <td>\n          <h2>Start Date</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;{{sprintSummary.dtm_crt}}</h2>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <h2>Total Item</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;{{sprintSummary.total_item}} Items</h2>\n        </td>\n      </tr>\n      <br/>\n\n    </ion-item>\n    <!-- <progress-bar \n      [progress]="sprintSummary.percentage" \n      [color-degraded]="{\'0\': \'#00cbcb\',  \'50\': \'#f9c3d3\', \'75\': \'#fd8c8e\'}"\n      class="progress-bar" >\n    </progress-bar> -->\n    <ion-item class="ionItemBulkProgress">\n      <ion-row class="row1">\n        <ion-col>\n          <strong>Done</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="sprintSummary.done" \n              [max]="sprintSummary.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{sprintSummary.done}}/{{sprintSummary.total_item}}\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <strong>Review</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="sprintSummary.review"\n              [max]="sprintSummary.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{sprintSummary.review}}/{{sprintSummary.total_item}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row class="row2">\n        <ion-col>\n          <strong>On Progress</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="sprintSummary.on_progress" \n              [max]="sprintSummary.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{sprintSummary.on_progress}}/{{sprintSummary.total_item}}\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <strong>Todo</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="sprintSummary.to_do" \n              [max]="sprintSummary.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{sprintSummary.to_do}}/{{sprintSummary.total_item}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n    </ion-item>\n\n    <ion-row class="headerSprint">\n        <ion-col>Sprint</ion-col>\n        <ion-col>Status</ion-col>\n        <ion-col>PIC</ion-col>\n    </ion-row>\n\n  </ng-template>\n    \n  <ion-list [virtualScroll]="sprintDetailedList">\n    <button ion-item *virtualItem="let sprintItem" (click)="onItemPressed({item:sprintItem})">\n      <ion-row>\n        <ion-col style="white-space:normal">\n          {{sprintItem.sprint_id}}\n        </ion-col>\n        <ion-col style="white-space:normal">\n          {{sprintItem.statusSprint}}\n        </ion-col>\n        <ion-col style="white-space:normal">\n          {{sprintItem.person_name}}\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\sprint-detailed\sprint-detailed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_report_reportProvider__["a" /* ReportProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_1__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */]])
    ], SprintDetailedPage);
    return SprintDetailedPage;
}());

//# sourceMappingURL=sprint-detailed.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_ms_activity_msActivityProvider__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_ms_project_msProjectProvider__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_usersProvider__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_o_auth_oauthProvider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParames, userProvider, toastCtrl, formBuilder, helperMethod, errorHandler, events, oAuthProvider, msProjectProvider, msActivityProvider) {
        this.navCtrl = navCtrl;
        this.navParames = navParames;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.helperMethod = helperMethod;
        this.errorHandler = errorHandler;
        this.events = events;
        this.oAuthProvider = oAuthProvider;
        this.msProjectProvider = msProjectProvider;
        this.msActivityProvider = msActivityProvider;
        this.type = 'password';
        this.showHide = false;
        this.loginForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["f" /* Validators */].minLength(3)])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage ');
    };
    LoginPage.prototype.doLogin = function () {
        var userLogin = {
            username: this.username.value,
            password: this.password.value
        };
        this.doLoginBrowser(userLogin);
        // this.doAuthenticate(userLogin);
    };
    LoginPage.prototype.doAuthenticate = function (userLogin) {
        var _this = this;
        console.log("Do Auth " + userLogin);
        this.helperMethod.loadingService("Verifying Your Info..");
        this.oAuthProvider.getOAuthToken(userLogin)
            .then(function (response) {
            _this.helperMethod.loading.dismiss();
            response = JSON.parse(response.data);
            console.log(response);
            _this.oAuthProvider.userOAuth = response;
            console.log(_this.oAuthProvider.userOAuth);
            _this.doLogindevice(userLogin);
        }).catch(function (error) {
            _this.helperMethod.loading.dismiss();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    LoginPage.prototype.doLogindevice = function (userLogin) {
        var _this = this;
        this.helperMethod.loadingService("Collecting User Info..");
        this.userProvider.validateLoginDevice(userLogin).then(function (response) {
            _this.helperMethod.loading.dismiss();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.userProvider.user = responseData;
                _this.userProvider.userLogin = userLogin;
                _this.userProvider.saveUserDataToStorage();
                _this.getAllMsProjectList(userLogin);
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.helperMethod.loading.dismiss();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    LoginPage.prototype.doLoginBrowser = function (userLogin) {
        var _this = this;
        this.helperMethod.loadingService("Collecting User Info..");
        setTimeout(function () {
            _this.userProvider.user = {
                person_id: '1',
                job_id: '7',
                team_id: '3',
                person_name: 'Audi Aung Pertamax',
                job_name: 'Dukun',
                team_name: 'Gunung sinai',
                is_spv: '0'
            };
            _this.helperMethod.loading.dismiss();
            _this.events.publish('Auth', 1);
        }, 500);
        // this.userProvider.validateLoginBrowser(userLogin).timeout(10000).subscribe(
        //     (response:any) => {
        //       this.helperMethod.loading.dismiss();
        //       this.userProvider.user = response;
        //       this.events.publish('Auth',1);
        //       console.log(response);
        //     },
        //     (error:any) => {
        //       console.log(error);
        //       console.error(error.name);
        //       console.error(error.status);
        //       console.error(error.statusText);
        //       this.helperMethod.loading.dismiss();
        //       if(error.name == 'TimeoutError'){
        //         this.helperMethod.presentToast('Slow Connection',2000,2);
        //       }else{
        //         this.helperMethod.presentToast('Login Gagal 9999: Jangan Hubungi Team IT',2000,3);
        //       }
        //     }
        //   );
    };
    LoginPage.prototype.showHidePassword = function () {
        this.showHide = !this.showHide;
        if (this.showHide) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    LoginPage.prototype.getAllMsProjectList = function (userLogin) {
        var _this = this;
        this.helperMethod.loadingService("Getting All Project List..");
        this.msProjectProvider.getAllData(userLogin).then(function (response) {
            _this.helperMethod.loading.dismiss();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData.listProject);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.msProjectProvider.msProjectList = responseData.listProject;
                _this.msProjectProvider.save();
                _this.getAllMsActivityList(userLogin);
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.helperMethod.loading.dismiss();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    LoginPage.prototype.getAllMsActivityList = function (userLogin) {
        var _this = this;
        this.helperMethod.loadingService("Getting All Activity List..");
        this.msActivityProvider.getAllData(userLogin).then(function (response) {
            _this.helperMethod.loading.dismiss();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.msActivityProvider.msActivityList = responseData.listActivity;
                _this.msActivityProvider.save();
                _this.events.publish('Auth', 1);
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.helperMethod.loading.dismiss();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\login\loginPage.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <!-- <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar> -->\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div id="logo">\n\n    <img src="assets/imgs/IonicLogo.png">\n\n  </div>\n\n  <div id="body">\n\n    <div id="userInput">\n\n      <ion-list inset>\n\n\n\n        <form [formGroup]="loginForm">\n\n\n\n          <ion-item>\n\n            <ion-label floating >Username</ion-label>\n\n            <ion-input formControlName="username" type="text" #username value=\'{{usernameDefaultVal}}\'></ion-input>\n\n\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input formControlName="password" type="{{type}}" #password ></ion-input>\n\n            <button *ngIf="!showHide" ion-button clear color="dark" type="button" item-right (click)="showHidePassword()"> <ion-icon name="ios-eye-off-outline"></ion-icon></button>\n\n            <button *ngIf="showHide" ion-button clear color="dark" type="button" item-right (click)="showHidePassword()"> <ion-icon name="ios-eye-outline"></ion-icon></button>\n\n            \n\n          </ion-item>\n\n\n\n        </form>\n\n\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div id="loginButton">\n\n      <button ion-button block\n\n            [disabled]="!loginForm.valid"\n\n            (click)="doLogin()">\n\n          Sign in\n\n      </button>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\login\loginPage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_users_usersProvider__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_7__providers_o_auth_oauthProvider__["a" /* OAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_ms_project_msProjectProvider__["a" /* MsProjectProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_ms_activity_msActivityProvider__["a" /* MsActivityProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=loginPage.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfomancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bulk_item_detailed_developer_bulk_item_detailed_developer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_error_handler_error_handler__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_perfomance_perfomanceProvider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PerfomancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerfomancePage = /** @class */ (function () {
    function PerfomancePage(navCtrl, navParams, perfomanceProv, helperMethod, ngProgress, errorHandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.perfomanceProv = perfomanceProv;
        this.helperMethod = helperMethod;
        this.ngProgress = ngProgress;
        this.errorHandler = errorHandler;
    }
    PerfomancePage.prototype.ionViewDidLoad = function () {
        this.perfomanceByDevice();
        console.log('ionViewDidLoad PerfomancePage');
    };
    PerfomancePage.prototype.perfomanceByDevice = function () {
        var _this = this;
        this.ngProgress.start();
        this.perfomanceProv.getBulkItemList()
            .then(function (response) {
            _this.ngProgress.done();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.perfomance = responseData;
                _this.perfomanceList = responseData.perfomanceBulkList;
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.ngProgress.done();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    PerfomancePage.prototype.onItemPressed = function (item) {
        if (item != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__bulk_item_detailed_developer_bulk_item_detailed_developer__["a" /* BulkItemDetailedDeveloperPage */], { bulkItem: item.item });
        }
        else {
            this.helperMethod.presentToast('Sorry I did not get that item', 3000, 3);
        }
    };
    PerfomancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-perfomance',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\perfomance\perfomancePage.html"*/'<!--\n  Generated template for the PerfomancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PerfomancePage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="ionContent">\n\n  <ng-progress class="ng-progress" [color]="\'#216fed\'"></ng-progress>\n\n  <ng-container *ngIf="perfomance == null; else elseTemplate">\n    <ion-item class="loadingItem">\n      Loading Item Please Wait...\n    </ion-item>\n  </ng-container>\n  <ng-template #elseTemplate>\n\n    <ion-item class="ionItemBulkDetail">\n      <br/>\n      <tr>\n        <td>\n          <h2>Total Item</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n        </td>\n        <td>\n          <h2>&nbsp;&nbsp;&nbsp;{{perfomance.total_item}} Items</h2>\n        </td>\n      </tr>\n      <br/>\n\n    </ion-item>\n    <!-- <progress-bar \n      [progress]="perfomance.percentage" \n      [color-degraded]="{\'0\': \'#00cbcb\',  \'50\': \'#f9c3d3\', \'75\': \'#fd8c8e\'}"\n      class="progress-bar" >\n    </progress-bar> -->\n    <ion-item class="ionItemBulkProgress">\n      <ion-row class="row1">\n        <ion-col>\n          <strong>Done</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="perfomance.done_item" \n              [max]="perfomance.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{perfomance.done_item}}/{{perfomance.total_item}}\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <strong>Review</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="perfomance.review_item" \n              [max]="perfomance.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{perfomance.review_item}}/{{perfomance.total_item}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row class="row2">\n        <ion-col>\n          <strong>On Progress</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="perfomance.on_progress_item" \n              [max]="perfomance.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{perfomance.on_progress_item}}/{{perfomance.total_item}}\n            </div>\n          </div>\n        </ion-col>\n        <ion-col>\n          <strong>Todo</strong>\n          <div class="positionRelative">\n            <round-progress\n              [current]="perfomance.to_do_item" \n              [max]="perfomance.total_item"\n              [radius]="45"\n              [stroke]="10"\n              [animationDelay]="400">\n            </round-progress>\n            <div class="percentageValue">\n              {{perfomance.to_do_item}}/{{perfomance.total_item}}\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n      \n    </ion-item>\n\n    <ion-row class="headerSprint">\n        <ion-col>Bulk Name</ion-col>\n        <ion-col>Perfomance</ion-col>\n    </ion-row>\n\n  </ng-template>\n    \n  <ion-list [virtualScroll]="perfomanceList">\n    <button ion-item *virtualItem="let perfomanceItem" (click)="onItemPressed({item:perfomanceItem})">\n      <ion-row>\n        <ion-col>\n          {{perfomanceItem.bulk_name}}\n        </ion-col>\n        <ion-col>\n          {{perfomanceItem.done_sprint}}/{{perfomanceItem.total_sprint}}\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n\n\n</ion-content>\n  '/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\perfomance\perfomancePage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_perfomance_perfomanceProvider__["a" /* PerfomanceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_1__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */]])
    ], PerfomancePage);
    return PerfomancePage;
}());

//# sourceMappingURL=perfomancePage.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bulk_item_detailed_bulk_item_detailed__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_report_reportProvider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPage = /** @class */ (function () {
    function ReportPage(navCtrl, navParams, userProvider, helperMethod, reportProvider, ngProgress, errorHandler) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.helperMethod = helperMethod;
        this.reportProvider = reportProvider;
        this.ngProgress = ngProgress;
        this.errorHandler = errorHandler;
        this.progressVal = 0;
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        this.getAllBulk();
        console.log('ionViewDidLoad ReportPage ');
    };
    ReportPage.prototype.ionViewWillEnter = function () {
        console.log('will enter');
    };
    ReportPage.prototype.ionViewDidEnter = function () {
        console.log('Did enter');
    };
    ReportPage.prototype.getAllBulk = function () {
        // this.bulkByBrowser();
        this.bulkByDevice();
    };
    ReportPage.prototype.bulkByDevice = function () {
        var _this = this;
        this.ngProgress.start();
        this.reportProvider.getBulkItemList()
            .then(function (response) {
            _this.ngProgress.done();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData.bulkItemList);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.reportProvider.bulkItemList = responseData.bulkItemList;
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.ngProgress.done();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    ReportPage.prototype.bulkByBrowser = function () {
        var _this = this;
        this.helperMethod.loadingService('Getting Your Bulk Item...');
        this.reportProvider.getAllBulkByUserLogin(this.userProvider.user)
            .subscribe(function (response) {
            _this.reportProvider.bulkItemList = response;
            _this.helperMethod.loading.dismiss();
        }, function (error) {
            console.log(error);
            console.error(error.status);
            console.error(error.statusText);
            _this.helperMethod.loading.dismiss();
            _this.helperMethod.presentToast('Gagal 9999: Jangan Hubungi Team IT', 2000, 3);
        });
    };
    ReportPage.prototype.onItemPressed = function (item) {
        if (item != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__bulk_item_detailed_bulk_item_detailed__["a" /* BulkItemDetailedPage */], { bulkItem: item.item });
        }
        else {
            this.helperMethod.presentToast('Sorry I did not get that item', 3000, 3);
        }
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-report',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\report\reportPage.html"*/'<!--\n\n  Generated template for the ReportPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Report</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="ionContent">\n\n\n\n  <ng-progress class="ng-progress" [color]="\'#216fed\'"></ng-progress>\n\n\n\n  <ion-list class="ionList" [virtualScroll]="reportProvider.bulkItemList">\n\n      \n\n    <button ion-item class="ionItem" *virtualItem="let bulkItem" (click)="onItemPressed({item:bulkItem})">\n\n      \n\n      <ion-row>\n\n        <ion-col>\n\n          <strong class="project_code"> {{ bulkItem.project_code }} </strong>\n\n          <p class="bulk_name"> {{ bulkItem.bulk_name }} </p>\n\n          <p class="total_backlog"> {{ bulkItem.total_backlog_item}} Item </p>\n\n          <p class="mandays"> {{bulkItem.mandays}} Mandays </p>\n\n        </ion-col>\n\n\n\n        <!-- <progress-bar \n\n          [progress]="bulkItem.percentage" \n\n          [color-degraded]="{\'0\': \'#00cbcb\',  \'50\': \'#f9c3d3\', \'75\': \'#fd8c8e\'}"\n\n          class="progress-bar" >\n\n        </progress-bar> -->\n\n        <ion-col class="progressBar" col-6>\n\n          <div class="positionRelative">\n\n            <round-progress\n\n              [current]="bulkItem.percentage" \n\n              [max]="100"\n\n              [radius]="80"\n\n              [rounded]="true"\n\n              [animationDelay]="400"\n\n              [semicircle]="true">\n\n            </round-progress>\n\n            <div class="percentageValue">\n\n                {{bulkItem.percentage}}%\n\n            </div>\n\n          </div>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n    </button>\n\n\n\n  </ion-list>\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\report\reportPage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_report_reportProvider__["a" /* ReportProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=reportPage.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__perfomance_perfomancePage__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_users_usersProvider__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_reportPage__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__time_sheet_time_sheetPage__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_userPage__ = __webpack_require__(180);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navPrm, userProvider, app) {
        this.navCtrl = navCtrl;
        this.navPrm = navPrm;
        this.userProvider = userProvider;
        this.app = app;
        this.timeSheetRoot = __WEBPACK_IMPORTED_MODULE_5__time_sheet_time_sheetPage__["a" /* TimeSheetPage */];
        this.reportRoot = __WEBPACK_IMPORTED_MODULE_4__report_reportPage__["a" /* ReportPage */];
        this.perfomanceRoot = __WEBPACK_IMPORTED_MODULE_0__perfomance_perfomancePage__["a" /* PerfomancePage */];
        this.userRoot = __WEBPACK_IMPORTED_MODULE_6__user_userPage__["a" /* UserPage */];
        this.isSpv = false;
        this.isDeveloper = false;
        if (userProvider.user.is_spv == "1") {
            this.isSpv = true;
            this.isDeveloper = false;
        }
        else {
            this.isSpv = false;
            this.isDeveloper = true;
        }
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('TabsPage IonViewLoad');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex = "0">\n    <ion-tab [root]="timeSheetRoot" tabTitle="Time sheet" tabIcon="list-box"></ion-tab>\n    <ion-tab [root]="reportRoot" tabTitle="Report" tabIcon="stats" [show]="isSpv"></ion-tab>\n    <ion-tab [root]="perfomanceRoot" tabTitle="Perfomance" tabIcon="flash" [show]="isDeveloper"></ion-tab>\n    <ion-tab [root]="userRoot" tabTitle="User" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_users_usersProvider__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeSheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_storage_storageProvider__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__time_sheet_page_modal_time_sheet_page_modal__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_usersProvider__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_timesheets_timesheetsProvider__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_progressbar__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the TimeSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeSheetPage = /** @class */ (function () {
    function TimeSheetPage(navCtrl, navParams, timeSheetProvider, helperMethod, userProvider, errorHandler, events, modalCtrl, alertCtrl, ngProgress, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timeSheetProvider = timeSheetProvider;
        this.helperMethod = helperMethod;
        this.userProvider = userProvider;
        this.errorHandler = errorHandler;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.ngProgress = ngProgress;
        this.storageProvider = storageProvider;
        this.groupedTimeSheetDataList = [];
    }
    TimeSheetPage.prototype.ionViewDidLoad = function () {
        // this.getAllTimeSheet();
        console.log('ionViewDidLoad TimeSheetPage');
    };
    TimeSheetPage.prototype.getAllTimeSheet = function () {
        var _this = this;
        this.ngProgress.start();
        this.timeSheetProvider.getAllTimeSheetsByUserLoggedIn(this.userProvider.userLogin)
            .then(function (response) {
            _this.ngProgress.done();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.timeSheetProvider.timeSheetList = responseData.timeSheetByUser;
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.ngProgress.done();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    TimeSheetPage.prototype.onItemUpdatePressed = function (itemData) {
        console.log('OnItemUpdate Pressed ', itemData);
        var timeSheetModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__time_sheet_page_modal_time_sheet_page_modal__["a" /* TimeSheetPageModal */], { timeSheetData: itemData.data });
        timeSheetModal.present();
    };
    TimeSheetPage.prototype.doAdd = function () {
        console.log("Add Button Pressed");
        var timeSheetModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__time_sheet_page_modal_time_sheet_page_modal__["a" /* TimeSheetPageModal */], { timeSheetData: 'add' });
        timeSheetModal.present();
    };
    TimeSheetPage.prototype.onItemPressed = function (itemId) {
        console.log(itemId);
        // this.alertPopUpDetailTimeSheet();
        // this.storageProvider.getStorageByKey('Ms_Project')
        //     .then(
        //       (response:any) =>{
        //         console.log(response);
        //       }
        //     );
        // this.storageProvider.getKeys()
        //     .then(
        //       (response:any) => {
        //         console.log(response);
        //       }
        //     );
        // console.log('mantab');
        // this.storageProvider.clear();
        // console.log('wawa');
        // this.storageProvider.getKeys()
        // .then(
        //   (response:any) => {
        //     console.log(response);
        //   }
        // );
    };
    TimeSheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-time-sheet',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\time-sheet\time-sheetPage.html"*/'<!--\n\n  Generated template for the TimeSheetPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>TimeSheet</ion-title>\n\n    <ion-buttons end >\n\n        <button ion-button icon-only (click)="doAdd()">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ng-progress class="ng-progress" [color]="\'#31edda\'"></ng-progress>\n\n\n\n  <ion-list [virtualScroll]="timeSheetProvider.timeSheetList" [approxItemHeight]=" \'100px\' ">\n\n    \n\n    <ion-item-sliding *virtualItem="let data" > \n\n      \n\n        <ion-item class="ionItem" (click)="onItemPressed({id : data.time_sheet_id})" text-wrap \n\n                  [ngStyle]="(data.is_real == \'1\') ? \n\n                            { \n\n                              \'background-color\':\'#72a8ff\' \n\n                            } : \n\n                            { \n\n                              \'background-color\':\'#c8cace\' \n\n                            }">\n\n          <table style="width: 100%">\n\n            <tr>\n\n              <td>{{data.dtm_crt}}</td>\n\n              <td></td>\n\n              <td>{{data.project_code}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Activites</td>\n\n              <td> : </td>\n\n              <td>{{data.activities_type}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Detail</td>\n\n              <td> : </td>\n\n              <td>{{data.today_act}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Jira Id</td>\n\n              <td> : </td>\n\n              <td>{{data.jira_id}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Sprint Id</td>\n\n              <td> : </td>\n\n              <td>{{data.sprint_id}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Duration</td>\n\n              <td> : </td>\n\n              <td>{{data.duration_act}} Hours</td>\n\n            </tr>\n\n          </table>\n\n        </ion-item>\n\n        <ion-item-options>\n\n          <button ion-button color="light" (click)="onItemUpdatePressed({data: data})">\n\n              <ion-icon name="paper"></ion-icon> Update\n\n          </button>\n\n        </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\time-sheet\time-sheetPage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_timesheets_timesheetsProvider__["a" /* TimesheetsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_0__providers_storage_storageProvider__["a" /* StorageProvider */]])
    ], TimeSheetPage);
    return TimeSheetPage;
}());

//# sourceMappingURL=time-sheetPage.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeSheetPageModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timesheets_timesheetsProvider__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ms_activity_msActivityProvider__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ms_project_msProjectProvider__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the TimeSheetPageModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimeSheetPageModal = /** @class */ (function () {
    function TimeSheetPageModal(navCtrl, navParams, msActivityProvider, msProjectProvider, timeSheetProvider, userProvider, helperMethod, errorHandler, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.msActivityProvider = msActivityProvider;
        this.msProjectProvider = msProjectProvider;
        this.timeSheetProvider = timeSheetProvider;
        this.userProvider = userProvider;
        this.helperMethod = helperMethod;
        this.errorHandler = errorHandler;
        this.viewCtrl = viewCtrl;
        console.log(this.navParams.get('timeSheetData'));
        this.dataIsValid = false;
        if (this.navParams.get('timeSheetData') == 'add') {
            this.addOrUpdate = 'add';
        }
        else {
            this.addOrUpdate = 'update';
            this.timeSheet = this.navParams.get('timeSheetData');
            this.projectDropDown = this.timeSheet.project_code;
            this.activityDropDown = this.timeSheet.activities_type;
            this.todayAct = this.timeSheet.today_act;
            this.jiraId = this.timeSheet.jira_id;
            this.sprintId = this.timeSheet.sprint_id;
            this.duration = this.timeSheet.duration_act;
        }
    }
    TimeSheetPageModal.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TimeSheetPageModalPage');
    };
    TimeSheetPageModal.prototype.doCloseModal = function () {
        console.log("Close Modal");
        this.viewCtrl.dismiss();
    };
    TimeSheetPageModal.prototype.addTimeSheetItem = function () {
        this.validateData();
        if (this.dataIsValid == true) {
            this.addData();
        }
    };
    TimeSheetPageModal.prototype.validateData = function () {
        if (this.projectDropDown == null || this.projectDropDown == "") {
            this.helperMethod.presentToast('Project Fields must be filled', 2000, 1);
            this.dataIsValid = false;
        }
        else if (this.activityDropDown == null || this.activityDropDown == "") {
            this.helperMethod.presentToast('Activity Fields must be filled', 2000, 1);
            this.dataIsValid = false;
        }
        else if (this.todayAct == null || this.todayAct == "") {
            this.helperMethod.presentToast('Today Activities Fields must be filled', 2000, 1);
            this.dataIsValid = false;
        }
        else if (this.duration == null || this.duration == "") {
            this.helperMethod.presentToast('Duration Fields must be filled', 2000, 1);
            this.dataIsValid = false;
        }
        else if (this.planReal == null || this.planReal == "") {
            this.helperMethod.presentToast('Is it Plan Or Real?', 2000, 1);
            this.dataIsValid = false;
        }
        else {
            this.dataIsValid = true;
        }
    };
    TimeSheetPageModal.prototype.addData = function () {
        var _this = this;
        this.msProjectProvider.getIdByProjectCode(this.projectDropDown);
        this.msActivityProvider.getIdByActivityCode(this.activityDropDown);
        var timeSheetData = {
            project_id: this.msProjectProvider.projectID,
            project_code: this.projectDropDown,
            activity_id: this.msActivityProvider.activityID,
            activity_type: this.activityDropDown,
            today_act: this.todayAct,
            jira_id: this.jiraId,
            sprint_id: this.sprintId,
            duration_act: this.duration,
            person_id: this.userProvider.user.person_id,
            is_real: this.planReal,
            username: this.userProvider.userLogin.username
        };
        console.log(timeSheetData);
        this.helperMethod.loadingService("Add New One..");
        this.timeSheetProvider.addNewTimeSheet(timeSheetData)
            .then(function (response) {
            _this.helperMethod.loading.dismiss();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.getAllTimeSheet();
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.helperMethod.loading.dismiss();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    TimeSheetPageModal.prototype.goReal = function () {
        var _this = this;
        var durationTemp = this.timeSheet.duration_act;
        var isRealTemp = this.timeSheet.is_real;
        this.timeSheet.duration_act = this.duration;
        this.timeSheet.is_real = '1';
        this.helperMethod.loadingService("Update Go Real..");
        this.timeSheetProvider.updateGoRealTimeSheet(this.timeSheet)
            .then(function (response) {
            _this.helperMethod.loading.dismiss();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.doCloseModal();
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.timeSheet.is_real = isRealTemp;
            _this.timeSheet.duration_act = durationTemp;
            _this.helperMethod.loading.dismiss();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    TimeSheetPageModal.prototype.getAllTimeSheet = function () {
        var _this = this;
        this.helperMethod.loadingService("Refresh Data TimeSheet..");
        this.timeSheetProvider.getAllTimeSheetsByUserLoggedIn(this.userProvider.userLogin)
            .then(function (response) {
            _this.helperMethod.loading.dismiss();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.timeSheetProvider.timeSheetList = responseData.timeSheetByUser;
                _this.doCloseModal();
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.helperMethod.loading.dismiss();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    TimeSheetPageModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-time-sheet-page-modal',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\time-sheet-page-modal\time-sheet-page-modal.html"*/'<!--\n\n  Generated template for the TimeSheetPageModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Time Sheet Detail</ion-title>\n\n    <ion-buttons end >\n\n      <button ion-button icon-only (click)="doCloseModal()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<!-- Add -->\n\n\n\n  <div *ngIf=" addOrUpdate == \'add\' ">\n\n    \n\n    <ion-item>\n\n      <ion-label color="primary" floating>Project</ion-label>\n\n      <ion-select [(ngModel)]="projectDropDown">\n\n          <ion-option *ngFor=\'let data of msProjectProvider.msProjectList\'>{{data.project_code}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Activities</ion-label>\n\n      <ion-select [(ngModel)]="activityDropDown">\n\n        <ion-option *ngFor=\'let data of msActivityProvider.msActivityList\'>{{data.activity_type}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Today Activites</ion-label>\n\n      <ion-textarea [(ngModel)]="todayAct"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Jira Id</ion-label>\n\n      <ion-input [(ngModel)]="jiraId"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Sprint Id</ion-label>\n\n      <ion-input [(ngModel)]="sprintId"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Duration</ion-label>\n\n      <ion-input [(ngModel)]="duration" type="number"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n    <ion-list radio-group [(ngModel)]="planReal" class="planReal">\n\n      <ion-item>\n\n        <ion-label>Plan</ion-label>\n\n        <ion-radio value="0" checked></ion-radio>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Real</ion-label>\n\n        <ion-radio value="1"></ion-radio>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n    <ion-buttons end class="addButton">\n\n      <button ion-button color="light" (click)="addTimeSheetItem()">\n\n        <ion-icon name="add-circle"></ion-icon> Add\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n\n\n<!-- Update -->\n\n\n\n  <div *ngIf=" addOrUpdate == \'update\' ">\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Project</ion-label>\n\n      <ion-input [(ngModel)]="projectDropDown" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Activities</ion-label>\n\n      <ion-input [(ngModel)]="activityDropDown" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Today Activites</ion-label>\n\n      <ion-textarea [(ngModel)]="todayAct" [disabled]="true"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Jira Id</ion-label>\n\n      <ion-input [(ngModel)]="jiraId" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Sprint Id</ion-label>\n\n      <ion-input [(ngModel)]="sprintId" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Duration</ion-label>\n\n      <ion-input [(ngModel)]="duration" type="number"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button color="primary" (click)="goReal()" >\n\n        Make it Real!\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\time-sheet-page-modal\time-sheet-page-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_ms_activity_msActivityProvider__["a" /* MsActivityProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_ms_project_msProjectProvider__["a" /* MsProjectProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_timesheets_timesheetsProvider__["a" /* TimesheetsProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_1__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["n" /* ViewController */]])
    ], TimeSheetPageModal);
    return TimeSheetPageModal;
}());

//# sourceMappingURL=time-sheet-page-modal.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprint_item_sprint_item__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_storage_storageProvider__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_users_usersProvider__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams, userProvider, helperMethod, errorHandler, storageProvider, ngProgress, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.helperMethod = helperMethod;
        this.errorHandler = errorHandler;
        this.storageProvider = storageProvider;
        this.ngProgress = ngProgress;
        this.events = events;
        this.alertCtrl = alertCtrl;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
        // this.getDetailSprint();
        this.dataDummy();
    };
    UserPage.prototype.onItemPressed = function (data) {
        console.log('On Item Pressed', data.data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__sprint_item_sprint_item__["a" /* SprintItemPage */], { item: data.data });
    };
    UserPage.prototype.updateProgress = function (data) {
        var _this = this;
        var request = {
            mantab: data.data
        };
        this.helperMethod.loadingService("Updating your sprint..");
        this.userProvider.updateSprintProgress(request).then(function (response) {
            _this.helperMethod.loading.dismiss();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.helperMethod.loading.dismiss();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    UserPage.prototype.claimSprint = function (data) {
        var _this = this;
        var request = {
            mantab: data.data
        };
        this.helperMethod.loadingService("Updating your sprint..");
        this.userProvider.claimSprint(request).then(function (response) {
            _this.helperMethod.loading.dismiss();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.helperMethod.loading.dismiss();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    UserPage.prototype.doLogout = function () {
        this.alertConfirmLogout();
    };
    UserPage.prototype.alertConfirmLogout = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Logout',
            message: 'Are you sure you want to logout?',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.logout();
                    }
                }
            ]
        });
        alert.present();
    };
    UserPage.prototype.logout = function () {
        var _this = this;
        var userLogin = {
            person_id: this.userProvider.user.person_id
        };
        this.helperMethod.loadingService("Logout..");
        this.userProvider.doLogoutUser(userLogin).then(function (response) {
            _this.helperMethod.loading.dismiss();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                _this.storageProvider.clear();
                _this.events.publish('Auth', 0);
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.helperMethod.loading.dismiss();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    UserPage.prototype.getSprint = function () {
        var _this = this;
        var userLogin = {
            person_id: this.userProvider.user.person_id
        };
        this.ngProgress.start();
        this.userProvider.getClaimedSprintByUser(userLogin)
            .then(function (response) {
            _this.ngProgress.done();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                console.log(responseData);
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.ngProgress.done();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    UserPage.prototype.getUnclaimedSprint = function () {
        var _this = this;
        var userLogin = {
            person_id: this.userProvider.user.person_id
        };
        this.ngProgress.start();
        this.userProvider.getUnclaimedSprint(userLogin)
            .then(function (response) {
            _this.ngProgress.done();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                console.log(responseData);
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.ngProgress.done();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    UserPage.prototype.getColor = function (status) {
        switch (status) {
            case 'To do':
                return '#ffffff';
            case 'On Progress':
                return '#ff9d00';
            case 'Review':
                return '#00e1ff';
            case 'Done':
                return '#00c617';
        }
    };
    UserPage.prototype.dataDummy = function () {
        this.userProvider.claimedSprintDetailList = [
            {
                backlog_sprint_id: '1',
                backlog_id: '1',
                person_id: '32',
                definition_of_done: 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
                is_active: '1',
                commited: null,
                person_name: 'Haris Wei',
                sprint_id: 'akknsk1123',
                sprint_backlog: '1',
                duration: '999',
                statusSprint: 'To do',
                dtm_crt: '12/12/2012',
                dtm_upd: '15/15/2015',
                sprint: '1',
                mandays: '1',
            },
            {
                backlog_sprint_id: '1',
                backlog_id: '1',
                person_id: '32',
                definition_of_done: 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
                is_active: '1',
                commited: null,
                person_name: 'Haris Wei',
                sprint_id: '1',
                sprint_backlog: '1',
                duration: '8',
                statusSprint: 'On Progress',
                dtm_crt: '12/12/2012',
                dtm_upd: '15/15/2015',
                sprint: '1',
                mandays: '1',
            },
            {
                backlog_sprint_id: '1',
                backlog_id: '1',
                person_id: '32',
                definition_of_done: 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
                is_active: '1',
                commited: null,
                person_name: 'Haris Wei',
                sprint_id: '1',
                sprint_backlog: '1',
                duration: '8',
                statusSprint: 'Review',
                dtm_crt: '12/12/2012',
                dtm_upd: '15/15/2015',
                sprint: '1',
                mandays: '1',
            },
            {
                backlog_sprint_id: '1',
                backlog_id: '1',
                person_id: '32',
                definition_of_done: 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
                is_active: '1',
                commited: null,
                person_name: 'Haris Wei',
                sprint_id: '1',
                sprint_backlog: '1',
                duration: '8',
                statusSprint: 'Done',
                dtm_crt: '12/12/2012',
                dtm_upd: '15/15/2015',
                sprint: '1',
                mandays: '1',
            }
        ];
        this.userProvider.unclaimedSprintDetailList = [
            {
                backlog_sprint_id: '1',
                backlog_id: '1',
                person_id: '32',
                definition_of_done: 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
                is_active: '1',
                commited: null,
                person_name: null,
                sprint_id: '1',
                sprint_backlog: '1',
                duration: '8',
                statusSprint: 'Todo',
                dtm_crt: '12/12/2012',
                dtm_upd: '15/15/2015',
                sprint: '1',
                mandays: '1',
            },
            {
                backlog_sprint_id: '1',
                backlog_id: '1',
                person_id: '32',
                definition_of_done: 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
                is_active: '1',
                commited: null,
                person_name: null,
                sprint_id: '1',
                sprint_backlog: '1',
                duration: '8',
                statusSprint: 'Todo',
                dtm_crt: '12/12/2012',
                dtm_upd: '15/15/2015',
                sprint: '1',
                mandays: '1',
            },
            {
                backlog_sprint_id: '1',
                backlog_id: '1',
                person_id: '32',
                definition_of_done: 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
                is_active: '1',
                commited: null,
                person_name: null,
                sprint_id: '1',
                sprint_backlog: '1',
                duration: '8',
                statusSprint: 'Todo',
                dtm_crt: '12/12/2012',
                dtm_upd: '15/15/2015',
                sprint: '1',
                mandays: '1',
            }
        ];
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\user\userPage.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>User</ion-title>\n\n    <ion-buttons end >\n\n      <button ion-button icon-only (click)="doLogout()">\n\n        <ion-icon name="exit"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding class="ionContent"> \n\n\n\n  <!-- <div class="north">\n\n    <img class="profile-photo" src="assets/imgs/user/profile_picture_example.jpg"> \n\n  </div>\n\n    -->\n\n  <ng-progress class="ng-progress" [color]="\'#31edda\'"></ng-progress>\n\n  \n\n  <div>\n\n    <ion-item class="content">\n\n      <ion-row>\n\n        <ion-col style="white-space:normal" col-9>\n\n          {{userProvider.user.person_name}}\n\n        </ion-col>\n\n        <ion-col style="white-space:normal" col-3>\n\n          {{userProvider.user.job_name}}\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-item>\n\n  </div>\n\n \n\n  \n\n  <ion-row class="headerSprint">\n\n    <ion-col>Your Claimed Sprint</ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list [virtualScroll]="userProvider.claimedSprintDetailList">\n\n    <ion-item-sliding *virtualItem="let data"> \n\n      <button ion-item class="ionItem" (click)="onItemPressed({data : data})"  \n\n                [ngStyle]="{\'background-color\' :getColor(data.statusSprint)}">\n\n        <ion-row>\n\n          <ion-col style="white-space:normal" col-4>\n\n            {{data.sprint_id}}sdfgsdfgdsfg\n\n          </ion-col>\n\n          <ion-col style="white-space:normal" col-4>\n\n            {{data.duration}} Hours\n\n          </ion-col>\n\n          <ion-col style="white-space:normal" col-4>\n\n            {{data.statusSprint}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </button>\n\n      <ion-item-options>\n\n        <section *ngIf="data.statusSprint == \'To do\'">\n\n          <button ion-button color="light" (click)="updateProgress({data : data})">\n\n            <ion-icon name="paper"></ion-icon> Update\n\n          </button>\n\n        </section>\n\n        <section *ngIf="data.statusSprint == \'On Progress\'">\n\n          <button ion-button color="light" (click)="updateProgress({data : data})">\n\n            <ion-icon name="paper"></ion-icon> Update\n\n          </button>\n\n        </section>\n\n        <section *ngIf="data.statusSprint == \'Review\' && userProvider.user.is_spv == \'1\' ">\n\n          <button ion-button color="light" (click)="updateProgress({data : data})">\n\n            <ion-icon name="paper"></ion-icon> Update\n\n          </button>\n\n        </section>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n  \n\n  <ion-row class="headerSprint">\n\n    <ion-col>Claim Sprint</ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list [virtualScroll]="userProvider.unclaimedSprintDetailList">\n\n    <ion-item-sliding *virtualItem="let data"> \n\n      <button ion-item class="ionItem" (click)="onItemPressed({data : data})"  \n\n                [ngStyle]="{\'background-color\' :getColor(data.statusSprint)}">\n\n        <ion-row>\n\n          <ion-col style="white-space:normal" col-8>\n\n            {{data.sprint_id}}\n\n          </ion-col>\n\n          <ion-col style="white-space:normal" col-4>\n\n            {{data.duration}} Hours\n\n          </ion-col>\n\n        </ion-row>\n\n      </button>\n\n      <ion-item-options>\n\n        <button ion-button color="light" (click)="claimSprint({data : data})">\n\n          <ion-icon name="add-circle"></ion-icon> Claim\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\user\userPage.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__providers_users_usersProvider__["a" /* UsersProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_users_usersProvider__["a" /* UsersProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_helper_method_helper_method__["a" /* HelperMethodProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_helper_method_helper_method__["a" /* HelperMethodProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_storage_storageProvider__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_storage_storageProvider__["a" /* StorageProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__["a" /* NgProgress */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_progressbar__["a" /* NgProgress */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* Events */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */]) === "function" && _j || Object])
    ], UserPage);
    return UserPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=userPage.js.map

/***/ }),

/***/ 191:
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
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_storageProvider__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__o_auth_oauthProvider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_variable_global_variable__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';






/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.0
*/
var UsersProvider = /** @class */ (function () {
    function UsersProvider(http, helperMethod, httpNative, oauthProvider, globalVal, storageProvider) {
        this.http = http;
        this.helperMethod = helperMethod;
        this.httpNative = httpNative;
        this.oauthProvider = oauthProvider;
        this.globalVal = globalVal;
        this.storageProvider = storageProvider;
        this.baseUrl = "https://jsonplaceholder.typicode.com/users";
        this.postUrl = "https://jsonplaceholder.typicode.com/posts/";
        console.log('Hello UsersProvider Provider');
    }
    UsersProvider.prototype.validateLoginBrowser = function (userLogin) {
        console.log(userLogin);
        return this.http.get(this.helperMethod.personUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    UsersProvider.prototype.validateLoginDevice = function (userLogin) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        console.log(headers);
        this.httpNative.setDataSerializer('json');
        console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.userLoginAPI);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.userLoginAPI, userLogin, headers);
    };
    UsersProvider.prototype.doLogoutUser = function (userLogin) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        console.log(headers);
        this.httpNative.setDataSerializer('json');
        console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.userLogoutAPI);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.userLogoutAPI, userLogin, headers);
    };
    UsersProvider.prototype.getClaimedSprintByUser = function (userLogin) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        console.log(headers);
        this.httpNative.setDataSerializer('json');
        console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getClaimedSprintByUser);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getClaimedSprintByUser, userLogin, headers);
    };
    UsersProvider.prototype.getUnclaimedSprint = function (userLogin) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        console.log(headers);
        this.httpNative.setDataSerializer('json');
        console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getUnclaimedSprint);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getUnclaimedSprint, userLogin, headers);
    };
    UsersProvider.prototype.updateSprintProgress = function (userLogin) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        console.log(headers);
        this.httpNative.setDataSerializer('json');
        console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.updateSprintProgress);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.updateSprintProgress, userLogin, headers);
    };
    UsersProvider.prototype.claimSprint = function (userLogin) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        console.log(headers);
        this.httpNative.setDataSerializer('json');
        console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.claimSprint);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.claimSprint, userLogin, headers);
    };
    UsersProvider.prototype.saveUserDataToStorage = function () {
        this.storageProvider.save(this.storageProvider.userKey, this.user);
        this.storageProvider.save(this.storageProvider.userLoginKey, this.userLogin);
    };
    UsersProvider.prototype.loadUserDataFromStorage = function () {
        var _this = this;
        this.storageProvider.getStorageByKey(this.storageProvider.userKey)
            .then(function (response) {
            if (response != null) {
                _this.user = response;
            }
            else {
            }
        }).catch(function (error) {
            _this.helperMethod.presentToast('Load Error', 3000, 3);
        });
    };
    //helping method
    UsersProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    UsersProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(error.status);
        console.error(error.statusText);
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error);
    };
    UsersProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json().error || "Server Error.");
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__helper_method_helper_method__["a" /* HelperMethodProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__helper_method_helper_method__["a" /* HelperMethodProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__o_auth_oauthProvider__["a" /* OAuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__o_auth_oauthProvider__["a" /* OAuthProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__global_variable_global_variable__["a" /* GlobalVariableProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__global_variable_global_variable__["a" /* GlobalVariableProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__storage_storageProvider__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__storage_storageProvider__["a" /* StorageProvider */]) === "function" && _f || Object])
    ], UsersProvider);
    return UsersProvider;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=usersProvider.js.map

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/back-log-report/back-log-report.module": [
		710,
		15
	],
	"../pages/bulk-item-detailed-developer/bulk-item-detailed-developer.module": [
		711,
		14
	],
	"../pages/bulk-item-detailed/bulk-item-detailed.module": [
		712,
		13
	],
	"../pages/login/loginPage.module": [
		713,
		12
	],
	"../pages/main/main.module": [
		714,
		11
	],
	"../pages/perfomance/perfomancePage.module": [
		715,
		10
	],
	"../pages/report-page-modal/report-page-modal.module": [
		716,
		9
	],
	"../pages/report/reportPage.module": [
		717,
		8
	],
	"../pages/sprint-detailed-developer/sprint-detailed-developer.module": [
		718,
		7
	],
	"../pages/sprint-detailed/sprint-detailed.module": [
		719,
		6
	],
	"../pages/sprint-item/sprint-item.module": [
		720,
		5
	],
	"../pages/sprint-report/sprint-report.module": [
		721,
		0
	],
	"../pages/tabs/tabs.module": [
		722,
		4
	],
	"../pages/time-sheet-page-modal/time-sheet-page-modal.module": [
		723,
		3
	],
	"../pages/time-sheet/time-sheetPage.module": [
		724,
		2
	],
	"../pages/user/userPage.module": [
		725,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ErrorHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ErrorHandlerProvider = /** @class */ (function () {
    function ErrorHandlerProvider(http, helperMethod) {
        this.http = http;
        this.helperMethod = helperMethod;
        console.log('Hello ErrorHandlerProvider Provider');
    }
    ErrorHandlerProvider.prototype.catchErrorHandler = function (error) {
        var errorData;
        try {
            errorData = JSON.parse(error.error);
        }
        catch (error) {
            this.helperMethod.presentToast('Server is Unavailable', 4000, 2);
            // return;
        }
        console.log(error);
        console.error(error.error);
        console.error(error.status);
        if (errorData.error == 'invalid_grant') {
            this.helperMethod.presentToast(errorData.error_description, 4000, 3);
        }
        if (error.status == "-1") {
            this.helperMethod.presentToast('Failed To Connect Please Check Your Connection', 4000, 2);
        }
        if (error.status == "1") {
            this.helperMethod.presentToast('Request Time Out Please Check Your Connection', 4000, 1);
        }
        if (error.status == "9999") {
            this.helperMethod.presentToast(errorData.error_description, 3000, 3);
        }
        if (error.error == 'TimeoutError') {
            this.helperMethod.presentToast('Slow Connection', 4000, 2);
        }
        else {
            this.helperMethod.presentToast('Error 9999: Jangan Hubungi Team IT', 4000, 3);
        }
    };
    ErrorHandlerProvider.prototype.catchResponseErrorHandler = function (responseData) {
        if (responseData.status.code == "1159") {
            this.helperMethod.presentToast(responseData.status.message, 3000, 2);
        }
        else if (responseData.status.code == "8101") {
            this.helperMethod.presentToast(responseData.status.message, 3000, 3);
        }
        else if (responseData.status.code == "9999") {
            this.helperMethod.presentToast(responseData.status.message, 3000, 3);
        }
    };
    ErrorHandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__helper_method_helper_method__["a" /* HelperMethodProvider */]])
    ], ErrorHandlerProvider);
    return ErrorHandlerProvider;
}());

//# sourceMappingURL=error-handler.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_variable_global_variable__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_method_helper_method__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the OAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OAuthProvider = /** @class */ (function () {
    function OAuthProvider(http, httpNative, helperMethod, globalVal) {
        this.http = http;
        this.httpNative = httpNative;
        this.helperMethod = helperMethod;
        this.globalVal = globalVal;
        this.oAuthTokenAPI = 'com.adins.mss.webservices/oauth/token';
        console.log('Hello OAuthProvider Provider');
    }
    OAuthProvider.prototype.getOAuthToken = function (userLogin) {
        console.log("get Auth Token" + userLogin);
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        };
        var body = 'grant_type=password&username=' + userLogin.username
            + '&password=' + userLogin.password + '&client_id=mobile';
        this.httpNative.setDataSerializer('utf8');
        console.log('URL ' + this.globalVal.ipUrl + this.oAuthTokenAPI);
        console.log('Body ' + body);
        return this.httpNative.post(this.globalVal.ipUrl + this.oAuthTokenAPI, body, headers);
    };
    OAuthProvider.prototype.getHeader = function (OAuthToken) {
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + OAuthToken
        };
        return headers;
    };
    OAuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_4__helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_0__global_variable_global_variable__["a" /* GlobalVariableProvider */]])
    ], OAuthProvider);
    return OAuthProvider;
}());

//# sourceMappingURL=oauthProvider.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackLogReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BackLogReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BackLogReportPage = /** @class */ (function () {
    function BackLogReportPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BackLogReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BackLogReportPage ' + this.navParams.get('mantab'));
    };
    BackLogReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-back-log-report',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\back-log-report\back-log-report.html"*/'<!--\n  Generated template for the BackLogReportPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BackLogReportPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  Nama Project\n  dtm crt\n  jumlah backlogitem\n\n  status\n    done\n    review\n    on Progress\n\n    List Sprint dtmcrt\n\n</ion-content>\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\back-log-report\back-log-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], BackLogReportPage);
    return BackLogReportPage;
}());

//# sourceMappingURL=back-log-report.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(navParams.get('val'));
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-main',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\main\main.html"*/'<!--\n\n  Generated template for the MainPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>main</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPageModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ReportPageModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportPageModal = /** @class */ (function () {
    function ReportPageModal(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ReportPageModal.prototype.ionViewDidLoad = function () {
        this.backLogItemList = this.navParams.get('backLogItemList');
        console.log('ionViewDidLoad ReportPageModalPage ', this.backLogItemList);
    };
    ReportPageModal.prototype.onItemPressed = function () {
    };
    ReportPageModal.prototype.doCloseModal = function () {
        console.log("Pressed");
        this.viewCtrl.dismiss();
    };
    ReportPageModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-report-page-modal',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\report-page-modal\report-page-modal.html"*/'<!--\n  Generated template for the ReportPageModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>BackLog Item</ion-title>\n    <ion-buttons end >\n        <button ion-button icon-only (click)="doCloseModal()">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list class="ionList" [virtualScroll]="backLogItemList">\n\n      <ion-item class="ionItem" *virtualItem="let backLogItem" (click)="onItemPressed({item:backLogItem})">\n        {{ backLogItem.backlog_item }}\n      </ion-item>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\report-page-modal\report-page-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], ReportPageModal);
    return ReportPageModal;
}());

//# sourceMappingURL=report-page-modal.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(390);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_sprint_item_sprint_item__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_bulk_item_detailed_developer_bulk_item_detailed_developer__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_sprint_detailed_sprint_detailed__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_bulk_item_detailed_bulk_item_detailed__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_back_log_report_back_log_report__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_report_page_modal_report_page_modal__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_progressbar__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_progress_bar__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_svg_round_progressbar__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angular_svg_round_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_angular_svg_round_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_main_main__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_loginPage__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_report_reportPage__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_time_sheet_time_sheetPage__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_user_userPage__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_users_usersProvider__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_timesheets_timesheetsProvider__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_report_reportProvider__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_time_sheet_page_modal_time_sheet_page_modal__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_expandable_expandable__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_o_auth_oauthProvider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_storage_storageProvider__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_global_variable_global_variable__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_ms_project_msProjectProvider__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_ms_activity_msActivityProvider__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_error_handler_error_handler__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_sprint_detailed_developer_sprint_detailed_developer__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_perfomance_perfomanceProvider__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_perfomance_perfomancePage__ = __webpack_require__(175);
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
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_loginPage__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_report_reportPage__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_perfomance_perfomancePage__["a" /* PerfomancePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_time_sheet_time_sheetPage__["a" /* TimeSheetPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_user_userPage__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_report_page_modal_report_page_modal__["a" /* ReportPageModal */],
                __WEBPACK_IMPORTED_MODULE_4__pages_back_log_report_back_log_report__["a" /* BackLogReportPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_bulk_item_detailed_bulk_item_detailed__["a" /* BulkItemDetailedPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_bulk_item_detailed_developer_bulk_item_detailed_developer__["a" /* BulkItemDetailedDeveloperPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_sprint_detailed_developer_sprint_detailed_developer__["a" /* SprintDetailedDeveloperPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_time_sheet_page_modal_time_sheet_page_modal__["a" /* TimeSheetPageModal */],
                __WEBPACK_IMPORTED_MODULE_2__pages_sprint_detailed_sprint_detailed__["a" /* SprintDetailedPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_sprint_item_sprint_item__["a" /* SprintItemPage */],
                __WEBPACK_IMPORTED_MODULE_29__components_expandable_expandable__["a" /* ExpandableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16_angular_progress_bar__["a" /* ProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_progressbar__["b" /* NgProgressModule */],
                __WEBPACK_IMPORTED_MODULE_17_angular_svg_round_progressbar__["RoundProgressModule"],
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/back-log-report/back-log-report.module#BackLogReportPageModule', name: 'BackLogReportPage', segment: 'back-log-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bulk-item-detailed-developer/bulk-item-detailed-developer.module#BulkItemDetailedDeveloperPageModule', name: 'BulkItemDetailedDeveloperPage', segment: 'bulk-item-detailed-developer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bulk-item-detailed/bulk-item-detailed.module#BulkItemDetailedPageModule', name: 'BulkItemDetailedPage', segment: 'bulk-item-detailed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/loginPage.module#LoginPageModule', name: 'LoginPage', segment: 'loginPage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perfomance/perfomancePage.module#PerfomancePageModule', name: 'PerfomancePage', segment: 'perfomancePage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-page-modal/report-page-modal.module#ReportPageModalPageModule', name: 'ReportPageModal', segment: 'report-page-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/reportPage.module#ReportPageModule', name: 'ReportPage', segment: 'reportPage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sprint-detailed-developer/sprint-detailed-developer.module#SprintDetailedDeveloperPageModule', name: 'SprintDetailedDeveloperPage', segment: 'sprint-detailed-developer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sprint-detailed/sprint-detailed.module#SprintDetailedPageModule', name: 'SprintDetailedPage', segment: 'sprint-detailed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sprint-item/sprint-item.module#SprintItemPageModule', name: 'SprintItemPage', segment: 'sprint-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sprint-report/sprint-report.module#SprintReportPageModule', name: 'SprintReportPage', segment: 'sprint-report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-sheet-page-modal/time-sheet-page-modal.module#TimeSheetPageModalPageModule', name: 'TimeSheetPageModal', segment: 'time-sheet-page-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-sheet/time-sheetPage.module#TimeSheetPageModule', name: 'TimeSheetPage', segment: 'time-sheetPage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/userPage.module#UserPageModule', name: 'UserPage', segment: 'userPage', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            schemas: [
                __WEBPACK_IMPORTED_MODULE_8__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_login_loginPage__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_report_reportPage__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_perfomance_perfomancePage__["a" /* PerfomancePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_time_sheet_time_sheetPage__["a" /* TimeSheetPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_user_userPage__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_report_page_modal_report_page_modal__["a" /* ReportPageModal */],
                __WEBPACK_IMPORTED_MODULE_4__pages_back_log_report_back_log_report__["a" /* BackLogReportPage */],
                __WEBPACK_IMPORTED_MODULE_3__pages_bulk_item_detailed_bulk_item_detailed__["a" /* BulkItemDetailedPage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_bulk_item_detailed_developer_bulk_item_detailed_developer__["a" /* BulkItemDetailedDeveloperPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_sprint_detailed_developer_sprint_detailed_developer__["a" /* SprintDetailedDeveloperPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_time_sheet_page_modal_time_sheet_page_modal__["a" /* TimeSheetPageModal */],
                __WEBPACK_IMPORTED_MODULE_2__pages_sprint_detailed_sprint_detailed__["a" /* SprintDetailedPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_sprint_item_sprint_item__["a" /* SprintItemPage */],
                __WEBPACK_IMPORTED_MODULE_29__components_expandable_expandable__["a" /* ExpandableComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_25__providers_users_usersProvider__["a" /* UsersProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_timesheets_timesheetsProvider__["a" /* TimesheetsProvider */],
                __WEBPACK_IMPORTED_MODULE_6__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_report_reportProvider__["a" /* ReportProvider */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_30__providers_o_auth_oauthProvider__["a" /* OAuthProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_storage_storageProvider__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_global_variable_global_variable__["a" /* GlobalVariableProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_ms_project_msProjectProvider__["a" /* MsProjectProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_ms_activity_msActivityProvider__["a" /* MsActivityProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_perfomance_perfomanceProvider__["a" /* PerfomanceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVariableProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the GlobalVariableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalVariableProvider = /** @class */ (function () {
    function GlobalVariableProvider() {
        //tirta
        // public ipUrl : string = 'http://172.18.0.93:8080/';
        //local
        this.ipUrl = 'http://172.18.0.218:8080/';
        this.baseUrl = 'com.adins.mss.webservices/services/m/';
        this.userLoginAPI = 'user/login';
        this.userLogoutAPI = 'user/logout';
        this.msProjectAPI = 'timesheet/project';
        this.msActivityAPI = 'timesheet/activity';
        this.timeSheetAPI = 'timesheet/getTSByUser';
        this.timeSheetGoRealAPI = 'timesheet/updateTSReal';
        this.timeSheetAddAPI = 'timesheet/addTSUser';
        this.bulkItemAPI = 'bulkitem/getBulkByUser';
        this.getPerfomanceByUser = 'bulkitem/getPerfomanceByUser';
        this.detailedBulkItemAPI = 'bulkitem/getDetailedBulkItem';
        this.detailedBulkItemDeveloperAPI = 'bulkitem/getDetailedBulkItemDeveloper';
        this.getSprintByBulkItem = 'bulkitem/getSprintByBulkItem';
        this.getDetailSprintBySprint = 'bulkitem/getDetailSprintBySprint';
        this.getDetailSprintBySprintDeveloper = 'bulkitem/getDetailSprintBySprintDeveloper';
        this.getClaimedSprintByUser = 'bulkitem/getClaimedSprintByUser';
        this.getUnclaimedSprint = 'bulkitem/getUnclaimedSprint';
        this.updateSprintProgress = 'bulkitem/updateSprintProgress';
        this.claimSprint = 'bulkitem/claimSprint';
    }
    GlobalVariableProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], GlobalVariableProvider);
    return GlobalVariableProvider;
}());

//# sourceMappingURL=global-variable.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StorageProvider = /** @class */ (function () {
    function StorageProvider(storage) {
        this.storage = storage;
        this.timeSheetKey = 'TimeSheet';
        this.userKey = 'User';
        this.userLoginKey = 'UserLogin';
        this.activity = 'Ms_Activity';
        console.log('Hello StorageProvider Provider');
    }
    StorageProvider.prototype.save = function (key, value) {
        this.storage.set(key, value);
    };
    StorageProvider.prototype.getStorageByKey = function (key) {
        return this.storage.get(key);
    };
    StorageProvider.prototype.clear = function () {
        return this.storage.clear();
    };
    StorageProvider.prototype.getKeys = function () {
        return this.storage.keys();
    };
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

//# sourceMappingURL=storageProvider.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_users_usersProvider__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_loginPage__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_storage_storageProvider__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_o_auth_oauthProvider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, events, storageProvider, userProvider, oAuthProvider, errorHandler, helperMethod) {
        var _this = this;
        this.events = events;
        this.storageProvider = storageProvider;
        this.userProvider = userProvider;
        this.oAuthProvider = oAuthProvider;
        this.errorHandler = errorHandler;
        this.helperMethod = helperMethod;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            storageProvider.getKeys()
                .then(function (response) {
                console.log(response);
            });
            statusBar.styleDefault();
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_loginPage__["a" /* LoginPage */];
            storageProvider.getStorageByKey(storageProvider.userKey)
                .then(function (response) {
                if (response != null) {
                    console.log(response);
                    userProvider.user = response;
                    _this.reAuthenticate();
                }
                else {
                    storageProvider.clear();
                    _this.events.publish('Auth', 0);
                }
            });
            events.subscribe('Auth', function (data) {
                if (data == 1) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else if (data == 0) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_loginPage__["a" /* LoginPage */];
                }
            });
            splashScreen.hide();
        });
    }
    MyApp.prototype.reAuthenticate = function () {
        var _this = this;
        this.storageProvider.getStorageByKey(this.storageProvider.userLoginKey)
            .then(function (response) {
            if (response != null) {
                _this.userProvider.userLogin = response;
                _this.refreshToken();
            }
            else {
            }
        });
    };
    MyApp.prototype.refreshToken = function () {
        var _this = this;
        this.helperMethod.loadingService('Refresh User..');
        this.oAuthProvider.getOAuthToken(this.userProvider.userLogin)
            .then(function (response) {
            _this.helperMethod.loading.dismiss();
            response = JSON.parse(response.data);
            _this.oAuthProvider.userOAuth = response;
            _this.events.publish('Auth', 1);
        }).catch(function (error) {
            _this.helperMethod.loading.dismiss();
            _this.errorHandler.catchErrorHandler(error);
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__providers_storage_storageProvider__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_9__providers_o_auth_oauthProvider__["a" /* OAuthProvider */], __WEBPACK_IMPORTED_MODULE_10__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__["a" /* HelperMethodProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpandableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ExpandableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ExpandableComponent = /** @class */ (function () {
    function ExpandableComponent(renderer) {
        this.renderer = renderer;
        console.log('Hello ExpandableComponent Component');
        this.text = 'Hello World';
    }
    ExpandableComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'expandable',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\components\expandable\expandable.html"*/'<!-- Generated template for the ExpandableComponent component -->\n<!-- <div>\n  {{text}}\n</div> -->\n<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n  <ng-content></ng-content>\n</div>'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\components\expandable\expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SprintItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SprintItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SprintItemPage = /** @class */ (function () {
    function SprintItemPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sprintdetailed = navParams.get('item');
        // this.sprintdetailed.definition_of_done = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';
    }
    SprintItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SprintItemPage');
    };
    SprintItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sprint-item',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\sprint-item\sprint-item.html"*/'<!--\n  Generated template for the SprintItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SprintItemPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="ionContent">\n\n  <ion-item class="ionItemSprintDetail">\n    <h1 style="font-weight: bold">{{sprintdetailed.sprint_id}}</h1>\n    <br/>\n    <tr>\n      <td>\n        <h2>Status</h2>\n      </td>\n      <td>\n        <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n      </td>\n      <td>\n        <h2>&nbsp;&nbsp;&nbsp;{{sprintdetailed.statusSprint}}</h2>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h2>PIC</h2>\n      </td>\n      <td>\n        <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n      </td>\n      <td>\n        <h2>&nbsp;&nbsp;&nbsp;{{sprintdetailed.person_name}}</h2>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h2>Sprint</h2>\n      </td>\n      <td>\n        <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n      </td>\n      <td>\n        <h2>&nbsp;&nbsp;&nbsp;{{sprintdetailed.sprint}}</h2>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h2>Duration</h2>\n      </td>\n      <td>\n        <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n      </td>\n      <td>\n        <h2>&nbsp;&nbsp;&nbsp;{{sprintdetailed.duration}}</h2>\n      </td>\n    </tr>\n    <tr>\n      <td>\n        <h2>Commited</h2>\n      </td>\n      <td>\n        <h2>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</h2>\n      </td>\n      <td>\n        <h2>&nbsp;&nbsp;&nbsp;{{sprintdetailed.commited}}</h2>\n      </td>\n    </tr>\n    <br/>\n    <br/>\n  </ion-item>\n  <ion-item>\n    Definition Of Done\n    <br/>\n  </ion-item>\n  <ion-item class="ionItemDefinitionOfDone" text-wrap>\n    <p>{{sprintdetailed.definition_of_done}}</p>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\sprint-item\sprint-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SprintItemPage);
    return SprintItemPage;
}());

//# sourceMappingURL=sprint-item.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfomanceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_variable_global_variable__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__o_auth_oauthProvider__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_usersProvider__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
  Generated class for the PerfomanceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PerfomanceProvider = /** @class */ (function () {
    function PerfomanceProvider(http, httpNative, globalVal, oauthProvider, userProvider, helperMethod) {
        this.http = http;
        this.httpNative = httpNative;
        this.globalVal = globalVal;
        this.oauthProvider = oauthProvider;
        this.userProvider = userProvider;
        this.helperMethod = helperMethod;
        console.log('Hello PerfomanceProvider Provider');
    }
    PerfomanceProvider.prototype.getBulkItemList = function () {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        this.httpNative.setDataSerializer('json');
        console.log("URL " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getPerfomanceByUser);
        this.httpNative.setRequestTimeout(600);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getPerfomanceByUser, this.userProvider.user, headers);
    };
    PerfomanceProvider.prototype.getDetailedBulkItemDeveloper = function (bulkItem) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        this.httpNative.setDataSerializer('json');
        console.log("URL " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.detailedBulkItemDeveloperAPI);
        this.httpNative.setRequestTimeout(600);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.detailedBulkItemDeveloperAPI, bulkItem, headers);
    };
    PerfomanceProvider.prototype.getSprintDetailBySprint = function (sprint) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        this.httpNative.setDataSerializer('json');
        console.log("URL " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getDetailSprintBySprintDeveloper);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getDetailSprintBySprintDeveloper, sprint, headers);
    };
    PerfomanceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_1__global_variable_global_variable__["a" /* GlobalVariableProvider */],
            __WEBPACK_IMPORTED_MODULE_5__o_auth_oauthProvider__["a" /* OAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_6__users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_0__helper_method_helper_method__["a" /* HelperMethodProvider */]])
    ], PerfomanceProvider);
    return PerfomanceProvider;
}());

//# sourceMappingURL=perfomanceProvider.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_usersProvider__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_method_helper_method__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__global_variable_global_variable__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__o_auth_oauthProvider__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the ReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReportProvider = /** @class */ (function () {
    function ReportProvider(http, httpNative, globalVal, oauthProvider, userProvider, helperMethod) {
        this.http = http;
        this.httpNative = httpNative;
        this.globalVal = globalVal;
        this.oauthProvider = oauthProvider;
        this.userProvider = userProvider;
        this.helperMethod = helperMethod;
    }
    ReportProvider.prototype.getBulkItemList = function () {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        this.httpNative.setDataSerializer('json');
        console.log("URL " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.bulkItemAPI);
        this.httpNative.setRequestTimeout(600);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.bulkItemAPI, this.userProvider.user, headers);
    };
    ReportProvider.prototype.getDetailedBulkItem = function (bulkItem) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        this.httpNative.setDataSerializer('json');
        console.log("URL " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.detailedBulkItemAPI);
        this.httpNative.setRequestTimeout(600);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.detailedBulkItemAPI, bulkItem, headers);
    };
    ReportProvider.prototype.getSprintDetailBySprint = function (sprint) {
        var headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);
        this.httpNative.setDataSerializer('json');
        console.log("URL " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getDetailSprintBySprint);
        this.httpNative.setRequestTimeout(60);
        return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getDetailSprintBySprint, sprint, headers);
    };
    ReportProvider.prototype.getAllBulkByUserLogin = function (user) {
        return this.http.get(this.helperMethod.bulkItemUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError));
    };
    ReportProvider.prototype.getBackLogItemByBulkItem = function (selectedBulkItem) {
        return this.http.get(this.helperMethod.backlogitemUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError));
    };
    ReportProvider.prototype.getDetailedBulkItemByBrowser = function (bulkItem) {
        return this.http.get(this.helperMethod.backlogitemUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["catchError"])(this.handleError));
    };
    //helping method
    ReportProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ReportProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(error.status);
        console.error(error.statusText);
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error);
    };
    ReportProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_5_rxjs__["Observable"].throw(error.json().error || "Server Error.");
    };
    ReportProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_7__global_variable_global_variable__["a" /* GlobalVariableProvider */],
            __WEBPACK_IMPORTED_MODULE_8__o_auth_oauthProvider__["a" /* OAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_0__users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_4__helper_method_helper_method__["a" /* HelperMethodProvider */]])
    ], ReportProvider);
    return ReportProvider;
}());

//# sourceMappingURL=reportProvider.js.map

/***/ })

},[385]);
//# sourceMappingURL=main.js.map