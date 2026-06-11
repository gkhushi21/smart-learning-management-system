import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard/dashboard';
import { EnrollmentComponent } from './pages/student/enrollment/enrollment';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard';
import { ProgressTracker } from './features/progress/progress-tracker/progress-tracker';
import { ProgressDetails } from './features/progress/progress-details/progress-details';
import { Assessment } from './features/assessment/assessment/assessment';
import { AssessmentResult } from './features/assessment/assessment-result/assessment-result';
import { Reports } from './features/reports/reports/reports';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'courses', component: DashboardComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'progress', component: ProgressTracker },
  { path: 'progress/:id', component: ProgressDetails },
  { path: 'assessment/:id', component: Assessment },
  { path: 'assessment-result/:id', component: AssessmentResult },
  { path: 'certificates', component: DashboardComponent },
  { path: 'reports', component: Reports },
  { path: 'admin', component: AdminDashboardComponent }
];
