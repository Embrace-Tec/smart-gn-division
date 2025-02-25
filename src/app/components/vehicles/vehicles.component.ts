import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css'
})
export class VehiclesComponent {
  vehicleForm: FormGroup;
  peopleData: any[] = [];

  constructor(private fb: FormBuilder) {
    this.vehicleForm = this.fb.group({
      vehicleType: ['', Validators.required],
      vehicleOwnerName: ['', Validators.required],
      vehicleValue: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      vehicleMonthlyIncome: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]]
    });
  }

  submittedVehicleData: any[] = [];


  onSubmitVehicle(): void {
    if (this.vehicleForm.valid) {
      this.submittedVehicleData.push(this.vehicleForm.value);
      this.vehicleForm.reset();
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched(): void {
    Object.keys(this.vehicleForm.controls).forEach(field => {
      const control = this.vehicleForm.get(field);
      if (control) {
        control.markAsTouched({onlySelf: true});
      }
    });
  }
}
