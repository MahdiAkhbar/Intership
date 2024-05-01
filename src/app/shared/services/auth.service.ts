import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ILogin } from '../interfaces/loginform.interface';
import { ISignup } from '../interfaces/signupform.interface';
import { catchError, tap, throwError } from 'rxjs';

interface ILoginResponse {
  refreshToken: string;
  token: string;
};

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
    return this.http.post<ILoginResponse>(this.apiUrl + '/login', loginData).pipe(
      catchError(errorRes => this.handleError(errorRes))
    )
  }

  private handleError(err: any) {
    let errorMessage = 'مشکلی پیش آمد لطفا دوباره تلاش کنید';
    if (!err.error) {
      return throwError(() => errorMessage);
    }
    return throwError(() => err.error.msg);
  }
}