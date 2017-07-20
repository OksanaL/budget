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
  {date: '25.06.17',
    data: [
      {name: 'category1', sum: 45.98},
      {name: 'category1', sum: 600.56},
      {name: 'category2', sum: 15.5},
      {name: 'category3', sum: 5}
    ]
  },
  {date: '24.06.17',
    data: [
      {name: 'category1', sum: 456.05},
      {name: 'category2', sum: 78.5}
      
    ]
  },
  {date: '23.06.17',
    data: [
      {name: 'category2', sum: 457.9},
      {name: 'category1', sum: 60.56},
      {name: 'category2', sum: 5.5}
    ]
  },
];

let DataAddButton = {name: 'addRow', icon: 'add-circle', component: AddRowPage};

let DataTopButtons = [
  {name: 'addPic', icon: 'image', component: AddPicturePage},
  {name: 'addCat', icon: 'list', component: CategoriesPage},
  {name: 'filter', icon: 'funnel', component: FilterPage}
]

export { GridData, DataAddButton, DataTopButtons };

//--------------------------------------------------------------

//-----
//add-row page
//-----

let Groups = [
  {name: 'group1',
    categories: [
      'category1',
      'category2',
      'category3'
    ]
  },
  {name: 'group2',
    categories: [
      'category4'
    ]
  },
  {name: 'group3',
    categories: [
      'category5',
      'category6'
  ]
}];
  
let AddRowTopButtons = [
    {name: 'addPic', icon: 'image', component: AddPicturePage},
    {name: 'addCat', icon: 'list', component: CategoriesPage},
    {name: 'addGroup', icon: 'albums', component: GroupsPage}
]

let AddRowOptionButtons = [
  {name: 'addExistingPic', icon: 'icon2', component: PicturesPage}
]

export { Groups, AddRowTopButtons };

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