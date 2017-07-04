import { Component } from '@angular/core';

@Component({
  selector: 'data-budget',
  templateUrl: 'data.html'
})
export class DataPage {
  gridData = [
    {'date': '25.06.17',
     'data': [
        {'name': 'category1', 'sum': 45.98},
        {'name': 'category1', 'sum': 600.56},
        {'name': 'category2', 'sum': 15.5},
        {'name': 'category3', 'sum': 5}
      ]
    },
    {'date': '24.06.17',
     'data': [
        {'name': 'category1', 'sum': 456.05},
        {'name': 'category2', 'sum': 78.5}
       
      ]
    },
    {'date': '23.06.17',
     'data': [
        {'name': 'category2', 'sum': 457.9},
        {'name': 'category1', 'sum': 60.56},
        {'name': 'category2', 'sum': 5.5}
      ]
    },
  ];

  constructor() {

  }
}
