import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../models/User';

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

  constructor(private http:HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  validateLogin(userLogin : any) : Observable<any>{
    console.log(userLogin);
    return this.http.post(this.postUrl, userLogin);
  }

  getUsers(): Observable<any> {

    return this.http.get(this.baseUrl)
        .pipe(map(this.extractData),
              catchError(this.handleError)
    );
  }

  getOneUserById(id:string){

    return this.http.get(this.baseUrl + '/' + id)
        .pipe(map(this.extractData),
              catchError(this.handleError)
    );
  }


  doSave(user: any): Observable<any> {
    console.log(user);
    return this.http.post(this.postUrl, user);
    // let result: Observable<Object>;
    // result = this.http.post(this.baseUrl, user)
    // return result.catch(error => Observable.throw(error));
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