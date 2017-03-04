import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


import {ButtonModule} from 'primeng/primeng';     //accordion and accordion tab
import {PanelModule} from 'primeng/primeng';
// import {MenuItem} from 'primeng/primeng';            //api
import { SliderModule } from 'primeng/primeng';


import { AppComponent }  from './app.component';
import { FishComponent } from './edibles/fish/fish.component';

import { FishingService } from './service/fishing.service';

import { FishSearchCriteriaComponent } from './search/fish-search-criteria/fish-search-criteria.component';
import { FishSearchResultComponent }   from './search/fish-search-result/fish-search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    FishComponent,
    FishSearchCriteriaComponent,
    FishSearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PanelModule,
    ButtonModule,
    SliderModule
  ],
  providers: [ FishingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
