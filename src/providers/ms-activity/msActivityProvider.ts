import { GlobalVariableProvider } from './../global-variable/global-variable';
import { HelperMethodProvider } from './../helper-method/helper-method';
import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthProvider } from '../o-auth/oauthProvider';
import { Ms_Activity } from '../../models/Ms_Activity';
import { StorageProvider } from '../storage/storageProvider';

/*
  Generated class for the MsActivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MsActivityProvider {

  msActivityList : Array<Ms_Activity>;

  activityID : String;

  constructor(public http: HttpClient, public httpNative:HTTP, 
              public oauthProvider:OAuthProvider , 
              public storageProvider : StorageProvider,
              public helperMethod:HelperMethodProvider,
              public globalVal:GlobalVariableProvider) {
    console.log('Hello MsActivityProvider Provider');
  }

  getAllData(user : any){
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    console.log(headers);
    this.httpNative.setDataSerializer('json');
    console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.msActivityAPI);
    this.httpNative.setRequestTimeout(10);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.msActivityAPI
                              ,user,headers);

  }

  
  getIdByActivityCode(activityType : any){
    this.msActivityList.forEach(element => {
      if(element.activity_type == activityType){
        this.activityID = element.activity_id;
        return;
      }
    });
  }

  save(){
    this.storageProvider.save('Ms_Activity', this.msActivityList);
  }

  loadDataFromStorage(){
    this.storageProvider.getStorageByKey('Ms_Activity')
        .then(
          (response:any) =>{
            this.msActivityList = response;
          }
        ).catch(
          (error:any) =>{
            this.helperMethod.presentToast('Load Error', 3000,3);
          }
        );
  }

}
