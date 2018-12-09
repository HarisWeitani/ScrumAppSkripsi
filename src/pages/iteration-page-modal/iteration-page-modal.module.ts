import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IterationPageModalPage } from './iteration-page-modal';

@NgModule({
  declarations: [
    IterationPageModalPage,
  ],
  imports: [
    IonicPageModule.forChild(IterationPageModalPage),
  ],
})
export class IterationPageModalPageModule {}
