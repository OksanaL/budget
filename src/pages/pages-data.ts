import { AddRowPage } from '../pages/add-row/add-row';
import { AddPicturePage } from '../pages/add-picture/add-picture';
// import { DataPage } from '../pages/data/data';
import { PicturesPage } from '../pages/pictures/pictures';
import { CategoriesPage } from '../pages/categories/categories';
import { GroupsPage } from '../pages/groups/groups';
// import { ReportsPage } from '../pages/reports/reports';
// import { SettingsPage } from '../pages/settings/settings';

import { FilterPage } from '../pages/filter/filter';

//-----
//data page
//-----
var GridData = [
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

let DataButtons = [
    {'name': 'addRow', 'icon': 'icon1', 'component': AddRowPage},
    {'name': 'addPic', 'icon': 'icon2', 'component': AddPicturePage},
    {'name': 'addCat', 'icon': 'icon3', 'component': CategoriesPage},
    {'name': 'filter', 'icon': 'icon4', 'component': FilterPage}
  ]

export { GridData, DataButtons };

//--------------------------------------------------------------

//-----
//add-row page
//-----

let Groups = [
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
  
let AddRowButtons = [
    {'name': 'addPic', 'icon': 'icon2', 'component': AddPicturePage},
    {'name': 'addCat', 'icon': 'icon3', 'component': CategoriesPage},
    {'name': 'addExistingPic', 'icon': 'icon2', 'component': PicturesPage},
    {'name': 'addGroup', 'icon': 'icon3', 'component': GroupsPage},
]

export { Groups, AddRowButtons };

//--------------------------------------------------------------

//-----
//categories page
//-----

let Categories = [
          'category1',
          'category2',
          'category3',
          'category4',
          'category5',
          'category6'
      ];

let ExistingCategoryOptions = [
          'existing category1',
          'existing category2',
          'existing category3',
          'existing category4',
          'existing category5',
          'existing category6'
      ];

export { Categories, ExistingCategoryOptions };

//--------------------------------------------------------------