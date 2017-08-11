import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Profile } from './profile';
import {Settings} from "../settings/settings";
import {MyJournal} from "../my-journal/my-journal";
import {MyLocation} from "../my-location/my-location";

@NgModule({
  declarations: [
    MyJournal,
    MyLocation,
    Profile,
    Settings,
  ],
  imports: [
    IonicPageModule.forChild(Profile),
  ],
  exports: [
    MyJournal,
    MyLocation,
    Profile,
    Settings,

  ]
})
export class ProfileModule {}
