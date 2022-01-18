import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FeaturesService } from "../../services/features.service";

@Injectable()
export class FeatureResolver implements Resolve<Observable<any>> {
    constructor( private _featureService: FeaturesService ) { }
    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<any> {
        return this._featureService.getFeature();
    }
}