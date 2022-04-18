import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeListComponentModule } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponentModule } from './recipe-details/recipe-details.component';
import Recipe from './recipe.model';
import RecipeService from './recipe.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'nx-apps-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
    selectedRecipe: Recipe | null = null;

    constructor(private _recipeSvc: RecipeService) {
        this._recipeSvc.recipeSelected.subscribe((recipe:Recipe) => this.selectedRecipe = recipe);
    }

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, RecipeListComponentModule, RecipeDetailsComponentModule, RouterModule],
    declarations: [RecipesComponent],
    exports: [RecipesComponent],
})
export class RecipesComponentModule {}
