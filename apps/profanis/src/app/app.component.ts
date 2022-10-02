import { Component } from '@angular/core';

@Component({
    selector: 'nx-apps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'profanis';
    constructor() {
        console.log(process.env['API_KEY']);
    }
}
