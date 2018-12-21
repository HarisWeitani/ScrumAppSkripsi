import { HelperMethodProvider } from './../helper-method/helper-method';
import { GlobalVariableProvider } from './../global-variable/global-variable';
import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthProvider } from '../o-auth/oauthProvider';
import { UsersProvider } from '../users/usersProvider';

/*
  Generated class for the PerfomanceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerfomanceProvider {

  constructor(private http: HttpClient, 
              public httpNative : HTTP,
              public globalVal : GlobalVariableProvider,
              public oauthProvider : OAuthProvider,
              public userProvider : UsersProvider,
              private helperMethod: HelperMethodProvider) {
    console.log('Hello PerfomanceProvider Provider');
  }

  getBulkItemList(){
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    this.httpNative.setDataSerializer('json');
    console.log("URL " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getPerfomanceByUser);
    this.httpNative.setRequestTimeout(600);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getPerfomanceByUser
                              ,this.userProvider.user,headers);
  }

  getDetailedBulkItemDeveloper(bulkItem : any){
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    this.httpNative.setDataSerializer('json');
    console.log("URL " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.detailedBulkItemDeveloperAPI);
    this.httpNative.setRequestTimeout(600);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.detailedBulkItemDeveloperAPI
                              ,bulkItem,headers);
  }

  getSprintDetailBySprint(sprint : any){
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    this.httpNative.setDataSerializer('json');
    console.log("URL " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getDetailSprintBySprintDeveloper);
    this.httpNative.setRequestTimeout(60);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.getDetailSprintBySprintDeveloper
                              ,sprint,headers);

  }

}
