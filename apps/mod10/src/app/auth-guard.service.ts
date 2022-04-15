import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import AuthService from './auth.service';

@Injectable()
export default class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(private _authService: AuthService, private _router: Router) {}

    public canActivate = async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> => {
        const isAuthenticated = await this._authService.isAuthenticated();
        if (!isAuthenticated) {
            this._router.navigate(['/']);
        }
        return !isAuthenticated;
    };

    public canActivateChild = async (
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> => {
        const isAuthenticated = await this._authService.isAuthenticated();
        if (!isAuthenticated) {
            this._router.navigate(['/']);
        }
        return !isAuthenticated;
    };
}
