import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
    private _subscription: Subscription | null | undefined;

    constructor() {}

    ngOnInit() {
        // this._subscription = interval(1000).subscribe((count:number) => {
        //   console.info(count);
        // });
        // const customInterval = Observable.create((observer: Observer<number>) => {
        //   let count: number = 0;
        //   setInterval(() => {
        //     observer.next(count);
        //     count++;
        //   }, 1000);
        // });
        const customInterval = new Observable((observer: Observer<number>) => {
            let count = 0;
            setInterval(() => {
                observer.next(count);

                if (count === 2) {
                    observer.complete();
                }

                if (count > 3) {
                    observer.error(new Error('Count is greater than 3'));
                }

                count++;
            }, 1000);
        });

        // this._subscription = customInterval.subscribe((data: any) => console.info(data),
        //   (error) => console.error(error));
        this._subscription = customInterval
            .pipe(
                map((data: number) => `Round ${data + 1}`),
                map((data: string) => `Additional mapping: ${data}`)
            )
            .subscribe({
                next: (data: any) => console.info(data),
                error: (error: any) => console.error(error),
                complete: () => console.info('complete'),
            });
    }

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
    }
}
