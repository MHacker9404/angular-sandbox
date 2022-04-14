import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
    server: { id: number; name: string; status: string };

    constructor(private serversService: ServersService, private _route: ActivatedRoute) {}

    ngOnInit() {
        const id: number = +this._route.snapshot.params['id'];
        this.server = this.serversService.getServer(id);
        this._route.params.subscribe((params: Params) => {
            const newId: number = +params['id'];
            this.server = this.serversService.getServer(newId);
        });
    }
}
