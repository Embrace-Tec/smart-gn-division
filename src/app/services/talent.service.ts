import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Talent, TalentDTO } from '../models/talent.model'; // Adjust the path as needed

@Injectable({
  providedIn: 'root',
})
export class TalentService {
  private talentCollection = 'talents'; // Firestore collection name

  constructor(private firestore: AngularFirestore) {}

  // Add a new talent
  addTalent(talentDTO: TalentDTO): Promise<void> {
    return this.firestore
      .collection(this.talentCollection)
      .add(talentDTO)
      .then(() => console.log('Talent added successfully'))
      .catch((error) => console.error('Error adding talent:', error));
  }

  // Get all talents
  getTalents(): Observable<Talent[]> {
    return this.firestore
      .collection<Talent>(this.talentCollection)
      .valueChanges({ idField: 'id' }); // Automatically includes document IDs
  }

  // Get a single talent by ID
  getTalentById(id: string): Observable<Talent | undefined> {
    return this.firestore
      .collection<Talent>(this.talentCollection)
      .doc<Talent>(id)
      .valueChanges();
  }

  // Update an existing talent
  updateTalent(talent: Talent): Promise<void> {
    return this.firestore
      .collection<Talent>(this.talentCollection)
      .doc(talent.id)
      .update(talent)
      .then(() => console.log('Talent updated successfully'))
      .catch((error) => console.error('Error updating talent:', error));
  }

  // Delete a talent by ID
  deleteTalent(id: string): Promise<void> {
    return this.firestore
      .collection<Talent>(this.talentCollection)
      .doc(id)
      .delete()
      .then(() => console.log('Talent deleted successfully'))
      .catch((error) => console.error('Error deleting talent:', error));
  }

  // Convert Talent to TalentDTO
  convertToDTO(talent: Talent): TalentDTO {
    return {
      nic: talent.nic,
      name: talent.name,
      address: talent.address,
      description: talent.description,
      income: talent.income,
    };
  }
}
