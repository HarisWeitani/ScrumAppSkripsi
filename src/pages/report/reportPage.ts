import { NgProgress } from 'ngx-progressbar';
import { BulkItem } from './../../models/BulkItem';
import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { UsersProvider } from '../../providers/users/usersProvider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Events, ModalController } from 'ionic-angular';
import { ReportProvider } from '../../providers/report/reportProvider';
import { BackLogItem } from '../../models/BackLogItem';
import { BackLogReportPage } from '../back-log-report/back-log-report';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'reportPage.html',
})
export class ReportPage {

  items : any[];

  public progressVal = 0;

  progressValList : Array<String>;
  bulkItemList : Array<BulkItem>;
  backLogItemList : Array<BackLogItem>;
  selectedBulkItem : BulkItem;

  constructor(private navCtrl: NavController, private navParams: NavParams, 
              private userProvider : UsersProvider,
              private helperMethod : HelperMethodProvider,
              private reportProvider : ReportProvider,
              public ngProgress : NgProgress,
              public errorHandler : ErrorHandlerProvider,
              private modalCtrl : ModalController) {
    
  }

  run(){

    var intervaler = 
        setInterval(function(){
          this.progressVal++;
          if(this.progressVal == 100){
            clearInterval(intervaler);
          }
        }.bind(this),20);

  }

  ionViewDidLoad() {
    this.getAllBulk();
    this.run();
    console.log('ionViewDidLoad ReportPage ');
  }

  ionViewWillEnter(){
    console.log('will enter');
  }
  ionViewDidEnter(){
    console.log('Did enter');
  }

  getAllBulk(){
    // this.bulkByBrowser();

    this.helperMethod.loadingService('Getting Your Bulk Item...');

    this.reportProvider.getBulkItemList()
        .then(
          (response:any) => {
            this.helperMethod.loading.dismiss();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;
    
            console.log(responseData.bulkItemList);
            console.log(responseData.status);
            if(responseData.status.code == "0"){

              this.reportProvider.bulkItemList = responseData.bulkItemList;
              this.bulkItemList = responseData.bulkItemList;

            }else {
              this.errorHandler.catchResponseErrorHandler(responseData);
            }
    
          }).catch(
          (error:any) => {
            
            this.helperMethod.loading.dismiss();
            this.errorHandler.catchErrorHandler(error);
    
          }
        );

  }

  bulkByBrowser(){
    this.helperMethod.loadingService('Getting Your Bulk Item...');

    this.reportProvider.getAllBulkByUserLogin(this.userProvider.user)
        .subscribe(
          (response:any) => {
            this.bulkItemList = response;
            console.log(this.bulkItemList);

            this.helperMethod.loading.dismiss();
          },
          (error : any) => {
            console.log(error);
            console.error(error.status);
            console.error(error.statusText);
            this.helperMethod.loading.dismiss();
            this.helperMethod.presentToast('Gagal 9999: Jangan Hubungi Team IT',2000,3);
          }
        );
  }

  onItemPressed(item){
    this.helperMethod.loadingService('Getting Your Bulk Item...');

    this.selectedBulkItem = item.item;
    console.log('On Item Pressed ',this.selectedBulkItem);

    this.reportProvider.getBackLogItemByBulkItem(this.selectedBulkItem)
        .subscribe(
          (response:any) => {
          
            // let reportModal = this.modalCtrl.create(ReportPageModal,{backLogItemList : response});
            // reportModal.present();

            this.navCtrl.push(BackLogReportPage,{mantab : 'amsdasd'});

            this.helperMethod.loading.dismiss();
          },
          (error : any) => {
            console.log(error);
            console.error(error.status);
            console.error(error.statusText);
            this.helperMethod.loading.dismiss();
            this.helperMethod.presentToast('Gagal 9999: Jangan Hubungi Team IT',2000,3);
          }
        )
  }

}
