import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeSheetPage } from './time-sheet';

@NgModule({
  declarations: [
    TimeSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeSheetPage),
  ],
})
export class TimeSheetPageModule {}
