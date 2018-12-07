webpackJsonp([8],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsActivityProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_variable_global_variable__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_method_helper_method__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__o_auth_oauthProvider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_storageProvider__ = __webpack_require__(62);
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
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["A" /* Injectable */])(),
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsProjectProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_variable_global_variable__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_method_helper_method__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__o_auth_oauthProvider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_storageProvider__ = __webpack_require__(62);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
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

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users_usersProvider__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_variable_global_variable__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__o_auth_oauthProvider__ = __webpack_require__(49);
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
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetAddAPI, timeSheet + this.userProvider.userLogin, headers);
    };
    TimesheetsProvider.prototype.filterTimeSheet = function () {
        this.timeSheetList.forEach(function (element) {
            console.log(element);
        });
    };
    TimesheetsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_2__global_variable_global_variable__["a" /* GlobalVariableProvider */],
            __WEBPACK_IMPORTED_MODULE_0__users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_4__o_auth_oauthProvider__["a" /* OAuthProvider */]])
    ], TimesheetsProvider);
    return TimesheetsProvider;
}());

//# sourceMappingURL=timesheetsProvider.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPageModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_ms_activity_msActivityProvider__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_ms_project_msProjectProvider__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_usersProvider__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_helper_method_helper_method__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_o_auth_oauthProvider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_error_handler_error_handler__ = __webpack_require__(88);
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
        // this.doLoginBrowser(userLogin);
        this.doAuthenticate(userLogin);
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
        this.userProvider.validateLoginBrowser(userLogin).timeout(10000).subscribe(function (response) {
            _this.helperMethod.loading.dismiss();
            // if(response.id == 101){
            //   // this.userProvider.user = new User(userLogin.username,userLogin.password);
            //   this.userProvider.user = response;
            //   this.events.publish('Auth',1);
            // }else{
            //   this.helperMethod.presentToast('User Not Found',2000,3);
            // // }
            _this.userProvider.user = response;
            _this.events.publish('Auth', 1);
            console.log(response);
        }, function (error) {
            console.log(error);
            console.error(error.name);
            console.error(error.status);
            console.error(error.statusText);
            _this.helperMethod.loading.dismiss();
            if (error.name == 'TimeoutError') {
                _this.helperMethod.presentToast('Slow Connection', 2000, 2);
            }
            else {
                _this.helperMethod.presentToast('Login Gagal 9999: Jangan Hubungi Team IT', 2000, 3);
            }
        });
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\login\loginPage.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div id="logo">\n\n    <img src="assets/imgs/IonicLogo.png">\n\n  </div>\n\n  <div id="body">\n\n    <div id="userInput">\n\n      <ion-list inset>\n\n\n\n        <form [formGroup]="loginForm">\n\n\n\n          <ion-item>\n\n            <ion-label floating >Username</ion-label>\n\n            <ion-input formControlName="username" type="text" #username value=\'{{usernameDefaultVal}}\'></ion-input>\n\n\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input formControlName="password" type="{{type}}" #password ></ion-input>\n\n            <button *ngIf="!showHide" ion-button clear color="dark" type="button" item-right (click)="showHidePassword()"> <ion-icon name="ios-eye-off-outline"></ion-icon></button>\n\n            <button *ngIf="showHide" ion-button clear color="dark" type="button" item-right (click)="showHidePassword()"> <ion-icon name="ios-eye-outline"></ion-icon></button>\n\n            \n\n          </ion-item>\n\n\n\n        </form>\n\n\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div id="loginButton">\n\n      <button ion-button block\n\n            [disabled]="!loginForm.valid"\n\n            (click)="doLogin()">\n\n          Sign in\n\n      </button>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\login\loginPage.html"*/,
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

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_users_usersProvider__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_report_reportProvider__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__report_page_modal_report_page_modal__ = __webpack_require__(162);
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
    function ReportPage(navCtrl, navParams, userProvider, helperMethod, reportProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.helperMethod = helperMethod;
        this.reportProvider = reportProvider;
        this.modalCtrl = modalCtrl;
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
        var _this = this;
        this.helperMethod.loadingService('Getting Your Bulk Item...');
        this.reportProvider.getAllBulkByUserLogin(this.userProvider.user)
            .subscribe(function (response) {
            _this.bulkItemList = response;
            console.log(_this.bulkItemList);
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
        var _this = this;
        this.helperMethod.loadingService('Getting Your Bulk Item...');
        this.selectedBulkItem = item.item;
        console.log('On Item Pressed ', this.selectedBulkItem);
        this.reportProvider.getBackLogItemByBulkItem(this.selectedBulkItem)
            .subscribe(function (response) {
            var reportModal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__report_page_modal_report_page_modal__["a" /* ReportPageModal */], { backLogItemList: response });
            reportModal.present();
            _this.helperMethod.loading.dismiss();
        }, function (error) {
            console.log(error);
            console.error(error.status);
            console.error(error.statusText);
            _this.helperMethod.loading.dismiss();
            _this.helperMethod.presentToast('Gagal 9999: Jangan Hubungi Team IT', 2000, 3);
        });
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\report\reportPage.html"*/'<!--\n\n  Generated template for the ReportPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Report</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list class="ionList" [virtualScroll]="bulkItemList">\n\n\n\n    <ion-item class="ionItem" *virtualItem="let bulkItem" (click)="onItemPressed({item:bulkItem})">\n\n      {{ bulkItem.bulk_name }}\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\report\reportPage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_report_reportProvider__["a" /* ReportProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=reportPage.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_reportPage__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__time_sheet_time_sheetPage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_userPage__ = __webpack_require__(168);
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
        this.timeSheetRoot = __WEBPACK_IMPORTED_MODULE_4__time_sheet_time_sheetPage__["a" /* TimeSheetPage */];
        this.reportRoot = __WEBPACK_IMPORTED_MODULE_3__report_reportPage__["a" /* ReportPage */];
        this.userRoot = __WEBPACK_IMPORTED_MODULE_5__user_userPage__["a" /* UserPage */];
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('TabsPage IonViewLoad');
    };
    TabsPage.prototype.ionViewWillEnter = function () {
        console.log('will enter');
    };
    TabsPage.prototype.ionViewDidEnter = function () {
        console.log('Did enter');
    };
    TabsPage.prototype.ionViewDidLeave = function () {
        console.log('Did Leave');
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex = "0">\n    <ion-tab [root]="timeSheetRoot" tabTitle="Time sheet" tabIcon="list-box"></ion-tab>\n    <ion-tab [root]="reportRoot" tabTitle="Report" tabIcon="stats"></ion-tab>\n    <ion-tab [root]="userRoot" tabTitle="User" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeSheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_storage_storageProvider__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__time_sheet_page_modal_time_sheet_page_modal__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_users_usersProvider__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_helper_method_helper_method__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_timesheets_timesheetsProvider__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__ = __webpack_require__(88);
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
    function TimeSheetPage(navCtrl, navParams, timeSheetProvider, helperMethod, userProvider, errorHandler, events, modalCtrl, alertCtrl, storageProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timeSheetProvider = timeSheetProvider;
        this.helperMethod = helperMethod;
        this.userProvider = userProvider;
        this.errorHandler = errorHandler;
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.storageProvider = storageProvider;
        this.groupedTimeSheetDataList = [];
    }
    TimeSheetPage.prototype.ionViewDidLoad = function () {
        this.getAllTimeSheet();
        console.log('ionViewDidLoad TimeSheetPage');
    };
    TimeSheetPage.prototype.getAllTimeSheet = function () {
        var _this = this;
        this.helperMethod.loadingService("Getting TimeSheet Data..");
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
                console.log(responseData.timeSheetByUser);
                _this.timeSheetProvider.filterTimeSheet();
            }
            else {
                _this.errorHandler.catchResponseErrorHandler(responseData);
            }
        }).catch(function (error) {
            _this.helperMethod.loading.dismiss();
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
        this.storageProvider.getStorageByKey('TimeSheet')
            .then(function (response) {
            console.log(response);
        });
    };
    TimeSheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-time-sheet',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\time-sheet\time-sheetPage.html"*/'<!--\n\n  Generated template for the TimeSheetPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>TimeSheet</ion-title>\n\n    <ion-buttons end >\n\n        <button ion-button icon-only (click)="doAdd()">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <ion-list [virtualScroll]="timeSheetProvider.timeSheetList" [approxItemHeight]=" \'500px\' ">\n\n    \n\n    <ion-item-sliding *virtualItem="let data" > \n\n      \n\n        <ion-item class="ionItem" (click)="onItemPressed({id : data.time_sheet_id})" text-wrap \n\n                  [ngStyle]="(data.is_real == \'1\') ? \n\n                            { \n\n                              \'background-color\':\'#72a8ff\' \n\n                            } : \n\n                            { \n\n                              \'background-color\':\'#c8cace\' \n\n                            }">\n\n          <table style="width: 100%">\n\n            <tr>\n\n              <td>{{data.dtm_crt}}</td>\n\n              <td></td>\n\n              <td>{{data.project_code}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Activites</td>\n\n              <td> : </td>\n\n              <td>{{data.activities_type}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Detail</td>\n\n              <td> : </td>\n\n              <td>{{data.today_act}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Jira Id</td>\n\n              <td> : </td>\n\n              <td>{{data.jira_id}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Sprint Id</td>\n\n              <td> : </td>\n\n              <td>{{data.sprint_id}}</td>\n\n            </tr>\n\n            <tr>\n\n              <td>Duration</td>\n\n              <td> : </td>\n\n              <td>{{data.duration_act}} Hours</td>\n\n            </tr>\n\n          </table>\n\n        </ion-item>\n\n        <ion-item-options>\n\n          <button ion-button color="light" (click)="onItemUpdatePressed({data: data})">\n\n              <ion-icon name="paper"></ion-icon> Update\n\n          </button>\n\n        </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\time-sheet\time-sheetPage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_timesheets_timesheetsProvider__["a" /* TimesheetsProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_storage_storageProvider__["a" /* StorageProvider */]])
    ], TimeSheetPage);
    return TimeSheetPage;
}());

//# sourceMappingURL=time-sheetPage.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeSheetPageModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_helper_method_helper_method__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_timesheets_timesheetsProvider__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ms_activity_msActivityProvider__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_ms_project_msProjectProvider__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_error_handler_error_handler__ = __webpack_require__(88);
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
        console.log("Pressed");
        this.viewCtrl.dismiss();
    };
    TimeSheetPageModal.prototype.addTimeSheetItem = function () {
        var _this = this;
        var timeSheetData = {
            project_code: this.projectDropDown,
            activities_type: this.activityDropDown,
            today_act: this.todayAct,
            jira_id: this.jiraId,
            duration_act: this.duration,
            username: this.userProvider.userLogin.username,
            password: this.userProvider.userLogin.password
        };
        this.helperMethod.loadingService("Add New One..");
        this.timeSheetProvider.updateGoRealTimeSheet(timeSheetData)
            .then(function (response) {
            _this.helperMethod.loading.dismiss();
            console.log(response);
            var responseData = JSON.parse(response.data);
            var responseStatus = response.status;
            console.log(responseData);
            console.log(responseData.status);
            if (responseData.status.code == "0") {
                // this.timeSheetProvider.timeSheetList = responseData.timeSheetByUser;
                // console.log(responseData.timeSheetByUser);
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
                // this.timeSheetProvider.timeSheetList = responseData.timeSheetByUser;
                // console.log(responseData.timeSheetByUser);
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
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-time-sheet-page-modal',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\time-sheet-page-modal\time-sheet-page-modal.html"*/'<!--\n\n  Generated template for the TimeSheetPageModalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Time Sheet Detail</ion-title>\n\n    <ion-buttons end >\n\n      <button ion-button icon-only (click)="doCloseModal()">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n<!-- Add -->\n\n\n\n  <div *ngIf=" addOrUpdate == \'add\' ">\n\n    \n\n    <ion-item>\n\n      <ion-label color="primary" floating>Project</ion-label>\n\n      <ion-select [(ngModel)]="projectDropDown">\n\n          <ion-option *ngFor=\'let data of msProjectProvider.msProjectList\'>{{data.project_code}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Activities</ion-label>\n\n      <ion-select [(ngModel)]="activityDropDown">\n\n        <ion-option *ngFor=\'let data of msActivityProvider.msActivityList\'>{{data.activity_type}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Today Activites</ion-label>\n\n      <ion-textarea [(ngModel)]="todayAct"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Jira Id</ion-label>\n\n      <ion-input [(ngModel)]="jiraId"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Sprint Id</ion-label>\n\n      <ion-input [(ngModel)]="sprintId"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Duration</ion-label>\n\n      <ion-input [(ngModel)]="duration"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button color="light" (click)="addTimeSheetItem()">\n\n        <ion-icon name="add-circle"></ion-icon> Add\n\n      </button>\n\n    </ion-buttons>\n\n  </div>\n\n\n\n<!-- Update -->\n\n\n\n  <div *ngIf=" addOrUpdate == \'update\' ">\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Project</ion-label>\n\n      <ion-input [(ngModel)]="projectDropDown" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Activities</ion-label>\n\n      <ion-input [(ngModel)]="activityDropDown" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Today Activites</ion-label>\n\n      <ion-textarea [(ngModel)]="todayAct" [disabled]="true"></ion-textarea>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Jira Id</ion-label>\n\n      <ion-input [(ngModel)]="jiraId" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Sprint Id</ion-label>\n\n      <ion-input [(ngModel)]="sprintId" [disabled]="true"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label color="primary" floating>Duration</ion-label>\n\n      <ion-input [(ngModel)]="duration" type="number"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button color="primary" (click)="goReal()" >\n\n        Make it Real!\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\time-sheet-page-modal\time-sheet-page-modal.html"*/,
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

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_usersProvider__ = __webpack_require__(40);
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
    function UserPage(navCtrl, navParams, userProvider, helperMethod, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.helperMethod = helperMethod;
        this.events = events;
        this.alertCtrl = alertCtrl;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.ionViewWillEnter = function () {
        console.log('will enter');
    };
    UserPage.prototype.ionViewDidEnter = function () {
        console.log('Did enter');
    };
    // press(){
    //   this.helperMethod.loadingService('Getting All User..');
    //   this.userProvider.getUsers().subscribe(
    //     allUser => {
    //       this.allUsers = allUser;
    //       this.helperMethod.loading.dismiss();
    //     }
    //   );
    //   console.log(this.userData);
    // }
    UserPage.prototype.onItemPressed = function (userId) {
        var _this = this;
        console.log('On Item Pressed', userId);
        this.helperMethod.loadingService('Harap tunggu');
        setTimeout(function () {
            _this.helperMethod.loading.dismiss();
            _this.helperMethod.loadingService('Coba Lagi..');
            setTimeout(function () {
                _this.helperMethod.loading.dismiss();
            }, 1000);
        }, 3000);
    };
    // onItemCOEG(){
    //   let postData = {
    //     username : 'coeg',
    //     password : 'coeg2'
    //   };
    //   let data : any;
    //   console.log('here',JSON.stringify(this.userProvider.user));
    //   this.userProvider.doSave(postData).subscribe(
    //     response => {
    //       data = response;
    //       console.log(data);
    //     }
    //   )
    // }
    UserPage.prototype.doLogout = function () {
        this.alertConfirmLogout();
        // this.events.publish('Auth',0);
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
                        _this.events.publish('Auth', 0);
                    }
                }
            ]
        });
        alert.present();
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\user\userPage.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>User</ion-title>\n\n    <ion-buttons end >\n\n      <button ion-button icon-only (click)="doLogout()">\n\n        <ion-icon name="exit"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="north">\n\n    <img class="profile-photo" src="assets/imgs/user/profile_picture_example.jpg"> \n\n  </div>\n\n   \n\n  \n\n  <div>\n\n    <div class="content">\n\n      <ion-item>\n\n        <ion-label>Name : {{userProvider.user.person_name}}</ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Job : {{userProvider.user.job_name}}</ion-label>\n\n      </ion-item>\n\n    </div>\n\n  </div>\n\n \n\n<!-- \n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let user of allUsers">\n\n      <ion-item (click)="onItemPressed({id: user.name})">\n\n        <ion-avatar item-left>\n\n          <img src="assets/imgs/user/profile_picture_example.jpg">\n\n        </ion-avatar>\n\n        <h2>{{user.name}}</h2>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button ion-button color="danger" (click)="onItemCOEG()">\n\n          <ion-icon name="trash"></ion-icon> Delete\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\user\userPage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=userPage.js.map

/***/ }),

/***/ 179:
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
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperMethodProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */]])
    ], HelperMethodProvider);
    return HelperMethodProvider;
}());

//# sourceMappingURL=helper-method.js.map

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/loginPage.module": [
		694,
		7
	],
	"../pages/main/main.module": [
		695,
		6
	],
	"../pages/report-page-modal/report-page-modal.module": [
		696,
		5
	],
	"../pages/report/reportPage.module": [
		697,
		4
	],
	"../pages/tabs/tabs.module": [
		698,
		3
	],
	"../pages/time-sheet-page-modal/time-sheet-page-modal.module": [
		699,
		2
	],
	"../pages/time-sheet/time-sheetPage.module": [
		700,
		1
	],
	"../pages/user/userPage.module": [
		701,
		0
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
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helper_method_helper_method__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
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
    function ReportProvider(http, helperMethod) {
        this.http = http;
        this.helperMethod = helperMethod;
        console.log('Hello ReportProvider Provider');
    }
    ReportProvider.prototype.getAllBulkByUserLogin = function (user) {
        return this.http.get(this.helperMethod.bulkItemUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    ReportProvider.prototype.getBackLogItemByBulkItem = function (selectedBulkItem) {
        return this.http.get(this.helperMethod.backlogitemUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
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
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error);
    };
    ReportProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].throw(error.json().error || "Server Error.");
    };
    ReportProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__helper_method_helper_method__["a" /* HelperMethodProvider */]])
    ], ReportProvider);
    return ReportProvider;
}());

//# sourceMappingURL=reportProvider.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\pages\main\main.html"*/'<!--\n\n  Generated template for the MainPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>main</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(370);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_report_page_modal_report_page_modal__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_helper_method_helper_method__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_main_main__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_loginPage__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_report_reportPage__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_time_sheet_time_sheetPage__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_user_userPage__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_users_usersProvider__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_timesheets_timesheetsProvider__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_report_reportProvider__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_time_sheet_page_modal_time_sheet_page_modal__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_expandable_expandable__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_o_auth_oauthProvider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_storage_storageProvider__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_global_variable_global_variable__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_ms_project_msProjectProvider__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_ms_activity_msActivityProvider__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_error_handler_error_handler__ = __webpack_require__(88);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_loginPage__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_report_reportPage__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_time_sheet_time_sheetPage__["a" /* TimeSheetPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_user_userPage__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_report_page_modal_report_page_modal__["a" /* ReportPageModal */],
                __WEBPACK_IMPORTED_MODULE_20__pages_time_sheet_page_modal_time_sheet_page_modal__["a" /* TimeSheetPageModal */],
                __WEBPACK_IMPORTED_MODULE_21__components_expandable_expandable__["a" /* ExpandableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/loginPage.module#LoginPageModule', name: 'LoginPage', segment: 'loginPage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report-page-modal/report-page-modal.module#ReportPageModalPageModule', name: 'ReportPageModal', segment: 'report-page-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/reportPage.module#ReportPageModule', name: 'ReportPage', segment: 'reportPage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-sheet-page-modal/time-sheet-page-modal.module#TimeSheetPageModalPageModule', name: 'TimeSheetPageModal', segment: 'time-sheet-page-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-sheet/time-sheetPage.module#TimeSheetPageModule', name: 'TimeSheetPage', segment: 'time-sheetPage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/userPage.module#UserPageModule', name: 'UserPage', segment: 'userPage', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_loginPage__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_report_reportPage__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_time_sheet_time_sheetPage__["a" /* TimeSheetPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_user_userPage__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_report_page_modal_report_page_modal__["a" /* ReportPageModal */],
                __WEBPACK_IMPORTED_MODULE_20__pages_time_sheet_page_modal_time_sheet_page_modal__["a" /* TimeSheetPageModal */],
                __WEBPACK_IMPORTED_MODULE_21__components_expandable_expandable__["a" /* ExpandableComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_users_usersProvider__["a" /* UsersProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_timesheets_timesheetsProvider__["a" /* TimesheetsProvider */],
                __WEBPACK_IMPORTED_MODULE_1__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_report_reportProvider__["a" /* ReportProvider */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_22__providers_o_auth_oauthProvider__["a" /* OAuthProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_storage_storageProvider__["a" /* StorageProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_global_variable_global_variable__["a" /* GlobalVariableProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_ms_project_msProjectProvider__["a" /* MsProjectProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_ms_activity_msActivityProvider__["a" /* MsActivityProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_error_handler_error_handler__["a" /* ErrorHandlerProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__storage_storageProvider__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_method_helper_method__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__o_auth_oauthProvider__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_variable_global_variable__ = __webpack_require__(47);
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
    // userOAuth : OAuthToken;
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
    UsersProvider.prototype.saveUserDataToStorage = function () {
        this.storageProvider.save('User', this.user);
    };
    UsersProvider.prototype.loadUserDataFromStorage = function () {
        var _this = this;
        this.storageProvider.getStorageByKey('User')
            .then(function (response) {
            _this.user = response;
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_7__o_auth_oauthProvider__["a" /* OAuthProvider */],
            __WEBPACK_IMPORTED_MODULE_8__global_variable_global_variable__["a" /* GlobalVariableProvider */],
            __WEBPACK_IMPORTED_MODULE_0__storage_storageProvider__["a" /* StorageProvider */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=usersProvider.js.map

/***/ }),

/***/ 47:
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
        this.ipUrl = 'http://172.18.1.17:8080/';
        //local
        // public ipUrl : string = 'http://172.18.0.218:8080/';
        this.baseUrl = 'com.adins.mss.webservices/services/m/';
        this.userLoginAPI = 'user/login';
        this.msProjectAPI = 'timesheet/project';
        this.msActivityAPI = 'timesheet/activity';
        this.timeSheetAPI = 'timesheet/getTSByUser';
        this.timeSheetGoRealAPI = 'timesheet/updateTSReal';
        this.timeSheetAddAPI = 'timesheet/addTSUser';
    }
    GlobalVariableProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalVariableProvider);
    return GlobalVariableProvider;
}());

//# sourceMappingURL=global-variable.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OAuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_variable_global_variable__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_method_helper_method__ = __webpack_require__(21);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_4__helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_0__global_variable_global_variable__["a" /* GlobalVariableProvider */]])
    ], OAuthProvider);
    return OAuthProvider;
}());

//# sourceMappingURL=oauthProvider.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(229);
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
    StorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], StorageProvider);
    return StorageProvider;
}());

// this.ready().then(
//   (response:any) =>{
//     this.storage.set(key,value).then(
//       (response:any) =>{
//         return response;
//       }
//     );
//   }
// ).catch(
//   (error:any) =>{
//     this.helperMethod.presentToast('Database Not Ready',3000,1);
//     return 'ERROR';
//   }
// ); 
//# sourceMappingURL=storageProvider.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_loginPage__ = __webpack_require__(163);
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
    function MyApp(platform, statusBar, splashScreen, events) {
        var _this = this;
        this.events = events;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_loginPage__["a" /* LoginPage */];
            events.subscribe('Auth', function (data) {
                if (data == 1) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__["a" /* TabsPage */];
                }
                else if (data == 0) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_loginPage__["a" /* LoginPage */];
                }
            });
            splashScreen.hide();
        });
        console.log('mantab');
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 693:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('expandWrapper', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('expanded'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expanded", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('expandHeight'),
        __metadata("design:type", Object)
    ], ExpandableComponent.prototype, "expandHeight", void 0);
    ExpandableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'expandable',template:/*ion-inline-start:"D:\_SKRIPSI\ScrumApp\src\components\expandable\expandable.html"*/'<!-- Generated template for the ExpandableComponent component -->\n<!-- <div>\n  {{text}}\n</div> -->\n<div #expandWrapper class=\'expand-wrapper\' [class.collapsed]="!expanded">\n  <ng-content></ng-content>\n</div>'/*ion-inline-end:"D:\_SKRIPSI\ScrumApp\src\components\expandable\expandable.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */]])
    ], ExpandableComponent);
    return ExpandableComponent;
}());

//# sourceMappingURL=expandable.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_method_helper_method__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(39);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__helper_method_helper_method__["a" /* HelperMethodProvider */]])
    ], ErrorHandlerProvider);
    return ErrorHandlerProvider;
}());

//# sourceMappingURL=error-handler.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map