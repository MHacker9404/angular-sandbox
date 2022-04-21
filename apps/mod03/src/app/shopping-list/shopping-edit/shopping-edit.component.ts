import { Component, OnInit, NgModule, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import Ingredient from '../../shared/ingredient.model';
import ShoppingListService from '../shopping-list.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'nx-apps-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
    // @ViewChild('nameInput') nameInputRef!: ElementRef;
    // @ViewChild('amountInput') amountInputRef!: ElementRef;

    formGroup!: FormGroup;

    private _subscription!: Subscription;
    editMode = false;
    private _editIndex = -1;
    private _item!: Ingredient;

    constructor(private _shoppingListSvc: ShoppingListService) {}

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            name: new FormControl(null, [Validators.required]),
            amount: new FormControl(null, [Validators.required, Validators.email])
        });

        this._subscription = this._shoppingListSvc.startedEditing.subscribe(async (index: number) => {
            this._editIndex = index;
            this.editMode = true;
            this._item = await this._shoppingListSvc.getIngredient(index);

            this.formGroup.setValue({ name: this._item.name, amount: this._item.amount });
        });
    }

    ngOnDestroy(): void {
        this._subscription.unsubscribe();
    }

    onAddItem = () => {
        const ingredient: Ingredient = new Ingredient(
            this.formGroup.get('name')?.value,
            +this.formGroup.get('amount')?.value
        );
        console.log(ingredient);
        this._shoppingListSvc.addIngredient(ingredient);
    };
}

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [ShoppingEditComponent],
    exports: [ShoppingEditComponent]
})
export class ShoppingEditComponentModule {}
