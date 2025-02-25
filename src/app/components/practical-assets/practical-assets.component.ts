import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practical-assets',
  templateUrl: './practical-assets.component.html',
  styleUrl: './practical-assets.component.css'
})
export class PracticalAssetsComponent {
  assetForm: FormGroup;
  peopleData: any[] = [];
  submittedAssetData: any[] = [];

  constructor(private fb: FormBuilder) {
    this.assetForm = this.fb.group({
      assetDetails: ['', Validators.required],
      assetOwnerName: ['', Validators.required],
      assetValue: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      assetMonthlyIncome: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]]
    });
  }

  onSubmitAsset(): void {
    if (this.assetForm.valid) {
      this.submittedAssetData.push(this.assetForm.value);
      this.assetForm.reset();
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched(): void {
    Object.keys(this.assetForm.controls).forEach(field => {
      const control = this.assetForm.get(field);
      if (control) {
        control.markAsTouched({onlySelf: true});
      }
    });
  }
}
