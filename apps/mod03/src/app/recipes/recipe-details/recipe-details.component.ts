import { Component, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import Recipe from '../recipe.model';
import { DropdownDirectiveModule } from '../../shared/dropdown/dropdown.directive';
import ShoppingListService from '../../shopping-list/shopping-list.service';

@Component({
    selector: 'nx-apps-recipe-details',
    templateUrl: './recipe-details.component.html',
    styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
    @Input() recipe: Recipe | null = null;

    constructor(private _shoppingListSvc: ShoppingListService) {}

    ngOnInit(): void {}

    onAddToShoppingList = () => this._shoppingListSvc.addIngredients(this.recipe!.ingredients);
}

@NgModule({
    imports: [CommonModule, DropdownDirectiveModule],
    declarations: [RecipeDetailsComponent],
    exports: [RecipeDetailsComponent],
})
export class RecipeDetailsComponentModule {}
