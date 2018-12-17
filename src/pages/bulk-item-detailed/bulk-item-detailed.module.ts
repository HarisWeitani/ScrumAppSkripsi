import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulkItemDetailedPage } from './bulk-item-detailed';
import { NgProgressModule } from 'ngx-progressbar';

@NgModule({
  declarations: [
    BulkItemDetailedPage,
  ],
  imports: [
    IonicPageModule.forChild(BulkItemDetailedPage),
    NgProgressModule
  ],
})
export class BulkItemDetailedPageModule {}
