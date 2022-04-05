import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServerComponentModule } from '../server/server.component';

@Component({
    selector: 'nx-apps-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
    allowNewServer: boolean = false;
    serverCreated: boolean = false;
    serverName: string = '<Change Me>';
    serverCreationStatus: string = 'No server was created';
    servers = ['Test Server', 'UAT Server']

    constructor() {
        setTimeout(() => {
            this.allowNewServer = !this.allowNewServer;
        }, 2000);
    }

    ngOnInit(): void {}

    onCreateServer = (event: Event) => {
        this.serverCreationStatus = `Server was created: ${this.serverName}`;
        this.serverCreated = true;
        this.servers.push(this.serverName);
    };
}

@NgModule({
    imports: [CommonModule, FormsModule, ServerComponentModule],
    declarations: [ServersComponent],
    exports: [ServersComponent],
})
export class ServersComponentModule {}
