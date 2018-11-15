import { TabsPage } from '../tabs/tabs';
import { UsersProvider } from '../../providers/users/usersProvider';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
              public formBuilder : FormBuilder, public loadingCtrl:LoadingController) {
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

    this.loadingService("Collecting User Info..");
    let userLogin = {
      username : this.username.value,
      password : this.password.value
    };

    this.userProvider.validateLogin(userLogin).subscribe(
      (response:any) => {
        this.loading.dismiss();
        console.log(response);
        this.navCtrl.push(TabsPage, response);
      },
      (error:any) => {
        console.log(error);
        console.error(error.status);
        console.error(error.statusText);
        this.loading.dismiss();
        this.presentToast();
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

  loadingService(message : string){
    this.loading = this.loadingCtrl.create(
      {
        spinner : 'bubbles',
        content : message
      }
    );
    this.loading.present();
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

  presentToast(){
    let toast = this.toastCtrl.create({
      message: 'Login Gagal 9999: Hubungi Administrator',
      duration: 2000,
      position: 'bottom'
    });

    toast.present();

  }

}
