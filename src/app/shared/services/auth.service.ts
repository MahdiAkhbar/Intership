import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ILogin } from '../interfaces/loginform.interface';
import { ISignup } from '../interfaces/signupform.interface';
import { catchError, take, tap, throwError } from 'rxjs';
import { ILoginResponse } from '../interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string,
    @Inject('GLOBAL_TOKEN') private gToken: string
  ) { }

  signup(signupData: ISignup) {
    let headers = new HttpHeaders({
      'Authorization': this.gToken
    });
    let options = { headers: headers };

    return this.http.post<{ msg: string }>(
      this.apiUrl + '/user/register',
      signupData,
      options
    ).pipe(
      catchError(errorRes => this.handleError(errorRes))
    )
  }

  login(loginData: ILogin) {
    return this.http.post<ILoginResponse>(
      this.apiUrl + '/login',
      loginData,
      { observe: 'response' }
    ).pipe(
      take(1),
      tap(resData => {
        this.setToken(<string>resData.body?.token)
      }),
      catchError(errorRes => this.handleError(errorRes))
    )
  }

  logout() {
    localStorage.removeItem('token');
  }

  private handleError(err: any) {
    let errorMessage = 'مشکلی پیش آمد لطفا دوباره تلاش کنید';
    if (!err.error) {
      return throwError(() => errorMessage);
    }
    return throwError(() => err.error.msg);
  }

  getToken() {
    let token = JSON.parse(<string>localStorage.getItem('token'));
    return token ? token : '';
  }

  setToken(value: string) {
    localStorage.setItem('token', JSON.stringify(value));
  }
}