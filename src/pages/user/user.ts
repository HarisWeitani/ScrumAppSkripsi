import { User } from './../../models/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/usersProvider';
import { stringify } from '@angular/core/src/render3/util';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  userData : User;

  username : string;
  email : string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider : UsersProvider ) {

  }

  ionViewDidLoad() {
    // this.userProvider.getUsers().subscribe(coeg => {
    //   this.userData = new User(coeg.name, coeg.email),
    //   this.username = this.userData.$username,
    //   this.email = this.userData.$email,
    //   console.log('data : ', this.userData )
    //  }
    // );

    this.userProvider.getOneUserById(this.userProvider.userNameLogin.length.toString()).subscribe( (user:any) => {
      this.userData = new User(user.name,user.email),
      this.username = this.userData.$username,
      this.email = this.userData.$email
    });
    console.log('userNameLogin length : ',this.userProvider.userNameLogin.length.toString());
    console.log('ionViewDidLoad UserPage');
  }

  press(){

  }

}
