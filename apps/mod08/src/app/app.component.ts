import { Component, OnInit } from '@angular/core';
import AccountsService from './accounts.service';

@Component({
    selector: 'nx-apps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [AccountsService],
})
export class AppComponent implements OnInit {
    accounts: { name: string; status: string }[] = [];
    constructor(private _accountsSvc: AccountsService) {
    }

    ngOnInit() {
        this.accounts = this._accountsSvc.accounts;
    }
}
