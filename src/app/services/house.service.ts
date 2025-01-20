import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { House, HouseDTO } from '../models/house.model'; // Adjust the path as needed

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private houseCollection = 'houses'; // Firestore collection name

  constructor(private firestore: AngularFirestore) {}

  // Add a new house
  addHouse(houseDTO: HouseDTO): Promise<void> {
    return this.firestore
      .collection(this.houseCollection)
      .add(houseDTO)
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
}
