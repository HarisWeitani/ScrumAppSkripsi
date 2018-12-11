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
  planReal : String;

  dataIsValid : Boolean;

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

      this.dataIsValid = false;

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
    console.log("Close Modal");
    
    this.viewCtrl.dismiss();
  }

  addTimeSheetItem(){

    this.validateData();

    if(this.dataIsValid == true){
      this.addData();
    }

  }

  validateData(){

    if(this.projectDropDown == null || this.projectDropDown == ""){
      this.helperMethod.presentToast('Project Fields must be filled', 2000,1);
      this.dataIsValid = false;
    }
    else if(this.activityDropDown == null || this.activityDropDown == ""){
      this.helperMethod.presentToast('Activity Fields must be filled', 2000,1);
      this.dataIsValid = false;
    }
    else if(this.todayAct == null || this.todayAct == ""){
      this.helperMethod.presentToast('Today Activities Fields must be filled', 2000,1);
      this.dataIsValid = false;
    }
    else if(this.duration == null || this.duration == ""){
      this.helperMethod.presentToast('Duration Fields must be filled', 2000,1);
      this.dataIsValid = false;
    }
    else if(this.planReal == null || this.planReal == ""){
      this.helperMethod.presentToast('Is it Plan Or Real?', 2000,1);
      this.dataIsValid = false;
    }else{
      this.dataIsValid = true;
    }

  }

  addData(){
    this.msProjectProvider.getIdByProjectCode(this.projectDropDown);
    this.msActivityProvider.getIdByActivityCode(this.activityDropDown);

    let timeSheetData = {
      project_id : this.msProjectProvider.projectID,
      project_code : this.projectDropDown,
      activity_id : this.msActivityProvider.activityID,
      activity_type : this.activityDropDown,
      today_act : this.todayAct,
      jira_id : this.jiraId,
      sprint_id : this.sprintId,
      duration_act : this.duration,
      person_id : this.userProvider.user.person_id,
      is_real : this.planReal,
      username : this.userProvider.userLogin.username
    }

    console.log(timeSheetData);

    this.helperMethod.loadingService("Add New One..");
    this.timeSheetProvider.addNewTimeSheet(timeSheetData)
        .then(
          (response:any) => {
            this.helperMethod.loading.dismiss();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;

            console.log(responseData);
            console.log(responseData.status);

            if(responseData.status.code == "0"){
            
              this.getAllTimeSheet();

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

    let durationTemp = this.timeSheet.duration_act;
    let isRealTemp = this.timeSheet.is_real;

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
              
              this.doCloseModal();

            }else {
              this.errorHandler.catchResponseErrorHandler(responseData);
            }

          }).catch(
          (error:any) => {

            this.timeSheet.is_real = isRealTemp;
            this.timeSheet.duration_act = durationTemp;
            
            this.helperMethod.loading.dismiss();
            this.errorHandler.catchErrorHandler(error);

          }
        );

  }

  
  getAllTimeSheet(){

    this.helperMethod.loadingService("Refresh Data TimeSheet..");
    this.timeSheetProvider.getAllTimeSheetsByUserLoggedIn(this.userProvider.userLogin)
        .then(
          (response:any) => {
            this.helperMethod.loading.dismiss();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;

            console.log(responseData);
            console.log(responseData.status);

            if(responseData.status.code == "0"){
              
              this.timeSheetProvider.timeSheetList = responseData.timeSheetByUser;
              this.doCloseModal();

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
