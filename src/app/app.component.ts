import { Component, OnInit } from '@angular/core';
import { UserAgentService } from './shared/services/user-agent.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private userAgentService: UserAgentService, private location: Location, private router: Router) { }
  title = 'trader';

  userDeviceType!: string;

  ngOnInit(): void {
    this.userDeviceType = this.userAgentService.getDeviceType();
    if (this.userDeviceType === 'Desktop')
      // this.location.replaceState('/d');
      this.router.navigate(['d'])
    else
      // this.location.replaceState('/m');
      this.router.navigate(['m'])
  }

}
