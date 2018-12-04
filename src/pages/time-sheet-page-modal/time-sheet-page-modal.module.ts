import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeSheetPageModal } from './time-sheet-page-modal';
import { AutoCompleteModule } from 'ionic2-auto-complete';

@NgModule({
  declarations: [
    TimeSheetPageModal,
  ],
  imports: [
    AutoCompleteModule,
    IonicPageModule.forChild(TimeSheetPageModal),
  ],
})
export class TimeSheetPageModalPageModule {}
