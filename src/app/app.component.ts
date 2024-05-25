import { Component, OnInit } from '@angular/core';
import { UserAgentService } from './shared/services/user-agent.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    private userAgentService: UserAgentService,
    private authService: AuthService
  ) { }
  title = 'trader';

  userDeviceType!: string;

  ngOnInit(): void {
    this.authService.isLoggedin.subscribe(value => {
      this.authService.isLoggedinState = value;
    })
    this.userDeviceType = this.userAgentService.getDeviceType();
    if (this.userDeviceType !== 'Desktop')
      window.location.href = 'http://localhost:4200/m';
  }

}
