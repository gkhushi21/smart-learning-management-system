import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard/dashboard';
import { EnrollmentComponent } from './pages/student/enrollment/enrollment';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard';
import { LoginComponent } from './features/auth/login/login';
import { RegisterComponent } from './features/auth/register/register';
import { ProfileComponent } from './features/auth/profile/profile';
import { PreferencesComponent } from './features/auth/preferences/preferences';
import { EditProfileComponent } from './features/auth/edit-profile/edit-profile';
import { ForgotPasswordComponent } from './features/auth/forgot-password/forgot-password';

export const routes: Routes = [
 {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },
   {
    path: 'profile',
    component: ProfileComponent
  },
   {
    path: 'preferences',
    component: PreferencesComponent
  },
   {
    path: 'edit-profile',
    component: EditProfileComponent
  },
   {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  
  {
    path: 'dashboard',
    component: DashboardComponent,
  },

  {
    path: 'courses',
    component: DashboardComponent,
  },

  {
    path: 'enrollment',
    component: EnrollmentComponent,
  },

  {
    path: 'progress',
    component: DashboardComponent,
  },

  {
    path: 'certificates',
    component: DashboardComponent,
  },

  {
    path: 'reports',
    component: DashboardComponent,
  },

  {
    path: 'admin',
    component: AdminDashboardComponent,
  },

  
];
