import { BackLogItem } from './../../models/BackLogItem';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ReportPageModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-page-modal',
  templateUrl: 'report-page-modal.html',
})
export class ReportPageModal {

  backLogitem : BackLogItem;
  
  backLogItemList : Array<BackLogItem>;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private viewCtrl : ViewController ) {
  }

  ionViewDidLoad() {
    this.backLogItemList = this.navParams.get('backLogItemList');
    console.log('ionViewDidLoad ReportPageModalPage ', this.backLogItemList);
  }


  onItemPressed(){
    
  }
  doCloseModal(){
    console.log("Pressed");
    this.viewCtrl.dismiss();
  }

}
