import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ShoppingEditComponentModule} from './shopping-edit/shopping-edit.component';

@Component({
    selector: 'nx-apps-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule, ShoppingEditComponentModule],
    declarations: [ShoppingListComponent],
    exports: [ShoppingListComponent],
})
export class ShoppingListComponentModule {}
