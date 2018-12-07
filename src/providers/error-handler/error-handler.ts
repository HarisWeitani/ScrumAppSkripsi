import { HelperMethodProvider } from './../helper-method/helper-method';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ErrorHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErrorHandlerProvider {

  constructor(public http: HttpClient, public helperMethod : HelperMethodProvider) {
    console.log('Hello ErrorHandlerProvider Provider');
  }


  catchErrorHandler(error:any){
    let errorData;

    try {
      errorData = JSON.parse(error.error);
    } catch (error) {
      this.helperMethod.presentToast('Server is Unavailable',4000,2);
      // return;
    }

    console.log(error);
    console.error(error.error);
    console.error(error.status);

    if(errorData.error == 'invalid_grant'){
      this.helperMethod.presentToast(errorData.error_description,4000,3);
    }
    if(error.status == "-1"){
      this.helperMethod.presentToast('Failed To Connect Please Check Your Connection',4000,2);
    }
    if(error.status == "1"){
      this.helperMethod.presentToast('Request Time Out Please Check Your Connection',4000,1);
    }
    if( error.status == "9999" ){
      this.helperMethod.presentToast(errorData.error_description,3000,3);
    }
    if(error.error == 'TimeoutError'){
      this.helperMethod.presentToast('Slow Connection',4000,2);
    }else{
      this.helperMethod.presentToast('Error 9999: Jangan Hubungi Team IT',4000,3);
    }
  }

  catchResponseErrorHandler(responseData:any){

    if( responseData.status.code == "1159" ){
      this.helperMethod.presentToast(responseData.status.message,3000,2);
    }else if( responseData.status.code == "8101" ){
      this.helperMethod.presentToast(responseData.status.message,3000,3);
    }else if( responseData.status.code == "9999" ){
      this.helperMethod.presentToast(responseData.status.message,3000,3);
    }

  }

}
