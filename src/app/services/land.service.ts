import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Land, LandDTO } from '../models/land.model'; // Adjust the path as needed

@Injectable({
  providedIn: 'root',
})
export class LandService {
  private landCollection = 'lands'; // Firestore collection name

  constructor(private firestore: AngularFirestore) {}

  // Add a new land
  addLand(landDTO: LandDTO): Promise<void> {
    return this.firestore
      .collection(this.landCollection)
      .add(landDTO)
      .then(() => console.log('Land added successfully'))
      .catch((error) => console.error('Error adding land:', error));
  }

  // Get all lands
  getLands(): Observable<Land[]> {
    return this.firestore
      .collection<Land>(this.landCollection)
      .valueChanges({ idField: 'id' }); // Automatically includes document IDs
  }

  // Get a single land by ID
  getLandById(id: string): Observable<Land | undefined> {
    return this.firestore
      .collection<Land>(this.landCollection)
      .doc<Land>(id)
      .valueChanges();
  }

  // Update an existing land
  updateLand(land: Land): Promise<void> {
    return this.firestore
      .collection<Land>(this.landCollection)
      .doc(land.id)
      .update(land)
      .then(() => console.log('Land updated successfully'))
      .catch((error) => console.error('Error updating land:', error));
  }

  // Delete a land by ID
  deleteLand(id: string): Promise<void> {
    return this.firestore
      .collection<Land>(this.landCollection)
      .doc(id)
      .delete()
      .then(() => console.log('Land deleted successfully'))
      .catch((error) => console.error('Error deleting land:', error));
  }
}
