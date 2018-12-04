import { MsProjectProvider } from './../../providers/ms-project/msProjectProvider';
import { UsersProvider } from '../../providers/users/usersProvider';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,Events } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperMethodProvider } from '../../providers/helper-method/helper-method';
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
              public oAuthProvider : OAuthProvider,
              public msProjectProvider: MsProjectProvider
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
    let userLogin = {
      username : this.username.value,
      password : this.password.value
    };
    // this.doLoginBrowser(userLogin);
    this.doAuthenticate(userLogin);
  }

  doAuthenticate(userLogin){
    console.log("Do Auth " + userLogin);
    this.helperMethod.loadingService("Verifying Your Info..");
    this.oAuthProvider.getOAuthToken(userLogin)
        .then(
          (response:any) => {
          this.helperMethod.loading.dismiss();
          console.log(response);
          response = JSON.parse(response.data);
          console.log(response);

          this.oAuthProvider.userOAuth = response
          console.log(this.oAuthProvider.userOAuth);

          this.doLogindevice(userLogin);

        }).catch(
          (error:any) => {
            
            let errorData;

            if(error.status = "-1"){
              this.helperMethod.presentToast('Failed To Connect',4000,2);
              this.helperMethod.loading.dismiss();
            }else{
              errorData = JSON.parse(error.error);
              console.log(error);
              console.error(error.error);
              console.error(error.status);
              this.helperMethod.loading.dismiss();

              if(error.error == 'TimeoutError'){
                this.helperMethod.presentToast('Slow Connection',4000,2);
              }else if(errorData.error == 'invalid_grant'){
                this.helperMethod.presentToast(errorData.error_description,4000,3);
              }else{
                this.helperMethod.presentToast('Login Gagal 9999: Jangan Hubungi Team IT',4000,3);
              }
            }
            
          }
        );
  }

  doLogindevice(userLogin){
    this.helperMethod.loadingService("Collecting User Info..");
    this.userProvider.validateLoginDevice(userLogin).then(
      (response:any) => {
        this.helperMethod.loading.dismiss();
        // this.userProvider.user = response;
        // this.events.publish('Auth',1);
        console.log(response);
        let responseData = JSON.parse(response.data);
        let responseStatus = response.status;

        console.log(responseData);
        console.log(responseData.status);
        if(responseData.status.code == "0"){
          this.userProvider.user = responseData;
          
          this.getAllMsProjectList(this.userProvider.user);

        }else if( responseData.status.code == "1159" ){
          this.helperMethod.presentToast(responseData.status.message,3000,2);
        }else if( responseData.status.code == "8101" ){
          this.helperMethod.presentToast(responseData.status.message,3000,3);
        }

        console.log(responseData.person_name);
        console.log(responseStatus);

      }).catch(
      (error:any) => {

        let errorData;

        if(error.status = "-1"){
          this.helperMethod.presentToast('Failed To Connect',4000,2);
          this.helperMethod.loading.dismiss();
        }else{
          errorData = JSON.parse(error.error);
          console.log(error);
          console.error(error.error);
          console.error(error.status);
          this.helperMethod.loading.dismiss();

          if(error.error == 'TimeoutError'){
            this.helperMethod.presentToast('Slow Connection',4000,2);
          }else if(errorData.error == 'invalid_grant'){
            this.helperMethod.presentToast(errorData.error_description,4000,3);
          }else{
            this.helperMethod.presentToast('Login Gagal 9999: Jangan Hubungi Team IT',4000,3);
          }
        }
        
      }
    );
      
  }

  
  doLoginBrowser(userLogin){
    this.helperMethod.loadingService("Collecting User Info..");
    this.userProvider.validateLoginBrowser(userLogin).timeout(10000).subscribe(
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

  showHidePassword(){
    this.showHide = !this.showHide;

    if(this.showHide){
      this.type = 'text';
      console.log
    }else{
      this.type = 'password';
    }

  }

  getAllMsProjectList(user : any){

   this.helperMethod.loadingService("Getting All Project List..");
    this.msProjectProvider.getAllData(user).then(
      (response:any) => {
        this.helperMethod.loading.dismiss();
        console.log(response);
        let responseData = JSON.parse(response.data);
        let responseStatus = response.status;

        console.log(responseData);
        console.log(responseData.status);
        if(responseData.status.code == "0"){
          
          this.msProjectProvider.msProjectList = responseData;
          
          this.events.publish('Auth',1);  
          
        }else if( responseData.status.code == "1159" ){
          this.helperMethod.presentToast(responseData.status.message,3000,2);
        }else if( responseData.status.code == "8101" ){
          this.helperMethod.presentToast(responseData.status.message,3000,3);
        }

        console.log(responseData.person_name);
        console.log(responseStatus);

      }).catch(
      (error:any) => {
        
        let errorData;

        if(error.status = "-1"){
          this.helperMethod.presentToast('Failed To Connect',4000,2);
          this.helperMethod.loading.dismiss();
        }else{
          errorData = JSON.parse(error.error);
          console.log(error);
          console.error(error.error);
          console.error(error.status);
          this.helperMethod.loading.dismiss();

          if(error.error == 'TimeoutError'){
            this.helperMethod.presentToast('Slow Connection',4000,2);
          }else if(errorData.error == 'invalid_grant'){
            this.helperMethod.presentToast(errorData.error_description,4000,3);
          }else{
            this.helperMethod.presentToast('Login Gagal 9999: Jangan Hubungi Team IT',4000,3);
          }
        }
        
      }
    );
      
  }

  getAllMsActivityList(user : any){

    this.helperMethod.loadingService("Getting All Project List..");
    this.msProjectProvider.getAllData(user).then(
      (response:any) => {
        this.helperMethod.loading.dismiss();
        console.log(response);
        let responseData = JSON.parse(response.data);
        let responseStatus = response.status;

        console.log(responseData);
        console.log(responseData.status);
        if(responseData.status.code == "0"){
          
          this.msProjectProvider.msProjectList = responseData;
          

        }else if( responseData.status.code == "1159" ){
          this.helperMethod.presentToast(responseData.status.message,3000,2);
        }else if( responseData.status.code == "8101" ){
          this.helperMethod.presentToast(responseData.status.message,3000,3);
        }

        console.log(responseData.person_name);
        console.log(responseStatus);

      }).catch(
      (error:any) => {
        
        let errorData;

        if(error.status = "-1"){
          this.helperMethod.presentToast('Failed To Connect',4000,2);
          this.helperMethod.loading.dismiss();
        }else{
          errorData = JSON.parse(error.error);
          console.log(error);
          console.error(error.error);
          console.error(error.status);
          this.helperMethod.loading.dismiss();

          if(error.error == 'TimeoutError'){
            this.helperMethod.presentToast('Slow Connection',4000,2);
          }else if(errorData.error == 'invalid_grant'){
            this.helperMethod.presentToast(errorData.error_description,4000,3);
          }else{
            this.helperMethod.presentToast('Login Gagal 9999: Jangan Hubungi Team IT',4000,3);
          }
        }
        
      }
    );
      

  }
  
}
