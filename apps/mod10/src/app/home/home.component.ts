import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from '../auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    constructor(private _router: Router, private _authService: AuthService) {}
    public onLoadServers = async(id:number): Promise<void> => {
        this._router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
        return;
    };

    public onLogin = async () => {
        this._authService.login();
     };

    public onLogout = async () => {
        this._authService.logout();
     };
}
