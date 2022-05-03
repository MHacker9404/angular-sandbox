import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ShortenPipe } from './shorten.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

@NgModule({
    declarations: [AppComponent, ShortenPipe, FilterPipe],
    imports: [BrowserModule, RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }), FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
