import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  private baseUrl: string= "https://jsonplaceholder.typicode.com/users";
  private postUrl: string= "https://jsonplaceholder.typicode.com/posts";

  userNameLogin: string;
  email: string;

  constructor(private http:HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  validateUser(userLogin){

    if( userLogin.username != "" && userLogin.password != "" ){
       
      this.userNameLogin = userLogin.username;
      
      return 'canLogin';
    }

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

  
  doSave(user: FormData): Observable<any> {
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
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  private catchError(error : Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server Error.");
  }


  //unused tapi sayang dihapus
  // getUsers(): Observable<any> {
  //   let data = this.http.get(this.baseUrl)
  //       .pipe(map(this.extractData),
  //       catchError(this.handleError)
  //    );
  //    data.subscribe(coeg => {
  //      this.userData = new User(coeg.name, coeg.email),
  //      console.log('data : ', this.userData ),
  //      this.username = this.userData.$username,
  //       this.email = this.userData.$email
  //     }
  //    );
  //   return data;
  // }
}