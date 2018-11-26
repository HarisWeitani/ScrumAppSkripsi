import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeSheetPageModal } from './time-sheet-page-modal';

@NgModule({
  declarations: [
    TimeSheetPageModal,
  ],
  imports: [
    IonicPageModule.forChild(TimeSheetPageModal),
  ],
})
export class TimeSheetPageModalPageModule {}
