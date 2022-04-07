import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CockpitComponentModule } from './cockpit/cockpit.component';
import { ServerElementComponentModule } from './server-element/server-element.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        CockpitComponentModule,
        ServerElementComponentModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
