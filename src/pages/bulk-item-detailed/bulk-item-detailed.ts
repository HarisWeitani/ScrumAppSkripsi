import { SprintDetailedPage } from './../sprint-detailed/sprint-detailed';
import { BulkItemDetailed } from './../../models/BulkItemDetailed';
import { BulkItem } from './../../models/BulkItem';
import { ErrorHandlerProvider } from './../../providers/error-handler/error-handler';
import { ReportProvider } from './../../providers/report/reportProvider';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelperMethodProvider } from '../../providers/helper-method/helper-method';
import { NgProgress } from 'ngx-progressbar';
import { BulkItemSprint } from '../../models/BulkItemSprint';
import { asTextData } from '@angular/core/src/view';

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

  bulkItemSelected : BulkItem;

  bulkItemDetail : BulkItemDetailed;

  bulkItemSprint : Array<BulkItemSprint>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public reportProvider:ReportProvider,
              private helperMethod : HelperMethodProvider,
              public ngProgress : NgProgress,
              public errorHandler : ErrorHandlerProvider) {

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
  }

  getDetailedBulkItem(){
    this.ngProgress.start();

    this.reportProvider.getDetailedBulkItem(this.bulkItemSelected)
        .then(
          (response:any) => {

            this.ngProgress.done();
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;
  
            console.log(responseData.status);
            if(responseData.status.code == "0"){

              this.bulkItemDetail = responseData;
              this.bulkItemSprint = responseData.bulk_item_sprint_list;

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

  getDetailedBulkItemBrowser(){
    this.ngProgress.start();
    setTimeout(() => {
      this.bulkItemDetail = {
        bulk_id : '1',
        project_code: 'ganteng',
        bulk_name: 'Tampan21',
        mandays: '2',
        dtm_crt: '22/01/2019',
        dtm_upd: '22/01/2019',
        percentage: '52',
        all_backlog_item: '20',
        done_backlog_item: '5',
        review_backlog_item: '7',
        onprogress_backlog_item: '9',
        todo_backlog_item: '12'
      }

      this.bulkItemSprint = [
        {
          sprint : '1',
          dtm_crt : '22/01/2018',
          total_sprint_item : '9'
        },
        {
          sprint : '2',
          dtm_crt : '25/01/2018',
          total_sprint_item : '23'
        },
        {
          sprint : '3',
          dtm_crt : '27/01/2018',
          total_sprint_item : '12'
        },
        {
          sprint : '4',
          dtm_crt : '29/01/2018',
          total_sprint_item : '16'
        }
      ]
      this.ngProgress.done();
    }, 1000);
  }

  onItemPressed(item){
    let sprintRequest = {
      sprint : item.item.sprint,
      bulk_id : this.bulkItemSelected.bulk_id
    }
    this.navCtrl.push(SprintDetailedPage,{sprintRequest : sprintRequest});
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

    this.navCtrl.push(SprintDetailedPage,{sprintDetailList : fakeData});
  }

}
