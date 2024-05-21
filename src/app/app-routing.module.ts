import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/mobile/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SignupComponent } from './components/signup/signup.component';
import { MTradeComponent } from './components/mobile/home/m-trade/m-trade.component';
import { AppComponent } from './app.component';
import { DTradeComponent } from './components/web/d-trade/d-trade.component';
import { DHomeComponent } from './components/web/d-home/d-home.component';
import { DLoginComponent } from './components/web/d-login/d-login.component';
import { DSignupComponent } from './components/web/d-signup/d-signup.component';
import { authGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  { path: '', component: AppComponent, pathMatch: 'full' },

  {
    path: 'm', component: HomeComponent, canActivate: [authGuard], children: [
      { path: '', component: MTradeComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },
  { path: 'm/signup', component: SignupComponent },
  { path: 'm/login', component: LoginComponent },

  {
    path: 'd', component: DHomeComponent, canActivate: [authGuard], children: [
      { path: '', component: DTradeComponent },
      { path: 'profile', component: ProfileComponent },
    ]
  },
  { path: 'd/signup', component: DSignupComponent },
  { path: 'd/login', component: DLoginComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
