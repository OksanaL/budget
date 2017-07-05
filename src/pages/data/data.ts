import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { GridData, Buttons } from '../pages-data';

@Component({
  selector: 'data-budget',
  templateUrl: 'data.html'
})
export class DataPage {
  gridData: Array<Object>;
  buttons: Array<Object>;

  constructor(public navCtrl: NavController) {
    this.initializeData();
  }

  initializeData() {
    this.gridData = GridData;
    this.buttons = Buttons;
  }

  goToOtherPage(page) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(page);
  }
}
