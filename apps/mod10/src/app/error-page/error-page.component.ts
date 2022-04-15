import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Data} from '@angular/router';

@Component({
    selector: 'nx-apps-error-page',
    templateUrl: './error-page.component.html',
    styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent implements OnInit {
    public errorMessage = '';

    constructor(private _route: ActivatedRoute) {}

    ngOnInit(): void {
        //  passed via the data property in the routing module
        this.errorMessage = this._route.snapshot.data['message'];
        this._route.data.subscribe((data: Data) => {
            this.errorMessage = data['message'];
         });
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [ErrorPageComponent],
    exports: [ErrorPageComponent],
})
export class ErrorPageComponentModule {}
