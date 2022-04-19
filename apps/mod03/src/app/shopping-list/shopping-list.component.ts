import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingEditComponentModule } from './shopping-edit/shopping-edit.component';
import Ingredient from '../shared/ingredient.model';
import ShoppingListService from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'nx-apps-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[] = [];
    private _subscription: Subscription | undefined | null;

    constructor(private _shoppingListSvc: ShoppingListService) {}

    ngOnInit(): void {
        this.ingredients = this._shoppingListSvc.ingredients;
        this._subscription = this._shoppingListSvc.ingredientsChanged.subscribe(
            (ingredients: Ingredient[]) => (this.ingredients = ingredients)
        );
    }

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
    }
}

@NgModule({
    imports: [CommonModule, FormsModule, ShoppingEditComponentModule],
    declarations: [ShoppingListComponent],
    exports: [ShoppingListComponent],
})
export class ShoppingListComponentModule {}
