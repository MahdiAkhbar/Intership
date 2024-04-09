import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-section',
  templateUrl: './change-password-section.component.html',
  styleUrl: './change-password-section.component.css'
})
export class ChangePasswordSectionComponent implements OnInit {
  constructor(private router: Router) { }
  changePassForm!: FormGroup;

  ngOnInit(): void {
    this.changePassForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }

  onchangePass() {
    console.log(this.changePassForm.value);
  }

  onCancle() {
    this.router.navigate(['/changePass']);
  }

}
