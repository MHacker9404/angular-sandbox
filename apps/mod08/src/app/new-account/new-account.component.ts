import { Component } from '@angular/core';
import LoggingService from '../logging.service';
import AccountsService from '../accounts.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css'],
    // providers: [LoggingService, AccountsService],
    providers: [LoggingService],
})
export class NewAccountComponent {
    constructor(private _loggingSvc: LoggingService, private _accountSvc: AccountsService) {}

    onCreateAccount(name: string, status: string) {
        this._loggingSvc.logStatusChange(status);
        this._accountSvc.addAccount(name, status)
    }
}
