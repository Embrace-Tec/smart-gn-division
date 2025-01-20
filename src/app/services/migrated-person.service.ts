import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { MigratedPerson, MigratedPersonDTO } from '../models/migrated.person.model'; // Adjust the path as needed

@Injectable({
  providedIn: 'root',
})
export class MigratedPersonService {
  private migratedPersonCollection = 'migratedPersons'; // Firestore collection name

  constructor(private firestore: AngularFirestore) {}

  // Add a new migrated person
  addMigratedPerson(migratedPersonDTO: MigratedPersonDTO): Promise<void> {
    return this.firestore
      .collection(this.migratedPersonCollection)
      .add(migratedPersonDTO)
      .then(() => console.log('Migrated person added successfully'))
      .catch((error) => console.error('Error adding migrated person:', error));
  }

  // Get all migrated persons
  getMigratedPersons(): Observable<MigratedPerson[]> {
    return this.firestore
      .collection<MigratedPerson>(this.migratedPersonCollection)
      .valueChanges({ idField: 'id' }); // Automatically includes document IDs
  }

  // Get a single migrated person by ID
  getMigratedPersonById(id: string): Observable<MigratedPerson | undefined> {
    return this.firestore
      .collection<MigratedPerson>(this.migratedPersonCollection)
      .doc<MigratedPerson>(id)
      .valueChanges();
  }

  // Update an existing migrated person
  updateMigratedPerson(migratedPerson: MigratedPerson): Promise<void> {
    return this.firestore
      .collection<MigratedPerson>(this.migratedPersonCollection)
      .doc(migratedPerson.id)
      .update(migratedPerson)
      .then(() => console.log('Migrated person updated successfully'))
      .catch((error) => console.error('Error updating migrated person:', error));
  }

  // Delete a migrated person by ID
  deleteMigratedPerson(id: string): Promise<void> {
    return this.firestore
      .collection<MigratedPerson>(this.migratedPersonCollection)
      .doc(id)
      .delete()
      .then(() => console.log('Migrated person deleted successfully'))
      .catch((error) => console.error('Error deleting migrated person:', error));
  }
}
