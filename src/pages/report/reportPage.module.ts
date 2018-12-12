import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './reportPage';
import { NgProgressModule } from 'ngx-progressbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarModule } from 'angular-progress-bar';

@NgModule({
  declarations: [
    ReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
    NgProgressModule,
    MatProgressBarModule,
    ProgressBarModule
  ],
})
export class ReportPageModule {}
