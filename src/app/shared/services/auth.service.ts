import { HttpClient } from '@angular/common/http';
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
    @Inject('API_URL') private apiUrl: string
  ) { }

  signup(signupData: ISignup) {
    return this.http.post(this.apiUrl + 'user/register', signupData).pipe(
      catchError(errorRes => this.handleError(errorRes))
    )
  }

  login(loginData: ILogin) {
    return this.http.post<ILoginResponse>(this.apiUrl + '/login', loginData).pipe(
      catchError(errorRes => this.handleError(errorRes))
    )
  }

  handleError(err: any) {
    let errorMessage = 'مشکلی پیش آمد لطفا دوباره تلاش کنید';
    if (!err.error) {
      return throwError(() => errorMessage);
    }
    return throwError(() => err.error.msg);
  }
}