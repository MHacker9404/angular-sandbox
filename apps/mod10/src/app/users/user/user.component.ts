import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
    user: { id: number; name: string } | undefined;
    private _paramsSubscription: Subscription;

    constructor(private _router: Router, private _route: ActivatedRoute) {}

    ngOnInit() {
        console.log(this._route);

        this.user = {
            id: this._route.snapshot.params['id'],
            name: this._route.snapshot.params['name'],
        };

        this._paramsSubscription = this._route.params.subscribe((params: Params) => {
            this.user = {
                id: params['id'],
                name: params['name'],
            };
        });
    }

    ngOnDestroy(): void {
        this._paramsSubscription.unsubscribe();
    }
}
