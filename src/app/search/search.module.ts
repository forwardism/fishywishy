import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule }   from '@angular/forms';             // 2way data binding


import { CoreModule }    from '../core/core.module'; /// ????

import { FishSearchCriteriaComponent } from './fish-search-criteria/fish-search-criteria.component';
import { FishSearchResultComponent }   from './fish-search-result/fish-search-result.component';
import { SearchTabsComponent }         from './search-tabs/search-tabs.component';


// Possibly inject service?  Likely..

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  // 2way data binding
    CoreModule    ///////////// delete
  ],
  exports: [
    SearchTabsComponent,
    FishSearchCriteriaComponent  // don't export me
  ],
  declarations: [
    FishSearchCriteriaComponent,
    FishSearchResultComponent,
    SearchTabsComponent
  ]
})
export class SearchModule { }
