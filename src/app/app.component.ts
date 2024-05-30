import { Component, OnInit } from '@angular/core';
import { UserAgentService } from './shared/services/user-agent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    private userAgentService: UserAgentService
  ) { }
  title = 'trader';

  userDeviceType!: string;

  ngOnInit(): void {
    this.userDeviceType = this.userAgentService.getDeviceType();
    if (this.userDeviceType !== 'Desktop')
      window.location.href = 'http://192.168.130.176:3000/m';
  }

}
