import { HelperMethodProvider } from './../providers/helper-method/helper-method';
import { UsersProvider } from './../providers/users/usersProvider';
import { TabsPage } from './../pages/tabs/tabs';
import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/loginPage';
import { StorageProvider } from '../providers/storage/storageProvider';
import { OAuthProvider } from '../providers/o-auth/oauthProvider';
import { ErrorHandlerProvider } from '../providers/error-handler/error-handler';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events,
              public storageProvider : StorageProvider, public userProvider : UsersProvider,
              public oAuthProvider : OAuthProvider, public errorHandler : ErrorHandlerProvider,
              public helperMethod : HelperMethodProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      storageProvider.getKeys()
        .then(
          (response:any) => {
            console.log(response);
          }
        );
      
      statusBar.styleDefault();
      this.rootPage = LoginPage;

      storageProvider.getStorageByKey(storageProvider.userKey)
          .then(
            (response:any) => {
              if(response != null){
                console.log(response);
                userProvider.user = response;
                this.reAuthenticate();
                
              }else{
                storageProvider.clear();
                this.events.publish('Auth',0);
              }
            }
          );

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

  reAuthenticate(){
    this.storageProvider.getStorageByKey(this.storageProvider.userLoginKey)
        .then(
          (response : any) => {
            if(response != null){
              this.userProvider.userLogin = response;
              this.refreshToken();
            }else{
              
            }
          }
        );
  }

  refreshToken(){
    this.helperMethod.loadingService('Refresh User..');
    this.oAuthProvider.getOAuthToken(this.userProvider.userLogin)
        .then(
          (response:any)=>{
            this.helperMethod.loading.dismiss();
            response = JSON.parse(response.data);
            this.oAuthProvider.userOAuth = response
            this.events.publish('Auth',1);
          }
        ).catch(
          (error:any) => {
            this.helperMethod.loading.dismiss();
            this.errorHandler.catchErrorHandler(error);
          }
        );
  }

}

