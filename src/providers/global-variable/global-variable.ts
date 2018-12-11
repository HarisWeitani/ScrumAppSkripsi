import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalVariableProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVariableProvider {

  //tirta
  // public ipUrl : string = 'http://172.18.0.201:8080/';
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
  
  public bulkItemAPI : string = '';
  public backlogItemAPI : string = '';
  public iterationItemAPI : string = '';
  public assignIterationAPI : string = '';

}
