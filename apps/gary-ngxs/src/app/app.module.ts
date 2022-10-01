import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

@NgModule({
    declarations: [
        AppComponent,
        NxWelcomeComponent,
        ReadComponent,
        CreateComponent
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
