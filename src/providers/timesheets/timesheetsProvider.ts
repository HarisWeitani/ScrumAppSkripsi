import { UsersProvider } from './../users/usersProvider';
import { HTTP } from '@ionic-native/http';
import { GlobalVariableProvider } from './../global-variable/global-variable';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TimeSheet } from '../../models/TimeSheet';
import { OAuthProvider } from '../o-auth/oauthProvider';
/*
  Generated class for the TimesheetsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimesheetsProvider {
  
  private baseUrl: string= "https://jsonplaceholder.typicode.com/posts";

  timeSheetList : Array<TimeSheet>;

  constructor(public httpNative : HTTP, 
              public globalVal : GlobalVariableProvider,
              public userProvider : UsersProvider,
              public oauthProvider : OAuthProvider) {
    console.log('Hello TimesheetsProvider Provider');

    
  }

  getAllTimeSheetsByUserLoggedIn(user:any){
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    console.log(headers);
    this.httpNative.setDataSerializer('json');
    console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetAPI);
    this.httpNative.setRequestTimeout(60);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetAPI
                              ,user,headers);

  }

  updateGoRealTimeSheet(timeSheetData:any){
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    this.httpNative.setDataSerializer('json');
    console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetGoRealAPI);
    this.httpNative.setRequestTimeout(60);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetGoRealAPI
                              ,timeSheetData,headers);

  }

  addNewTimeSheet(timeSheet : any){
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    this.httpNative.setDataSerializer('json');
    console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetAddAPI);
    this.httpNative.setRequestTimeout(60);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetAddAPI
                              ,timeSheet,headers);
  }

}
