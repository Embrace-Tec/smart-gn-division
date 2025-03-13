import { Component } from '@angular/core';
import { DonationReceived } from '@app/models/donation.received.model';
import { Person } from '@app/models/person.model';
import { DonationReceivedService } from "@app/services/donations-received.service";
import { PersonService } from '@app/services/person.service';

@Component({
  selector: 'app-deemana-details',
  templateUrl: './deemana-details.component.html',
  styleUrls: ['./deemana-details.component.css']
})
export class DeemanaDetailsComponent {

  constructor(private donationReceivedService: DonationReceivedService, private personService: PersonService) {}

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

  // Combined table data
  tableData: any[] = [];

  // Handle Deemana selection
  onDeemanaSelected($event: any) {
    console.log("Deemana selected:", this.selectedDeemana);
    this.getfilteredTableData();
  }

  // Filter table data based on selected Deemana
  getfilteredTableData() {
    console.log("Fetching filtered data...");
    if (Number(this.selectedDeemana) === 1) {
      this.donationReceivedService.getAswesumaList().subscribe({
        next: (data) => {
          if (Array.isArray(data)) {
            this.donations = data;
            console.log('Donations:', this.donations);

            // Clear previous data
            this.persons = [];
            this.tableData = [];

            // Fetch person details for each donation
            for (const donation of this.donations) {
              this.personService.getPersonByNic(donation.nic.toUpperCase()).subscribe({
                next: (person) => {
                  if (person) {
                    console.log('Person found:', person);
                    this.persons?.push(person);

                    // Combine donation and person data
                    const combinedData = {
                      value: donation.aswesumaValue, // Example: Use the relevant donation value
                      name: person.name,
                      dob: person.dob,
                      nic: person.nic,
                      ethnicity: person.race,
                      religion: person.religion
                    };

                    // Add to table data
                    this.tableData.push(combinedData);
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
    else if (Number(this.selectedDeemana) === 2) {
      this.donationReceivedService.getSamurdhiList().subscribe({
        next: (data) => {
          if (Array.isArray(data)) {
            this.donations = data;
            console.log('Donations:', this.donations);

            this.persons = [];
            this.tableData = [];

            for (const donation of this.donations) {
              this.personService.getPersonByNic(donation.nic.toUpperCase()).subscribe({
                next: (person) => {
                  if (person) {
                    console.log('Person found:', person);
                    this.persons?.push(person);

                    const combinedData = {
                      value: donation.samurdhiValue,
                      name: person.name,
                      dob: person.dob,
                      nic: person.nic,
                      ethnicity: person.race,
                      religion: person.religion
                    };

                    // Add to table data
                    this.tableData.push(combinedData);
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
    else if (Number(this.selectedDeemana) === 3) {
      this.donationReceivedService.getElderlyList().subscribe({
        next: (data) => {
          if (Array.isArray(data)) {
            this.donations = data;
            console.log('Donations:', this.donations);

            this.persons = [];
            this.tableData = [];

            for (const donation of this.donations) {
              this.personService.getPersonByNic(donation.nic.toUpperCase()).subscribe({
                next: (person) => {
                  if (person) {
                    console.log('Person found:', person);
                    this.persons?.push(person);

                    const combinedData = {
                      value: donation.elderlyValue,
                      name: person.name,
                      dob: person.dob,
                      nic: person.nic,
                      ethnicity: person.race,
                      religion: person.religion
                    };

                    // Add to table data
                    this.tableData.push(combinedData);
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
    else if (Number(this.selectedDeemana) === 4) {
      this.donationReceivedService.getCancerList().subscribe({
        next: (data) => {
          if (Array.isArray(data)) {
            this.donations = data;
            console.log('Donations:', this.donations);

            this.persons = [];
            this.tableData = [];

            for (const donation of this.donations) {
              this.personService.getPersonByNic(donation.nic.toUpperCase()).subscribe({
                next: (person) => {
                  if (person) {
                    console.log('Person found:', person);
                    this.persons?.push(person);

                    const combinedData = {
                      value: donation.cancerValue,
                      name: person.name,
                      dob: person.dob,
                      nic: person.nic,
                      ethnicity: person.race,
                      religion: person.religion
                    };

                    // Add to table data
                    this.tableData.push(combinedData);
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
    else if (Number(this.selectedDeemana) === 5) {
      this.donationReceivedService.getDisabledList().subscribe({
        next: (data) => {
          if (Array.isArray(data)) {
            this.donations = data;
            console.log('Donations:', this.donations);

            this.persons = [];
            this.tableData = [];

            for (const donation of this.donations) {
              this.personService.getPersonByNic(donation.nic.toUpperCase()).subscribe({
                next: (person) => {
                  if (person) {
                    console.log('Person found:', person);
                    this.persons?.push(person);

                    const combinedData = {
                      value: donation.disabledValue,
                      name: person.name,
                      dob: person.dob,
                      nic: person.nic,
                      ethnicity: person.race,
                      religion: person.religion
                    };

                    // Add to table data
                    this.tableData.push(combinedData);
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
    else if (Number(this.selectedDeemana) === 6) {
      this.donationReceivedService.getKidneyAssistanceList().subscribe({
        next: (data) => {
          if (Array.isArray(data)) {
            this.donations = data;
            console.log('Donations:', this.donations);

            this.persons = [];
            this.tableData = [];

            for (const donation of this.donations) {
              this.personService.getPersonByNic(donation.nic.toUpperCase()).subscribe({
                next: (person) => {
                  if (person) {
                    console.log('Person found:', person);
                    this.persons?.push(person);

                    const combinedData = {
                      value: donation.kidneyAssistanceValue,
                      name: person.name,
                      dob: person.dob,
                      nic: person.nic,
                      ethnicity: person.race,
                      religion: person.religion
                    };

                    // Add to table data
                    this.tableData.push(combinedData);
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
    else if (Number(this.selectedDeemana) === 7) {
      this.donationReceivedService.getPublicAssistanceList().subscribe({
        next: (data) => {
          if (Array.isArray(data)) {
            this.donations = data;
            console.log('Donations:', this.donations);

            this.persons = [];
            this.tableData = [];

            for (const donation of this.donations) {
              this.personService.getPersonByNic(donation.nic.toUpperCase()).subscribe({
                next: (person) => {
                  if (person) {
                    console.log('Person found:', person);
                    this.persons?.push(person);

                    const combinedData = {
                      value: donation.publicAssistanceValue,
                      name: person.name,
                      dob: person.dob,
                      nic: person.nic,
                      ethnicity: person.race,
                      religion: person.religion
                    };

                    // Add to table data
                    this.tableData.push(combinedData);
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
    else if (Number(this.selectedDeemana) === 8) {
      this.donationReceivedService.getMedicalAssistanceList().subscribe({
        next: (data) => {
          if (Array.isArray(data)) {
            this.donations = data;
            console.log('Donations:', this.donations);

            this.persons = [];
            this.tableData = [];

            for (const donation of this.donations) {
              this.personService.getPersonByNic(donation.nic.toUpperCase()).subscribe({
                next: (person) => {
                  if (person) {
                    console.log('Person found:', person);
                    this.persons?.push(person);

                    const combinedData = {
                      value: donation.medicalAssistanceValue,
                      name: person.name,
                      dob: person.dob,
                      nic: person.nic,
                      ethnicity: person.race,
                      religion: person.religion
                    };

                    // Add to table data
                    this.tableData.push(combinedData);
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
    else if (Number(this.selectedDeemana) === 9) {
      this.donationReceivedService.getEducationSupportList().subscribe({
        next: (data) => {
          if (Array.isArray(data)) {
            this.donations = data;
            console.log('Donations:', this.donations);

            this.persons = [];
            this.tableData = [];

            for (const donation of this.donations) {
              this.personService.getPersonByNic(donation.nic.toUpperCase()).subscribe({
                next: (person) => {
                  if (person) {
                    console.log('Person found:', person);
                    this.persons?.push(person);

                    const combinedData = {
                      value: donation.educationSupportValue,
                      name: person.name,
                      dob: person.dob,
                      nic: person.nic,
                      ethnicity: person.race,
                      religion: person.religion
                    };

                    // Add to table data
                    this.tableData.push(combinedData);
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
