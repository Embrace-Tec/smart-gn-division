import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';
import {Business, BusinessDTO} from '../models/business.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  private businessCollection = 'businesses'; // Firestore collection name

  constructor(private firestore: AngularFirestore) {
  }

  // Add a new business
  addBusiness(businessDTO: BusinessDTO) {
    // const id = this.firestore.createId(); // Generate unique ID
    // const business: Business = { id, ...businessDTO }; // Create Business object with ID
    // return this.firestore.collection<Business>(this.businessCollection).doc(id).set(business);
    return this.firestore
      .collection(this.businessCollection)
      .add(businessDTO);
  }

  // Get all businesses
  getBusinesses(): Observable<Business[]> {
    return this.firestore
      .collection<Business>(this.businessCollection)
      .valueChanges({ id: 'id' }); // Automatically includes document IDs
  }

  // Get a single business by ID
  getBusinessById(id: string): Observable<Business | undefined> {
    return this.firestore
      .collection<Business>(this.businessCollection)
      .doc<Business>(id)
      .valueChanges();
  }

  // Update an existing business
  updateBusiness(business: Business): Promise<void> {
    return this.firestore
      .collection<Business>(this.businessCollection)
      .doc(business.id)
      .update(business);
  }

  // Delete a business by ID
  deleteBusiness(id: string): Promise<void> {
    return this.firestore
      .collection<Business>(this.businessCollection)
      .doc(id)
      .delete();
  }
}
