import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-self-employment-component',
  templateUrl: './self-employment-component.component.html',
  styleUrl: './self-employment-component.component.css'
})
export class SelfEmploymentComponentComponent {
  businessForm: FormGroup;
  peopleData: any[] = [];

  submittedBusinessData: any[] = [];
  constructor(private fb: FormBuilder) {
    this.businessForm = this.fb.group({
      businessNature: ['', Validators.required],
      businessName: ['', Validators.required],
      employeeCount: ['', [Validators.required, Validators.pattern('^\\d+$')]],
      businessAddress: ['', Validators.required],
      monthlyIncome: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      businessOtherDetails: ['']
    });
  }

  onSubmitBusiness(): void {
    if (this.businessForm.valid) {
      this.submittedBusinessData.push(this.businessForm.value);
      this.businessForm.reset();
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched(): void {
    Object.keys(this.businessForm.controls).forEach(field => {
      const control = this.businessForm.get(field);
      if (control) {
        control.markAsTouched({onlySelf: true});
      }
    });
  }
}
