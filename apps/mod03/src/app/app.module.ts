import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HeaderComponentModule} from './header/header.component';
import {RecipesComponentModule } from './recipes/recipes.component';
import {ShoppingListComponentModule } from './shopping-list/shopping-list.component';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HeaderComponentModule, RecipesComponentModule, ShoppingListComponentModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
