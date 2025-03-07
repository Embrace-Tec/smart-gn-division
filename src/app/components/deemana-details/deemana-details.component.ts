import { Component } from '@angular/core';
import { DonationReceived } from '@app/models/donation.received.model';
import { Person } from '@app/models/person.model';
import { DonationReceivedService } from "@app/services/donations-received.service";
import { PersonService } from '@app/services/person.service';
@Component({
  selector: 'app-deemana-details',
  templateUrl: './deemana-details.component.html',
  styleUrl: './deemana-details.component.css'
})
export class DeemanaDetailsComponent {

  onDeemanaSelected($event: any) {
    console.log("in deemana selected");
    console.log(this.selectedDeemana);
    this.getfilteredTableData();
  }

  constructor(private donationReceivedService: DonationReceivedService, private personService: PersonService) {
  }

  private donations: DonationReceived[] | null = null;
  private persons: Person[] | null = [];

  // Deemana (Welfare) options in Sinhala
  deemanaOptions = [
    { id: 1, name: 'අස්වැසුම' },
    { id: 2, name: 'සමෘද්ධි' },
    { id: 3, name: 'වැඩිහිටි ආධාර' },
    { id: 4, name: 'පිළිකා ආධාර' },
    { id: 5, name: 'අබොධිත' },
    { id: 6, name: 'වකුගඩු ආධාර' },
    { id: 7, name: 'මහජනාධාර' },
    { id: 8, name: 'රෝගාධාර' },
    { id: 9, name: 'ආධ්‍යාපන ආධාර' }
  ];

  // Selected Deemana type
  selectedDeemana: number = 0;

  // Example data for table
  tableData = [
    {
      value: 'අස්වැසුම',
      name: 'සුමිත් පෙරේරා',
      dob: '1980-05-12',
      id: '123456789',
      ethnicity: 'සිංහල',
      religion: 'බUDAධි'
    },
    {
      value: 'සමෘද්ධි',
      name: 'අසල්වී',
      dob: '1985-08-24',
      id: '987654321',
      ethnicity: 'මූලික',
      religion: 'කතෝලික'
    },
    {
      value: 'අස්වැසුම',
      name: 'අයෂා නගිල්',
      dob: '1992-02-15',
      id: '1122334455',
      ethnicity: 'සිංහල',
      religion: 'විශිෂ්ට'
    }
  ];

  // Filter table data based on selected Deemana
  getfilteredTableData() {
    console.log("in get filtered data");
    if (Number(this.selectedDeemana) === 1) {
      this.donationReceivedService.getAswesumaList().subscribe({
        next: (data) => {
          if (Array.isArray(data)) {
            this.donations = data;
            console.log('Donations:', this.donations);

            if (this.persons!.length > 0) { this.persons!.length = 0; }
            
            for (const donation of this.donations) {
              this.personService.getPersonByNic(donation.nic).subscribe({
                next: (person) => {
                  if (person) {
                    console.log('Person found:', person);
                    this.persons?.push(person); // Store it if needed
                  } else {
                    console.log('Person not found');
                  }
                },
                error: (err) => {
                  console.error('Error fetching person:', err);
                }
              });
            }
          } else {
            console.error("Expected an array but got:", data);
          }
        },
        error: (err) => {
          console.error('Error fetching donations:', err);
        }
      });
    }
  }

}
