import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'remember': new FormControl(false)
    })
  }

  onLogin() {
    console.log(this.loginForm.value);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
}
