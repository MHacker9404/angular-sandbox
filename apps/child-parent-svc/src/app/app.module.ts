import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GriffinStatusComponent } from './griffin-status/griffin-status.component';

@NgModule({
    declarations: [AppComponent, GriffinStatusComponent ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
