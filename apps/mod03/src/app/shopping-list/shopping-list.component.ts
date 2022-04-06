import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ShoppingEditComponentModule} from './shopping-edit/shopping-edit.component';
import Ingredient from '../shared/ingredient.model';

@Component({
    selector: 'nx-apps-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10),
    ];

    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, ShoppingEditComponentModule],
    declarations: [ShoppingListComponent],
    exports: [ShoppingListComponent],
})
export class ShoppingListComponentModule {}
