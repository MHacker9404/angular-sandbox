import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthGuardService from './auth-guard.service';
import AuthService from './auth.service';
import { ErrorPageComponent, ErrorPageComponentModule } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent, PageNotFoundComponentModule } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import ServerResolver from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users',
        component: UsersComponent,
        children: [{ path: ':id/:name', component: UserComponent }],
    },
    {
        path: 'servers',
        component: ServersComponent,
        // canActivate: [AuthGuardService],
        // canActivateChild: [AuthGuardService],
        children: [
            { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
            { path: ':id/edit', component: EditServerComponent },
        ],
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: 'error', component: ErrorPageComponent, data: { message: 'message' } },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [PageNotFoundComponentModule, RouterModule.forRoot(appRoutes), ErrorPageComponentModule],
    exports: [RouterModule],
    providers: [AuthService, AuthGuardService, ServerResolver],
})
export class AppRoutingModule {}
