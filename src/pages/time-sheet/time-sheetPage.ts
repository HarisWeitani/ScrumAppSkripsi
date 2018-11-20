import { UsersProvider } from './../../providers/users/usersProvider';
import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { TimeSheet } from '../../models/TimeSheet';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { TimesheetsProvider } from '../../providers/timesheets/timesheetsProvider';

/**
 * Generated class for the TimeSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-sheet',
  templateUrl: 'time-sheetPage.html',
})
export class TimeSheetPage {

  timeSheet : TimeSheet;

  timeSheetDataList : Array<TimeSheet>;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public timeSheetProvider : TimesheetsProvider, public helperMethod:HelperMethodProvider,
              public userProvider : UsersProvider,
              public events: Events) {

  }

  ionViewDidLoad() {
    this.helperMethod.loadingService('Getting Your Data Please Wait...');
    let userLoggedIn = {
      username : this.userProvider.user.$username,
      password : this.userProvider.user.$email
    }

    this.timeSheetProvider.getAllTimeSheetsByUserLoggedIn(userLoggedIn)
        .subscribe(
          (response:any) => {
            this.helperMethod.loading.dismiss();
            this.timeSheetDataList = response;
            console.log(response);
          },
          (error:any) => {
            console.log(error);
            console.error(error.status);
            console.error(error.statusText);
            this.helperMethod.loading.dismiss();
            this.helperMethod.presentToast('Gagal 9999: Jangan Hubungi Team IT',2000,3);
          }
        )

    console.log('ionViewDidLoad TimeSheetPage');
  }
  ionViewWillEnter(){
    console.log('will enter');
  }
  ionViewDidEnter(){
    console.log('Did enter');
  }

  onItemPressed(itemId){
    console.log(itemId);
  }
  onItemSlidePressed(){
    console.log('On Item Slide Pressed');
  }

}
