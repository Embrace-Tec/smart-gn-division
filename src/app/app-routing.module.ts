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
import {AdminDashboardComponent} from "@app/components/admin-dashboard/admin-dashboard.component";
import {AddServicesComponent} from "@app/components/add-services/add-services.component";
import {EditDetailsComponent} from "@app/components/edit-details/edit-details.component";
import {BasicInfoComponent} from "@app/components/basic-info/basic-info.component";
import {PersonalInfoComponent} from "@app/components/personal-info/personal-info.component";
import {HouseInfoComponent} from "@app/components/house-info/house-info.component";
import {GovermentBenefitsComponent} from "@app/components/goverment-benefits/goverment-benefits.component";
import {OverseasPersonsComponent} from "@app/components/overseas-persons/overseas-persons.component";
import {LandInfoComponent} from "@app/components/land-info/land-info.component";
import {VehiclesComponent} from "@app/components/vehicles/vehicles.component";
import {PracticalAssetsComponent} from "@app/components/practical-assets/practical-assets.component";
import {
  SelfEmploymentComponentComponent
} from "@app/components/self-employment-component/self-employment-component.component";
import {SkillsComponent} from "@app/components/skills/skills.component";
import {SpecialNotesComponent} from "@app/components/special-notes/special-notes.component";


const routes: Routes = [
  { path: '', redirectTo: 'touch-services', pathMatch: 'full' },
  {path: 'add-services', component: AddServicesComponent},
  {path: 'admin-dashboard', component: AdminDashboardComponent},
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
  {path:'edit-details',component:EditDetailsComponent},
  { path: 'basic-info', component: BasicInfoComponent },
  { path: 'personal-info', component: PersonalInfoComponent },
  { path: 'house-info', component: HouseInfoComponent },
  { path: 'government-benefits', component: GovermentBenefitsComponent },
  { path: 'overseas-persons', component: OverseasPersonsComponent },
  { path: 'land-info', component: LandInfoComponent },
  { path: 'vehicles', component: VehiclesComponent },
  { path: 'practical-assets', component: PracticalAssetsComponent },
  { path: 'self-employment', component: SelfEmploymentComponentComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'special-notes', component: SpecialNotesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
