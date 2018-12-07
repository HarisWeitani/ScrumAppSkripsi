import { UsersProvider } from './../../providers/users/usersProvider';
import { TimeSheet } from './../../models/TimeSheet';
import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { TimesheetsProvider } from './../../providers/timesheets/timesheetsProvider';
import { MsActivityProvider } from './../../providers/ms-activity/msActivityProvider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MsProjectProvider } from '../../providers/ms-project/msProjectProvider';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';

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

  addOrUpdate : any;

  projectDropDown : String;
  activityDropDown : String;
  todayAct : String;
  jiraId : String;
  sprintId : String;
  duration : String;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public msActivityProvider : MsActivityProvider,
              public msProjectProvider : MsProjectProvider,
              public timeSheetProvider : TimesheetsProvider,
              public userProvider : UsersProvider,
              public helperMethod : HelperMethodProvider,
              public errorHandler : ErrorHandlerProvider,
              public viewCtrl : ViewController) {
      console.log(this.navParams.get('timeSheetData'));
      if(this.navParams.get('timeSheetData') == 'add'){
        this.addOrUpdate = 'add';
      }else{
        this.addOrUpdate = 'update';
        this.timeSheet = this.navParams.get('timeSheetData');
        this.projectDropDown = this.timeSheet.project_code;
        this.activityDropDown = this.timeSheet.activities_type;
        this.todayAct = this.timeSheet.today_act;
        this.jiraId = this.timeSheet.jira_id;
        this.sprintId = this.timeSheet.sprint_id;
        this.duration = this.timeSheet.duration_act;
      }
       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeSheetPageModalPage');
  }

  doCloseModal(){
    console.log("Pressed");
    this.viewCtrl.dismiss();
  }

  addTimeSheetItem(){

    let timeSheetData = {
      project_code : this.projectDropDown,
      activities_type : this.activityDropDown,
      today_act : this.todayAct,
      jira_id : this.jiraId,
      duration_act : this.duration,
      username : this.userProvider.userLogin.username,
      password : this.userProvider.userLogin.password
    }

    this.helperMethod.loadingService("Add New One..");
    this.timeSheetProvider.updateGoRealTimeSheet(timeSheetData)
        .then(
          (response:any) => {
            this.helperMethod.loading.dismiss();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;

            console.log(responseData);
            console.log(responseData.status);

            if(responseData.status.code == "0"){
            
              // this.timeSheetProvider.timeSheetList = responseData.timeSheetByUser;
              // console.log(responseData.timeSheetByUser);
              
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

  goReal(){

    this.timeSheet.duration_act = this.duration;
    this.timeSheet.is_real = '1';

    this.helperMethod.loadingService("Update Go Real..");
    this.timeSheetProvider.updateGoRealTimeSheet(this.timeSheet)
        .then(
          (response:any) => {
            this.helperMethod.loading.dismiss();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;

            console.log(responseData);
            console.log(responseData.status);

            if(responseData.status.code == "0"){
            
              // this.timeSheetProvider.timeSheetList = responseData.timeSheetByUser;
              // console.log(responseData.timeSheetByUser);
              
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
