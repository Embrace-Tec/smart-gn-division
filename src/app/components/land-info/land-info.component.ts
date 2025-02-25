import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-land-info',
  templateUrl: './land-info.component.html',
  styleUrl: './land-info.component.css'
})
export class LandInfoComponent {
  landForm: FormGroup;
  peopleData: any[] = [];
  constructor(private fb: FormBuilder) {
    this.landForm = this.fb.group({
      ownership: ['', Validators.required],
      landSize: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      ownerName: ['', Validators.required],
      landDetails: ['', Validators.required],
      governorsArea: ['', Validators.required],
      cropGrown: ['', Validators.required],
      monthlyIncome: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]]
    });
  }
  submittedLandData: any[] = [];

  onSubmitLand(): void {
    if (this.landForm.valid) {
      this.submittedLandData.push(this.landForm.value);
      this.landForm.reset();
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched(): void {
    Object.keys(this.landForm.controls).forEach(field => {
      const control = this.landForm.get(field);
      if (control) {
        control.markAsTouched({onlySelf: true});
      }
    });
  }
}
