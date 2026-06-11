import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../../services/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,
     private userService: User
  ) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],

      firstName: ['', Validators.required],

      lastName: ['', Validators.required],

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(6)]],

      learningPreferences: [''],

      skillSummary: [''],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
       const newUser = {
      ...this.registerForm.value,
      role: 'CUSTOMER',
      isActive: true,
      createdAt: new Date().toLocaleDateString()
    };

    this.userService
      .registerUser(newUser)
      .subscribe({
        next: (response) => {
          console.log('User Registered', response);
          alert('Registration Successful');
          this.registerForm.reset();
        },
        error: (error) => {
          console.error(error);
          alert('Registration Failed');
        }
      });
  }

     
    
  }
}
