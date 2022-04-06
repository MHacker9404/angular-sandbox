import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RecipeItemComponentModule} from './recipe-item/recipe-item.component';

@Component({
    selector: 'nx-apps-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

@NgModule({
    imports: [CommonModule,RecipeItemComponentModule ],
    declarations: [RecipeListComponent],
    exports: [RecipeListComponent],
})
export class RecipeListComponentModule {}
