import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../models/User';
import { HelperMethodProvider } from '../helper-method/helper-method';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.0
*/
@Injectable()
export class UsersProvider {

  private baseUrl: string= "https://jsonplaceholder.typicode.com/users";
  private postUrl: string= "https://jsonplaceholder.typicode.com/posts/";

  user: User;

  constructor(private http:HttpClient, private helperMethod : HelperMethodProvider) {
    console.log('Hello UsersProvider Provider');
  }

  testerMethod() : Observable<any>{
    
    return this.http.get(this.helperMethod.personUrl)
              .pipe(map(this.extractData),
                    catchError(this.handleError)
              );

  }

  validateLogin(userLogin : any) : Observable<any>{
    console.log(userLogin);
    // return this.http.post(this.postUrl, userLogin)
    //       .pipe(map(this.extractData),
    //       catchError(this.handleError)
    //   );
    return this.http.get(this.helperMethod.personUrl)
          .pipe(map(this.extractData),
          catchError(this.handleError)
      );
  }
  
  getUsers(): Observable<any> {
    return this.http.get(this.baseUrl)
        .pipe(map(this.extractData),
              catchError(this.handleError)
    );
  }

  getOneUserById(id:string):Observable<any>{

    return this.http.get(this.baseUrl + '/' + id)
        .pipe(map(this.extractData),
              catchError(this.handleError)
    );
  }


  doSave(user: any): Observable<any> {
    console.log(user);
    return this.http.post(this.postUrl, user)
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