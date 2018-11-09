import { UserInterface } from './usersProvider';
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
  data: any;

  userInter : UserInterface;

  constructor(private http:HttpClient) {
    console.log('Hello UsersProvider Provider');
  }

  validateUser(userData){

    if( userData.username != "" && userData.password != "" ){
       
      this.username = userData.username;
      return 'canLogin';
    }

  }

  //dummy api
  getMessages(){
    // return this.http.get(this.url)
    // .do( (data : Response) => console.log(res))
    // .catch(this.catchError);
    this.http.get(this.url)
        .pipe(map(this.extractData),
        catchError(this.handleError)
     );

  }

  getCountries(): Observable<{}> {

    let data = this.http.get(this.url)
        .pipe(map(this.extractData),
        catchError(this.handleError)
     );
     data.subscribe(coeg => {
       console.log(coeg.name),
       console.log(coeg.email),
       this.userData = new User(coeg.name, coeg.email),
        // this.userData.setusername(coeg.name);
      //  this.userInter.email = coeg.email
      console.log('data : ', this.userData)
      }
     );
     console.log('data : ', this.userData);

     
    return data;
      
  }

  
  // getCountries(): Observable<UserResponse[]> {
  //   let data = this.http.get<UserResponse>(this.url)
  //       .pipe(map(coeg => coeg.data),
  //       catchError(this.handleError)
  //    );
  //    data.subscribe(coeg => this.userInter = coeg);
  //   console.log(this.userInter);

  //   return data;
      
  // }
  // getUser(): Observable<User[]> {
  //   // return this.http.get(this.url)
    
    
  // }
  
  
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

  private logResponse(res:Response){
    
  }
  

}

export interface UserInterface{

  username: string;
  email: string;

}

export interface UserResponse{
  data : UserInterface[];
}