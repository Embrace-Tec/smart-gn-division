import { Component } from '@angular/core';
import { DisplayMigratedPersonDTO, MigratedPerson } from '@app/models/migrated.person.model';
import { Person } from '@app/models/person.model';
import { MigratedPersonService } from '@app/services/migrated-person.service';
import { PersonService } from '@app/services/person.service';
import { forkJoin ,of} from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-foreigners-details',
  templateUrl: './foreigners-details.component.html',
  styleUrl: './foreigners-details.component.css'
})
export class ForeignersDetailsComponent {

  migratedPersonsList: MigratedPerson[] = [];

  displayMigratedPersonList: DisplayMigratedPersonDTO[] = [];

  constructor(private migratedPersonService: MigratedPersonService, private personService: PersonService) {
    this.loadMigratedPeople();
  }

  private loadMigratedPeople() {
    this.migratedPersonService.getMigratedPersons()
      .pipe(
        tap((migratedPersons: MigratedPerson[]) => 
          console.log("Fetched Migrated Persons:", migratedPersons)
        ),
        switchMap((migratedPersons: MigratedPerson[]) => {
          if (!migratedPersons || migratedPersons.length === 0) {
            console.warn("No migrated persons found!");
            return of([]); // Return empty observable
          }
  
          // Filter out invalid NICs
          const validPersons = migratedPersons.filter(person => person.nic);
          console.log("Valid Migrated Persons with NICs:", validPersons);
  
          if (validPersons.length === 0) {
            console.warn("No valid NICs found!");
            return of([]);
          }
  
          // Map to observables
          const personObservables = validPersons.map(person =>
            this.personService.getPersonByNic(person.nic).pipe(
              map((personMod: Person | undefined) => {
                if (!personMod) {
                  console.warn(`No person found for NIC: ${person.nic}`);
                  return null;
                }
                return {
                  nic: person.nic,
                  name: personMod.name!,
                  religion: personMod.religion!,
                  race: personMod.race!,
                  country: person.country,
                  reason: person.reason,
                  year: person.year,
                  remark: person.remark
                } as DisplayMigratedPersonDTO;
              })
            )
          );
  
          return forkJoin(personObservables);
        })
      )
      .subscribe({
        next: (displayPeople: (DisplayMigratedPersonDTO | null)[]) => {
          this.displayMigratedPersonList = displayPeople.filter(person => person !== null) as DisplayMigratedPersonDTO[];
          console.log("Final Display List:", this.displayMigratedPersonList);
        },
        error: (err) => {
          console.error("Error fetching data:", err);
        }
      });
  }
  
  
  
}
