import { SprintItemPage } from './../sprint-item/sprint-item';
import { NgProgress } from 'ngx-progressbar';
import { StorageProvider } from './../../providers/storage/storageProvider';
import { ErrorHandlerProvider } from './../../providers/error-handler/error-handler';
import { HelperMethodProvider } from './../../providers/helper-method/helper-method';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, AlertController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/usersProvider';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'userPage.html',
})
export class UserPage {

  isLoading : Boolean = false;

  constructor(private navCtrl: NavController, private navParams: NavParams, 
              public userProvider : UsersProvider,
              private helperMethod :HelperMethodProvider,
              public errorHandler : ErrorHandlerProvider,
              public storageProvider : StorageProvider,
              public ngProgress : NgProgress,
              private events:Events, private alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.getSprint();
    // this.dataDummy();
  }

  doRefresh(refresher){

    let userLogin = {
      person_id : this.userProvider.user.person_id
    }

    this.isLoading = true;

    this.userProvider.getClaimedSprintByUser(userLogin)
        .then(
          (response:any) => {
            refresher.complete();
            this.isLoading = false;
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;

            console.log(responseData);
            console.log(responseData.status);

            if(responseData.status.code == "0"){
              this.userProvider.claimedSprintDetailList = responseData.sprintDetail
              this.getUnclaimedSprint();
            }else {
              this.errorHandler.catchResponseErrorHandler(responseData);
            }

          }).catch(
          (error:any) => {

            refresher.complete();
            this.isLoading = false;
            this.errorHandler.catchErrorHandler(error);

          }
        );
  }

  onItemPressed(data){
    if(this.isLoading == true){
      this.helperMethod.presentToast("Please Try Again Later, Loading On Progress",2000,1);
    }else{
      this.navCtrl.push(SprintItemPage,{item : data.data});
    }
  }

  updateProgress(data){

    if(this.isLoading == true){
      this.helperMethod.presentToast("Please Try Again Later, Loading On Progress",2000,1);
    }else{
      let request = {
        backlog_sprint_id : data.data.backlog_sprint_id
      };

      if(this.userProvider.user.is_spv == "0"){
        this.helperMethod.loadingService("Updating your sprint..");
        this.userProvider.updateSprintProgress(request).then(
          (response:any) => {
            this.helperMethod.loading.dismiss();

            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;

            console.log(responseData);
            console.log(responseData.status);
            if(responseData.status.code == "0"){
              this.getSprint();
            }else {
              this.errorHandler.catchResponseErrorHandler(responseData);
            }

          }).catch(
          (error:any) => {

            this.helperMethod.loading.dismiss();
            this.errorHandler.catchErrorHandler(error);
            
          }
        );
      }else if(this.userProvider.user.is_spv == "1"){
        this.helperMethod.loadingService("Updating your sprint..");
        this.userProvider.updateSprintProgressSPV(request).then(
          (response:any) => {
            this.helperMethod.loading.dismiss();

            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;

            console.log(responseData);
            console.log(responseData.status);
            if(responseData.status.code == "0"){
              this.getSprint();
            }else {
              this.errorHandler.catchResponseErrorHandler(responseData);
            }

          }).catch(
          (error:any) => {

            this.helperMethod.loading.dismiss();
            this.errorHandler.catchErrorHandler(error);
            
          }
        );
      }
    }
  }

  claimSprint(data){
    if(this.isLoading == true){
      this.helperMethod.presentToast("Please Try Again Later, Loading On Progress",2000,1);
    }else{
      let request = {
        person_id : this.userProvider.user.person_id,
        backlog_sprint_id : data.data.backlog_sprint_id
      };

      this.helperMethod.loadingService("Please Wait...");
      this.userProvider.claimSprint(request).then(
        (response:any) => {
          this.helperMethod.loading.dismiss();

          console.log(response);
          let responseData = JSON.parse(response.data);
          let responseStatus = response.status;

          console.log(responseData);
          console.log(responseData.status);
          if(responseData.status.code == "0"){
            this.getSprint();
          }else {
            this.errorHandler.catchResponseErrorHandler(responseData);
          }

        }).catch(
        (error:any) => {

          this.helperMethod.loading.dismiss();
          this.errorHandler.catchErrorHandler(error);
          
        }
      );
    }
  }

  doLogout(){
    if(this.isLoading == true){
      this.helperMethod.presentToast("Please Try Again Later, Loading On Progress",2000,1);
    }else{
      this.alertConfirmLogout();
    }
  }

  alertConfirmLogout(){
    let alert = this.alertCtrl.create({
      title: 'Logout',
      message: 'Are you sure you want to logout?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
    alert.present();
  }

  logout(){
    
    let userLogin = {
      person_id : this.userProvider.user.person_id
    }

    this.helperMethod.loadingService("Logout..");
    this.userProvider.doLogoutUser(userLogin).then(
      (response:any) => {
        this.helperMethod.loading.dismiss();

        console.log(response);
        let responseData = JSON.parse(response.data);
        let responseStatus = response.status;

        console.log(responseData);
        console.log(responseData.status);
        if(responseData.status.code == "0"){

          this.storageProvider.clear();
          this.events.publish('Auth',0);
        }else {
          this.errorHandler.catchResponseErrorHandler(responseData);
        }

      }).catch(
      (error:any) => {

        this.helperMethod.loading.dismiss();
        this.errorHandler.catchErrorHandler(error);
        
      }
    );
      
  }
  
  getSprint(){
    let userLogin = {
      person_id : this.userProvider.user.person_id
    }

    this.ngProgress.start();
    this.isLoading = true;

    this.userProvider.getClaimedSprintByUser(userLogin)
        .then(
          (response:any) => {
            this.ngProgress.done();
            this.isLoading = false;
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;

            console.log(responseData);
            console.log(responseData.status);

            if(responseData.status.code == "0"){
              this.userProvider.claimedSprintDetailList = responseData.sprintDetail
              this.getUnclaimedSprint();
            }else {
              this.errorHandler.catchResponseErrorHandler(responseData);
            }

          }).catch(
          (error:any) => {

            this.ngProgress.done();
            this.isLoading = false;
            this.errorHandler.catchErrorHandler(error);

          }
        );
  }

  getUnclaimedSprint(){
    let userLogin = {
      person_id : this.userProvider.user.person_id
    }

    this.ngProgress.start();
    this.isLoading = true;
    this.userProvider.getUnclaimedSprint(userLogin)
        .then(
          (response:any) => {
            this.ngProgress.done();
            this.isLoading = false;
            console.log(response);
            let responseData = JSON.parse(response.data);
            let responseStatus = response.status;

            console.log(responseData);
            console.log(responseData.status);

            if(responseData.status.code == "0"){
              this.userProvider.unclaimedSprintDetailList =responseData.sprintDetail;
            }else {
              this.errorHandler.catchResponseErrorHandler(responseData);
            }

          }).catch(
          (error:any) => {

            this.ngProgress.done();
            this.isLoading = false;
            this.errorHandler.catchErrorHandler(error);

          }
        );
  }

  getColor(status){
    switch (status) {
      case 'To do':
        return '#ffffff';
      case 'On Progress':
        return '#ff9d00';
      case 'Review':
        return '#00e1ff';
      case 'Done':
        return '#00c617';
    }
  }

  dataDummy(){
    this.userProvider.claimedSprintDetailList = [
      {
        backlog_sprint_id : '1',
        backlog_id : '1',
        person_id : '32',
        definition_of_done : 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
        is_active : '1',
        commited : null,
    
        person_name : 'Haris Wei',
        sprint_id : 'akknsk1123',
        sprint_backlog : '1',
        duration : '999',
        statusSprint : 'To do',
        dtm_crt : '12/12/2012',
        dtm_upd : '15/15/2015',
    
        sprint : '1',
        mandays : '1',

      },
      {
        backlog_sprint_id : '1',
        backlog_id : '1',
        person_id : '32',
        definition_of_done : 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
        is_active : '1',
        commited : null,
    
        person_name : 'Haris Wei',
        sprint_id : '1',
        sprint_backlog : '1',
        duration : '8',
        statusSprint : 'On Progress',
        dtm_crt : '12/12/2012',
        dtm_upd : '15/15/2015',
    
        sprint : '1',
        mandays : '1',

      },
      {
        backlog_sprint_id : '1',
        backlog_id : '1',
        person_id : '32',
        definition_of_done : 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
        is_active : '1',
        commited : null,
    
        person_name : 'Haris Wei',
        sprint_id : '1',
        sprint_backlog : '1',
        duration : '8',
        statusSprint : 'Review',
        dtm_crt : '12/12/2012',
        dtm_upd : '15/15/2015',
    
        sprint : '1',
        mandays : '1',

      },
      {
        backlog_sprint_id : '1',
        backlog_id : '1',
        person_id : '32',
        definition_of_done : 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
        is_active : '1',
        commited : null,
    
        person_name : 'Haris Wei',
        sprint_id : '1',
        sprint_backlog : '1',
        duration : '8',
        statusSprint : 'Done',
        dtm_crt : '12/12/2012',
        dtm_upd : '15/15/2015',
    
        sprint : '1',
        mandays : '1',

      }
    ];

    this.userProvider.unclaimedSprintDetailList = [
      {
        backlog_sprint_id : '1',
        backlog_id : '1',
        person_id : '32',
        definition_of_done : 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
        is_active : '1',
        commited : null,
    
        person_name : null,
        sprint_id : '1',
        sprint_backlog : '1',
        duration : '8',
        statusSprint : 'Todo',
        dtm_crt : '12/12/2012',
        dtm_upd : '15/15/2015',
    
        sprint : '1',
        mandays : '1',

      },
      {
        backlog_sprint_id : '1',
        backlog_id : '1',
        person_id : '32',
        definition_of_done : 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
        is_active : '1',
        commited : null,
    
        person_name : null,
        sprint_id : '1',
        sprint_backlog : '1',
        duration : '8',
        statusSprint : 'Todo',
        dtm_crt : '12/12/2012',
        dtm_upd : '15/15/2015',
    
        sprint : '1',
        mandays : '1',

      },
      {
        backlog_sprint_id : '1',
        backlog_id : '1',
        person_id : '32',
        definition_of_done : 'aslkdmaskdlmasdkjfndgkjsdnfgjlelkrmlkgsdmflksmdfklgsndfgnlldfmklg',
        is_active : '1',
        commited : null,
    
        person_name : null,
        sprint_id : '1',
        sprint_backlog : '1',
        duration : '8',
        statusSprint : 'Todo',
        dtm_crt : '12/12/2012',
        dtm_upd : '15/15/2015',
    
        sprint : '1',
        mandays : '1',

      }
    ];
  }

}
