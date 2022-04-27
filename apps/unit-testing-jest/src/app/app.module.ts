import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

@NgModule({
    declarations: [AppComponent, UserComponent],
    imports: [BrowserModule, RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' })],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
