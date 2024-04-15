import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(private router: Router) { }
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onLogin() {
    console.log(this.loginForm.value);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
