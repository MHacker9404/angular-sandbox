import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
    selector: 'app-edit-server',
    templateUrl: './edit-server.component.html',
    styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
    server: { id: number; name: string; status: string };
    serverName = '';
    serverStatus = '';
    allowEdit = false;

    constructor(private serversService: ServersService, private _route: ActivatedRoute) {}

    ngOnInit() {
        console.log(this._route.snapshot.queryParams);
        console.log(this._route.snapshot.fragment);

        this._route.queryParams.subscribe(qp => {
            this.allowEdit = qp['allowEdit'] === '1' ? true : false;
         });

        const id: number = +this._route.snapshot.params['id'];
        this.server = this.serversService.getServer(id);
        this.serverName = this.server?.name;
        this.serverStatus = this.server?.status;
    }

    onUpdateServer() {
        this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    }
}
