import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BulkItemDetailedPage } from './bulk-item-detailed';

@NgModule({
  declarations: [
    BulkItemDetailedPage,
  ],
  imports: [
    IonicPageModule.forChild(BulkItemDetailedPage),
  ],
})
export class BulkItemDetailedPageModule {}
