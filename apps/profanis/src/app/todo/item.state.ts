import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

@State<any>({
    name: 'item',
    defaults: {}
})
@Injectable()
export class ItemState {}
