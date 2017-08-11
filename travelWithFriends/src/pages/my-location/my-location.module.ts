import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyLocation } from './my-location';

@NgModule({
  declarations: [
    MyLocation,
  ],
  imports: [
    IonicPageModule.forChild(MyLocation),
  ],
  exports: [
    MyLocation
  ]
})
export class MyLocationModule {}
