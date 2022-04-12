import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingEditComponentModule } from './shopping-edit/shopping-edit.component';
import Ingredient from '../shared/ingredient.model';
import ShoppingListService from './shopping-list.service';

@Component({
    selector: 'nx-apps-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [];

    constructor(private _shoppingListSvc: ShoppingListService) {}

    ngOnInit(): void {
        this.ingredients = this._shoppingListSvc.ingredients;
        this._shoppingListSvc.ingredientsChanged.subscribe(
            (ingredients: Ingredient[]) => (this.ingredients = ingredients)
        );
    };
}

@NgModule({
    imports: [CommonModule, FormsModule, ShoppingEditComponentModule],
    declarations: [ShoppingListComponent],
    exports: [ShoppingListComponent],
})
export class ShoppingListComponentModule {}
