import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
class AuthGuard {
  constructor(private authService: AuthService, private router: Router) { }

  loggedIn: boolean = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    this.authService.isLoggedin.subscribe((state) => {
      if (state)
        this.loggedIn = true;
      else {
        this.router.navigate(['/d', 'login']);
        this.loggedIn = true;
      }
    })
    return this.loggedIn;
  }

}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuard).canActivate(route, state);
};
