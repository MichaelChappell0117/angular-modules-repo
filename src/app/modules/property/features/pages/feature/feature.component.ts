import { Component, OnInit } from '@angular/core';
import { FeaturesService } from '../../services/features.service';

@Component( {
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
} )
export class FeatureComponent implements OnInit {

  constructor(
    private _featuresService: FeaturesService
  ) { }

  ngOnInit(): void {
    this._featuresService.anotherThing();
  }

}
