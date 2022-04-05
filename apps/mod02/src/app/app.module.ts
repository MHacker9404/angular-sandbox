import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ServerComponentModule} from './server/server.component';
import {ServersComponentModule} from './servers/servers.component';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ServerComponentModule, ServersComponentModule ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
