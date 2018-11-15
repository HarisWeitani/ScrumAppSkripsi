import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { User } from '../../models/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
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
  templateUrl: 'userPage.html',
})
export class UserPage {

  //mau migrasi ke userprovider aja
  userData : User;
  allUsers : Array<any>;
  username : string;
  email : string;
  // loading : any;
  
  error : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public userProvider : UsersProvider,
              public helperMethod:HelperMethodProvider ) {

  }

  ionViewDidLoad() {
 
    console.log('userNameLogin length : ',this.userProvider.user.$username.length.toString());
    console.log('ionViewDidLoad UserPage');

  }
  ionViewWillEnter(){
    console.log('will enter');
  }
  ionViewDidEnter(){
    console.log('Did enter');
  }

  press(){
    this.helperMethod.loadingService('Getting All User..');
    this.userProvider.getUsers().subscribe(
      allUser => {
        this.allUsers = allUser;
        this.helperMethod.loading.dismiss();
      }
    );
    console.log(this.userData);
  }

  onItemPressed(userId){
    console.log('On Item Pressed',userId);

    this.helperMethod.loadingService('Harap tunggu');
    setTimeout(()=>{
      this.helperMethod.loading.dismiss();
      this.helperMethod.loadingService('Coba Lagi..');
      setTimeout(()=>{
        this.helperMethod.loading.dismiss();
      },1000);
    },3000);

  }

  onItemCOEG(){

    let postData = {
      username : 'coeg',
      password : 'coeg2'
    };

    let data : any;
    console.log('here',JSON.stringify(this.userProvider.user));
    this.userProvider.doSave(postData).subscribe(
      response => {
        data = response;
        console.log(data);
      }
    )
  }


  doLogout(){
    console.log('do Logout');
  }

}
