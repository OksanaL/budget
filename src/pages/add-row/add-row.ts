import { Component }    from '@angular/core';
import { NavController} from 'ionic-angular';
import * as _           from 'lodash';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Groups, AddRowTopButtons }           from '../pages-data';
import { DataPageService }                    from '../data/services/data.service';

@Component({
  selector: 'add-row-budget',
  templateUrl: 'add-row.html',
  // providers: [DataPageService]
})

export class AddRowPage {

  topButtons: Array<any>;
  groups: Array<any>;
  addRowForm : FormGroup;

  constructor(public navCtrl: NavController, 
              private formBuilder: FormBuilder,
              private dataPageService: DataPageService) {
    this.initializeData();

    this.addRowForm = this.formBuilder.group({
      sum: ['', Validators.required],
      name: [''],
    });
  }

  initializeData() {
    this.groups = _.cloneDeep(Groups);
    this.topButtons = _.cloneDeep(AddRowTopButtons);
  }

  goToOtherPage(page) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(page);
  }

  initFilterData () {
    this.groups = _.cloneDeep(Groups);
  }
  
  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    //Reset items back to all of the items
    this.initFilterData();

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      for(let i = 0; i < this.groups.length; i++) {
        this.groups[i].categories = this.groups[i].categories.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
      }
    }

    // filter groups
    this.groups = this.groups.filter(function(el) {
      return el.categories.length != 0;
    });
  }

  doSubmit(event) {
    // console.log('Submitting form', this.addRowForm.value);
    // event.preventDefault();

    /**
     * TODO:save data in db
     * implement come back to data page
     */
    this.dataPageService.addRow(this.addRowForm.value);

  }

}
