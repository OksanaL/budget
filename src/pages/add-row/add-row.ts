import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'add-row-budget',
  templateUrl: 'add-row.html'
})
export class AddRowPage {
  searchQuery: string = '';
  groups: Object;

  constructor(public NavCtrl: NavController) {
    this.initializeData();
  }

  initializeData() {
    this.groups = [
      {'name': 'group1',
       'categories': [
          'category1',
          'category2',
          'category3'
        ]
      },
      {'name': 'group2',
       'categories': [
          'category4'
        ]
      },
      {'name': 'group3',
       'categories': [
          'category5',
          'category6'
      ]
    }];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    // this.initializeData();

    // // set val to the value of the searchbar
    // let val = ev.target.value;

    // // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {
    //   this.items = this.items.filter((item) => {
    //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }
  }
}
