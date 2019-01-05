import { MsActivityProvider } from './../../providers/ms-activity/msActivityProvider';
import { MsProjectProvider } from './../../providers/ms-project/msProjectProvider';
import { UsersProvider } from '../../providers/users/usersProvider';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,Events } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperMethodProvider } from '../../providers/helper-method/helper-method';
import { OAuthProvider } from '../../providers/o-auth/oauthProvider';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';
import { timeout } from 'rxjs/operators';

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
              public errorHandler : ErrorHandlerProvider,
              public events : Events,
              public oAuthProvider : OAuthProvider,
              public msProjectProvider: MsProjectProvider,
              public msActivityProvider : MsActivityProvider
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
          response = JSON.parse(response.data);
          console.log(response);

          this.oAuthProvider.userOAuth = response
          console.log(this.oAuthProvider.userOAuth);
      
          this.doLogindevice(userLogin);

        }).catch(
          (error:any) => {
            this.helperMethod.loading.dismiss();
            this.errorHandler.catchErrorHandler(error);
          }
        );
  }

  doLogindevice(userLogin){
    this.helperMethod.loadingService("Collecting User Info..");
    this.userProvider.validateLoginDevice(userLogin).then(
      (response:any) => {
        this.helperMethod.loading.dismiss();

        console.log(response);
        let responseData = JSON.parse(response.data);
        let responseStatus = response.status;

        console.log(responseData);
        console.log(responseData.status);
        if(responseData.status.code == "0"){
          this.userProvider.user = responseData;
          this.userProvider.userLogin = userLogin;
          this.userProvider.saveUserDataToStorage();
          
          this.getAllMsProjectList(userLogin);

        }else {
          this.errorHandler.catchResponseErrorHandler(responseData);
        }

      }).catch(
      (error:any) => {

        this.helperMethod.loading.dismiss();
        this.errorHandler.catchErrorHandler(error);
        
      }
    );
      
  }
  
  doLoginBrowser(userLogin){
    this.helperMethod.loadingService("Collecting User Info..");
    setTimeout(
      () =>{
        this.userProvider.user = {
          person_id : '1',
          job_id : '7',
          team_id : '3',
          person_name : 'Audi Aung Pertama',
          job_name : 'Developer',
          team_name : 'Gunung sinai',
          is_spv : '0'
        }
        this.helperMethod.loading.dismiss();
        this.events.publish('Auth',1);
      },500
    );
  }

  showHidePassword(){
    this.showHide = !this.showHide;

    if(this.showHide){
      this.type = 'text';
    }else{
      this.type = 'password';
    }

  }

  getAllMsProjectList(userLogin : any){

   this.helperMethod.loadingService("Getting All Project List..");
    this.msProjectProvider.getAllData(userLogin).then(
      (response:any) => {
        this.helperMethod.loading.dismiss();
        console.log(response);
        let responseData = JSON.parse(response.data);
        let responseStatus = response.status;

        console.log(responseData.listProject);
        console.log(responseData.status);
        if(responseData.status.code == "0"){
          
          this.msProjectProvider.msProjectList = responseData.listProject;
          this.msProjectProvider.save();

          this.getAllMsActivityList(userLogin);
          
        }else {
          this.errorHandler.catchResponseErrorHandler(responseData);
        }

      }).catch(
      (error:any) => {
        
        this.helperMethod.loading.dismiss();
        this.errorHandler.catchErrorHandler(error);

      }
    );
      
  }

  getAllMsActivityList(userLogin : any){

    this.helperMethod.loadingService("Getting All Activity List..");
    this.msActivityProvider.getAllData(userLogin).then(
      (response:any) => {
        this.helperMethod.loading.dismiss();
        console.log(response);
        let responseData = JSON.parse(response.data);
        let responseStatus = response.status;

        console.log(responseData);
        console.log(responseData.status);

        if(responseData.status.code == "0"){
        
          this.msActivityProvider.msActivityList = responseData.listActivity;
          this.msActivityProvider.save();
    
          this.events.publish('Auth',1);  

        }else {
          this.errorHandler.catchResponseErrorHandler(responseData);
        }

      }).catch(
      (error:any) => {

          this.helperMethod.loading.dismiss();
          this.errorHandler.catchErrorHandler(error);

      }
    );
      

  }
  
}
