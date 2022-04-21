import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Ingredient from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export default class ShoppingListService {
    private _ingredients: Ingredient[] = [new Ingredient('apples', 5), new Ingredient('tomatoes', 10)];
    startedEditing = new Subject<number>();

    // ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<Ingredient[]>();
    ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();

    get ingredients(): Ingredient[] {
        return this._ingredients.slice();
    }

    getIngredient = async(index:number): Promise<Ingredient> => {
        return { ...this._ingredients[index] };
    }

    addIngredient = (ingredient: Ingredient) => {
        this._ingredients.push(ingredient);
        this.ingredientsChanged.next(this._ingredients.slice());
    };

    addIngredients = (ingredients: Ingredient[]) => {
        this._ingredients.push(...ingredients);
        this.ingredientsChanged.next(this._ingredients.slice());
    };
}
