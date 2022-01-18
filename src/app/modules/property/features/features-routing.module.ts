import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './pages/feature/feature.component';
import { FeatureResolver } from './pages/feature/feature.resolver';

const routes: Routes = [
  { path: '', component: FeatureComponent, resolve: { data: FeatureResolver } }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule],
  providers: [FeatureResolver]
} )
export class FeaturesRoutingModule { }
