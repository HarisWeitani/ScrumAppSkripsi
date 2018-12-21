import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulkItemDetailedDeveloperPage } from './bulk-item-detailed-developer';
import { NgProgressModule } from 'ngx-progressbar';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ProgressBarModule } from 'angular-progress-bar';

@NgModule({
  declarations: [
    BulkItemDetailedDeveloperPage,
  ],
  imports: [
    IonicPageModule.forChild(BulkItemDetailedDeveloperPage),
    NgProgressModule,
    RoundProgressModule,
    ProgressBarModule
  ],
})
export class BulkItemDetailedDeveloperPageModule {}
