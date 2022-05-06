import { Injectable } from "@angular/core";
import { firstValueFrom, lastValueFrom, Subject } from "rxjs";
import { GriffinOperatorResponse } from "./operator-response.enum";

@Injectable()
export class GriffinStatusService {
  // dataSrc$ = new BehaviorSubject<GriffinOperatorResponse>(GriffinOperatorResponse.N_A);
  _dataSrc$ = new Subject<GriffinOperatorResponse>();

  get dataSrc() {
    // return this._dataSrc$.toPromise();
    return firstValueFrom(this._dataSrc$);
    // return lastValueFrom(this._dataSrc$);
  }

  changeData = (data: GriffinOperatorResponse) => this._dataSrc$.next(data);
}