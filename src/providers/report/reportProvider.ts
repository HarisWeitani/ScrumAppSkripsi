import { UsersProvider } from './../users/usersProvider';
import { HTTP } from '@ionic-native/http';
import { BulkItem } from './../../models/BulkItem';
import { BackLogItem } from './../../models/BackLogItem';
import { User } from './../../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelperMethodProvider } from '../helper-method/helper-method';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { GlobalVariableProvider } from '../global-variable/global-variable';
import { OAuthProvider } from '../o-auth/oauthProvider';
/*
  Generated class for the ReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportProvider {

  bulkItemList : Array<BulkItem>;
  backlogItemList : Array<BackLogItem>;

  constructor(private http: HttpClient, 
              public httpNative : HTTP,
              public globalVal : GlobalVariableProvider,
              public oauthProvider : OAuthProvider,
              public userProvider : UsersProvider,
              private helperMethod: HelperMethodProvider) {
    
  }

  getAllBulkByUserLogin(user:User) : Observable<any>{
    return this.http.get(this.helperMethod.bulkItemUrl)          
          .pipe(map(this.extractData),
          catchError(this.handleError)
        );
  }

  getBackLogItemByBulkItem(selectedBulkItem:BulkItem) : Observable<any>{
    return this.http.get(this.helperMethod.backlogitemUrl)          
          .pipe(map(this.extractData),
          catchError(this.handleError)
        );
  }

  getBulkItemList(){
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    this.httpNative.setDataSerializer('json');
    console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.bulkItemAPI);
    this.httpNative.setRequestTimeout(60);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.bulkItemAPI
                              ,this.userProvider.userLogin,headers);
  }

  getBackLogItemByBulkItemList(bulkItem : any){
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    this.httpNative.setDataSerializer('json');
    console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.backlogItemAPI);
    this.httpNative.setRequestTimeout(60);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.backlogItemAPI
                              ,bulkItem,headers);
  
  }

  getIterationItemList(backlogItem : any){
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    this.httpNative.setDataSerializer('json');
    console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.iterationItemAPI);
    this.httpNative.setRequestTimeout(60);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.iterationItemAPI
                              ,backlogItem,headers);

  }

  assignIterationToUser(iterationItem : any){
    let headers = this.oauthProvider.getHeader(this.oauthProvider.userOAuth.access_token);

    this.httpNative.setDataSerializer('json');
    console.log("URL TIRTA " + this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.assignIterationAPI);
    this.httpNative.setRequestTimeout(60);
    return this.httpNative
            .post(this.globalVal.ipUrl + this.globalVal.baseUrl + this.globalVal.assignIterationAPI
                              ,iterationItem,headers);

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
