import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Recipe from '../recipe.model';

@Component({
    selector: 'nx-apps-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
    @Input() recipe: Recipe | null = null;

    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [RecipeDetailsComponent],
    exports: [RecipeDetailsComponent],
})
export class RecipeDetailsComponentModule {}
