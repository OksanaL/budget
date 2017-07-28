import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'grid-settings-popover.html'
})

export class GridSettingsPopoverPage {
  collapsed: boolean;
  numberOfDispData: number;
  options: any;
  _currOption: any;

  constructor(private viewCtrl: ViewController, 
              private navParams: NavParams) {}

  ngOnInit() {
    if (this.navParams.data) {
      this.collapsed = this.navParams.data.collapsed;
      
      this.options = {
        showAll: 
          {name: 'show all'},
        collapsed: 
          {name: 'collapse'}
      };
      
      this.currOption = this.collapsed;
    }
  }

  set currOption(collapsed: boolean) {
      if(collapsed) {
        this._currOption = this.options.showAll;
      } else {
        this._currOption = this.options.collapsed;
      }
  }

  get currOption() {
     return this._currOption;
  }

  changeView() {
    this.viewCtrl.dismiss(!this.collapsed);
    this.currOption = !this.collapsed;
  }

}