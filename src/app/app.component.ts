import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { DataPage } from '../pages/data/data';
import { PicturesPage } from '../pages/pictures/pictures';
// import { CategoriesPage } from '../pages/categories/categories';
// import { GroupsPage } from '../pages/groups/groups';
// import { ReportsPage } from '../pages/reports/reports';
// import { SettingsPage } from '../pages/settings/settings';
// import { LogOutPage } from '../pages/log-out/log-out';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage = DataPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Pictures', component: PicturesPage },
      { title: 'Categories', component: 'CategoriesPage' },
      { title: 'Groups', component: 'GroupsPage' },
      { title: 'Reports', component: 'ReportsPage' },
      { title: 'Settings', component: 'SettingsPage' },
      { title: 'Log out', component: 'LogOutPage' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  goBack(){
    this.menu.close();
  }
}
