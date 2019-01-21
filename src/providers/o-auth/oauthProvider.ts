import { GlobalVariableProvider } from './../global-variable/global-variable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
import { HelperMethodProvider } from '../helper-method/helper-method';
import { OAuthToken } from '../../models/OAuthToken';

/*
  Generated class for the OAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OAuthProvider {

  // public oAuthTokenAPI : string = 'com.adins.mss.webservices/oauth/token';
  public oAuthTokenAPI : string = 'adimobile/projectapp.services/oauth/token';

  userOAuth : OAuthToken;

  constructor(public http: HttpClient, public httpNative : HTTP, 
              public helperMethod : HelperMethodProvider,
              public globalVal : GlobalVariableProvider) {
    console.log('Hello OAuthProvider Provider');
  }

  getOAuthToken(userLogin : any){
    console.log("get Auth Token" + userLogin);
    let headers = {
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept' : 'application/json'
    }
    let body = 'grant_type=password&username='+userLogin.username
                +'&password='+userLogin.password+'&client_id=mobile';

    this.httpNative.setDataSerializer('utf8');
    console.log('URL ' + this.globalVal.ipUrl+this.oAuthTokenAPI);
    console.log('Body ' + body);
    return this.httpNative.post(this.globalVal.ipUrl+this.oAuthTokenAPI,body,headers);
  }

  getHeader(OAuthToken : string){

    let headers = {
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept' : 'application/json',
      'Authorization': 'Bearer ' + OAuthToken
    }

    return headers;
  }

}
