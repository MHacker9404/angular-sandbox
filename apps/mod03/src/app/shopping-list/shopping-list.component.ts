import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

    onIngredientAdded = (ingredient: Ingredient) => {
        this.ingredients.push(ingredient);
     };
}

@NgModule({
    imports: [CommonModule, FormsModule, ShoppingEditComponentModule],
    declarations: [ShoppingListComponent],
    exports: [ShoppingListComponent],
})
export class ShoppingListComponentModule {}
