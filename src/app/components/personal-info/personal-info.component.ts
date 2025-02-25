import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  secondFormGroup: FormGroup;
  peopleData: any[] = [];

  constructor(private _formBuilder: FormBuilder) {
    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      relationCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required],
      fifthCtrl: ['', Validators.required],
      sixthCtrl: ['', Validators.required],
      seventhCtrl: [''],
      eighthCtrl: [''],
      ninthCtrl: [''],
      tenthCtrl: [''],
      eleventhCtrl: ['']
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }


  addToTable(): void {
    if (this.secondFormGroup.valid) {
      const formValue = this.secondFormGroup.value;
      const person = {
        name: formValue.firstCtrl,
        relation: formValue.relationCtrl,
        dob: formValue.thirdCtrl,
        nic: formValue.fourthCtrl,
        ethnicity: formValue.fifthCtrl,
        religion: formValue.sixthCtrl,
        remarks: formValue.eleventhCtrl
      };
      this.peopleData.push(person);
      this.secondFormGroup.reset();
    } else {
      // Handle form errors if needed
      Object.keys(this.secondFormGroup.controls).forEach(control => {
        this.secondFormGroup.get(control)?.markAsTouched();
      });
    }
  }

  markStepComplete(step: any): void {
    // Logic to mark the step as complete, if needed
    step.completed = true;
  }
}
