import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { User } from '../../models/User';
import { HelperMethodProvider } from '../helper-method/helper-method';
import { HTTP } from '@ionic-native/http';
import { OAuthProvider } from '../o-auth/oauthProvider';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.0
*/
@Injectable()
export class UsersProvider {
testing:string;
  private baseUrl: string= "https://jsonplaceholder.typicode.com/users";
  private postUrl: string= "https://jsonplaceholder.typicode.com/posts/";

  user: User;
 
  constructor(private http:HttpClient, private helperMethod : HelperMethodProvider,
              public httpNative : HTTP, public outhProvider : OAuthProvider) {
    console.log('Hello UsersProvider Provider');
  }

  testerMethod(){
    
    return this.httpNative.get(this.baseUrl,{},{});

  }

  validateLoginBrowser(userLogin : any) : Observable<any>{
    console.log(userLogin);
    
    return this.http.get(this.helperMethod.personUrl)
          .pipe(map(this.extractData),
          catchError(this.handleError)
      );
  }

  validateLoginDevice(userLogin : any){

    let headers = {
      'Content-Type':'application/x-www-form-urlencoded',
      'Accept' : 'application/json',
      'Authorization': 'Bearer KAMPUNGAN'
    }

    console.log(headers);
    console.log("URL TIRTA " + this.helperMethod.ipUrl + this.helperMethod.baseUrl + this.helperMethod.userLoginAPI);
    this.httpNative.setRequestTimeout(10);
    return this.httpNative
            .post(this.helperMethod.ipUrl + this.helperMethod.baseUrl + this.helperMethod.userLoginAPI
                              ,userLogin,headers);

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