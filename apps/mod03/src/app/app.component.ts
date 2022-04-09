import { Component } from '@angular/core';

@Component({
    selector: 'nx-apps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    feature: string = 'recipe';
    constructor() { }

    onFeatureSelected = (feature: string) => {
        this.feature = feature;
    }
}
