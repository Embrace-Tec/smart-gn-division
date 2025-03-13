import { Component } from '@angular/core';
import { Person } from '@app/models/person.model';
import { PersonService } from '@app/services/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent {
  persons: Person[] = [];
  searchNIC: string = '';
  constructor(private personService: PersonService) {
    this.filteredPersons = []; // Initially, no data is shown
  }

  ngOnInit() {
    this.loadPeople();
  }

  private loadPeople() {
    this.personService.getPersons().subscribe((data) => {
      console.log("Fetched Persons:", data);
      this.persons = data; // ✅ Store data for use in HTML
    });
    // this.personService.getPersons().subscribe((data) => {
    //   console.log("Fetched Persons:", data);
    //   this.persons = data.map(person => ({
    //     ...person,
    //     // ✅ Convert Firestore Timestamp to readable Date format
    //     dob: person.dob?.seconds
    //       ? new Date(person.dob.seconds * 1000).toISOString().split('T')[0]
    //       : person.dob
    //   }));
    // });
  }

  filteredPersons: any[] = [];

  filterPersons() {
    if (this.searchNIC) {
      this.filteredPersons = this.persons.filter(person => person.nic === this.searchNIC);
    } else {
      this.filteredPersons = []; // Clear the table if no NIC is entered
    }
  }

  Data = [
    {
      name: 'John Doe',
      dob: '1985-04-20',
      id: 'F1234567',
      ethnicity: 'Caucasian',
      religion: 'Christian'
    },
    {
      name: 'Maria Gonzalez',
      dob: '1992-09-14',
      id: 'F7654321',
      ethnicity: 'Hispanic',
      religion: 'Catholic'
    },
    {
      name: 'Akira Takahashi',
      dob: '1980-11-03',
      id: 'F9876543',
      ethnicity: 'Asian',
      religion: 'Shinto'
    },
    {
      name: 'Olga Ivanova',
      dob: '1995-02-18',
      id: 'F2468101',
      ethnicity: 'Russian',
      religion: 'Orthodox Christian'
    }
  ];
}
