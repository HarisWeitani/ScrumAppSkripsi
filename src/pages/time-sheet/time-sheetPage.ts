import { StorageProvider } from './../../providers/storage/storageProvider';
import { TimeSheetPageModal } from './../time-sheet-page-modal/time-sheet-page-modal';
import { UsersProvider } from './../../providers/users/usersProvider';
import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { TimeSheet } from '../../models/TimeSheet';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ModalController, AlertController } from 'ionic-angular';
import { TimesheetsProvider } from '../../providers/timesheets/timesheetsProvider';
import { text } from '@angular/core/src/render3/instructions';
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

  listItem: Array<String> = [];
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public timeSheetProvider : TimesheetsProvider, public helperMethod:HelperMethodProvider,
              public userProvider : UsersProvider,
              public events: Events, public modalCtrl : ModalController,
              public alertCtrl : AlertController,
              public storageProvider : StorageProvider) {
    
                this.listItem.push('asdasd1');
                this.listItem.push('asdasd2');
                this.listItem.push('asdasd3');
                this.listItem.push('asdasd4');
                this.listItem.push('asdasd5');
  }

  ionViewDidLoad() {
    this.helperMethod.loadingService('Getting Your Data Please Wait...');

    let userLoggedIn = {
      username : this.userProvider.user.person_name,
      password : this.userProvider.user.job_name
    }

    this.timeSheetProvider.getAllTimeSheetsByUserLoggedIn(userLoggedIn)
        .subscribe(
          (response:any) => {
            this.helperMethod.loading.dismiss();
            this.timeSheetDataList = response;
            console.log(response);
            this.storageProvider.save('TimeSheet',this.timeSheetDataList);
            this.timeSheetHeaderFn(this.timeSheetDataList);
          },
          (error:any) => {
            console.log(error);
            console.error(error.status);
            console.error(error.statusText);
            this.helperMethod.loading.dismiss();
            this.helperMethod.presentToast('Gagal 9999: Jangan Hubungi Team IT',2000,3);
          }
        );

    console.log('ionViewDidLoad TimeSheetPage');
  }
  
  timeSheetHeaderFn(dataList : Array<TimeSheet>) {

    let currentDate = "00/00";
    let currentTimeSheets = [];

    dataList.forEach((value,index) => {

      if( value.dtm_crt != currentDate ){

        currentDate = value.dtm_crt;

        let newGroup = {
          date_time : currentDate,
          timesheets : []
        };
        console.log(newGroup);
        console.log(currentTimeSheets);

        currentTimeSheets = newGroup.timesheets;
        
        this.groupedTimeSheetDataList.push(newGroup);
        
      }
      currentTimeSheets.push(value);
    })
    console.log(this.groupedTimeSheetDataList);

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
    this.storageProvider.getStorageByKey('TimeSheet')
        .then(
          (response:any) =>{
            console.log(response);
          }
        );
  }

  alertPopUpDetailTimeSheet(){

    let messages = 'First Row \nSecond Row';

    let alert = this.alertCtrl.create({
      title: 'Detail',
      // message: 'asdasd',
      inputs : [
        {
          value : 'asdasd1'
        },
        {
          label : 'asdasd2'
        },
        {
          label : 'asdasd3'
        },
        {
          label : 'asdasd4'
        }
      ],
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.events.publish('Auth',0);
          }
        }
      ]
    });
    alert.present();
  }

}
