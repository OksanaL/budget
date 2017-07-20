import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import * as _  from 'lodash';

import { GridData, DataAddButton, DataTopButtons } from '../pages-data';

@Component({
  selector: 'data-budget',
  templateUrl: 'data.html'
})
export class DataPage {
  gridData: Array<any>;
  addButton: any;
  topButtons: Array<any>;

  constructor(public navCtrl: NavController) {
    this.initializeData();
  }

  initializeData() {
    this.gridData = _.cloneDeep(GridData);
    this.addButton = _.cloneDeep(DataAddButton);
    this.topButtons = _.cloneDeep(DataTopButtons);
  }

  goToOtherPage(page) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(page);
  }
}
