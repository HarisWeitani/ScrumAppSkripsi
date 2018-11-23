import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPageModal } from './report-page-modal';

@NgModule({
  declarations: [
    ReportPageModal,
  ],
  imports: [
    IonicPageModule.forChild(ReportPageModal),
  ],
})
export class ReportPageModalPageModule {}
