import { TabsPage } from '../tabs/tabs';
import { UsersProvider } from '../../providers/users/usersProvider';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HelperMethodProvider } from '../../providers/helper-method/helper-method';

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
  
  loading : any;
  loginForm : FormGroup;

  showHide : boolean;
  type = 'password';


  constructor(public navCtrl: NavController, public navParames: NavParams, 
              public userProvider : UsersProvider, public toastCtrl:ToastController,
              public formBuilder : FormBuilder,
              public helperMethod : HelperMethodProvider) {
    this.showHide = false;            
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {

    this.helperMethod.loadingService("Collecting User Info..");
    let userLogin = {
      username : this.username.value,
      password : this.password.value
    };

    this.userProvider.validateLogin(userLogin).subscribe(
      (response:any) => {
        this.helperMethod.loading.dismiss();
        console.log(response);
        if(response.id == 101){
          this.navCtrl.push(TabsPage, response);
        }else{
          this.helperMethod.presentToast('Login Gagal 9999:Hubungi Team IT',2000,3);
        }
        
      },
      (error:any) => {
        console.log(error);
        console.error(error.status);
        console.error(error.statusText);
        this.loading.dismiss();
        this.helperMethod.presentToast('Login Gagal 9999: Jangan Hubungi Team IT',2000,3);
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
        this.loading.dismiss()
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
