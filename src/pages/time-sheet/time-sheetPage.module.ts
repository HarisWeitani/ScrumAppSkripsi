import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeSheetPage } from './time-sheetPage';
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  declarations: [
    TimeSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeSheetPage),
    NgProgressModule,
  ],
})
export class TimeSheetPageModule {}
