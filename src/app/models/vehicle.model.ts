export interface Vehicle {
  id: string;
  registrationNumber: string;
  nic: string; // National ID of the owner
  model: string;
  value: number;
  monthlyRevenue: number;
}

export interface VehicleDTO {
  nic: string; // National ID of the owner
  registrationNumber: string;
  model: string;
  value: number;
  monthlyRevenue: number;
}
