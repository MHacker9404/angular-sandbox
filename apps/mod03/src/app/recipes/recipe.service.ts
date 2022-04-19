import { Injectable } from '@angular/core';
import Recipe from './recipe.model';
import Ingredient from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export default class RecipeService {
    // recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
    recipeSelected: Subject<Recipe> = new Subject<Recipe>();

    private _recipes: Recipe[] = [
        new Recipe(
            'Test',
            'A test recipe description',
            'https://www.cookipedia.co.uk/wiki/images/e/e3/Prawn_thermidor_recipe.jpg',
            [new Ingredient('apples', 5), new Ingredient('tomatoes', 10)]
        ),
        new Recipe(
            'Another Test Recipe',
            'A test recipe description',
            'https://www.cookipedia.co.uk/wiki/images/e/e3/Prawn_thermidor_recipe.jpg',
            [new Ingredient('apples', 5), new Ingredient('tomatoes', 10)]
        ),
    ];

    get recipes(): Recipe[] {
        return this._recipes.slice();
    }

    public getRecipe = async (index: number): Promise<Recipe> => {
        return { ...this._recipes[index] };
    };
}
