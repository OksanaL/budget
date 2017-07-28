import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DataPage } from '../pages/data/data';
import { GridSettingsPopoverPage } from '../pages/data/grid-settings/grid-settings-popover';
import { ChangeViewNumberPipe } from '../pages/data/data-pipe';
import { DataPageService }                 from '../pages/data/services/data.service';

import { PicturesPage } from '../pages/pictures/pictures';
import { CategoriesPage } from '../pages/categories/categories';
import { GroupsPage } from '../pages/groups/groups';
import { ReportsPage } from '../pages/reports/reports';
import { SettingsPage } from '../pages/settings/settings';
import { FilterPage } from '../pages/filter/filter';
import { AddRowPage } from '../pages/add-row/add-row';
import { AddPicturePage } from '../pages/add-picture/add-picture';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AddRowPage,
    AddPicturePage,
    DataPage,
    GridSettingsPopoverPage,
    ChangeViewNumberPipe,
    PicturesPage,
    CategoriesPage,
    GroupsPage,
    ReportsPage,
    SettingsPage,
    FilterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddRowPage,
    AddPicturePage,
    DataPage,
    GridSettingsPopoverPage,
    PicturesPage,
    CategoriesPage,
    GroupsPage,
    ReportsPage,
    SettingsPage,
    FilterPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataPageService
  ]
})
export class AppModule {}
