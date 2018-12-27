import { SprintDetailed } from './../../models/SprintDetailed';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SprintItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sprint-item',
  templateUrl: 'sprint-item.html',
})
export class SprintItemPage {

  sprintdetailed : SprintDetailed;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.sprintdetailed = navParams.get('item');
    // this.sprintdetailed.definition_of_done = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SprintItemPage');
  }

}
