import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';
import {Donation, DonationDTO} from '../models/donation.model'; // Import the model

@Injectable({
  providedIn: 'root',
})
export class GovernmentDonationsService {
  private governmentCollection = 'government-donations'; // Firestore collection name

  constructor(private firestore: AngularFirestore) {
  }

  // Add a government donation
  addGovernmentDonation(governmentDonation: DonationDTO) {
    return this.firestore
      .collection(this.governmentCollection)
      .add(governmentDonation);
  }

  // Fetch all government donations
  getAllGovernmentDonations(): Observable<Donation[]> {
    return this.firestore
      .collection<Donation>(this.governmentCollection)
      .valueChanges();
  }

  // Fetch a single government donation by ID
  getGovernmentDonationById(id: string): Observable<Donation | undefined> {
    return this.firestore
      .collection(this.governmentCollection)
      .doc<Donation>(id)
      .valueChanges();
  }



}
