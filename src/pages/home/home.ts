import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  load() {
    this.navCtrl.push(MainPage, {
      val: 'Pemain Gundu'
    })
  }

}
