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
import { InfoComponent } from './components/home/info/info.component';
import { HomeComponent } from './components/home/home.component';
import { MazannehComponent } from './components/home/mazanneh/mazanneh.component';
import { GraphComponent } from './components/home/graph/graph.component';
import { PortfoyComponent } from './components/home/portfoy/portfoy.component';
import { WatchlistComponent } from './components/home/watchlist/watchlist.component';
import { BuySellButtonsComponent } from './components/home/buy-sell-buttons/buy-sell-buttons.component';
import { CategoryPipe } from './shared/pipes/category.pipe';
import { SearchPipe } from './shared/pipes/search.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileSectionComponent } from './components/profile/profile-section/profile-section.component';
import { ChangePasswordSectionComponent } from './components/profile/change-password-section/change-password-section.component';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';

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
    BottomSheetComponent
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
