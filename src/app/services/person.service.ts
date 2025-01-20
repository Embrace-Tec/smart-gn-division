import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Person, PersonDTO } from '../models/person.model'; // Adjust the path as needed

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private personCollection = 'persons'; // Firestore collection name

  constructor(private firestore: AngularFirestore) {}

  // Add a new person
  addPerson(personDTO: PersonDTO): Promise<void> {
    return this.firestore
      .collection(this.personCollection)
      .add(personDTO)
      .then(() => console.log('Person added successfully'))
      .catch((error) => console.error('Error adding person:', error));
  }

  // Get all persons
  getPersons(): Observable<Person[]> {
    return this.firestore
      .collection<Person>(this.personCollection)
      .valueChanges({ idField: 'id' }); // Automatically includes document IDs
  }

  // Get a single person by ID
  getPersonById(id: string): Observable<Person | undefined> {
    return this.firestore
      .collection<Person>(this.personCollection)
      .doc<Person>(id)
      .valueChanges();
  }

  // Update an existing person
  updatePerson(person: Person): Promise<void> {
    return this.firestore
      .collection<Person>(this.personCollection)
      .doc(person.id)
      .update(person)
      .then(() => console.log('Person updated successfully'))
      .catch((error) => console.error('Error updating person:', error));
  }

  // Delete a person by ID
  deletePerson(id: string): Promise<void> {
    return this.firestore
      .collection<Person>(this.personCollection)
      .doc(id)
      .delete()
      .then(() => console.log('Person deleted successfully'))
      .catch((error) => console.error('Error deleting person:', error));
  }
}
