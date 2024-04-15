import { Component, OnInit } from '@angular/core';
import { UserAgentService } from './shared/services/user-agent.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private userAgentService: UserAgentService, private location: Location) { }
  title = 'trader';

  userDeviceType!: string;

  ngOnInit(): void {
    this.userDeviceType = this.userAgentService.getDeviceType();
    if (this.userDeviceType === 'Desktop')
      this.location.replaceState('/d');
    else
      this.location.replaceState('/m');
  }

}
