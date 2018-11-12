import { HttpClient , HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.0
*/
@Injectable()
export class UsersProvider {

  private url: string= "https://jsonplaceholder.typicode.com/users/1";

  userData: User;
  // userData: UserInterface;
  username: string;
  email: string;

  constructor(private http:HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  validateUser(userData){

    if( userData.username != "" && userData.password != "" ){
       
      this.username = userData.username;
      
      return 'canLogin';
    }

  }
  
  getUsers(): Observable<{}> {
    let data = this.http.get(this.url)
        .pipe(map(this.extractData),
        catchError(this.handleError)
     );
     data.subscribe(coeg => {
       this.userData = new User(coeg.name, coeg.email),
       console.log('data : ', this.userData ),
       this.username = this.userData.$username,
        this.email = this.userData.$email
      }
     );
     
    return data;
      
  }

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
    console.error(errMsg);
    return Observable.throw(errMsg);
  }


  private catchError(error : Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server Error.");
  }

}