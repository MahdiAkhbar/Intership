import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordStrengthValidator } from '../../../shared/validators/passwordStrength.validator';
import { minlengthValidator } from '../../../shared/validators/minlength.validator';

@Component({
  selector: 'app-d-login',
  templateUrl: './d-login.component.html',
  styleUrl: './d-login.component.css'
})
export class DLoginComponent implements OnInit {
  constructor(private router: Router) { }

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, [Validators.required, passwordStrengthValidator()]),
      'captcha': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.loginForm.controls['password'].errors);
    let formControls = this.loginForm.controls;
    if (!formControls['username'].touched)
      this.loginForm.controls['username'].markAsTouched();
    if (!formControls['password'].touched)
      this.loginForm.controls['password'].markAsTouched();
    if (!formControls['captcha'].touched)
      this.loginForm.controls['captcha'].markAsTouched();

    if (this.loginForm.valid) {
      this.loginForm.reset();
      this.router.navigate(['/']);
    }
  }

  goToSignup() {
    this.router.navigate(['d', 'signup']);
  }

}
