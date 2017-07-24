import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'grid-settings-popover.html'
})
export class GridSettingsPopoverPage {
  collapsed: boolean;
  options: any;
  option: any;
  defaultVal: number;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {}

  ngOnInit() {
    if (this.navParams.data) {
      this.collapsed = this.navParams.data.collapsed;
      
      this.defaultVal = 2;
      this.options = {
        showAll: {
          name: 'show all',
          value: 0
        },
        collapse: {
          name: 'collapse',
          value: this.defaultVal
        }
      };
      if(this.collapsed) {
        this.option = this.options.showAll;
      } else {
        this.option = this.options.collapse;
      }
    }
  }

  changeView() {
    this.viewCtrl.dismiss(this.option.value);
    if(this.option == this.options.showAll.name) {
      this.option = this.options.collapse.name;
    } else {
      this.option = this.options.showAll.name;
    }
  }

}