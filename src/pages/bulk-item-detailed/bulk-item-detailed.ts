import { ReportProvider } from './../../providers/report/reportProvider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public reportProvider:ReportProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BulkItemDetailedPage' +  this.navParams.get('mantab'));
  }

}
