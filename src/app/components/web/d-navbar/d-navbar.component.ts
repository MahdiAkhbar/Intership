import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { UserService } from '../../../shared/services/user.service';
import { IUser } from '../../../shared/interfaces/user.interface';
import { interval } from 'rxjs';

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
  date!: string;
  time!: string;

  ngOnInit(): void {
    this.user = this.userService.getUser();
    interval(1000).subscribe(() => {
      this.date = new Date().toLocaleDateString('fa-IR');
      this.time = new Date().toLocaleTimeString('fa-IR');
    })
  }

  logout() {
    this.AuthService.logout();
  }

}
