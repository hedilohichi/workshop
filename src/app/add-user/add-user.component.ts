import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AddUserComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm!: FormGroup;

  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'userData': new FormGroup({
        'fb': new FormControl('', Validators.required),
        'age': new FormControl('', [Validators.required, Validators.min(18)])
      })
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }
}
