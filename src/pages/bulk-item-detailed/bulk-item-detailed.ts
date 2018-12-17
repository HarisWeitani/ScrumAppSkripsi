import { BulkItemDetailed } from './../../models/BulkItemDetailed';
import { BulkItem } from './../../models/BulkItem';
import { ErrorHandlerProvider } from './../../providers/error-handler/error-handler';
import { ReportProvider } from './../../providers/report/reportProvider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperMethodProvider } from '../../providers/helper-method/helper-method';
import { NgProgress } from 'ngx-progressbar';

/**
 * Generated class for the BulkItemDetailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bulk-item-detailed',
  templateUrl: 'bulk-item-detailed.html',
})
export class BulkItemDetailedPage {

  bulkItemSelected : BulkItem;

  bulkItemDetail : BulkItemDetailed;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public reportProvider:ReportProvider,
              private helperMethod : HelperMethodProvider,
              public ngProgress : NgProgress,
              public errorHandler : ErrorHandlerProvider) {

    this.bulkItemSelected = this.navParams.get('bulkItem'); 
    
  }

  ionViewDidLoad() {
    if(this.bulkItemSelected == null){
      this.navCtrl.pop();
      this.helperMethod.presentToast('Please Try Again',3000,2);
    }else{
      this.getDetailedBulkItem();
    }
  }

  getDetailedBulkItem(){
    this.ngProgress.start();

    this.reportProvider.getDetailedBulkItem(this.bulkItemSelected)
        .then(
          (response:any) => {

            this.ngProgress.done();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;
  
            console.log("Cek Ini");
            console.log(responseData.status);
            console.log(responseData);
            if(responseData.status.code == "0"){

              this.bulkItemDetail = responseData;
            
            }else {
              this.errorHandler.catchResponseErrorHandler(responseData);
            }
          }).catch(
          (error:any) => {
            
            this.ngProgress.done();
            this.errorHandler.catchErrorHandler(error);
          
          }
        );
  }

}
