import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './userPage';
import { NgProgressModule } from 'ngx-progressbar';


@NgModule({
  declarations: [
    UserPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
    NgProgressModule
  ],
})
export class UserPageModule {}
