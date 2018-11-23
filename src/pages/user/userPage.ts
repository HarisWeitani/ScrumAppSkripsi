import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { User } from '../../models/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';
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
  
  constructor(private navCtrl: NavController, private navParams: NavParams, 
              private userProvider : UsersProvider,
              private helperMethod:HelperMethodProvider,
              private events:Events, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
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
    this.alertConfirmLogout();
    // this.events.publish('Auth',0);
  }

  alertConfirmLogout(){
    let alert = this.alertCtrl.create({
      title: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.events.publish('Auth',0);
          }
        }
      ]
    });
    alert.present();
  }

}
