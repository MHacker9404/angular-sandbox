import { Component, OnInit, NgModule, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Ingredient from '../../shared/ingredient.model';
import ShoppingListService from '../shopping-list.service';

@Component({
    selector: 'nx-apps-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInputRef!: ElementRef;
    @ViewChild('amountInput') amountInputRef!: ElementRef;

    constructor(private _shoppingListSvc: ShoppingListService) {}

    ngOnInit(): void {}

    onAddItem = () => {
        const ingredient = new Ingredient(
            this.nameInputRef.nativeElement.value,
            +this.amountInputRef.nativeElement.value
        );
        this._shoppingListSvc.addIngredient(ingredient);
    };
}

@NgModule({
    imports: [CommonModule],
    declarations: [ShoppingEditComponent],
    exports: [ShoppingEditComponent],
})
export class ShoppingEditComponentModule {}
