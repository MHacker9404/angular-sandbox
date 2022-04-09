import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicHighlightDirectiveModule } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirectiveModule } from './better-highlight/better-highlight.directive';
import { UnlessDirectiveModule } from './unless/unless.directive';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, BasicHighlightDirectiveModule, BetterHighlightDirectiveModule, UnlessDirectiveModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
