import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackLogReportPage } from './back-log-report';

@NgModule({
  declarations: [
    BackLogReportPage,
  ],
  imports: [
    IonicPageModule.forChild(BackLogReportPage),
  ],
})
export class BackLogReportPageModule {}
