import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
      'password': new FormControl(null, Validators.required),
      'captcha': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    this.router.navigate(['/']);
  }

  goToSignup() {
    this.router.navigate(['d', 'signup']);
  }

}
