import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
class AuthGuard {
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  loggedIn: boolean = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {

    let status = this.authService.getLoggedInState();
    if (status) {
      return true;
    }
    else {
      if (!route.routeConfig?.path?.includes('signup')) {
        this.router.navigate(['/d/login']);
      }
      return false;
    }
  }

}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuard).canActivate(route, state);
};
