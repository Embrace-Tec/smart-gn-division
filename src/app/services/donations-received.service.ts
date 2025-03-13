import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { DonationReceived } from '../models/donation.received.model'; // Import the model

@Injectable({
  providedIn: 'root',
})
export class DonationReceivedService {
  private receivedCollection = 'donation-received'; // Firestore collection name

  constructor(private firestore: AngularFirestore) {}

  // Add a donation received entry
  addDonationReceived(donationReceived: DonationReceived) {
    return this.firestore
      .collection(this.receivedCollection)
      .add(donationReceived);
  }

  // Fetch all received donations
  getAllDonationsReceived(): Observable<DonationReceived[]> {
    return this.firestore
      .collection<DonationReceived>(this.receivedCollection)
      .valueChanges();
  }

  // Fetch a single received donation by ID
  getDonationReceivedById(donation_id: string): Observable<DonationReceived | undefined> {
    return this.firestore
      .collection(this.receivedCollection)
      .doc<DonationReceived>(donation_id)
      .valueChanges();
  }

  // Fetch government donations by NIC
  getGovernmentDonationsByNic(nic: string): Observable<DonationReceived[]> {
    return this.firestore
      .collection<DonationReceived>(this.receivedCollection, ref => ref.where('nic', '==', nic))
      .valueChanges();
  }

  // Generic method to fetch donations by type
  getDonationsByType(valueKey: string): Observable<DonationReceived[]> {
    return this.firestore
      .collection<DonationReceived>(this.receivedCollection, ref => ref.where(valueKey, '>', 0))
      .valueChanges();
  }

  // Specific methods for each Deemana type (optional, for backward compatibility)
  getAswesumaList(): Observable<DonationReceived[]> {
    return this.getDonationsByType('aswesumaValue');
  }

  getCancerList(): Observable<DonationReceived[]> {
    return this.getDonationsByType('cancerValue');
  }

  getDisabledList(): Observable<DonationReceived[]> {
    return this.getDonationsByType('disabledValue');
  }

  getEducationSupportList(): Observable<DonationReceived[]> {
    return this.getDonationsByType('educationSupportValue');
  }

  getElderlyList(): Observable<DonationReceived[]> {
    return this.getDonationsByType('elderlyValue');
  }

  getKidneyAssistanceList(): Observable<DonationReceived[]> {
    return this.getDonationsByType('kidneyAssistanceValue');
  }

  getMedicalAssistanceList(): Observable<DonationReceived[]> {
    return this.getDonationsByType('medicalAssistanceValue');
  }

  getPublicAssistanceList(): Observable<DonationReceived[]> {
    return this.getDonationsByType('publicAssistanceValue');
  }

  getSamurdhiList(): Observable<DonationReceived[]> {
    return this.getDonationsByType('samurdhiValue');
  }
}
