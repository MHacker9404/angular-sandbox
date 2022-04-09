import { Component, OnInit, NgModule, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import Ingredient from '../../shared/ingredient.model';

@Component({
    selector: 'nx-apps-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
    @ViewChild('nameInput') nameInputRef!: ElementRef;
    @ViewChild('amountInput') amountInputRef!: ElementRef;
    @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

    constructor() {}

    ngOnInit(): void {}

    onAddItem = () => {
        const ingredient = new Ingredient(
            this.nameInputRef.nativeElement.value,
            +this.amountInputRef.nativeElement.value
        );
        this.ingredientAdded.emit(ingredient);
    };
}

@NgModule({
    imports: [CommonModule],
    declarations: [ShoppingEditComponent],
    exports: [ShoppingEditComponent],
})
export class ShoppingEditComponentModule {}
