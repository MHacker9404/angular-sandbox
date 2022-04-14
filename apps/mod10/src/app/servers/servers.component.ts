import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
    selector: 'app-servers',
    templateUrl: './servers.component.html',
    styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
    public servers: { id: number; name: string; status: string }[] = [];

    constructor(private serversService: ServersService, private _router: Router, private _route: ActivatedRoute) {}

    ngOnInit() {
        this.servers = this.serversService.getServers();
    }

    public onReload = async (): Promise<void> => {
        // this._router.navigate(['servers'], { relativeTo: this._route });
        return;
    };
}
