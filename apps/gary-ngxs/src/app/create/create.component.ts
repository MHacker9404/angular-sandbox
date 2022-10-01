import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddTutorial } from '../actions/tutorial.actions';


@Component({
    selector: 'nx-apps-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss']
})
export class CreateComponent {
    constructor(private _store: Store) { }

    addTutorial = async (name: string, url: string): Promise<void> => {
        this._store.dispatch(new AddTutorial({ name: name, url: url }));
    };
}
