import { UsersProvider } from './../../providers/users/usersProvider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportPage } from '../report/reportPage';
import { TimeSheetPage } from '../time-sheet/time-sheetPage';
import { UserPage } from '../user/userPage';
import { User } from '../../models/User';
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
      
      userProvider.user = new User(navPrm.data.username, navPrm.data.password);
      console.log('Tab ',  navPrm.data);

  }

  ionViewDidLoad(){
    console.log('TabsPage IonViewLoad');
  }

}
