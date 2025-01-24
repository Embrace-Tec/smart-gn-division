export interface Asset {
  id: string;
  assetDetails: string; // Description of the asset
  assetOwnerNic: string; // Owner's name
  assetValue: string; // Value of the asset
  assetMonthlyIncome: string; // Monthly income generated from the asset
}

export interface AssetDTO {
  assetDetails: string; // Description of the asset
  assetOwnerNic: string; // Owner's name
  assetValue: string; // Value of the asset
  assetMonthlyIncome: string; // Monthly income generated from the asset
}
