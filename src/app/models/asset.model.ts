export interface Asset {
  id: string;
  assetDetails: string; // Description of the asset
  assetOwnerNic: string; // Owner's name
  assetValue: number; // Value of the asset
  assetMonthlyIncome: number; // Monthly income generated from the asset
}

export interface AssetDTO {
  assetDetails: string; // Description of the asset
  assetOwnerNic: string; // Owner's name
  assetValue: number; // Value of the asset
  assetMonthlyIncome: number; // Monthly income generated from the asset
}
