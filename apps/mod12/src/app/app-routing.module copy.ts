import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user/:id', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }
