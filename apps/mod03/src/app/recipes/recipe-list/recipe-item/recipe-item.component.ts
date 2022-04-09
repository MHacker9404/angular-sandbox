import { Component, OnInit, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import Recipe from '../../recipe.model';

@Component({
    selector: 'nx-apps-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe!: Recipe;
    // @Output() onSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
    @Output() onSelected: EventEmitter<void> = new EventEmitter<void>();

    constructor() {}

    ngOnInit(): void {}

    // onClicked = () => this.onSelected.emit(this.recipe);
    onClicked = () => this.onSelected.emit();
}

@NgModule({
    imports: [CommonModule],
    declarations: [RecipeItemComponent],
    exports: [RecipeItemComponent],
})
export class RecipeItemComponentModule {}
