import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyHomeComponent } from './property-home/property-home.component';

const routes: Routes = [
  { path: '', component: PropertyHomeComponent },
  { path: 'features', loadChildren: () => import( './features/features.module' ).then( ( m ) => m.FeaturesModule ) }
];

@NgModule( {
  imports: [RouterModule.forChild( routes )],
  exports: [RouterModule]
} )
export class PropertyRoutingModule { }
