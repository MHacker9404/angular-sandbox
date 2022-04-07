import { Component } from '@angular/core';
import Server from './server.model';

@Component({
    selector: 'nx-apps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    serverElements: Server[] = [ ];

    onServerAdded = (server:Server): void => {
        this.serverElements.push(server);
    };

    onBlueprintAdded = (blueprint: Server): void => {
        this.serverElements.push(blueprint);
    };
}
