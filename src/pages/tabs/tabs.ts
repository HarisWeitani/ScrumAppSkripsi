import { UsersProvider } from './../../providers/users/usersProvider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportPage } from '../report/report';
import { TimeSheetPage } from '../time-sheet/time-sheet';
import { UserPage } from '../user/user';
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
    public userProvider : UsersProvider) {

      userProvider.userNameLogin = navPrm.get('username');
      console.log('Tab ',  navPrm.get('username'));
  }

  ionViewDidLoad(){
    console.log('enter');
  }

}
