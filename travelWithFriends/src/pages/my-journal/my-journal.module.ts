import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyJournal } from './my-journal';

@NgModule({
  declarations: [
    MyJournal,
  ],
  imports: [
    IonicPageModule.forChild(MyJournal),
  ],
  exports: [
    MyJournal
  ]
})
export class MyJournalModule {}
