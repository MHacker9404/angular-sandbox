import { Component } from '@angular/core';

@Component({
    selector: 'nx-apps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    feature: 'recipe' | 'shopping' = 'recipe';
    constructor() { }

    onFeatureSelected = (feature: 'recipe' | 'shopping') => {
        this.feature = feature;
    }
}
