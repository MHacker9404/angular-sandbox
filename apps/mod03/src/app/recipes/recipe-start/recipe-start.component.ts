import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'nx-apps-recipe-start',
    templateUrl: './recipe-start.component.html',
    styleUrls: ['./recipe-start.component.scss'],
})
export class RecipeStartComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule],
    declarations: [RecipeStartComponent],
    exports: [RecipeStartComponent],
})
export class RecipeStartComponentModule {}
