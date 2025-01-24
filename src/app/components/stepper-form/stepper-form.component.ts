import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule,FormGroup } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule, MatStep } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {CombinedFormDto} from "../../dto/type";

@Component({
  selector: 'app-stepper-form',
  standalone: true,
  templateUrl: 'stepper-form.component.html',
  styleUrls: ['stepper-form.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatRadioModule
  ],
})
export class StepperFormComponent {
  private _formBuilder = inject(FormBuilder);
  vehicleForm: FormGroup;
  submittedVehicleData: any[] = [];
  assetForm: FormGroup;
  submittedAssetData: any[] = [];
  businessForm: FormGroup;
  submittedBusinessData: any[] = [];
  otherActivitiesForm: FormGroup;
  submittedOtherActivitiesData: any[] = [];
  specialNotesForm: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  form: FormGroup;
  mainForm: FormGroup;
  landForm: FormGroup;


  constructor() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required],
      fifthCtrl: ['', Validators.required],
      sixthCtrl: ['', Validators.required],
    });

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
      eleventhCtrl: [''],
    });
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

    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      categories: this._formBuilder.group({
        aswesome: [false], // "අස්වැසුම"
        samrudhi: [false], // "සමෘද්ී"
        elderly: [false], // "වැඩිහිටි"
        adult: [false], // "ආධ්‍ොර"
        blind: [false], // "පිළිකො ආධ්‍ොර"
        ignorant: [false], // "අබොධිත"
        kidneyAssistance: [false], // "වකුගඩු ආධාර"
        publicAssistance: [false], // "මහජනාධාර"
        medicalAssistance: [false], // "රෝගාධාර"
        educationSupport: [false], // "ආධ්‍යාපන ආධාර"
        aswesomeValue: [''], // Value for "අස්වැසුම"
        samrudhiValue: [''], // Value for "සමෘද්ī"
        elderlyValue: [''], // Value for "වැඩිහිටි"
        adultValue: [''], // Value for "ආධ්‍ොර"
        blindValue: [''], // Value for "පිළිකො ආධ්‍ොර"
        ignorantValue: [''], // Value for "අබොධිත"
        kidneyAssistanceValue: [''], // Value for "වකුගඩු ආධාර"
        publicAssistanceValue: [''], // Value for "මහජනාධාර"
        medicalAssistanceValue: [''], // Value for "රෝගාධාර"
        educationSupportValue: [''], // Value for "ආධ්‍යාපන ආධාර"
      }),
    });


    this.landForm = this._formBuilder.group({
      ownership: ['', Validators.required],
      landSize: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      ownerName: ['', Validators.required],
      landDetails: ['', Validators.required],
      governorsArea: ['', Validators.required],
      cropGrown: ['', Validators.required],
      monthlyIncome: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]]
    });


    this.mainForm = this._formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required], // Country field
      yearMigrated: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]], // Year field
      reasonMigrated: ['', Validators.required], // Reason field
      otherDetails: [''], // Other details
    });

    this.vehicleForm = this._formBuilder.group({
      vehicleType: ['', Validators.required],
      vehicleOwnerName: ['', Validators.required],
      vehicleValue: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      vehicleMonthlyIncome: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]]
    });

    this.assetForm = this._formBuilder.group({
      assetDetails: ['', Validators.required],
      assetOwnerName: ['', Validators.required],
      assetValue: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      assetMonthlyIncome: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]]
    });

    this.businessForm = this._formBuilder.group({
      businessNature: ['', Validators.required],
      businessName: ['', Validators.required],
      employeeCount: ['', [Validators.required, Validators.pattern('^\\d+$')]],
      businessAddress: ['', Validators.required],
      monthlyIncome: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      businessOtherDetails: ['']
    });

    this.otherActivitiesForm = this._formBuilder.group({
      activityName: ['', Validators.required],
      ownerName: ['', Validators.required],
      activityAddress: ['', Validators.required],
      monthlyIncome: ['', [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]],
      additionalDetails: ['']
    });
    this.specialNotesForm = this._formBuilder.group({
      specialNotes: ['', Validators.required]
    });


    this.peopleData = [
      {
        name: 'John Doe',
        relation: 'Brother',
        dob: '1990-01-01',
        nic: '123456789V',
        ethnicity: 'Sinhalese',
        religion: 'Buddhism',
        remarks: 'No disability',
      },
      {
        name: 'Jane Smith',
        relation: 'Sister',
        dob: '1992-02-15',
        nic: '987654321V',
        ethnicity: 'Tamil',
        religion: 'Hinduism',
        remarks: 'Visually impaired',
      },
      {
        name: 'Ali Khan',
        relation: 'Father',
        dob: '1965-03-30',
        nic: '456789123V',
        ethnicity: 'Muslim',
        religion: 'Islam',
        remarks: 'No disability',
      }
    ];
  }
  peopleData: any[] = [];

  displayedColumns: string[] = [
    'name',
    'relation',
    'dob',
    'nic',
    'ethnicity',
    'religion'
  ];

  submittedLandData: any[] = [];

  onSubmitLand(): void {
    if (this.landForm.valid) {
      this.submittedLandData.push(this.landForm.value);
      this.landForm.reset();
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  onSubmitVehicle(): void {
    if (this.vehicleForm.valid) {
      this.submittedVehicleData.push(this.vehicleForm.value);
      this.vehicleForm.reset();
    } else {
      this.markAllFieldsAsTouched();
    }
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
    Object.keys(this.landForm.controls).forEach(field => {
      const control = this.landForm.get(field);
      if (control) {
        control.markAsTouched({ onlySelf: true });
      }
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
  markStepComplete(step: MatStep) {
    step.completed = true;
  }

  addToTable() {
    if (this.secondFormGroup.valid) {
      const formValues = this.secondFormGroup.value;

      const person = {
        name: formValues.firstCtrl,
        relation: formValues.relationCtrl,
        dob: formValues.thirdCtrl,
        nic: formValues.fourthCtrl,
        ethnicity: formValues.fifthCtrl,
        religion: formValues.sixthCtrl,
        remarks: formValues.eleventhCtrl || "No disability"
      };

      this.peopleData.push(person);

      this.secondFormGroup.reset();
    }
  }

  trackById(index: number, item: any) {
    return index;
  }

  onSubmitOtherActivities(): void {
    if (this.otherActivitiesForm.valid) {
      this.submittedOtherActivitiesData.push(this.otherActivitiesForm.value);
      this.otherActivitiesForm.reset();
    } else {
      this.markAllFieldsAsTouched();
    }
  }

  onSubmitSpecialNotes(): void {

      const combinedFormDto: CombinedFormDto = {
        householdInfo: this.firstFormGroup.value,
        people: this.peopleData,
        housingInfo: this.thirdFormGroup.value,
        assistanceDetails: this.submittedData,
        migrantDetails: this.submittedData1,
        landDetails: this.submittedLandData,
        vehicleDetails: this.submittedVehicleData,
        assetDetails: this.submittedAssetData,
        businessDetails: this.submittedBusinessData,
        otherActivities: this.submittedOtherActivitiesData,
        specialNotes: this.specialNotesForm.value.specialNotes
      };

      console.log('Combined Form Data:', combinedFormDto);

      this.resetForms();
  }

// Optional method to reset all forms after submission
  resetForms() {
    this.form.reset();
    this.secondFormGroup.reset();
    this.thirdFormGroup.reset();
    this.landForm.reset();
    this.mainForm.reset();
    this.vehicleForm.reset();
    this.assetForm.reset();
    this.businessForm.reset();
    this.otherActivitiesForm.reset();
    this.specialNotesForm.reset();
  }

  onManualSubmit() {
    if (this.thirdFormGroup.valid) {
      const formData = this.thirdFormGroup.value;
      console.log('Form submitted successfully:', formData);
    } else {
      console.log('Form is invalid. Please fill in all required fields.');
    }
  }

  onSubmit(): void {
    if (this.mainForm.valid) {
      console.log(this.mainForm.value); // You can send this data to the backend or process it
    } else {
      console.log('Form is invalid');
    }
  }

  submittedData: any[] = []; // Make sure this is initialized as an empty array
  submittedData1: any[] = []; // To hold the submitted data

  onSubmit1(): void {
    if (this.form.valid) {
      const formValues = this.form.value;
      const institution = this.peopleData.find(person => person.nic === formValues.name)?.name;

      // Push new data to submittedData array
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

      // Reset form after submission
      this.form.reset();
    }
  }

  onSubmitMain() {
    if (this.mainForm.valid) {
      this.submittedData1.push(this.mainForm.value);
      this.mainForm.reset(); // Reset form after submission
    }
  }

  protected readonly onclick = onclick;
  protected readonly FormGroup = FormGroup;
}
