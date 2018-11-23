import { BulkItem } from './../../models/BulkItem';
import { BackLogItem } from './../../models/BackLogItem';
import { User } from './../../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HelperMethodProvider } from '../helper-method/helper-method';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/*
  Generated class for the ReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportProvider {

  constructor(private http: HttpClient, private helperMethod: HelperMethodProvider) {
    console.log('Hello ReportProvider Provider');
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
