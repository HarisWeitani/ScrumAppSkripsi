import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { UsersProvider } from '../../providers/users/usersProvider';
import { User } from '../../models/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, Events } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public userProvider : UsersProvider,
              public helperMethod: HelperMethodProvider, public app:App , public events:Events) {
    
  }

  ionViewDidLoad() {
    this.getCustomJson();
    console.log('ionViewDidLoad ReportPage ');
  }
  ionViewWillEnter(){
    console.log('will enter');
  }
  ionViewDidEnter(){
    console.log('Did enter');
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

  onItemPressed(userId){
    console.log('On Item Pressed',userId);

  }

}
