import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export default class AccountsService {
    private _accounts = [
        {
            name: 'Master Account',
            status: 'active',
        },
        {
            name: 'Testaccount',
            status: 'inactive',
        },
        {
            name: 'Hidden Account',
            status: 'unknown',
        },
    ];

    get accounts () {
        // return this._accounts.slice();
        return this._accounts;
    }

    constructor() {}

    addAccount = (name:string, status:string) => {
        this._accounts.push({name, status});
    };

    updateStatus = (id:number, newStatus:string) => {
        this._accounts[id].status = newStatus;
    };
}
