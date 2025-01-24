import {Component, inject} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule, MatStep} from '@angular/material/stepper';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatRadioModule} from '@angular/material/radio';
import {
  CombinedFormDto,
  PersonDto,
  AssistanceDetails,
  MigrantDetailsDTO,
  LandDetailsDTO,
  VehicleDetailsDTO, AssetDetailsDTO, BusinessDTO, OtherActivitiesDTO
} from "../../dto/type";
import {HouseDTO} from "@app/models/house.model";
import {HouseService} from "@app/services/house.service";
import {forEachChild} from "@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript";
import {PersonDTO} from "@app/models/person.model";
import {PersonService} from "@app/services/person.service";
import {DonationReceived} from "@app/models/donation.received.model";
import {DonationReceivedService} from "@app/services/donations-received.service";
import {MigratedPerson, MigratedPersonDTO} from "@app/models/migrated.person.model";
import {MigratedPersonService} from "@app/services/migrated-person.service";
import {LandDTO} from "@app/models/land.model";
import {LandService} from "@app/services/land.service";
import {VehicleDTO} from "@app/models/vehicle.model";
import {VehicleService} from "@app/services/vehicle.service";
import {AssetDTO} from "@app/models/asset.model";
import {AssetService} from "@app/services/asset.service";
import {BusinessModelDTO} from "@app/models/business.model";
import {BusinessService} from "@app/services/business.service";
import {TalentDTO} from "@app/models/talent.model";
import {TalentService} from "@app/services/talent.service";

@Component({
  selector: 'app-stepper-form',
  standalone: true,
  templateUrl: 'stepper-form.component.html',
  styleUrls: ['stepper-form.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
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


  constructor(private houseService: HouseService, private personService: PersonService,
              private donationReceivedService: DonationReceivedService, private migratedPersonService: MigratedPersonService,
              private landService: LandService, private vehicleService: VehicleService,
              private assetService: AssetService, private businessService: BusinessService,
              private talentService: TalentService) {
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
        control.markAsTouched({onlySelf: true});
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

    //save house

    const houseDTO: HouseDTO = {
      houseNo: combinedFormDto.householdInfo.firstCtrl,
      address: combinedFormDto.householdInfo.fourthCtrl,
      wallType: `${combinedFormDto.housingInfo?.wallTypeDescription ?? ''} ${combinedFormDto.housingInfo?.wallType ?? ''}`.trim(),
      floorType: `${combinedFormDto.housingInfo?.floorTypeDescription ?? ''} ${combinedFormDto.housingInfo?.floorType ?? ''}`.trim(),
      roofType: `${combinedFormDto.housingInfo?.roofTypeDescription ?? ''} ${combinedFormDto.housingInfo?.roofType ?? ''}`.trim(),
      power: `${combinedFormDto.housingInfo?.powerSourceDescription ?? ''} ${combinedFormDto.housingInfo?.powerSource ?? ''}`.trim(),
      drinkingWater: `${combinedFormDto.housingInfo?.waterFacilityDescription ?? ''} ${combinedFormDto.housingInfo?.waterFacility ?? ''}`.trim(),
      naturalHazard: `${combinedFormDto.housingInfo?.disasterRiskDescription ?? ''} ${combinedFormDto.housingInfo?.disasterRisk ?? ''}`.trim(),
      sanitaryFacilities: `${combinedFormDto.housingInfo?.sanitationTypeDescription ?? ''} ${combinedFormDto.housingInfo?.sanitationType ?? ''}`.trim(),
      whatsapp: combinedFormDto.householdInfo.sixthCtrl,
      landLine: combinedFormDto.householdInfo.fifthCtrl,
      specialNotes: combinedFormDto.specialNotes?.specialNotes || ""
    }

    //save house
    this.houseService.addHouse(houseDTO);

    //to save people
    const people: PersonDto[] = combinedFormDto.people;
    for (let person of people) {
      const personDTO: PersonDTO = {
        nic: person.nic,
        houseNo: houseDTO.houseNo,
        name:person.name,
        dob: person.dob,
        phoneNo: houseDTO.whatsapp,
        religion: person.religion,
        race: person.ethnicity,
        educationLevel: person.education || "",
        occupation: person.occupation || "No Job",
        income: person.income || 0,
        illnesses: person.healthIssues || "N/A",
        disabilities: person.remarks || "N/A",
        relationshipToHouseOwner: person.relation
      }
      this.personService.addPerson(personDTO); //save this person
    }

    //donations
    const assistanceDetails: AssistanceDetails[] | undefined = combinedFormDto.assistanceDetails;
    if (assistanceDetails !== undefined) {
      for (let assistanceDetail of assistanceDetails) {
        const donationReceived: DonationReceived = {
          nic: this.getIdFromName(people, assistanceDetail.institution),
          aswesumaValue: assistanceDetail.aswesomeValue || 0,
          samurdhiValue: assistanceDetail.samrudhiValue || 0,
          elderlyValue: assistanceDetail.elderlyValue || 0,
          cancerValue: assistanceDetail.adultValue || 0,
          disabledValue: assistanceDetail.ignorantValue || 0,
          kidneyAssistanceValue: assistanceDetail.kidneyAssistanceValue || 0,
          publicAssistanceValue: assistanceDetail.publicAssistanceValue || 0,
          medicalAssistanceValue: assistanceDetail.medicalAssistanceValue || 0,
          educationSupportValue: assistanceDetail.educationSupportValue || 0
        }
        this.donationReceivedService.addDonationReceived(donationReceived); //save donation
      }
    }

    //migrants
    let migrantDetails: MigrantDetailsDTO[] | undefined = combinedFormDto.migrantDetails;
    if (migrantDetails !== undefined) {
      for (let migrantDetail of migrantDetails) {
        const migrant: MigratedPersonDTO = {
          nic: this.getIdFromName(people, migrantDetail.name),
          country: migrantDetail.country || "",
          reason: migrantDetail.reasonMigrated || "",
          year: migrantDetail.yearMigrated || 0,
          remark: migrantDetail.otherDetails || "",
        }
        this.migratedPersonService.addMigratedPerson(migrant); //save migrant
      }
    }

    let landDetails: LandDetailsDTO[] | undefined = combinedFormDto.landDetails;
    if (landDetails !== undefined) {
      for (let landDetail of landDetails) {
        const land: LandDTO = {
          ownership: landDetail.ownership || "",
          landSize: landDetail.landSize || "",
          ownerNic: this.getIdFromName(people, landDetail.ownerName),
          landDetails: landDetail.landDetails || "",
          governorsArea: landDetail.governorsArea || "",
          cropGrown: landDetail.cropGrown || "",
          monthlyIncome: landDetail.monthlyIncome || 0
        }
        this.landService.addLand(land); // save land to db
      }
    }

    let vehicleDetails: VehicleDetailsDTO[] | undefined = combinedFormDto.vehicleDetails;
    if (vehicleDetails !== undefined) {
      for (let vehicleDetail of vehicleDetails) {
        const vehicle: VehicleDTO = {
          vehicleType: vehicleDetail.vehicleType || "",
          vehicleOwnerNic: this.getIdFromName(people, vehicleDetail.vehicleOwnerName),
          vehicleValue: vehicleDetail.vehicleValue || 0,
          vehicleMonthlyIncome: vehicleDetail.vehicleMonthlyIncome || 0
        }
        this.vehicleService.addVehicle(vehicle); //save vehicle to db
      }
    }

    let assetDetails: AssetDetailsDTO[] | undefined = combinedFormDto.assetDetails;
    if (assetDetails !== undefined) {
      for (let assetDetail of assetDetails) {
        const asset: AssetDTO = {
          assetDetails: assetDetail.assetDetails,
          assetOwnerNic: this.getIdFromName(people, assetDetail.assetOwnerName),
          assetValue: assetDetail.assetValue || 0,
          assetMonthlyIncome: assetDetail.assetMonthlyIncome || 0
        }
        this.assetService.addAsset(asset); //save
      }
    }

    let businessDetails: BusinessDTO[] | undefined = combinedFormDto.businessDetails;
    if (businessDetails !== undefined) {
      for (let businessDetail of businessDetails) {
        const business: BusinessModelDTO = {
          ownerNic: this.getIdFromName(people, businessDetail.businessOwner),
          businessNature: businessDetail.businessNature || "",
          businessName: businessDetail.businessName || "",
          employeeCount: businessDetail.employeeCount || 0,
          businessAddress: businessDetail.businessAddress || "",
          monthlyIncome: businessDetail.monthlyIncome || 0,
          businessOtherDetails: businessDetail.businessOtherDetails || "",
        }
        this.businessService.addBusiness(business); //save
      }
    }

    let otherActivities: OtherActivitiesDTO[] | undefined = combinedFormDto.otherActivities;
    if (otherActivities !== undefined) {
      for (let otherActivity of otherActivities) {
        const talent: TalentDTO = {
          nic: this.getIdFromName(people, otherActivity.ownerName),
          name: otherActivity.activityName || "",
          address: otherActivity.activityAddress || "",
          description: otherActivity.additionalDetails || "",
          income: otherActivity.monthlyIncome || 0
        }
        this.talentService.addTalent(talent); //save
      }
    }

    console.log('Combined Form Data:', combinedFormDto);

    this.resetForms();
  }

  private getIdFromName(people: PersonDto[], name: string) {
    for (let person of people) {
      if (person.name === name) {
        return person.nic
      }
    }
    return "";
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
