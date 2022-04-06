import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RecipeListComponentModule} from './recipe-list/recipe-list.component';
import {RecipeDetailsComponentModule} from './recipe-details/recipe-details.component';

@Component({
    selector: 'nx-apps-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, RecipeListComponentModule, RecipeDetailsComponentModule],
    declarations: [RecipesComponent],
    exports: [RecipesComponent],
})
export class RecipesComponentModule {}
