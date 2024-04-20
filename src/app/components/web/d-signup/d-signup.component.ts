import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordStrengthValidator } from '../../../shared/validators/passwordStrength.validator';

@Component({
  selector: 'app-d-signup',
  templateUrl: './d-signup.component.html',
  styleUrl: './d-signup.component.css'
})
export class DSignupComponent implements OnInit {
  constructor(private router: Router) { }

  signupForm!: FormGroup;

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, passwordStrengthValidator()])
    })
  }

  onSubmit() {

  }

  goToLogin() {
    this.router.navigate(['d/login']);
  }

}
