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

    countries: any;
  errorMessage: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider : UsersProvider ) {

  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad UserPage');
  }

  press(){
    // this.userProvider.getMessages().subscribe(data => console.log(data));

    this.userProvider.getCountries()
       .subscribe(
         coeg => this.countries =coeg,
         error =>  this.errorMessage = <any>error);
        
         console.log(this.countries);
         console.log(this.userdata);
         if(this.userdata == null){
           console.log('kosong');
         }else{
           console.log(this.userdata);
         }

  }

}
