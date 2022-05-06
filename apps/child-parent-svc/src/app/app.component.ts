import { Component } from '@angular/core';
import { GriffinStatusService } from './griffin-status/griffin-status.service';

@Component({
    selector: 'nx-apps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [GriffinStatusService]
})
export class AppComponent {
    title = 'child-parent-svc';
    isHidden = true;
    result = '';

    constructor(private _griffinSvc: GriffinStatusService) { }

    showChild = async () => {
        this.isHidden = !this.isHidden;
        // this._griffinSvc._dataSrc$.subscribe(data => this.result = data.toString());
        // this._griffinSvc.dataSrc.then(data => this.result = data.toString());
        this.result = (await this._griffinSvc.dataSrc).toString();
        this.isHidden = !this.isHidden;
    };
}
