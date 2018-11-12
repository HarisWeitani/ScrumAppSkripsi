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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider : UsersProvider ) {

      userProvider.getUsers();

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad UserPage');
  }

  press(){
    console.log(this.userProvider.userData.$email);
  }

}
