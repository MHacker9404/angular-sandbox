import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { RemoveTutorial } from '../actions/tutorial.actions';
import { Tutorial } from '../models/tutorial.model';
import { TutorialState } from '../state/tutorial.state';

@Component({
    selector: 'nx-apps-read',
    templateUrl: './read.component.html',
    styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit  {
    // tutorials$: Observable<Tutorial[]> = of([]);
    @Select(TutorialState.getTutorials) tutorials$: Observable<Tutorial[]> = of(
        []
    );

    constructor(private store: Store) { }

    ngOnInit(): void {
        this.tutorials$ = this.store.select(
            (state) => state.tutorials.tutorials
        );
    }

    delTutorial = async (name: string) =>
        this.store.dispatch(new RemoveTutorial(name));
}
