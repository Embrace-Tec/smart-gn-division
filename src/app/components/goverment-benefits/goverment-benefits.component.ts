import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GovernmentDonationsService} from "@app/services/government-donations.service";
import {Donation} from "@app/models/donation.model";
import {DonationReceivedService} from "@app/services/donations-received.service";
import {DonationReceived} from "@app/models/donation.received.model";

@Component({
  selector: 'app-goverment-benefits',
  templateUrl: './goverment-benefits.component.html',
  styleUrls: ['./goverment-benefits.component.css']
})
export class GovermentBenefitsComponent implements OnInit {
  form: FormGroup;
  submittedData: any[] = [
    {nic: '2002000000', name: 'Example Institution 1'},
  ];
  peopleData: any[] = [
    {nic: '123456789V', name: 'Example Institution 1'},
    {nic: '987654321V', name: 'Example Institution 2'}
  ];


  constructor(private fb: FormBuilder, private donationService: DonationReceivedService) {
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
    this.loadDonationDetails();
  }

  loadDonationDetails() {
    this.donationService.getGovernmentDonationsByNic(this.submittedData[0].nic).subscribe(data => {
      let donations: DonationReceived[] = data;
      console.log('Government Donations found:', donations);
      const formValues = this.form.value;
      let donationReceived: DonationReceived = donations[0];
      formValues.categories.aswesomeValue=donationReceived.aswesumaValue;
      // if (donationReceived.aswesumaValue! > 0) {
      //
      // }
    });
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
