import { TimeSheet } from './../../models/TimeSheet';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/User';
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
  templateUrl: 'time-sheet.html',
})
export class TimeSheetPage {

  timeSheet : TimeSheet;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public timeSheetProvider : TimesheetsProvider) {

  }

  ionViewDidLoad() {
  
    // this.timeSheetProvider.getPost()
    //     .subscribe(
    //         (data: TimeSheet) => this.timeSheet = {
    //             ...data
    //         }
    //       );

    console.log('ionViewDidLoad TimeSheetPage');
  }

}
