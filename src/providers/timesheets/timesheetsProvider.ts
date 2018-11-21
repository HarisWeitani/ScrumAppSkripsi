import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeSheet } from '../../models/TimeSheet';
import { map, catchError } from 'rxjs/operators';
import { HelperMethodProvider } from '../helper-method/helper-method';
/*
  Generated class for the TimesheetsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimesheetsProvider {
  
  private baseUrl: string= "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient, private helperMethod :HelperMethodProvider) {
    console.log('Hello TimesheetsProvider Provider');
    
  }

  getAllTimeSheetsByUserLoggedIn(user:any): Observable<any> {
    // return this.http.post(this.baseUrl,user)
    //         .pipe(map(this.extractData),
    //         catchError(this.handleError)
    // );
    
    //testing purpose
    return this.http.get(this.helperMethod.timeSheetUrl)
            .pipe(map(this.extractData),
            catchError(this.handleError)
    );
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
