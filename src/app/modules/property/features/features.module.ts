import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureComponent } from './pages/feature/feature.component';


@NgModule( {
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
} )
export class FeaturesModule {
  constructor( @Optional() @SkipSelf() parentModule?: FeaturesModule ) {
    if ( parentModule ) {
      throw new Error(
        'FeaturesModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
