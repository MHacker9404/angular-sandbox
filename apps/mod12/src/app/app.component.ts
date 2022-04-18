import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import UserService from './user/user.service';

@Component({
    selector: 'nx-apps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    userActivated = false;
    private _subscription: Subscription | undefined | null;
    title = 'mod12';
    constructor(private _userSvc: UserService) { }

    ngOnInit() {
        this._subscription = this._userSvc.activatedEmitter.subscribe(activated => this.userActivated = activated);
    }

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
    }
}
