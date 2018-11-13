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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
              public userProvider : UsersProvider, public loadingCtrl: LoadingController ) {

  }

  ionViewDidLoad() {
    // this.userProvider.getUsers().subscribe(coeg => {
    //   this.userData = new User(coeg.name, coeg.email),
    //   this.username = this.userData.$username,
    //   this.email = this.userData.$email,
    //   console.log('data : ', this.userData )
    //  }
    // );

    this.userProvider.getOneUserById(this.userProvider.userNameLogin.length.toString()).subscribe( (user:any) => {
      this.userData = new User(user.name,user.email),
      this.username = this.userData.$username,
      this.email = this.userData.$email
    });
    console.log('userNameLogin length : ',this.userProvider.userNameLogin.length.toString());
    console.log('ionViewDidLoad UserPage');
  }

  press(){
    this.userProvider.getUsers().subscribe(
      allUser => {
        this.allUsers = allUser;
        console.log('all User',allUser)
      }
    )
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
    postData.append('body','asdasd');

    let data : any;

    this.userProvider.doSave(postData).subscribe(
      response => {
        data = response;
        console.log(data);
      }
    )
    console.log(postData.get('mantab'));
  }

}
