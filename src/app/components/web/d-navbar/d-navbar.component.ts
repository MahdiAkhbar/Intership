import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserService } from '../../../shared/services/user.service';
import { IUser } from '../../../shared/interfaces/user.interface';

@Component({
  selector: 'app-d-navbar',
  templateUrl: './d-navbar.component.html',
  styleUrl: './d-navbar.component.css'
})
export class DNavbarComponent implements OnInit {
  constructor(
    private AuthService: AuthService,
    private userService: UserService
  ) { }

  user: IUser = {
    id: 0,
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    roles: [],
    favorites: [],
    notes: []
  };

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  logout() {
    this.AuthService.logout();
  }

}
