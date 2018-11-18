import { UsersProvider } from './../../providers/users/usersProvider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ReportPage } from '../report/reportPage';
import { TimeSheetPage } from '../time-sheet/time-sheetPage';
import { UserPage } from '../user/userPage';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  timeSheetRoot = TimeSheetPage
  reportRoot = ReportPage
  userRoot = UserPage


  constructor(public navCtrl: NavController, public navPrm:NavParams, 
    public userProvider : UsersProvider, public app:App) {

  }

  ionViewDidLoad(){
    console.log('TabsPage IonViewLoad');
  }
  ionViewWillEnter(){
    console.log('will enter');
  }
  ionViewDidEnter(){
    console.log('Did enter');
  }
  ionViewDidLeave(){
    console.log('Did Leave');
  }

}
