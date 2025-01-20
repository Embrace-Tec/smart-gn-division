import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Vehicle, VehicleDTO } from '../models/vehicle.model'; // Adjust the path as needed

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private vehicleCollection = 'vehicles'; // Firestore collection name

  constructor(private firestore: AngularFirestore) {}

  // Add a new vehicle
  addVehicle(vehicleDTO: VehicleDTO): Promise<void> {
    return this.firestore
      .collection(this.vehicleCollection)
      .add(vehicleDTO)
      .then(() => console.log('Vehicle added successfully'))
      .catch((error) => console.error('Error adding vehicle:', error));
  }

  // Get all vehicles
  getVehicles(): Observable<Vehicle[]> {
    return this.firestore
      .collection<Vehicle>(this.vehicleCollection)
      .valueChanges({ idField: 'id' }); // Automatically includes document IDs
  }

  // Get a single vehicle by ID
  getVehicleById(id: string): Observable<Vehicle | undefined> {
    return this.firestore
      .collection<Vehicle>(this.vehicleCollection)
      .doc<Vehicle>(id)
      .valueChanges();
  }

  // Update an existing vehicle
  updateVehicle(vehicle: Vehicle): Promise<void> {
    return this.firestore
      .collection<Vehicle>(this.vehicleCollection)
      .doc(vehicle.id)
      .update(vehicle)
      .then(() => console.log('Vehicle updated successfully'))
      .catch((error) => console.error('Error updating vehicle:', error));
  }

  // Delete a vehicle by ID
  deleteVehicle(id: string): Promise<void> {
    return this.firestore
      .collection<Vehicle>(this.vehicleCollection)
      .doc(id)
      .delete()
      .then(() => console.log('Vehicle deleted successfully'))
      .catch((error) => console.error('Error deleting vehicle:', error));
  }

  // Convert Vehicle to VehicleDTO
  convertToDTO(vehicle: Vehicle): VehicleDTO {
    return {
      nic: vehicle.nic,
      registrationNumber: vehicle.registrationNumber,
      model: vehicle.model,
      value: vehicle.value,
      monthlyRevenue: vehicle.monthlyRevenue,
    };
  }
}
