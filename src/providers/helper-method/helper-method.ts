import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

/*
  Generated class for the HelperMethodProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelperMethodProvider {

  public loading:any;

  constructor(public http: HttpClient, 
            public loadingController:LoadingController,
            public toastController:ToastController) {
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