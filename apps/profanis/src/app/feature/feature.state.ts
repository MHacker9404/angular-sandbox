import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<any>({
    name: 'feature',
    defaults: {}
})
@Injectable()
export class FeatureState {}
