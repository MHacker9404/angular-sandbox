import { Injectable, EventEmitter } from '@angular/core';
import Ingredient from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export default class ShoppingListService {
    private _ingredients: Ingredient[] = [new Ingredient('apples', 5), new Ingredient('tomatoes', 10)];

    ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();

    get ingredients(): Ingredient[] {
        return this._ingredients.slice();
    }

    addIngredient = (ingredient: Ingredient) => {
        this._ingredients.push(ingredient);
        this.ingredientsChanged.emit(this._ingredients.slice());
    };

    addIngredients = (ingredients: Ingredient[]) => {
        this._ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this._ingredients.slice());
    };
}
