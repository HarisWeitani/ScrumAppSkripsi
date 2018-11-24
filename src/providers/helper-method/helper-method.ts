import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController } from 'ionic-angular';

/*
  Generated class for the HelperMethodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperMethodProvider {
//http://localhost:8080/com.adins.mss.webservices/services/m/user/login
  public loading:any;
  public ipUrl : string = 'http://10.107.200.165:8080/';
  public baseUrl : string = 'com.adins.mss.webservices/services/m/';

  public userLoginAPI : string  ='user/login';

  public personUrl : string = 'assets/jsonFile/personResponse.json';
  public timeSheetUrl : string = 'assets/jsonFile/timesheetResponse.json';
  public bulkItemUrl : string = 'assets/jsonFile/bulkitemResponse.json';
  public backlogitemUrl : string = 'assets/jsonFile/backlogitemResponse.json';

  constructor(private http: HttpClient, 
              private loadingController:LoadingController,
              private toastController:ToastController) {
    console.log('Hello HelperMethodProvider Provider');
  }

  loadingService(message : string){
    this.loading = this.loadingController.create(
      {
        spinner : 'bubbles',
        content : message
      }
    );
    this.loading.present();
  }

  presentToast(message:string , duration:any , position:any){

    if(position == 1) position = 'top';
    if(position == 2) position = 'middle';
    if(position == 3) position = 'bottom';
        

    let toast = this.toastController.create({
      message: message,
      duration: duration,
      position: position
    });

    toast.present();

  }

}
