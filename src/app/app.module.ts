import { ReportPageModal } from './../pages/report-page-modal/report-page-modal';
import { HelperMethodProvider } from './../providers/helper-method/helper-method';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http'
import { IonicStorageModule } from '@ionic/storage';
import { AutoCompleteModule } from 'ionic2-auto-complete';

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


@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    TabsPage,
    ReportPage,
    TimeSheetPage,
    UserPage,
    ReportPageModal,
    TimeSheetPageModal,
    ExpandableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AutoCompleteModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    LoginPage,
    TabsPage,
    ReportPage,
    TimeSheetPage,
    UserPage,
    ReportPageModal,
    TimeSheetPageModal,
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
    GlobalVariableProvider
  ]
})
export class AppModule { }
