import { BulkItem } from './../../models/BulkItem';
import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { UsersProvider } from '../../providers/users/usersProvider';
import { User } from '../../models/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Events, ModalController } from 'ionic-angular';
import { ReportProvider } from '../../providers/report/reportProvider';
import { BackLogItem } from '../../models/BackLogItem';
import { ReportPageModal } from '../report-page-modal/report-page-modal';

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

  bulkItemList : Array<BulkItem>;
  backLogItemList : Array<BackLogItem>;
  selectedBulkItem : BulkItem;

  constructor(private navCtrl: NavController, private navParams: NavParams, 
              private userProvider : UsersProvider,
              private helperMethod : HelperMethodProvider,
              private reportProvider : ReportProvider,
              private modalCtrl : ModalController) {
    
  }

  ionViewDidLoad() {
    this.getAllBulk();
    console.log('ionViewDidLoad ReportPage ');
  }
  ionViewWillEnter(){
    console.log('will enter');
  }
  ionViewDidEnter(){
    console.log('Did enter');
  }

  getAllBulk(){
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

  getCustomJson(){  
    this.userProvider.testerMethod().subscribe(
      (response:any)=>{
        console.log(response);
        this.items = response.list_of_project;
        console.log(this.items);
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
          
            let reportModal = this.modalCtrl.create(ReportPageModal,{backLogItemList : response});
            reportModal.present();

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
