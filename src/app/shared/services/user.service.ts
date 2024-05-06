import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) { }

  getUserProfile(username: string) {
    return this.http.get<IUser>(this.apiUrl + '/user/' + username, { observe: 'response' }).pipe(
      tap(res => {
        this.setUser(<IUser>res.body);
      })
    );
  }

  setUser(userObj: IUser) {
    localStorage.setItem('user', JSON.stringify(userObj));
  }

  getUser() {
    return <IUser>JSON.parse(<string>localStorage.getItem('user'));
  }

}
