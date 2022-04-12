import { Component, Input } from '@angular/core';
import LoggingService from '../logging.service';
import AccountsService from '../accounts.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css'],
    // providers: [LoggingService, AccountsService],
    providers: [LoggingService],
})
export class AccountComponent {
    @Input() account!: { name: string; status: string };
    @Input() id!: number;

    constructor(private _loggingSvc: LoggingService, private _accountsSvc: AccountsService) {}

    onSetTo(status: string) {
        this._loggingSvc.logStatusChange(status);
        this._accountsSvc.updateStatus(this.id, status);
    }
}
