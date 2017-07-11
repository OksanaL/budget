import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

import { /*Validators,*/ FormBuilder, FormGroup } from '@angular/forms';
import * as _  from 'lodash';
import { Categories, ExistingCategoryOptions } from '../pages-data';

@Component({
  selector: 'categories-budget',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  
  private addFromExistingCategoryForm : FormGroup;
  private addCustomCategoryForm : FormGroup;
  categories: Array<string>;
  categoryOptions: Array<string>;

  constructor(public NavCtrl: NavController, private formBuilder: FormBuilder) {
    this.initializeData();

    this.addFromExistingCategoryForm = this.formBuilder.group({
      category: ['']
    });
    this.addCustomCategoryForm = this.formBuilder.group({
      category: ['']
    });
  }

  initializeData() {
    this.categories = _.cloneDeep(Categories);
    this.categoryOptions = _.cloneDeep(ExistingCategoryOptions);
  }

  getItems(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;
    //Reset items back to all of the items
    this.initializeData();

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
        this.categories = this.categories.filter((item) => {
          return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    }
  }

  doSubmit(event, form: FormGroup) {
    console.log('Submitting form', form.value);
    event.preventDefault();
  }
}
