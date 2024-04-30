import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ILogin } from '../interfaces/loginform.interface';
import { ISignup } from '../interfaces/signupform.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) { }

  signup(signupData: ISignup) {
    return this.http.post(this.apiUrl + 'user/register', signupData);
  }

  login(loginData: ILogin) {
    return this.http.post(this.apiUrl + '/login', loginData);
  }

}
