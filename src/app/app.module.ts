import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { LoginPage } from '../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { ReportPage } from '../pages/report/report';
import { TimeSheetPage } from '../pages/time-sheet/time-sheet';
import { UserPage } from '../pages/user/user';
import { UsersProvider } from '../providers/users/usersProvider';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    LoginPage,
    TabsPage,
    ReportPage,
    TimeSheetPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    LoginPage,
    TabsPage,
    ReportPage,
    TimeSheetPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsersProvider
  ]
})
export class AppModule { }
