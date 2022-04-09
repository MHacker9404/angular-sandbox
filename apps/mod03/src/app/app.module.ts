import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import {HeaderComponentModule} from './header/header.component';
import {RecipesComponentModule } from './recipes/recipes.component';
import {ShoppingListComponentModule } from './shopping-list/shopping-list.component';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HeaderComponentModule, RecipesComponentModule, ShoppingListComponentModule],
    providers: [],
    // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap: [AppComponent],
})
export class AppModule {}
