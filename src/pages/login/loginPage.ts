import { UsersProvider } from '../../providers/users/usersProvider';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,Events } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperMethodProvider } from '../../providers/helper-method/helper-method';
import { TimeoutError } from 'rxjs';
import { stringify } from '@angular/compiler/src/util';
import { User } from '../../models/User';
import { OAuthProvider } from '../../providers/o-auth/oauthProvider';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'loginPage.html',
})
export class LoginPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  loginForm : FormGroup;
  showHide : boolean;
  type = 'password';

  usernameDefaultVal : string;

  constructor(public navCtrl: NavController, public navParames: NavParams, 
              public userProvider : UsersProvider, public toastCtrl:ToastController,
              public formBuilder : FormBuilder,
              public helperMethod : HelperMethodProvider,
              public events : Events,
              public oAuthProvider : OAuthProvider
              ) {
    this.showHide = false;            
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage ');
  }

  doLogin() {
    // this.doLoginBrowser();
    this.doAuthenticate();
  }

  doAuthenticate(){
    this.helperMethod.loadingService("Collecting User Info..");
    this.oAuthProvider.getOAuthToken(this.username.value,this.password.value)
        .then(
          (response:any) => {
          this.helperMethod.loading.dismiss();
          this.userProvider.user = response;
          this.events.publish('Auth',1);
          console.log(response);
        }).catch(
          (error:any) => {
            console.log(error);
            console.error(error.name);
            console.error(error.status);
            console.error(error.statusText);
            this.helperMethod.loading.dismiss();
    
            if(error.name == 'TimeoutError'){
              this.helperMethod.presentToast('Slow Connection',2000,2);
            }else{
              this.helperMethod.presentToast('Login Gagal 9999: Jangan Hubungi Team IT',2000,3);
            }
          }
        );
  }

  doLoginBrowser(){
    this.helperMethod.loadingService("Collecting User Info..");
    let userLogin = {
      username : this.username.value,
      password : this.password.value
    };
    this.userProvider.validateLoginBrowser(userLogin).timeout(10000).subscribe(
      // this.userProvider.validateLogin(userLogin).then(
        (response:any) => {
          this.helperMethod.loading.dismiss();
          // if(response.id == 101){
          //   // this.userProvider.user = new User(userLogin.username,userLogin.password);
          //   this.userProvider.user = response;
          //   this.events.publish('Auth',1);
          // }else{
          //   this.helperMethod.presentToast('User Not Found',2000,3);
          // // }
          this.userProvider.user = response;
          this.events.publish('Auth',1);
          console.log(response);
        },
        (error:any) => {
          console.log(error);
          console.error(error.name);
          console.error(error.status);
          console.error(error.statusText);
          this.helperMethod.loading.dismiss();
  
          if(error.name == 'TimeoutError'){
            this.helperMethod.presentToast('Slow Connection',2000,2);
          }else{
            this.helperMethod.presentToast('Login Gagal 9999: Jangan Hubungi Team IT',2000,3);
          }
          
        }
      );
  }

  doLogindevice(){
    this.helperMethod.loadingService("Collecting User Info..");
    let userLogin = {
      username : this.username.value,
      password : this.password.value
    };
    this.userProvider.validateLoginDevice(userLogin).then(
      (response:any) => {
        this.helperMethod.loading.dismiss();
        this.userProvider.user = response;
        this.events.publish('Auth',1);
        console.log(response);
      }).catch(
      (error:any) => {
        console.log(error);
        console.error(error.name);
        console.error(error.status);
        console.error(error.statusText);
        this.helperMethod.loading.dismiss();

        if(error.name == 'TimeoutError'){
          this.helperMethod.presentToast('Slow Connection',2000,2);
        }else{
          this.helperMethod.presentToast('Login Gagal 9999: Jangan Hubungi Team IT',2000,3);
        }
        
      }
    );
      
  }

  showHidePassword(){
    this.showHide = !this.showHide;

    if(this.showHide){
      this.type = 'text';
      console.log
    }else{
      this.type = 'password';
    }

  }

  
}
