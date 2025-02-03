import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperFormComponent } from './components/stepper-form/stepper-form.component';
import { TouchServicesComponent } from './components/touch-services/touch-services.component';
import {FirstComponent} from "@app/components/first/first.component";
import {LastComponent} from "@app/components/last/last.component";
import {SecondComponent} from "@app/components/second/second.component";
import {ThirdComponent} from "@app/components/third/third.component";
import {FourthComponent} from "@app/components/fourth/fourth.component";
import {FifthComponent} from "@app/components/fifth/fifth.component";
import {SixthComponent} from "@app/components/sixth/sixth.component";
import {SeventhComponent} from "@app/components/seventh/seventh.component";

const routes: Routes = [
  { path: '', redirectTo: 'touch-services', pathMatch: 'full' },
  { path: 'touch-services', component: TouchServicesComponent },
  { path: 'stepper-form', component: StepperFormComponent },
  {path: 'first', component: FirstComponent},
  {path: 'last', component: LastComponent},
  {path:'second', component: SecondComponent},
  {path:'third', component: ThirdComponent},
  {path:'fourth', component: FourthComponent},
  {path:'fifth', component: FifthComponent},
  {path:'sixth', component: SixthComponent},
  {path:'seventh', component: SeventhComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
