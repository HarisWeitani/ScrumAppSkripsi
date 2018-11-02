import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
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


  constructor(public navCtrl: NavController) {}

}
