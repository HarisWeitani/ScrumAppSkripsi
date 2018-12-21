import { BulkItemSprintDeveloper } from './../../models/BulkItemSprintDeveloper';
import { BulkItemDetailedDeveloper } from './../../models/BulkItemDetailedDeveloper';
import { UsersProvider } from './../../providers/users/usersProvider';
import { PerfomanceProvider } from './../../providers/perfomance/perfomanceProvider';
import { SprintDetailedDeveloperPage } from './../sprint-detailed-developer/sprint-detailed-developer';
import { BulkItem } from './../../models/BulkItem';
import { ErrorHandlerProvider } from './../../providers/error-handler/error-handler';
import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgProgress } from 'ngx-progressbar';

/**
 * Generated class for the BulkItemDetailedDeveloperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bulk-item-detailed-developer',
  templateUrl: 'bulk-item-detailed-developer.html',
})
export class BulkItemDetailedDeveloperPage {

  bulkItemSelected : BulkItem;

  bulkItemDetail : BulkItemDetailedDeveloper;

  bulkItemSprint : Array<BulkItemSprintDeveloper>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public perfomanceProv:PerfomanceProvider,
              private helperMethod : HelperMethodProvider,
              public userProv : UsersProvider,
              public ngProgress : NgProgress,
              public errorHandler : ErrorHandlerProvider){
        this.bulkItemSelected = this.navParams.get('bulkItem'); 
  }

  ionViewDidLoad() {
    if(this.bulkItemSelected == null){
      this.navCtrl.pop();
      this.helperMethod.presentToast('Please Try Again',3000,2);
    }else{
      this.getDetailedBulkItem();
      // this.getDetailedBulkItemBrowser();
    }
    console.log('ionViewDidLoad BulkItemDetailedDeveloperPage');
  }

  getDetailedBulkItem(){
    let request = {
      bulk_id : this.bulkItemSelected.bulk_id,
      person_id : this.userProv.user.person_id
    }

    this.ngProgress.start();

    this.perfomanceProv.getDetailedBulkItemDeveloper(request)
        .then(
          (response:any) => {

            this.ngProgress.done();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;
  
            console.log(responseData.status);
            if(responseData.status.code == "0"){

              this.bulkItemDetail = responseData;
              this.bulkItemSprint = responseData.bulkItemSprintDeveloperBeans;

            }else {
              this.errorHandler.catchResponseErrorHandler(responseData);
            }
          }).catch(
          (error:any) => {
            
            this.ngProgress.done();
            this.errorHandler.catchErrorHandler(error);
          
          }
        );
  }

  onItemPressed(item){
    // this.getSprintDetailed(item);
    let sprintRequest = {
      sprint : item.item.sprint,
      bulk_id : this.bulkItemSelected.bulk_id,
      person_id : this.userProv.user.person_id
    }
    this.navCtrl.push(SprintDetailedDeveloperPage,{sprintRequest : sprintRequest});
    // this.getSprintDetailedByBrowser();
  }

  getSprintDetailedByBrowser(){

    let fakeData = [
      {    
        backlog_sprint_id : "1",
        backlog_id : "2",
        person_id : "32",
        person_name : "Mantab",
        sprint_id : "Waa221",
        sprint_backlog : "Mantab",
        definition_of_done : "Mantab",
        duration : "Mantab",
        statusSprint : "Mantab",
        dtm_crt : "22/01/2012",
        dtm_upd : null,
        is_active : "1",
        sprint : "2",
        mandays : "6"
      },
      {    
        backlog_sprint_id : "2",
        backlog_id : "2",
        person_id : "X",
        person_name : "UnClaimed",
        sprint_id : "Waa221",
        sprint_backlog : "Mantab",
        definition_of_done : "Mantab",
        duration : "Mantab",
        statusSprint : "Mantab",
        dtm_crt : "22/01/2012",
        dtm_upd : null,
        is_active : "1",
        sprint : "2",
        mandays : "6"
      },
      {    
        backlog_sprint_id : "3",
        backlog_id : "2",
        person_id : "32",
        person_name : "Mantab",
        sprint_id : "Waa221",
        sprint_backlog : "Mantab",
        definition_of_done : "Mantab",
        duration : "Mantab",
        statusSprint : "Mantab",
        dtm_crt : "22/01/2012",
        dtm_upd : null,
        is_active : "1",
        sprint : "2",
        mandays : "6"
      },
      {    
        backlog_sprint_id : "4",
        backlog_id : "2",
        person_id : "32",
        person_name : "Mantab",
        sprint_id : "Waa221",
        sprint_backlog : "Mantab",
        definition_of_done : "Mantab",
        duration : "Mantab",
        statusSprint : "Mantab",
        dtm_crt : "22/01/2012",
        dtm_upd : null,
        is_active : "1",
        sprint : "2",
        mandays : "6"
      },
      {    
        backlog_sprint_id : "5",
        backlog_id : "2",
        person_id : "32",
        person_name : "Mantab",
        sprint_id : "Waa221",
        sprint_backlog : "Mantab",
        definition_of_done : "Mantab",
        duration : "Mantab",
        statusSprint : "Mantab",
        dtm_crt : "22/01/2012",
        dtm_upd : null,
        is_active : "1",
        sprint : "2",
        mandays : "6"
      }
    ]

    this.navCtrl.push(SprintDetailedDeveloperPage,{sprintDetailList : fakeData});
  }


}
