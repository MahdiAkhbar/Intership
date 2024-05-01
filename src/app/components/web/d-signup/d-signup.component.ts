import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordStrengthValidator } from '../../../shared/validators/passwordStrength.validator';
import { AuthService } from '../../../shared/services/auth.service';

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
    if (!this.signupForm.valid)
      return;
    this.errorMessage = '';
    this.isLoading = true;

    this.authService.signup({ ...this.signupForm.value }).subscribe({
      next: (resData) => {
        this.successSignupMsg = 'ثبت نام موفقیت آمیز';
        this.isLoading = false;
        setTimeout(() => {
          this.signupForm.reset();
          this.router.navigate(['/d']);
        }, 1000);
      },
      error: (err) => {
        this.errorMessage = err;
        this.isLoading = false;
      }
    })
  }

  goToLogin() {
    this.router.navigate(['d/login']);
  }

}
