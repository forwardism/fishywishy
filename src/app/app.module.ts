import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { CoreModule }    from './core/core.module';
import { SearchModule }  from './search/search.module';   // inject service?

import { AppComponent }  from './app.component';

import { FishComponent } from './edibles/fish/fish.component';  // move me to core?

import { FishingService } from './service/fishing.service';

@NgModule({
  declarations: [
    AppComponent,
    FishComponent
//    FishSearchCriteriaComponent,
//    FishSearchResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    SearchModule
  ],
  providers: [ FishingService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
