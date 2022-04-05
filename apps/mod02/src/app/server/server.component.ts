import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'nx-apps-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
    serverId: number = 10;
    status: string = 'offline';

    constructor() {
        this.status = Math.random() > 0.5 ? 'online' : 'offline';
    }

    ngOnInit(): void {}

    getStatus = ():string => this.status;

    getColor = ():string => this.status === 'online' ? 'green' : 'red';
}

@NgModule({
    imports: [CommonModule],
    declarations: [ServerComponent],
    exports: [ServerComponent],
})
export class ServerComponentModule {}
