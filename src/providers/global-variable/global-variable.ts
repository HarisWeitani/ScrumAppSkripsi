import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalVariableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVariableProvider {

  //tirta
  // public ipUrl : string = 'http://172.18.0.210:8080/';
  //local
  // public ipUrl : string = 'http://192.168.137.82:8080/';
  //psd
  // public ipUrl : string = 'http://psd:10080/';
  //public
  public ipUrl : string = 'http://app.ad-ins.com/';
  
  // public baseUrl : string = 'com.adins.mss.webservices/services/m/';
  public baseUrl : string = 'adimobile/projectapp.services/services/m/';

  public userLoginAPI : string ='user/login';
  public userLogoutAPI : string = 'user/logout';
  
  public msProjectAPI : string ='timesheet/project'; 
  public msActivityAPI : string ='timesheet/activity'; 

  public timeSheetAPI : string = 'timesheet/getTSByUser';
  public timeSheetGoRealAPI : string = 'timesheet/updateTSReal';
  public timeSheetAddAPI : string = 'timesheet/addTSUser';
  
  public bulkItemAPI : string = 'bulkitem/getBulkByUser';
  public getPerfomanceByUser : string = 'bulkitem/getPerfomanceByUser';
  
  public detailedBulkItemAPI : string = 'bulkitem/getDetailedBulkItem';
  public detailedBulkItemDeveloperAPI : string = 'bulkitem/getDetailedBulkItemDeveloper';

  public getSprintByBulkItem : string = 'bulkitem/getSprintByBulkItem';
  public getDetailSprintBySprint : string = 'bulkitem/getDetailSprintBySprint';
  public getDetailSprintBySprintDeveloper : string = 'bulkitem/getDetailSprintBySprintDeveloper';
  
  public getClaimedSprintByUser : string = 'claim/getClaimedSprintByUser';
  public getUnclaimedSprint : string = 'claim/getUnclaimedSprint';
  public updateSprintProgress : string = 'claim/updateSprintProgress';
  public updateSprintProgressSPV : string = 'claim/updateSprintProgressSPV';
  public claimSprint : string = 'claim/claimSprint';
  

}
