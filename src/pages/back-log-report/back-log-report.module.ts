import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackLogReportPage } from './back-log-report';
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  declarations: [
    BackLogReportPage
  ],
  imports: [
    IonicPageModule.forChild(BackLogReportPage),
    NgProgressModule
  ],
})
export class BackLogReportPageModule {}
