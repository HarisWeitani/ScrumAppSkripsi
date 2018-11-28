import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';

/*
  Generated class for the OAuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OAuthProvider {

  public ipUrl : string = 'http://172.18.0.236:8080/';
  public baseUrl : string = 'com.adins.mss.webservices/services/m/';
  public oAuthTokenAPI : string = 'http://172.18.0.236:8080/com.adins.mss.webservices/oauth/token';

  

  constructor(public http: HttpClient, public httpNative : HTTP) {
    console.log('Hello OAuthProvider Provider');
  }

  getOAuthToken(userLogin : any){
    let headers = {
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept' : 'application/json'
    }
    let body = 'grant_type=password&username='+userLogin.username
                +'&password='+userLogin.password+'&client_id=mobile';

    this.httpNative.setDataSerializer('utf8');
    return this.httpNative.post(this.oAuthTokenAPI,body,headers);
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
