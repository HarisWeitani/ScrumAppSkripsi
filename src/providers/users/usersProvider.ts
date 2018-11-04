import { HttpClient , HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operator/map';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.0
*/
@Injectable()
export class UsersProvider {

  private url: string= "https://jsonplaceholder.typicode.com/users";

  userData: User;
  username: string;

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
    return this.http.get(this.url)
    .do( (data : Response) => console.log(res))
    .catch(this.catchError);
  }

  private catchError(error : Response | any){
    console.log(error);
    return Observable.throw(error.json().error || "Server Error.");
  }

  private logResponse(res:Response){
    
  }
  

}

export interface User{

  username: string;
  email: string;

}