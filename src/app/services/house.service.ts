import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import map operator from rxjs/operators
import { House, HouseDTO } from '../models/house.model'; // Adjust the path as needed

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private houseCollection = 'houses'; // Firestore collection name

  constructor(private firestore: AngularFirestore) { }

  // Add a new house
  addHouse(houseDTO: HouseDTO): Promise<void> {
    // Ensure there are no undefined values in the object
    const cleanedData = this.cleanUndefinedFields(houseDTO);

    return this.firestore
      .collection(this.houseCollection)
      .add(cleanedData)
      .then(() => console.log('House added successfully'))
      .catch((error) => console.error('Error adding house:', error));
  }

  // Get all houses
  getHouses(): Observable<House[]> {
    return this.firestore
      .collection<House>(this.houseCollection)
      .valueChanges({ idField: 'id' }); // Automatically includes document IDs
  }

  // Get a single house by ID
  getHouseById(id: string): Observable<House | undefined> {
    return this.firestore
      .collection<House>(this.houseCollection)
      .doc<House>(id)
      .valueChanges();
  }

  // Get a single house by house number
  getHouseByHouseNumber(houseNumber: string): Observable<House | undefined> {
    return this.firestore
      .collection<House>(this.houseCollection, ref => ref.where('houseNo', '==', houseNumber))
      .valueChanges()
      .pipe(
        map((houses: House[]) => houses[0]) // Explicitly typing 'houses' as House[]
      );
  }

  // Update an existing house
  updateHouse(house: House): Promise<void> {
    return this.firestore
      .collection<House>(this.houseCollection)
      .doc(house.id)
      .update(house)
      .then(() => console.log('House updated successfully'))
      .catch((error) => console.error('Error updating house:', error));
  }

  // Delete a house by ID
  deleteHouse(id: string): Promise<void> {
    return this.firestore
      .collection<House>(this.houseCollection)
      .doc(id)
      .delete()
      .then(() => console.log('House deleted successfully'))
      .catch((error) => console.error('Error deleting house:', error));
  }

  // Helper function to clean undefined fields
  private cleanUndefinedFields(obj: any) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, value]) => value !== undefined)
    );
  }
}
