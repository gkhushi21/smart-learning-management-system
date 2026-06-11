import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Profile } from '../../../models/user/profile';
import { UserService } from '../../../services/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class ProfileComponent implements OnInit {
  currentUser: any;

  profile: Profile = {
    userId: '',
    phone: '',
    location: '',
    experienceLevel: '',
    skills: [],
    learningPreferences: {
      emailNotifications: false,
      darkMode: false,
    },
  };

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const user = sessionStorage.getItem('currentUser');

    if (!user) {
      this.router.navigate(['/login']);

      return;
    }
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');

    this.userService.getProfileByUserId(this.currentUser.id).subscribe({
      next: (response: Profile[]) => {
        if (response.length > 0) {
          this.profile = response[0];
        }
        console.log('Current User', this.currentUser);
        console.log('Current User Id', this.currentUser.id);
        console.log('Profile Response', response);
      },
    });
  }
}
