import { Component } from '@angular/core';
import { DisplayMigratedPersonDTO, MigratedPerson } from '@app/models/migrated.person.model';
import { Person } from '@app/models/person.model';
import { MigratedPersonService } from '@app/services/migrated-person.service';
import { PersonService } from '@app/services/person.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-foreigners-details',
  templateUrl: './foreigners-details.component.html',
  styleUrls: ['./foreigners-details.component.css']
})
export class ForeignersDetailsComponent {
  migratedPersonsList: MigratedPerson[] = [];
  displayMigratedPersonList: DisplayMigratedPersonDTO[] = [];

  constructor(
    private migratedPersonService: MigratedPersonService,
    private personService: PersonService
  ) {
    this.loadMigratedPeople();
  }

  private loadMigratedPeople() {
    console.log('Fetching migrated people data...');

    this.migratedPersonService.getMigratedPersons().subscribe((migratedPersons: MigratedPerson[]) => {
      console.log('Migrated persons fetched:', migratedPersons);
      this.migratedPersonsList = migratedPersons;

      const personRequests = migratedPersons.map(person => {
        console.log(`Fetching details for person NIC: ${person.nic}`);
        return this.personService.getPersonById(person.nic); // Using nic as the ID
      });

      forkJoin(personRequests).pipe(
        map((persons: (Person | undefined)[]) => {
          console.log('Person details fetched:', persons);

          return migratedPersons.map((migratedPerson, index) => {
            const person = persons[index]; // Safe access
            const displayPerson: DisplayMigratedPersonDTO = {
              name: person?.name ?? 'Unknown',
              nic: person?.nic ?? migratedPerson.nic, // Use migratedPerson.nic as fallback
              religion: person?.religion ?? 'Not Specified',
              race: person?.race ?? 'Not Specified',
              country: migratedPerson.country,
              reason: migratedPerson.reason,
              year: migratedPerson.year,
              remark: migratedPerson.remark ?? 'No remarks'
            };

            console.log('Formatted DisplayMigratedPersonDTO:', displayPerson);
            return displayPerson;
          });
        })
      ).subscribe((displayList: DisplayMigratedPersonDTO[]) => {
        console.log('Final Display List:', displayList);
        this.displayMigratedPersonList = displayList;
      }, error => {
        console.error('Error occurred while fetching data:', error);
      });
    }, error => {
      console.error('Error fetching migrated persons:', error);
    });
  }
}
