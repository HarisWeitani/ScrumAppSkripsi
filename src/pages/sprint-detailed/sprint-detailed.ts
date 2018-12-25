import { SprintItemPage } from './../sprint-item/sprint-item';
import { ErrorHandlerProvider } from './../../providers/error-handler/error-handler';
import { SprintSummary } from './../../models/SprintSummary';
import { SprintDetailed } from './../../models/SprintDetailed';
import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportProvider } from '../../providers/report/reportProvider';
import { NgProgress } from 'ngx-progressbar';

/**
 * Generated class for the SprintDetailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sprint-detailed',
  templateUrl: 'sprint-detailed.html',
})
export class SprintDetailedPage {

  sprintDetailedList : Array<SprintDetailed>;
  sprintSummary : SprintSummary;

  sprintData : { 
    sprintDetailedList : any;
    sprintSummary : any;
  }

  sprintRequest : {
    sprint : any;
    bulk_id : any;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public helperMethod : HelperMethodProvider,
              public reportProvider:ReportProvider,
              public ngProgress : NgProgress,
              public errorHandler : ErrorHandlerProvider) {

    this.sprintRequest = navParams.get("sprintRequest");
  }

  ionViewDidLoad() {

    if(this.sprintRequest == null){
      this.navCtrl.pop();
      this.helperMethod.presentToast('Please Try Again',3000,2);
    }else{
      this.getSprintDetailed();
    }

    console.log('ionViewDidLoad SprintDetailedPage');
  }



  onItemPressed(item){
    console.log("Sprint Detailed");
    console.log(item.item);
    this.navCtrl.push(SprintItemPage,{item : item.item});
  }

  getSprintDetailed(){
    this.ngProgress.start();

    this.reportProvider.getSprintDetailBySprint(this.sprintRequest)
        .then(
          (response:any) => {

            this.ngProgress.done();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;
  
            console.log(responseData.status);
            if(responseData.status.code == "0"){
  
              this.sprintDetailedList = responseData.sprintDetailedList;
              this.sprintSummary = responseData.sprintSummary;
              
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
