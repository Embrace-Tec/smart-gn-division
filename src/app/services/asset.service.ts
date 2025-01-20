import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';
import {Asset, AssetDTO} from '../models/asset.model'; // Update the path as needed

@Injectable({
  providedIn: 'root',
})
export class AssetService {
  private assetCollection = 'assets'; // Firestore collection name

  constructor(private firestore: AngularFirestore) {
  }

  // Add a new asset
  addAsset(assetDTO: AssetDTO) {
    // const asset: Asset = { id, ...assetDTO };
    // return this.firestore.collection<Asset>(this.assetCollection).add(assetDTO);
    return this.firestore
      .collection(this.assetCollection)
      .add(assetDTO);
  }

  // Get all assets
  getAssets(): Observable<Asset[]> {
    return this.firestore
      .collection<Asset>(this.assetCollection)
      .valueChanges();
  }

  // Get a single asset by ID
  getAssetById(id: string): Observable<Asset | undefined> {
    return this.firestore
      .collection<Asset>(this.assetCollection)
      .doc<Asset>(id)
      .valueChanges();
  }

  // Update an existing asset
  updateAsset(asset: Asset): Promise<void> {
    return this.firestore
      .collection<Asset>(this.assetCollection)
      .doc(asset.id)
      .update(asset);
  }

  // Delete an asset by ID
  deleteAsset(id: string): Promise<void> {
    return this.firestore
      .collection<Asset>(this.assetCollection)
      .doc(id)
      .delete();
  }
}
