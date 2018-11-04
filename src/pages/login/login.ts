import { TabsPage } from './../tabs/tabs';
import { UsersProvider } from '../../providers/users/usersProvider';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from '../../models/User';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') username;
  @ViewChild('password') password;
  
  constructor(public navCtrl: NavController, public navParames: NavParams, public userProvider : UsersProvider, public toastCtrl:ToastController) {

    var e = new User();
    e.$username = "asd";
    console.log(e.$username);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    let userData = {
      username : this.username.value,
      password : this.password.value
    };

    var validateLogin = this.userProvider.validateUser(userData);

    if( validateLogin == 'canLogin' ){
      this.navCtrl.push(TabsPage);
    }else{
      this.presentToast();
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
