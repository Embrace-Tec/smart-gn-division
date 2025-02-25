import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-goverment-benefits',
  templateUrl: './goverment-benefits.component.html',
  styleUrls: ['./goverment-benefits.component.css']
})
export class GovermentBenefitsComponent implements OnInit {
  form: FormGroup;
  submittedData: any[] = [];
  peopleData: any[] = [
    { nic: '123456789V', name: 'Example Institution 1' },
    { nic: '987654321V', name: 'Example Institution 2' }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      categories: this.fb.group({
        aswesome: [false],
        samrudhi: [false],
        elderly: [false],
        blind: [false],
        ignorant: [false],
        kidneyAssistance: [false],
        publicAssistance: [false],
        medicalAssistance: [false],
        educationSupport: [false],
        aswesomeValue: [''],
        samrudhiValue: [''],
        elderlyValue: [''],
        blindValue: [''],
        ignorantValue: [''],
        kidneyAssistanceValue: [''],
        publicAssistanceValue: [''],
        medicalAssistanceValue: [''],
        educationSupportValue: ['']
      })
    });
  }

  ngOnInit(): void {
    // Any additional initialization logic can be placed here.
  }

  onSubmit1(): void {
    if (this.form.valid) {
      const formValues = this.form.value;
      const institution = this.peopleData.find(person => person.nic === formValues.name)?.name;

      this.submittedData.push({
        institution: institution,
        aswesomeValue: formValues.categories.aswesome ? formValues.categories.aswesomeValue : '',
        samrudhiValue: formValues.categories.samrudhi ? formValues.categories.samrudhiValue : '',
        elderlyValue: formValues.categories.elderly ? formValues.categories.elderlyValue : '',
        adultValue: formValues.categories.adult ? formValues.categories.adultValue : '',
        blindValue: formValues.categories.blind ? formValues.categories.blindValue : '',
        ignorantValue: formValues.categories.ignorant ? formValues.categories.ignorantValue : '',
        kidneyAssistanceValue: formValues.categories.kidneyAssistance ? formValues.categories.kidneyAssistanceValue : '',
        publicAssistanceValue: formValues.categories.publicAssistance ? formValues.categories.publicAssistanceValue : '',
        medicalAssistanceValue: formValues.categories.medicalAssistance ? formValues.categories.medicalAssistanceValue : '',
        educationSupportValue: formValues.categories.educationSupport ? formValues.categories.educationSupportValue : '',
      });
      this.form.reset();
    }
  }
}
