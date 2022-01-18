import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FeaturesModule } from '../features.module';

@Injectable( {
  // providedIn: FeaturesModule  <---- I would like this to be available to anything within FeaturesModule, but I get a circular dependency error in terminal
  providedIn: 'any'
} )
export class FeaturesService {

  constructor() { }

  getFeature(): Observable<any> {
    return of( true );
  }

  anotherThing(): Observable<any> {
    return of( true );
  }
}
