import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/loginPage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      this.rootPage = LoginPage;
      events.subscribe('Auth', data =>{
        if( data == 1 ){
          this.rootPage = TabsPage;
        }else if (data == 0 ){
          this.rootPage = LoginPage;
        }
      });
      
      splashScreen.hide();
    });
    console.log('mantab');
  }
}

