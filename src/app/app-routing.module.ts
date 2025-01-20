import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperFormComponent } from './components/stepper-form/stepper-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'stepper-form', pathMatch: 'full' }, // Redirect root to the stepper
  { path: 'stepper-form', component: StepperFormComponent },  // Define route for StepperFormComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
