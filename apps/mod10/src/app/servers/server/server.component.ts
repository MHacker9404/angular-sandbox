import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
    server: { id: number; name: string; status: string };

    constructor(private serversService: ServersService, private _route: ActivatedRoute, private _router: Router) {}

    ngOnInit() {
        this._route.data.subscribe((data: Data) => {
            this.server = data['server'];   // match name in route resolver
        });
        // const id: number = +this._route.snapshot.params['id'];
        // this.server = this.serversService.getServer(id);
        // this._route.params.subscribe((params: Params) => {
        //     const newId: number = +params['id'];
        //     this.server = this.serversService.getServer(newId);
        // });
    }

    public onEdit = async (): Promise<void> => {
        this._router.navigate(['edit'], {
            relativeTo: this._route,
            queryParams: { key: 'value' },
            queryParamsHandling: 'merge',
        });
    };
}
