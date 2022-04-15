import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';

export interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export default class ServerResolver implements Resolve<Server> {
    constructor(private _serverSvc: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> {
        const id = +route.params['id'];
        return this._serverSvc.getServer(id);
    }
}
