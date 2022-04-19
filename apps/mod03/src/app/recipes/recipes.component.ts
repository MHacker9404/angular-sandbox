import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeListComponentModule } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponentModule } from './recipe-details/recipe-details.component';
import Recipe from './recipe.model';
import RecipeService from './recipe.service';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'nx-apps-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit,OnDestroy {
    private _subscription: Subscription | undefined | null;

    selectedRecipe: Recipe | null = null;

    constructor(private _recipeSvc: RecipeService) {
        this._subscription = this._recipeSvc.recipeSelected.subscribe((recipe:Recipe) => this.selectedRecipe = recipe);
    }

    ngOnInit(): void {}

    ngOnDestroy(): void {
        this._subscription?.unsubscribe();
    }
}

@NgModule({
    imports: [CommonModule, RecipeListComponentModule, RecipeDetailsComponentModule, RouterModule],
    declarations: [RecipesComponent],
    exports: [RecipesComponent],
})
export class RecipesComponentModule {}
