import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SprintDetailedPage } from './sprint-detailed';
import { NgProgressModule } from 'ngx-progressbar';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ProgressBarModule } from 'angular-progress-bar';

@NgModule({
  declarations: [
    SprintDetailedPage,
  ],
  imports: [
    IonicPageModule.forChild(SprintDetailedPage),
    NgProgressModule,
    RoundProgressModule,
    ProgressBarModule
  ],
})
export class SprintDetailedPageModule {}
