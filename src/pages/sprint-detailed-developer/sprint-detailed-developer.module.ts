import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SprintDetailedDeveloperPage } from './sprint-detailed-developer';
import { NgProgressModule } from 'ngx-progressbar';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ProgressBarModule } from 'angular-progress-bar';

@NgModule({
  declarations: [
    SprintDetailedDeveloperPage,
  ],
  imports: [
    IonicPageModule.forChild(SprintDetailedDeveloperPage),
    NgProgressModule,
    RoundProgressModule,
    ProgressBarModule
  ],
})
export class SprintDetailedDeveloperPageModule {}
