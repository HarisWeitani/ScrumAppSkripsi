import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MsActivityProvider } from './../../providers/ms-activity/msActivityProvider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TimeSheet } from '../../models/TimeSheet';
import { Ms_Project } from '../../models/Ms_Project';
import { Ms_Activity } from '../../models/Ms_Activity';
import { MsProjectProvider } from '../../providers/ms-project/msProjectProvider';

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

  timeSheetForm : FormGroup;

  msProject : Array<Ms_Project>;
  msActivity : Array<Ms_Activity>;

  projectDropDown : String;
  activityDropDown : String;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBuilder : FormBuilder,
              public msActivityProvider : MsActivityProvider,
              public msProjectProvider : MsProjectProvider,
              public viewCtrl : ViewController) {
      console.log(this.navParams.get('timeSheetData'));
      if(this.navParams.get('timeSheetData') == 'add'){
  
      }
      this.timeSheet = this.navParams.get('timeSheetData');

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

  updateTimeSheetItem(){
    
  }

  onItemClick(){
    console.log(this.activityDropDown);
    console.log(this.projectDropDown);
  }

}
