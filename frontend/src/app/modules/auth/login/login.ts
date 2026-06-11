import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],

      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;

      const password = this.loginForm.value.password;

      this.authService.login(email).subscribe({
        next: (users: any[]) => {
          if (users.length === 0) {
            alert('User not found');
            return;
          }

          const currentUser = users[0];

          if (currentUser.password !== password) {
            alert('Invalid Password');
            return;
          }

          sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

          alert('Login Successful');

          this.router.navigate(['/profile']);
        },
      });
    }
  }
}
