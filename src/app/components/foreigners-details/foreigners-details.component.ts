import { Component } from '@angular/core';

@Component({
  selector: 'app-foreigners-details',
  templateUrl: './foreigners-details.component.html',
  styleUrl: './foreigners-details.component.css'
})
export class ForeignersDetailsComponent {
  foreignersData = [
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
