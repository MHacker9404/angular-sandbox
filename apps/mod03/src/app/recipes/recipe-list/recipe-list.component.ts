import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeItemComponentModule} from './recipe-item/recipe-item.component';
import Recipe from '../recipe.model';

@Component({
    selector: 'nx-apps-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe(
            'Test',
            'A test recipe description',
            'https://www.cookipedia.co.uk/wiki/images/e/e3/Prawn_thermidor_recipe.jpg'
        ),
        new Recipe(
            'Test',
            'A test recipe description',
            'https://www.cookipedia.co.uk/wiki/images/e/e3/Prawn_thermidor_recipe.jpg'
        ),
    ];

    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule,RecipeItemComponentModule ],
    declarations: [RecipeListComponent],
    exports: [RecipeListComponent],
})
export class RecipeListComponentModule {}
