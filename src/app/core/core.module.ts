import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';


import {ButtonModule} from 'primeng/primeng';     //accordion and accordion tab
import {PanelModule} from 'primeng/primeng';
// import {MenuItem} from 'primeng/primeng';            //api
import { SliderModule } from 'primeng/primeng';

import { throwIfAlreadyLoaded } from './module-import-guard';

@NgModule({
  imports: [
    CommonModule,
    PanelModule,
    ButtonModule,
    SliderModule
  ],
  exports: [
    PanelModule,
    ButtonModule,
    SliderModule
  ],
  declarations: []
})
export class CoreModule {

  // from styleguide!
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
