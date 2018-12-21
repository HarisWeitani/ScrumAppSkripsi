import { ErrorHandlerProvider } from './../../providers/error-handler/error-handler';
import { PerfomanceProvider } from './../../providers/perfomance/perfomanceProvider';
import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgProgress } from 'ngx-progressbar';

/**
 * Generated class for the SprintDetailedDeveloperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sprint-detailed-developer',
  templateUrl: 'sprint-detailed-developer.html',
})
export class SprintDetailedDeveloperPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public helperMethod : HelperMethodProvider,
              public perfomanceProvider:PerfomanceProvider,
              public ngProgress : NgProgress,
              public errorHandler : ErrorHandlerProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SprintDetailedDeveloperPage');
  }

}
