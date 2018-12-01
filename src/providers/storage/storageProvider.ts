import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  public timeSheetKey : string = 'TimeSheet';
  public userKey : string = 'User';
  public activity : string = 'Ms_Activity';

  constructor(public storage : Storage) {
    console.log('Hello StorageProvider Provider');
  }

  save(key:string, value:any){
    this.storage.set(key,value);
  }

  getStorageByKey(key:string){
    return this.storage.get(key);
  }

}
