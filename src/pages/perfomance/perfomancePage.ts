import { BulkItemDetailedDeveloperPage } from './../bulk-item-detailed-developer/bulk-item-detailed-developer';
import { Perfomance } from './../../models/Perfomance';
import { ErrorHandlerProvider } from './../../providers/error-handler/error-handler';
import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { PerfomanceProvider } from './../../providers/perfomance/perfomanceProvider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgProgress } from 'ngx-progressbar';
import { PerfomanceByBulk } from '../../models/PerfomanceByBulk';

/**
 * Generated class for the PerfomancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfomance',
  templateUrl: 'perfomancePage.html',
})
export class PerfomancePage {

  perfomance : Perfomance;
  
  perfomanceList : Array<PerfomanceByBulk>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public perfomanceProv : PerfomanceProvider,
              private helperMethod : HelperMethodProvider,
              public ngProgress : NgProgress,
              public errorHandler : ErrorHandlerProvider) {
  }

  ionViewDidLoad() {
    this.perfomanceByDevice();
    console.log('ionViewDidLoad PerfomancePage');
  }

  doRefresh(refresher){

    this.perfomanceProv.getBulkItemList()
        .then(
          (response:any) => {
            refresher.complete();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;
    
            console.log(responseData);
            console.log(responseData.status);
            if(responseData.status.code == "0"){

              this.perfomance = responseData;
              this.perfomanceList = responseData.perfomanceBulkList;

            }else {
              this.errorHandler.catchResponseErrorHandler(responseData);
            }
          }).catch(
          (error:any) => {
            refresher.complete();
            this.errorHandler.catchErrorHandler(error);
          
          }
        );
  }

  perfomanceByDevice(){
    this.ngProgress.start();

    this.perfomanceProv.getBulkItemList()
        .then(
          (response:any) => {

            this.ngProgress.done();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;
    
            console.log(responseData);
            console.log(responseData.status);
            if(responseData.status.code == "0"){

              this.perfomance = responseData;
              this.perfomanceList = responseData.perfomanceBulkList;

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

  onItemPressed(item){
    if( item != null ){
      this.navCtrl.push(BulkItemDetailedDeveloperPage,{bulkItem : item.item});
    }else{
      this.helperMethod.presentToast('Sorry I did not get that item',3000,3 );
    }

  }

}
