import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Recipe from '../../recipe.model';
import RecipeService from '../../recipe.service';

@Component({
    selector: 'nx-apps-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe!: Recipe;
    // @Output() onSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
    // @Output() onSelected: EventEmitter<void> = new EventEmitter<void>();

    constructor(private _recipeSvc: RecipeService) {}

    ngOnInit(): void {}

    // onClicked = () => this.onSelected.emit(this.recipe);
    onClicked = () => this._recipeSvc.recipeSelected.emit(this.recipe);
}

@NgModule({
    imports: [CommonModule],
    declarations: [RecipeItemComponent],
    exports: [RecipeItemComponent],
})
export class RecipeItemComponentModule {}
