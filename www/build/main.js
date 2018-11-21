webpackJsonp([6],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_helper_method_helper_method__ = __webpack_require__(40);
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
    function LoginPage(navCtrl, navParames, userProvider, toastCtrl, formBuilder, helperMethod, events) {
        this.navCtrl = navCtrl;
        this.navParames = navParames;
        this.userProvider = userProvider;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.helperMethod = helperMethod;
        this.events = events;
        this.type = 'password';
        this.showHide = false;
        this.loginForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3)])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage ');
    };
    LoginPage.prototype.ionViewWillEnter = function () {
        console.log('will enter');
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        console.log('Did enter');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.helperMethod.loadingService("Collecting User Info..");
        var userLogin = {
            username: this.username.value,
            password: this.password.value
        };
        this.userProvider.validateLogin(userLogin).timeout(5000).subscribe(function (response) {
            _this.helperMethod.loading.dismiss();
            console.log(response);
            // if(response.id == 101){
            //   this.userProvider.user = new User(userLogin.username,userLogin.password);
            //   this.events.publish('Auth',1);
            // }else{
            //   this.helperMethod.presentToast('User Not Found',2000,3);
            // }
            _this.userProvider.user = response;
            _this.events.publish('Auth', 1);
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
    LoginPage.prototype.getOneUser = function () {
        // let company = {
        //   bs : String,
        //   catchPhrase : String,
        //   name : String
        // }
        this.userProvider.getUsers().subscribe(function (response) {
            console.log(response);
        });
    };
    LoginPage.prototype.getCustomJson = function () {
        this.userProvider.testerMethod().subscribe(function (response) {
            console.log(response);
        });
    };
    //di jsonplaceholder ga bisa
    LoginPage.prototype.doLoginFormData = function () {
        var _this = this;
        var userLogin = new FormData();
        userLogin.append('username', 'dasdas');
        userLogin.append('password', 'asdasdad');
        this.userProvider.validateLogin(userLogin).subscribe(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error),
                console.error(error.status),
                console.error(error.statusText),
                _this.helperMethod.loading.dismiss();
        });
    };
    LoginPage.prototype.showHidePassword = function () {
        this.showHide = !this.showHide;
        if (this.showHide) {
            this.type = 'text';
            console.log;
        }
        else {
            this.type = 'password';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "username", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"G:\Ionic Project\ScrumAppSkripsi\src\pages\login\loginPage.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div id="logo">\n\n    <img src="assets/imgs/IonicLogo.png">\n\n  </div>\n\n  <div id="body">\n\n    <div id="userInput">\n\n      <ion-list inset>\n\n\n\n        <form [formGroup]="loginForm">\n\n\n\n          <ion-item>\n\n            <ion-label floating >Username</ion-label>\n\n            <ion-input formControlName="username" type="text" #username value=\'{{usernameDefaultVal}}\'></ion-input>\n\n\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input formControlName="password" type="{{type}}" #password ></ion-input>\n\n            <button *ngIf="!showHide" ion-button clear color="dark" type="button" item-right (click)="showHidePassword()"> <ion-icon name="ios-eye-off-outline"></ion-icon></button>\n\n            <button *ngIf="showHide" ion-button clear color="dark" type="button" item-right (click)="showHidePassword()"> <ion-icon name="ios-eye-outline"></ion-icon></button>\n\n            \n\n          </ion-item>\n\n\n\n        </form>\n\n\n\n      </ion-list>\n\n    </div>\n\n\n\n    <div id="loginButton">\n\n      <button ion-button block\n\n            [disabled]="!loginForm.valid"\n\n            (click)="doLogin()">\n\n          Sign in\n\n      </button>\n\n    </div>\n\n\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Ionic Project\ScrumAppSkripsi\src\pages\login\loginPage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=loginPage.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_users_usersProvider__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
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
    function ReportPage(navCtrl, navParams, userProvider, helperMethod, app, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.helperMethod = helperMethod;
        this.app = app;
        this.events = events;
    }
    ReportPage.prototype.ionViewDidLoad = function () {
        this.getCustomJson();
        console.log('ionViewDidLoad ReportPage ');
    };
    ReportPage.prototype.ionViewWillEnter = function () {
        console.log('will enter');
    };
    ReportPage.prototype.ionViewDidEnter = function () {
        console.log('Did enter');
    };
    ReportPage.prototype.getCustomJson = function () {
        var _this = this;
        this.userProvider.testerMethod().subscribe(function (response) {
            console.log(response);
            _this.items = response.list_of_project;
            console.log(_this.items);
        });
    };
    ReportPage.prototype.onItemPressed = function (userId) {
        console.log('On Item Pressed', userId);
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"G:\Ionic Project\ScrumAppSkripsi\src\pages\report\reportPage.html"*/'<!--\n\n  Generated template for the ReportPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Report</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  REPORT COEKERS\n\n  <ion-list [virtualScroll]="items">\n\n\n\n    <ion-item *virtualItem="let item" (click)="onItemPressed({id: item})">\n\n      {{ item }}\n\n    </ion-item>\n\n  \n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Ionic Project\ScrumAppSkripsi\src\pages\report\reportPage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__providers_users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__["a" /* HelperMethodProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=reportPage.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_reportPage__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__time_sheet_time_sheetPage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_userPage__ = __webpack_require__(157);
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
            selector: 'page-tabs',template:/*ion-inline-start:"G:\Ionic Project\ScrumAppSkripsi\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex = "0">\n\n    <ion-tab [root]="timeSheetRoot" tabTitle="Time sheet" tabIcon="list-box"></ion-tab>\n\n    <ion-tab [root]="reportRoot" tabTitle="Report" tabIcon="stats"></ion-tab>\n\n    <ion-tab [root]="userRoot" tabTitle="User" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"G:\Ionic Project\ScrumAppSkripsi\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__["a" /* UsersProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeSheetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_helper_method_helper_method__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_timesheets_timesheetsProvider__ = __webpack_require__(308);
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
    function TimeSheetPage(navCtrl, navParams, timeSheetProvider, helperMethod, userProvider, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timeSheetProvider = timeSheetProvider;
        this.helperMethod = helperMethod;
        this.userProvider = userProvider;
        this.events = events;
    }
    TimeSheetPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.helperMethod.loadingService('Getting Your Data Please Wait...');
        var userLoggedIn = {
            username: this.userProvider.user.person_name,
            password: this.userProvider.user.job_name
        };
        this.timeSheetProvider.getAllTimeSheetsByUserLoggedIn(userLoggedIn)
            .subscribe(function (response) {
            _this.helperMethod.loading.dismiss();
            _this.timeSheetDataList = response;
            console.log(response);
            _this.timeSheetHeaderFn(_this.timeSheetDataList);
        }, function (error) {
            console.log(error);
            console.error(error.status);
            console.error(error.statusText);
            _this.helperMethod.loading.dismiss();
            _this.helperMethod.presentToast('Gagal 9999: Jangan Hubungi Team IT', 2000, 3);
        });
        console.log('ionViewDidLoad TimeSheetPage');
    };
    TimeSheetPage.prototype.timeSheetHeaderFn = function (dataList) {
        var sortedData = dataList.sort();
        console.log(sortedData);
        return 1;
        // if (recordIndex % 2 === 0) {
        //   return recordIndex;
        // }
        // return null;
    };
    TimeSheetPage.prototype.ionViewWillEnter = function () {
        console.log('will enter');
    };
    TimeSheetPage.prototype.ionViewDidEnter = function () {
        console.log('Did enter');
    };
    TimeSheetPage.prototype.onItemPressed = function (itemId) {
        console.log(itemId);
    };
    TimeSheetPage.prototype.onItemSlidePressed = function () {
        console.log('On Item Slide Pressed');
    };
    TimeSheetPage.prototype.doAdd = function () {
        console.log("Add Button Pressed");
    };
    TimeSheetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-time-sheet',template:/*ion-inline-start:"G:\Ionic Project\ScrumAppSkripsi\src\pages\time-sheet\time-sheetPage.html"*/'<!--\n\n  Generated template for the TimeSheetPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>TimeSheet</ion-title>\n\n    <ion-buttons end >\n\n        <button ion-button icon-only (click)="doAdd()">\n\n          <ion-icon name="add"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <!-- <ion-list [virtualScroll]="timeSheetDataList" [headerFn]="timeSheetHeaderFn">\n\n\n\n    <ion-item-divider *virtualHeader="let header" light>\n\n      <h2>Header : {{ header }}</h2>\n\n    </ion-item-divider> -->\n\n\n\n    <ion-list [virtualScroll]="timeSheetDataList">\n\n    \n\n    <!-- <ion-item-sliding *ngFor="let data of timeSheetDataList"> -->\n\n    <ion-item-sliding *virtualItem="let data"> \n\n        \n\n        <ion-item  (click)="onItemPressed({id : data.time_sheet_id})" text-wrap> \n\n          <h2>{{data.time_sheet_id}} {{data.today_act}}</h2>\n\n        </ion-item>\n\n        <ion-item-options>\n\n          <button ion-button color="danger" (click)="onItemSlidePressed()">\n\n            <ion-icon name="trash"></ion-icon> Delete\n\n          </button>\n\n          <button ion-button color="light" (click)="onItemSlidePressed()">\n\n              <ion-icon name="paper"></ion-icon> Paper\n\n          </button>\n\n        </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n\n\n  </ion-list>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"G:\Ionic Project\ScrumAppSkripsi\src\pages\time-sheet\time-sheetPage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_timesheets_timesheetsProvider__["a" /* TimesheetsProvider */], __WEBPACK_IMPORTED_MODULE_1__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]])
    ], TimeSheetPage);
    return TimeSheetPage;
}());

//# sourceMappingURL=time-sheetPage.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_users_usersProvider__ = __webpack_require__(45);
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
    function UserPage(navCtrl, navParams, userProvider, helperMethod, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.helperMethod = helperMethod;
        this.events = events;
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
    UserPage.prototype.press = function () {
        var _this = this;
        this.helperMethod.loadingService('Getting All User..');
        this.userProvider.getUsers().subscribe(function (allUser) {
            _this.allUsers = allUser;
            _this.helperMethod.loading.dismiss();
        });
        console.log(this.userData);
    };
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
    UserPage.prototype.onItemCOEG = function () {
        var postData = {
            username: 'coeg',
            password: 'coeg2'
        };
        var data;
        console.log('here', JSON.stringify(this.userProvider.user));
        this.userProvider.doSave(postData).subscribe(function (response) {
            data = response;
            console.log(data);
        });
    };
    UserPage.prototype.doLogout = function () {
        this.events.publish('Auth', 0);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"G:\Ionic Project\ScrumAppSkripsi\src\pages\user\userPage.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>User</ion-title>\n\n    <ion-buttons end >\n\n      <button ion-button icon-only (click)="doLogout()">\n\n        <ion-icon name="exit"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <div class="north">\n\n    <img class="profile-photo" src="assets/imgs/user/profile_picture_example.jpg"> \n\n  </div>\n\n   \n\n  \n\n  <div>\n\n    <div class="content">\n\n      <ion-item>\n\n        <ion-label>{{userProvider.user.person_name}}</ion-label>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{userProvider.user.job_name}}</ion-label>\n\n      </ion-item>\n\n    </div>\n\n    <div padding>\n\n      <button ion-button color="primary" block (click)="press()">Tekan Aku Mas</button>\n\n    </div>\n\n  </div>\n\n \n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let user of allUsers">\n\n      <ion-item (click)="onItemPressed({id: user.name})">\n\n        <ion-avatar item-left>\n\n          <img src="assets/imgs/user/profile_picture_example.jpg">\n\n        </ion-avatar>\n\n        <h2>{{user.name}}</h2>\n\n      </ion-item>\n\n      <ion-item-options>\n\n        <button ion-button color="danger" (click)="onItemCOEG()">\n\n          <ion-icon name="trash"></ion-icon> Delete\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\Ionic Project\ScrumAppSkripsi\src\pages\user\userPage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_users_usersProvider__["a" /* UsersProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__["a" /* HelperMethodProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=userPage.js.map

/***/ }),

/***/ 168:
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
webpackEmptyAsyncContext.id = 168;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/loginPage.module": [
		680,
		5
	],
	"../pages/main/main.module": [
		681,
		4
	],
	"../pages/report/reportPage.module": [
		682,
		3
	],
	"../pages/tabs/tabs.module": [
		683,
		2
	],
	"../pages/time-sheet/time-sheetPage.module": [
		684,
		1
	],
	"../pages/user/userPage.module": [
		685,
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
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimesheetsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_method_helper_method__ = __webpack_require__(40);
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
    function TimesheetsProvider(http, helperMethod) {
        this.http = http;
        this.helperMethod = helperMethod;
        this.baseUrl = "https://jsonplaceholder.typicode.com/posts";
        console.log('Hello TimesheetsProvider Provider');
    }
    TimesheetsProvider.prototype.getAllTimeSheetsByUserLoggedIn = function (user) {
        // return this.http.post(this.baseUrl,user)
        //         .pipe(map(this.extractData),
        //         catchError(this.handleError)
        // );
        //testing purpose
        return this.http.get(this.helperMethod.timeSheetUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    //helping method
    TimesheetsProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    TimesheetsProvider.prototype.handleError = function (error) {
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
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(error);
    };
    TimesheetsProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(error.json().error || "Server Error.");
    };
    TimesheetsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__helper_method_helper_method__["a" /* HelperMethodProvider */]])
    ], TimesheetsProvider);
    return TimesheetsProvider;
}());

//# sourceMappingURL=timesheetsProvider.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
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
            selector: 'page-main',template:/*ion-inline-start:"G:\Ionic Project\ScrumAppSkripsi\src\pages\main\main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>main</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"G:\Ionic Project\ScrumAppSkripsi\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(358);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_main_main__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_loginPage__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_report_reportPage__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_time_sheet_time_sheetPage__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_user_userPage__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_users_usersProvider__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_timesheets_timesheetsProvider__ = __webpack_require__(308);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_loginPage__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_report_reportPage__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_time_sheet_time_sheetPage__["a" /* TimeSheetPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_userPage__["a" /* UserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/loginPage.module#LoginPageModule', name: 'LoginPage', segment: 'loginPage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/reportPage.module#ReportPageModule', name: 'ReportPage', segment: 'reportPage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/time-sheet/time-sheetPage.module#TimeSheetPageModule', name: 'TimeSheetPage', segment: 'time-sheetPage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/userPage.module#UserPageModule', name: 'UserPage', segment: 'userPage', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_loginPage__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_report_reportPage__["a" /* ReportPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_time_sheet_time_sheetPage__["a" /* TimeSheetPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_user_userPage__["a" /* UserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_users_usersProvider__["a" /* UsersProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_timesheets_timesheetsProvider__["a" /* TimesheetsProvider */],
                __WEBPACK_IMPORTED_MODULE_0__providers_helper_method_helper_method__["a" /* HelperMethodProvider */]
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelperMethodProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */]])
    ], HelperMethodProvider);
    return HelperMethodProvider;
}());

//# sourceMappingURL=helper-method.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_method_helper_method__ = __webpack_require__(40);
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
    function UsersProvider(http, helperMethod) {
        this.http = http;
        this.helperMethod = helperMethod;
        this.baseUrl = "https://jsonplaceholder.typicode.com/users";
        this.postUrl = "https://jsonplaceholder.typicode.com/posts/";
        console.log('Hello UsersProvider Provider');
    }
    UsersProvider.prototype.testerMethod = function () {
        return this.http.get(this.helperMethod.personUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    UsersProvider.prototype.validateLogin = function (userLogin) {
        console.log(userLogin);
        // return this.http.post(this.postUrl, userLogin)
        //       .pipe(map(this.extractData),
        //       catchError(this.handleError)
        //   );
        return this.http.get(this.helperMethod.personUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    UsersProvider.prototype.getUsers = function () {
        return this.http.get(this.baseUrl)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    UsersProvider.prototype.getOneUserById = function (id) {
        return this.http.get(this.baseUrl + '/' + id)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    UsersProvider.prototype.doSave = function (user) {
        console.log(user);
        return this.http.post(this.postUrl, user)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
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
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error);
    };
    UsersProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error.json().error || "Server Error.");
    };
    UsersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__helper_method_helper_method__["a" /* HelperMethodProvider */]])
    ], UsersProvider);
    return UsersProvider;
}());

//# sourceMappingURL=usersProvider.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_tabs_tabs__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_loginPage__ = __webpack_require__(153);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\Ionic Project\ScrumAppSkripsi\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"G:\Ionic Project\ScrumAppSkripsi\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[353]);
//# sourceMappingURL=main.js.map