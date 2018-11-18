import { UsersProvider } from '../../providers/users/usersProvider';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,Events } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperMethodProvider } from '../../providers/helper-method/helper-method';
import { User } from '../../models/User';
import { TimeoutError } from 'rxjs';

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
  
  // loading : any;
  loginForm : FormGroup;

  showHide : boolean;
  type = 'password';

  usernameDefaultVal : string;

  constructor(public navCtrl: NavController, public navParames: NavParams, 
              public userProvider : UsersProvider, public toastCtrl:ToastController,
              public formBuilder : FormBuilder,
              public helperMethod : HelperMethodProvider,
              public events : Events
              ) {
    this.showHide = false;            
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
    
  }

  ionViewDidLoad() {
    if(this.userProvider.user != null){
      this.usernameDefaultVal = this.userProvider.user.$username;
    }
    console.log('ionViewDidLoad LoginPage ');
  }
  ionViewWillEnter(){
    console.log('will enter');
  }
  ionViewDidEnter(){
    console.log('Did enter');
  }

  doLogin() {

    this.helperMethod.loadingService("Collecting User Info..");
    let userLogin = {
      username : this.username.value,
      password : this.password.value
    };

    this.userProvider.validateLogin(userLogin).timeout(5000).subscribe(
      (response:any) => {
        this.helperMethod.loading.dismiss();
        console.log(response);
        if(response.id == 101){
          this.userProvider.user = new User(userLogin.username,userLogin.password);
          this.events.publish('Auth',1);
        }else{
          this.helperMethod.presentToast('User Not Found',2000,3);
        }
        
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

  //di jsonplaceholder ga bisa
  doLoginFormData() {

    let userLogin = new FormData();
    userLogin.append('username', 'dasdas');
    userLogin.append('password', 'asdasdad');


    this.userProvider.validateLogin(userLogin).subscribe(
      (response:any) => {
        console.log(response);
      },
      (error:any) => {
        console.log(error),
        console.error(error.status),
        console.error(error.statusText),
        this.helperMethod.loading.dismiss()
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
