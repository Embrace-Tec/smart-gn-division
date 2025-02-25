import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-overseas-persons',
  templateUrl: './overseas-persons.component.html',
  styleUrl: './overseas-persons.component.css'
})
export class OverseasPersonsComponent {
  mainForm: FormGroup;
  submittedData1: any[] = []; // To hold the submitted data
  peopleData: any[] = [];

  constructor(private fb: FormBuilder) {
    this.mainForm = this.fb.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      yearMigrated: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
      reasonMigrated: ['', Validators.required],
      otherDetails: [''],
    });
  }

  onSubmitMain() {
    if (this.mainForm.valid) {
      this.submittedData1.push(this.mainForm.value);
      this.mainForm.reset(); // Reset form after submission
    }
  }
  onSubmit(): void {
    if (this.mainForm.valid) {
      console.log(this.mainForm.value); // You can send this data to the backend or process it
    } else {
      console.log('Form is invalid');
    }
  }
}
