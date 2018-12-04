import { HelperMethodProvider } from './../helper-method/helper-method';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic2-auto-complete';
import { TimeSheet } from '../../models/TimeSheet';

/*
  Generated class for the MsProjectAutoCompleteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MsProjectAutoCompleteProvider implements AutoCompleteService {

  labelAttribute = "name";

  timeSheet : Array<TimeSheet>;

  constructor(public http: HttpClient, public helperMethod:HelperMethodProvider) {
    console.log('Hello MsProjectAutoCompleteProvider Provider');
  }

  getResults(keyword:string) {
    return this.http.get(this.helperMethod.timeSheetUrl)
      .map(
        (result:any) =>
        {
          this.timeSheet = result;
          return this.timeSheet.filter(item => item.activities_type.toLowerCase().startsWith(keyword.toLowerCase()) )
        });
  }
}
