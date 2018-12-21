import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfomancePage } from './perfomancePage';
import { NgProgressModule } from 'ngx-progressbar'; //loading bar diatas
import { ProgressBarModule } from 'angular-progress-bar';
import { RoundProgressModule } from 'angular-svg-round-progressbar';

@NgModule({
  declarations: [
    PerfomancePage,
  ],
  imports: [
    IonicPageModule.forChild(PerfomancePage),
    NgProgressModule,
    ProgressBarModule,
    RoundProgressModule
  ],
})
export class PerfomancePageModule {}
