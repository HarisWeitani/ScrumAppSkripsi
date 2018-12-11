import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/loginPage';
import { StorageProvider } from '../providers/storage/storageProvider';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events,
              public storageProvider : StorageProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      storageProvider.getKeys()
        .then(
          (response:any) => {
            console.log(response);
          }
        );
        
          //validasi jabatan
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
  }
}

