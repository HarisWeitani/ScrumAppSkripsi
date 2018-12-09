import { ErrorHandlerProvider } from './../../providers/error-handler/error-handler';
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
              public userProvider : UsersProvider,
              private helperMethod:HelperMethodProvider,
              public errorHandler : ErrorHandlerProvider,
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

  doLogout(){
    this.alertConfirmLogout();
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
            this.helperMethod.loadingService("Collecting User Info..");
            this.userProvider.validateLoginDevice(this.userProvider.userLogin).then(
              (response:any) => {
                this.helperMethod.loading.dismiss();

                console.log(response);
                let responseData = JSON.parse(response.data);
                let responseStatus = response.status;

                console.log(responseData);
                console.log(responseData.status);
                if(responseData.status.code == "0"){
                  this.events.publish('Auth',0);
                }else {
                  this.errorHandler.catchResponseErrorHandler(responseData);
                }

              }).catch(
              (error:any) => {

                this.helperMethod.loading.dismiss();
                this.errorHandler.catchErrorHandler(error);
              }
            );
          }
        }
      ]
    });
    alert.present();
  }

}
