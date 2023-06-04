import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressComponent } from './progress/progress.component';
import { WorkoutsComponent } from './workouts/workouts.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'progress', component: ProgressComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'workouts', component: WorkoutsComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
