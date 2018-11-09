import { User } from './../../models/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/usersProvider';

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

  userdata: User;
  nama: any;
    countries: any;
  errorMessage: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider : UsersProvider ) {
      console.log("Construtor", this.countries);
  }

  ionViewDidLoad() {
    this.userProvider.getCountries().subscribe(coeg => this.countries = coeg);
    
    console.log("ionViewDidLoad",this.countries);
    console.log('ionViewDidLoad UserPage');
  }

  press(){
    // this.userProvider.getMessages().subscribe(data => console.log(data));

    
    // console.log(this.countries.name);
    console.log(this.userProvider.userData);

  }

}
