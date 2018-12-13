import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './reportPage';
import { NgProgressModule } from 'ngx-progressbar'; //penting nih
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarModule } from 'angular-progress-bar';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    ReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
    NgProgressModule,
    MatProgressBarModule,
    ProgressBarModule,
    RoundProgressModule
  ],
})
export class ReportPageModule {}
