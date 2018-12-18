import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulkItemDetailedPage } from './bulk-item-detailed';
import { NgProgressModule } from 'ngx-progressbar';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { ProgressBarModule } from 'angular-progress-bar';

@NgModule({
  declarations: [
    BulkItemDetailedPage,
  ],
  imports: [
    IonicPageModule.forChild(BulkItemDetailedPage),
    NgProgressModule,
    RoundProgressModule,
    ProgressBarModule
  ],
})
export class BulkItemDetailedPageModule {}
