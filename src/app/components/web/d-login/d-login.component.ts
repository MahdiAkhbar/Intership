import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/services/auth.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-d-login',
  templateUrl: './d-login.component.html',
  styleUrl: './d-login.component.css'
})
export class DLoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  loginForm!: FormGroup;
  isLoading: boolean = false;
  errorMessage!: string;
  successLoginMsg: string = '';

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      // 'captcha': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.errorMessage = '';
    let formControls = this.loginForm.controls;
    if (!formControls['username'].touched)
      this.loginForm.controls['username'].markAsTouched();
    if (!formControls['password'].touched)
      this.loginForm.controls['password'].markAsTouched();
    // if (!formControls['captcha'].touched)
    //   this.loginForm.controls['captcha'].markAsTouched();

    if (this.loginForm.valid) {
      this.isLoading = true;
      console.log('form is valid');
      this.authService.login({ ...this.loginForm.value }).subscribe({
        next: (resData) => {
          this.userService.getUserProfile(this.loginForm.value.username).subscribe()
          // localStorage.setItem('token', JSON.stringify(resData.body?.token));
          // this.authService.setToken(<string>resData.body?.token);
          this.successLoginMsg = 'ورود موفقیت آمیز';
          this.isLoading = false;
          setTimeout(() => {
            this.loginForm.reset();
            this.router.navigate(['/d']);
          }, 1000);
        },
        error: (err) => {
          this.errorMessage = err;
          this.isLoading = false;
        }
      })
    }
  }

  goToSignup() {
    this.router.navigate(['d', 'signup']);
  }

}
