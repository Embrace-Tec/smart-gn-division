import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {firebaseConfig} from "../environments/environment";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StepperFormComponent } from './components/stepper-form/stepper-form.component';
import { TouchServicesComponent } from './components/touch-services/touch-services.component';
import { FirstComponent } from './components/first/first.component';
import { LastComponent } from './components/last/last.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';
import { SeventhComponent } from './components/seventh/seventh.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddServicesComponent } from './components/add-services/add-services.component';
import { EditDetailsComponent } from './components/edit-details/edit-details.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';
import { GovermentBenefitsComponent } from './components/goverment-benefits/goverment-benefits.component';
import { OverseasPersonsComponent } from './components/overseas-persons/overseas-persons.component';
import { LandInfoComponent } from './components/land-info/land-info.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { PracticalAssetsComponent } from './components/practical-assets/practical-assets.component';
import { SelfEmploymentComponentComponent } from './components/self-employment-component/self-employment-component.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SpecialNotesComponent } from './components/special-notes/special-notes.component';
import {MatStepLabel, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";




@NgModule({
  declarations: [
    AppComponent,
    TouchServicesComponent,
    FirstComponent,
    LastComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    LoginModalComponent,
    AdminDashboardComponent,
    AddServicesComponent,
    EditDetailsComponent,
    BasicInfoComponent,
    PersonalInfoComponent,
    GovermentBenefitsComponent,
    OverseasPersonsComponent,
    LandInfoComponent,
    VehiclesComponent,
    PracticalAssetsComponent,
    SelfEmploymentComponentComponent,
    SkillsComponent,
    SpecialNotesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StepperFormComponent,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatStepLabel,
    MatStepperNext,
    ReactiveFormsModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatOption,
    MatSelect,
    MatStepperPrevious

  ],
  providers: [
    // provideFirebaseApp(() => initializeApp({"projectId":"smart-hapurudeniya","appId":"1:905553276992:web:67a8abc53b4f4d4fc2efa5","storageBucket":"smart-hapurudeniya.firebasestorage.app","apiKey":"AIzaSyAXpCI30WIYYtutk64tyIS_cZZsl1-YOwA","authDomain":"smart-hapurudeniya.firebaseapp.com","messagingSenderId":"905553276992"})),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
