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
    // this.authService.isLoggedin.subscribe((state) => {
    //   if (state)
    //     this.loggedIn = true;
    //   else {
    //     this.loggedIn = false;
    //       this.router.navigate(['/d', 'login']);
    //   }
    // })
    let status = this.authService.getLoggedInState();
    if (status)
      return true;
    else {
      this.router.navigate(['/d', 'login']);
      return false;
    }
  }

}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuard).canActivate(route, state);
};
