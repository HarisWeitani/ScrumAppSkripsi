import { GlobalVariableProvider } from './../global-variable/global-variable';
import { HelperMethodProvider } from './../helper-method/helper-method';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { OAuthProvider } from '../o-auth/oauthProvider';
import { Ms_Project } from '../../models/Ms_Project';

/*
  Generated class for the MsProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MsProjectProvider {

  msProjectList : Array<Ms_Project>;

  constructor(public http: HttpClient, public httpNative:HTTP, 
              public oauthProvider:OAuthProvider , 
              public helperMethod:HelperMethodProvider,
              public globalVal:GlobalVariableProvider) {
    console.log('Hello MsProjectProvider Provider');
  }

  
  getAllData(user : any){
    
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    console.log(headers);
    this.httpNative.setDataSerializer('json');
    console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.msProjectAPI);
    this.httpNative.setRequestTimeout(60);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.msProjectAPI
                              ,user,headers);

  }

}
