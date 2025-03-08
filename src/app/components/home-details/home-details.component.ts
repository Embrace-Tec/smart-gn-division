import { Component } from '@angular/core';
import { House } from '@app/models/house.model';
import { Person } from '@app/models/person.model';
import { HouseService } from '@app/services/house.service';
import { PersonService } from '@app/services/person.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.css'
})
export class HomeDetailsComponent {

  personsInHouse: Person[] = [];

  private house: House | undefined;

  constructor(private personService: PersonService, private houseService: HouseService) {

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
  houseNo: string = "";

  loadHouseDetails() {
    
    if (this.houseNo) {
      this.personsInHouse.length = 0;

      this.personService.getPersonsByHouseNo(this.houseNo).subscribe(
        (data) => {
          this.personsInHouse = data;
          console.log('Persons:', this.personsInHouse);
        },
        (error) => {
          console.error('Error fetching persons:', error);
        }
      );
    }


  }
}
