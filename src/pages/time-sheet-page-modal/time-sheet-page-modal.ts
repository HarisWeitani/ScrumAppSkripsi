import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TimeSheet } from '../../models/TimeSheet';
import { Ms_Project } from '../../models/Ms_Project';
import { Ms_Activity } from '../../models/Ms_Activity';

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

  msProject : Array<Ms_Project>;
  msActivity : Array<Ms_Activity>;

  dataTesting : Array<String> = [];

  dataDropDown : String;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl : ViewController) {
      console.log(this.navParams.get('timeSheetData'));
      if(this.navParams.get('timeSheetData') == 'add'){
  
      }
      this.timeSheet = this.navParams.get('timeSheetData');

      this.dataTesting.push('test 1');
      this.dataTesting.push('test 2');
      this.dataTesting.push('test 3');
      this.dataTesting.push('test 4');
      this.dataTesting.push('test 5');
      this.dataTesting.push('test 6');
      this.dataTesting.push('test 7');
      this.dataTesting.push('test 8');
      this.dataTesting.push('test 9');
      this.dataTesting.push('test 10');
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

  onItemClick(data){
    console.log(data);
    
  }

}
