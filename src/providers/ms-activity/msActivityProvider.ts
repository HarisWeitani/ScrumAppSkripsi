import { GlobalVariableProvider } from './../global-variable/global-variable';
import { HelperMethodProvider } from './../helper-method/helper-method';
import { HTTP } from '@ionic-native/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OAuthProvider } from '../o-auth/oauthProvider';

/*
  Generated class for the MsActivityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MsActivityProvider {

  constructor(public http: HttpClient, public httpNative:HTTP, 
              public oauthProvider:OAuthProvider , 
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

}
