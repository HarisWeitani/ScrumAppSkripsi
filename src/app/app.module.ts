import { SprintItemPage } from './../pages/sprint-item/sprint-item';
import { BulkItemDetailedDeveloperPage } from './../pages/bulk-item-detailed-developer/bulk-item-detailed-developer';
import { SprintDetailedPage } from './../pages/sprint-detailed/sprint-detailed';
import { BulkItemDetailedPage } from './../pages/bulk-item-detailed/bulk-item-detailed';
import { BackLogReportPage } from './../pages/back-log-report/back-log-report';
import { ReportPageModal } from './../pages/report-page-modal/report-page-modal';
import { HelperMethodProvider } from './../providers/helper-method/helper-method';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http'
import { IonicStorageModule } from '@ionic/storage';
import { NgProgressModule } from 'ngx-progressbar';
import { ProgressBarModule } from 'angular-progress-bar';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/loginPage';
import { TabsPage } from '../pages/tabs/tabs';
import { ReportPage } from '../pages/report/reportPage';
import { TimeSheetPage } from '../pages/time-sheet/time-sheetPage';
import { UserPage } from '../pages/user/userPage';
import { UsersProvider } from '../providers/users/usersProvider';
import { TimesheetsProvider } from '../providers/timesheets/timesheetsProvider';
import { ReportProvider } from '../providers/report/reportProvider';
import { TimeSheetPageModal } from '../pages/time-sheet-page-modal/time-sheet-page-modal';
import { ExpandableComponent } from '../components/expandable/expandable';
import { OAuthProvider } from '../providers/o-auth/oauthProvider';
import { StorageProvider } from '../providers/storage/storageProvider';
import { GlobalVariableProvider } from '../providers/global-variable/global-variable';
import { MsProjectProvider } from '../providers/ms-project/msProjectProvider';
import { MsActivityProvider } from '../providers/ms-activity/msActivityProvider';
import { ErrorHandlerProvider } from '../providers/error-handler/error-handler';
import { SprintDetailedDeveloperPage } from '../pages/sprint-detailed-developer/sprint-detailed-developer';
import { PerfomanceProvider } from '../providers/perfomance/perfomanceProvider';
import { PerfomancePage } from '../pages/perfomance/perfomancePage';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    TabsPage,
    ReportPage,
    PerfomancePage,
    TimeSheetPage,
    UserPage,
    ReportPageModal,
    BackLogReportPage,
    BulkItemDetailedPage,
    BulkItemDetailedDeveloperPage,
    SprintDetailedDeveloperPage,
    TimeSheetPageModal,
    SprintDetailedPage,
    SprintItemPage,
    ExpandableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProgressBarModule,
    NgProgressModule,
    RoundProgressModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    LoginPage,
    TabsPage,
    ReportPage,
    PerfomancePage,
    TimeSheetPage,
    UserPage,
    ReportPageModal,
    BackLogReportPage,
    BulkItemDetailedPage,
    BulkItemDetailedDeveloperPage,
    SprintDetailedDeveloperPage,
    TimeSheetPageModal,
    SprintDetailedPage,
    SprintItemPage,
    ExpandableComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsersProvider,
    TimesheetsProvider,
    HelperMethodProvider,
    ReportProvider,
    HTTP,
    OAuthProvider,
    StorageProvider,
    GlobalVariableProvider,
    MsProjectProvider,
    MsActivityProvider,
    ErrorHandlerProvider,
    PerfomanceProvider
  ]
})
export class AppModule { }
