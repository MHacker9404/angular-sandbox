import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';
import { from, Observable } from 'rxjs';

@Component({
    selector: 'nx-apps-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    genders = ['male', 'female'];
    formGroup!: FormGroup;
    forbiddenUserNames = ['Chris', 'Anna'];

    constructor() {}

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            userData: new FormGroup({
                userName: new FormControl(null, [Validators.required, this.checkForbiddenNames]),
                email: new FormControl(null, [Validators.required, Validators.email], [this.checkForbiddenEmails])
            }),
            gender: new FormControl('male'),
            hobbies: new FormArray([])
        });
    }

    onSubmit = async () => {
        console.log(this.formGroup);
        console.log(JSON.stringify(this.formGroup.value));
    };

    onAddHobby = async () => {
        (<FormArray>this.formGroup.get('hobbies')).push(new FormControl(null, Validators.required));
    };

    hobbies = (): AbstractControl[] => (<FormArray>this.formGroup.get('hobbies')).controls;

    checkForbiddenNames = (control: FormControl): { [key: string]: boolean } | null => {
        const name = control.value;
        if (_.includes(this.forbiddenUserNames, name)) {
            return { forbiddenUserName: true };
        }
        return null;
    };

    checkForbiddenEmails = async (control: AbstractControl): Promise<{ [key: string]: boolean } | null> => {
        const email = control.value;
        const promise = new Promise<null | { [key: string]: boolean }>((resolve) => {
            setTimeout(() => {
                if (email === 'test@test.com') {
                    resolve({ forbiddenEmail: true });
                } else {
                    resolve(null);
                }
            }, 2500);
        });
        return promise;
    };
}
