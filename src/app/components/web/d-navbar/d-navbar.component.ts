import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-d-navbar',
  templateUrl: './d-navbar.component.html',
  styleUrl: './d-navbar.component.css'
})
export class DNavbarComponent {
  constructor(private AuthService: AuthService, private router: Router) { }

  logout() {
    this.AuthService.logout();
    this.router.navigate(['d', 'login']);
  }

}
