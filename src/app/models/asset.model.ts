export interface Asset {
  id: string;
  nic: string;
  description: string;
  value: number;
  revenue: number;
}

export interface AssetDTO {
  nic: string;
  description: string;
  value: number;
  revenue: number;
}
