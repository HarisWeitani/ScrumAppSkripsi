import { StorageProvider } from './../../providers/storage/storageProvider';
import { TimeSheetPageModal } from './../time-sheet-page-modal/time-sheet-page-modal';
import { UsersProvider } from './../../providers/users/usersProvider';
import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { TimeSheet } from '../../models/TimeSheet';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController, AlertController } from 'ionic-angular';
import { TimesheetsProvider } from '../../providers/timesheets/timesheetsProvider';
import { ErrorHandlerProvider } from '../../providers/error-handler/error-handler';
/**
 * Generated class for the TimeSheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-sheet',
  templateUrl: 'time-sheetPage.html',
})
export class TimeSheetPage {

  timeSheetDataList : Array<TimeSheet>;
  groupedTimeSheetDataList = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public timeSheetProvider : TimesheetsProvider, public helperMethod:HelperMethodProvider,
              public userProvider : UsersProvider,
              public errorHandler : ErrorHandlerProvider,
              public events: Events, public modalCtrl : ModalController,
              public alertCtrl : AlertController,
              public storageProvider : StorageProvider) {
    
  }

  ionViewDidLoad() {
    // this.getAllTimeSheet();
    console.log('ionViewDidLoad TimeSheetPage');
  }

  getAllTimeSheet(){

    this.helperMethod.loadingService("Getting TimeSheet Data..");
    this.timeSheetProvider.getAllTimeSheetsByUserLoggedIn(this.userProvider.userLogin)
        .then(
          (response:any) => {
            this.helperMethod.loading.dismiss();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;

            console.log(responseData);
            console.log(responseData.status);

            if(responseData.status.code == "0"){
              
              this.timeSheetProvider.timeSheetList = responseData.timeSheetByUser;

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

  onItemUpdatePressed(itemData){
    console.log('OnItemUpdate Pressed ', itemData);

    let timeSheetModal = this.modalCtrl.create(TimeSheetPageModal,{timeSheetData : itemData.data});
    timeSheetModal.present();

  }

  doAdd(){
    console.log("Add Button Pressed");
    let timeSheetModal = this.modalCtrl.create(TimeSheetPageModal,{timeSheetData : 'add'});
    timeSheetModal.present();
  }

  onItemPressed(itemId){
    console.log(itemId);
    // this.alertPopUpDetailTimeSheet();
    // this.storageProvider.getStorageByKey('Ms_Project')
    //     .then(
    //       (response:any) =>{
    //         console.log(response);
    //       }
    //     );

    // this.storageProvider.getKeys()
    //     .then(
    //       (response:any) => {
    //         console.log(response);
    //       }
    //     );
    // console.log('mantab');
    // this.storageProvider.clear();
    // console.log('wawa');
    // this.storageProvider.getKeys()
    // .then(
    //   (response:any) => {
    //     console.log(response);
    //   }
    // );
  }

}
