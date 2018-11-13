import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimeSheet } from '../../models/TimeSheet';

/*
  Generated class for the TimesheetsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TimesheetsProvider {
  
  private postUrl: string= "https://jsonplaceholder.typicode.com/posts";

  constructor(public http: HttpClient) {
    console.log('Hello TimesheetsProvider Provider');
  }

  getPost(){
    // return this.http.get<TimeSheet>(this.postUrl);
  }

}
