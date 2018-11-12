import { UsersProvider } from './../../providers/users/usersProvider';
import { User } from './../../models/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider : UsersProvider ) {
  }

  ionViewDidLoad() {

    // this.userProvider.getCountries()
    // .subscribe(
    //   coeg => console.log(coeg));
    console.log('ionViewDidLoad ReportPage');
  }

}
