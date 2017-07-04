import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DataPage } from '../pages/data/data';
import { PicturesPage } from '../pages/pictures/pictures';
// import { CategoriesPage } from '../pages/categories/categories';
// import { GroupsPage } from '../pages/groups/groups';
// import { ReportsPage } from '../pages/reports/reports';
// import { SettingsPage } from '../pages/settings/settings';
// import { LogOutPage } from '../pages/log-out/log-out';

import { AddPage } from '../pages/add/add';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AddPage,
    DataPage,
    PicturesPage
    // CategoriesPage
    // GroupsPage
    // ReportsPage
    // SettingsPage
    // LogOutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddPage,
    DataPage,
    PicturesPage
    // CategoriesPage
    // GroupsPage
    // ReportsPage
    // SettingsPage
    // LogOutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
