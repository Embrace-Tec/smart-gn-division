import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  otherActivitiesForm: FormGroup;
  peopleData: any[] = [];
  submittedOtherActivitiesData: any[] = [];

  constructor(private fb: FormBuilder) {
    this.otherActivitiesForm = this.fb.group({
      ownerName: ['', Validators.required],
      activityAddress: ['', Validators.required],
      monthlyIncome: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      additionalDetails: ['']
    });
  }


  onSubmitOtherActivities(): void {
    if (this.otherActivitiesForm.valid) {
      this.submittedOtherActivitiesData.push(this.otherActivitiesForm.value);
      this.otherActivitiesForm.reset();
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  markAllFieldsAsTouched(): void {
    Object.keys(this.otherActivitiesForm.controls).forEach(field => {
      const control = this.otherActivitiesForm.get(field);
      if (control) {
        control.markAsTouched({onlySelf: true});
      }
    });
  }

}
