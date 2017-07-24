import { Component } from '@angular/core';
import { PopoverController, NavController} from 'ionic-angular';
import * as _  from 'lodash';

import { GridData, DataAddButton, DataTopButtons } from '../pages-data';
import { GridSettingsPopoverPage } from './grid-settings/grid-settings-popover';

@Component({
  selector: 'data-budget',
  templateUrl: 'data.html'
})
export class DataPage {
  gridData: Array<any>;
  addButton: any;
  topButtons: Array<any>;
  option: number;

  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) {}

  ngOnInit() {
    // console.log('ok');
    this.gridData = _.cloneDeep(GridData);
    this.addButton = _.cloneDeep(DataAddButton);
    this.topButtons = _.cloneDeep(DataTopButtons);
    this.option = 2;
  }

  goToOtherPage(page) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(page);
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(GridSettingsPopoverPage, {
      collapsed: this.option
    });

    popover.present({
      ev: ev
    });

    popover.onDidDismiss((popoverData) => {
      this.option = popoverData;
    })
  }

}
