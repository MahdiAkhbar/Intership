import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/\material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './components/mobile/home/info/info.component';
import { HomeComponent } from './components/mobile/home/home.component';
import { MazannehComponent } from './components/mobile/home/mazanneh/mazanneh.component';
import { GraphComponent } from './components/mobile/home/graph/graph.component';
import { PortfoyComponent } from './components/mobile/home/portfoy/portfoy.component';
import { WatchlistComponent } from './components/mobile/home/watchlist/watchlist.component';
import { BuySellButtonsComponent } from './components/mobile/home/buy-sell-buttons/buy-sell-buttons.component';
import { CategoryPipe } from './shared/pipes/category.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileSectionComponent } from './components/profile/profile-section/profile-section.component';
import { ChangePasswordSectionComponent } from './components/profile/change-password-section/change-password-section.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { MTradeComponent } from './components/mobile/home/m-trade/m-trade.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { DesktopComponent } from './components/desktop/desktop.component';
import { DTradeComponent } from './components/desktop/d-trade/d-trade.component';
import { DLoginComponent } from './components/desktop/d-login/d-login.component';
import { DSignupComponent } from './components/desktop/d-signup/d-signup.component';
import { DNavbarComponent } from './components/desktop/d-navbar/d-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfoComponent,
    HomeComponent,
    MazannehComponent,
    GraphComponent,
    PortfoyComponent,
    WatchlistComponent,
    BuySellButtonsComponent,
    CategoryPipe,
    SearchPipe,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    ProfileSectionComponent,
    ChangePasswordSectionComponent,
    BottomSheetComponent,
    MTradeComponent,
    MobileComponent,
    DesktopComponent,
    DTradeComponent,
    DLoginComponent,
    DSignupComponent,
    DNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
