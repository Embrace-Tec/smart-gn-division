import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-house-info',
  standalone: true,
  templateUrl: './house-info.component.html',
  styleUrl: './house-info.component.css',
  imports: [MatRadioModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule]
})
export class HouseInfoComponent {
  thirdFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    // Initialize the reactive form with controls for each section
    this.thirdFormGroup = this._formBuilder.group({
      housingType: ['', Validators.required],
      housingTypeDescription: [''],
      wallType: ['', Validators.required],
      wallTypeDescription: [''],
      floorType: ['', Validators.required],
      floorTypeDescription: [''],
      roofType: ['', Validators.required],
      roofTypeDescription: [''],
      sanitationType: ['', Validators.required],
      sanitationTypeDescription: [''],
      waterFacility: ['', Validators.required],
      waterFacilityDescription: [''],
      powerSource: ['', Validators.required],
      powerSourceDescription: [''],
      disasterRisk: ['', Validators.required],
      disasterRiskDescription: ['']
    });
  }

  ngOnInit(): void {
    // Additional initialization logic can go here
  }

  /**
   * Marks the current step as complete.
   * The step parameter can be used to notify a parent component or update the UI.
   */
  markStepComplete(step: any): void {
    if (this.thirdFormGroup.valid) {
      step.completed = true;
    } else {
      // Mark all controls as touched to trigger validation errors.
      Object.keys(this.thirdFormGroup.controls).forEach(control => {
        this.thirdFormGroup.get(control)?.markAsTouched();
      });
    }
  }

  /**
   * onManualSubmit is called when the user clicks the submit button.
   * You can extend this method to send the data to a server or process it further.
   */
  onManualSubmit() {
    if (this.thirdFormGroup.valid) {
      const formData = this.thirdFormGroup.value;
      console.log('Form submitted successfully:', formData);
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }
}
