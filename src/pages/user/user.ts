import { User } from './../../models/User';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { UsersProvider } from '../../providers/users/usersProvider';
import { stringify } from '@angular/core/src/render3/util';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  userData : User;
  allUsers : Array<any>;
  username : string;
  email : string;
  loading : any;
  
  error : any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public userProvider : UsersProvider, public loadingCtrl: LoadingController ) {

  }

  ionViewDidLoad() {

    this.loadingService('Loading...');

    this.userProvider.getOneUserById(this.userProvider.userNameLogin.length.toString())
        .subscribe( 
            (user:any) => {
                this.userData = new User(user.name,user.email),
                this.username = this.userData.$username,
                this.email = this.userData.$email,
                this.loading.dismiss()
            }, 
            (error:any) => {
              console.log(error),
              this.loading.dismiss(),
              this.username = 'Unknown',
              this.email = 'Unknown'
            }
            
      );
    console.log('userNameLogin length : ',this.userProvider.userNameLogin.length.toString());
    console.log('ionViewDidLoad UserPage');

  }

  loadingService(message : string){
    this.loading = this.loadingCtrl.create(
      {
        spinner : 'bubbles',
        content : message
      }
    );
    this.loading.present();
  }

  press(){
    this.loadingService('Getting All User..');
    this.userProvider.getUsers().subscribe(
      allUser => {
        this.allUsers = allUser;
        this.loading.dismiss();
      }
    );
    console.log(this.userData);
  }

  onItemPressed(userId){
    console.log('On Item Pressed',userId);

    let loading = this.loadingCtrl.create(
      {
        spinner : 'bubbles',
        content : 'mohon tunggu...'
      }
    );

    loading.present();
    setTimeout(() =>{
      loading.dismiss();
      loading = this.loadingCtrl.create(
        {
          spinner : 'dots',
          content : 'anda kurang beruntung'
        }
      );
      loading.present();
      setTimeout(() => {
        loading.dismiss();
      }, 1000);
    },3000);

  }

  onItemCOEG(){
    let postData = new FormData();
    postData.append('userId', '1');
    postData.append('title','juga');
    postData.append('body',this.username);

    let data : any;

    this.userProvider.doSave(postData).subscribe(
      response => {
        data = response;
        console.log(data);
      }
    )
    console.log(postData.get('body'));
  }

}
