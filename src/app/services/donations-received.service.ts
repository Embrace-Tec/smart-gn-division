import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';
import {DonationReceived} from '../models/donation.received.model'; // Import the model

@Injectable({
  providedIn: 'root',
})
export class DonationReceivedService {
  private receivedCollection = 'donation-received'; // Firestore collection name

  constructor(private firestore: AngularFirestore) {
  }

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

  getAswesumaList(): Observable<DonationReceived[]>{
    return this.firestore
          .collection<DonationReceived>(this.receivedCollection, ref => ref.where('aswesumaValue', '>', 0))
          .valueChanges();
    }

  getCancerList(): Observable<DonationReceived[]>{
      return this.firestore
            .collection<DonationReceived>(this.receivedCollection, ref => ref.where('cancerValue', '>', 0))
            .valueChanges();
      }

     getDisabledList(): Observable<DonationReceived[]>{
          return this.firestore
                .collection<DonationReceived>(this.receivedCollection, ref => ref.where('disabledValue', '>', 0))
                .valueChanges();
     }

     getEducationSupportList(): Observable<DonationReceived[]>{
                  return this.firestore
                        .collection<DonationReceived>(this.receivedCollection, ref => ref.where('educationSupportValue', '>', 0))
                        .valueChanges();
     }

     getElderlyList(): Observable<DonationReceived[]>{
                                  return this.firestore
                                        .collection<DonationReceived>(this.receivedCollection, ref => ref.where('elderlyValue', '>', 0))
                                        .valueChanges();
     }

     getKidneyAssistanceList(): Observable<DonationReceived[]>{
        return this.firestore
        .collection<DonationReceived>(this.receivedCollection, ref => ref.where('kidneyAssistanceValue', '>', 0))
        .valueChanges();
     }

    getMedicalAssistanceList(): Observable<DonationReceived[]>{
           return this.firestore
           .collection<DonationReceived>(this.receivedCollection, ref => ref.where('medicalAssistanceValue', '>', 0))
           .valueChanges();
    }

  getPublicAssistanceList(): Observable<DonationReceived[]>{
             return this.firestore
             .collection<DonationReceived>(this.receivedCollection, ref => ref.where('publicAssistanceValue', '>', 0))
             .valueChanges();
      }

    getSamurdhiList(): Observable<DonationReceived[]>{
                 return this.firestore
                 .collection<DonationReceived>(this.receivedCollection, ref => ref.where('samurdhiValue', '>', 0))
                 .valueChanges();
          }
}
