import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/mobile/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { MTradeComponent } from './components/mobile/home/m-trade/m-trade.component';
import { AppComponent } from './app.component';
import { DTradeComponent } from './components/desktop/d-trade/d-trade.component';
import { DHomeComponent } from './components/desktop/d-home/d-home.component';
import { DLoginComponent } from './components/desktop/d-login/d-login.component';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },
  {
    path: 'm', component: HomeComponent, children: [
      { path: '', component: MTradeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ]
  },
  {
    path: 'd', component: DHomeComponent, children: [
      { path: '', component: DTradeComponent },
      { path: 'login', component: DLoginComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
