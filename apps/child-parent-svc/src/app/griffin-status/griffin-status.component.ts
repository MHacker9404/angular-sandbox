import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { GriffinStatusService } from './griffin-status.service';
import { GriffinOperatorResponse } from './operator-response.enum';

@Component({
  selector: 'app-griffin-status',
  templateUrl: './griffin-status.component.html',
  styleUrls: ['./griffin-status.component.scss']
})
export class GriffinStatusComponent{
  constructor(private _griffinSvc: GriffinStatusService) { }

  onYes() {
    this._griffinSvc.changeData(GriffinOperatorResponse.Yes);
  }
  onNo() {
    this._griffinSvc.changeData(GriffinOperatorResponse.No);
  }
}
