import { Component }                from '@angular/core';
import { PopoverController, NavController}         from 'ionic-angular';
import * as _                       from 'lodash';
import { GridData, DataAddButton, DataTopButtons } from '../pages-data';
import { GridSettingsPopoverPage }  from './grid-settings/grid-settings-popover';
import { DataPageService }          from './services/data.service';

@Component({
  selector: 'data-budget',
  templateUrl: 'data.html',
  // providers: [DataPageService]
})

export class DataPage {

  gridData: Array<any>;
  addButton: any;
  topButtons: Array<any>;
  numberOfDispData: number;
  collapsed: boolean;

  constructor(public navCtrl: NavController, 
              private popoverCtrl: PopoverController,
              private dataPageService: DataPageService) {
    dataPageService.rowAdded$.subscribe(
      rowData => {
        /**
         * TODO: addRow properly
         */
        this.addRow(rowData);
      });
  }

  addRow (rowData) {
    let currDate = new Date().toISOString().slice(0,10);
    if (currDate == this.gridData[0].date) {
      this.gridData[0].data.unshift(rowData);
    } else {
      this.gridData.unshift({date: currDate, data: [rowData]});
    }
  }

  ngOnInit() {
    /**
     * TODO: get data form API
     */
    console.log('init');
    this.gridData = _.cloneDeep(GridData);
    this.addButton = _.cloneDeep(DataAddButton);
    this.topButtons = _.cloneDeep(DataTopButtons);
    this.numberOfDispData = 2;
    this.collapsed = true;
  }

  goToOtherPage(page) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(page);
  }

  presentPopover(ev) {
    let popover = this.popoverCtrl.create(GridSettingsPopoverPage, {
      collapsed: this.collapsed
    });

    popover.present({
      ev: ev
    });

    popover.onDidDismiss((val) => {
      if(val != null) {
        this.collapsed = val;
      }
    })
  }

}
