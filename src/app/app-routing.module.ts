import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { DTradeComponent } from './components/web/d-trade/d-trade.component';
import { DHomeComponent } from './components/web/d-home/d-home.component';
import { DLoginComponent } from './components/web/d-login/d-login.component';
import { DSignupComponent } from './components/web/d-signup/d-signup.component';
import { authGuard } from './shared/guards/auth.guard';
import { DesktopComponent } from './components/web/desktop.component';

const routes: Routes = [
  {
    path: '', component: DesktopComponent, children: [
      { path: '', redirectTo: 'd', pathMatch: 'full' },
      {
        path: 'd', component: DHomeComponent, canActivate: [authGuard], children: [
          { path: '', component: DTradeComponent },
          { path: 'profile', component: ProfileComponent },
        ]
      },
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
