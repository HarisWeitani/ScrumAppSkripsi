import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalVariableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVariableProvider {

  //tirta
  // public ipUrl : string = 'http://172.18.0.93:8080/';
  //local
  public ipUrl : string = 'http://172.18.0.218:8080/';
  public baseUrl : string = 'com.adins.mss.webservices/services/m/';

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
  
  public getClaimedSprintByUser : string = 'bulkitem/getClaimedSprintByUser';
  public getUnclaimedSprint : string = 'bulkitem/getUnclaimedSprint';
  public updateSprintProgress : string = 'bulkitem/updateSprintProgress';
  public claimSprint : string = 'bulkitem/claimSprint';
  

}
