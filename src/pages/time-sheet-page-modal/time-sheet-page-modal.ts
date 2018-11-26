import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TimeSheet } from '../../models/TimeSheet';

/**
 * Generated class for the TimeSheetPageModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-sheet-page-modal',
  templateUrl: 'time-sheet-page-modal.html',
})
export class TimeSheetPageModal {

  timeSheet : TimeSheet;
  mantab : string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl : ViewController) {
      console.log(this.navParams.get('timeSheetData'));
      if(this.navParams.get('timeSheetData') == 'add'){
  
      }
      this.timeSheet = this.navParams.get('timeSheetData');
      this.mantab = this.timeSheet.activities_type;
  }

  ionViewDidLoad() {
    // console.log(this.navParams.get('timeSheetData'));
    // if(this.navParams.get('timeSheetData') == 'add'){

    // }
    // this.timeSheet = this.navParams.get('timeSheetData');
    console.log('ionViewDidLoad TimeSheetPageModalPage ' + this.timeSheet.jira_id);
  }

  doCloseModal(){
    console.log("Pressed");
    this.viewCtrl.dismiss();
  }

}
