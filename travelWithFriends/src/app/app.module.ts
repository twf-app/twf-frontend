import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MyJournal} from "../pages/my-journal/my-journal";
import {MyLocation} from "../pages/my-location/my-location";
import {Profile} from "../pages/profile/profile";
import {Settings} from "../pages/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    MyJournal,
    MyLocation,
    Profile,
    Settings,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyJournal,
    MyLocation,
    Profile,
    Settings,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
