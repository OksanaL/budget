import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

@Component({
  selector: 'filter-budget',
  templateUrl: 'filter.html'
})
export class FilterPage {
   constructor(public NavCtrl: NavController) {

  }
}
