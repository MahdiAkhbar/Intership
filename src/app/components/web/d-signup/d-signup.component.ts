import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordStrengthValidator } from '../../../shared/validators/passwordStrength.validator';
import { AuthService } from '../../../shared/services/auth.service';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-d-signup',
  templateUrl: './d-signup.component.html',
  styleUrl: './d-signup.component.css'
})
export class DSignupComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) { }

  signupForm!: FormGroup;
  successSignupMsg: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, passwordStrengthValidator()])
    })
  }

  onSubmit() {
    this.errorMessage = '';
    let formControls = this.signupForm.controls;
    if (!formControls['username'].touched)
      this.signupForm.controls['username'].markAsTouched();
    if (!formControls['firstName'].touched)
      this.signupForm.controls['firstName'].markAsTouched();
    if (!formControls['lastName'].touched)
      this.signupForm.controls['lastName'].markAsTouched();
    if (!formControls['email'].touched)
      this.signupForm.controls['email'].markAsTouched();
    if (!formControls['password'].touched)
      this.signupForm.controls['password'].markAsTouched();

    if (this.signupForm.valid) {
      this.isLoading = true;

      this.authService.signup({ ...this.signupForm.value }).pipe(
        catchError((err) => {
          this.errorMessage = err;
          this.isLoading = false;
          return throwError(() => err);
        })
      ).subscribe(() => {
        this.signupForm.reset();
        this.isLoading = false;
        this.successSignupMsg = 'ثبت نام موفقیت آمیز \n لطفا وارد شوید';
        setTimeout(() => {
          this.router.navigate(['/d', 'login']);
        }, 2000);
      });
    }
  }

  goToLogin() {
    this.router.navigate(['d/login']);
  }

}
