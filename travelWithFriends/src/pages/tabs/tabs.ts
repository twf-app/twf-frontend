import { Component } from '@angular/core';
import {MyJournal} from '../my-journal/my-journal'
import {MyLocation} from '../my-location/my-location'
import {Profile} from '../profile/profile'
import {Settings} from '../settings/settings'


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MyJournal;
  tab2Root = MyLocation;
  tab3Root = Profile;
  tab4Root = Settings;

  constructor() {

  }
}
