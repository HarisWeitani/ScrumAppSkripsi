import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportPage } from './reportPage';
import { NgProgressModule } from 'ngx-progressbar'; //loading bar diatas
import { ProgressBarModule } from 'angular-progress-bar';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    ReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ReportPage),
    NgProgressModule,
    ProgressBarModule,
    RoundProgressModule
  ],
})
export class ReportPageModule {}
