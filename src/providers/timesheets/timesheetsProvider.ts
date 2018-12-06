import { HTTP } from '@ionic-native/http';
import { GlobalVariableProvider } from './../global-variable/global-variable';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeSheet } from '../../models/TimeSheet';
import { map, catchError } from 'rxjs/operators';
import { HelperMethodProvider } from '../helper-method/helper-method';
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

  constructor(private http: HttpClient, public httpNative : HTTP, 
              private helperMethod :HelperMethodProvider,
              public globalVal : GlobalVariableProvider,
              public oauthProvider : OAuthProvider) {
    console.log('Hello TimesheetsProvider Provider');
    
  }

  getAllTimeSheetsByUserLoggedIn(user:any){
    // return this.http.post(this.baseUrl,user)
    //         .pipe(map(this.extractData),
    //         catchError(this.handleError)
    // );
    
    //testing purpose
    // return this.http.get(this.helperMethod.timeSheetUrl)
    //         .pipe(map(this.extractData),
    //         catchError(this.handleError)
    // );

    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    console.log(headers);
    this.httpNative.setDataSerializer('json');
    console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetAPI);
    this.httpNative.setRequestTimeout(60);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.timeSheetAPI
                              ,user,headers);

  }

  //helping method
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(error.status);
    console.error(error.statusText);
    console.error(errMsg);
    return Observable.throw(error);
  }
  private catchError(error : Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server Error.");
  }
}
