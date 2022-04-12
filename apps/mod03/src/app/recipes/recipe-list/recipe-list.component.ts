import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponentModule } from './recipe-item/recipe-item.component';
import Recipe from '../recipe.model';
import RecipeService from '../recipe.service';

@Component({
    selector: 'nx-apps-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [];

    constructor(private _recipeSvc: RecipeService) {}

    ngOnInit(): void {
        this.recipes = this._recipeSvc.recipes;
    }
}

@NgModule({
    imports: [CommonModule, RecipeItemComponentModule],
    declarations: [RecipeListComponent],
    exports: [RecipeListComponent],
})
export class RecipeListComponentModule {}
