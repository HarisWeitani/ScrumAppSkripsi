import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SprintItemPage } from './sprint-item';

@NgModule({
  declarations: [
    SprintItemPage,
  ],
  imports: [
    IonicPageModule.forChild(SprintItemPage),
  ],
})
export class SprintItemPageModule {}
