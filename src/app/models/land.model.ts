export interface Land { //change this
  id: string;
  nic: string;
  address: string;
  size: string;
  planted: string;
  revenue: number;
}

export interface LandDTO {
  ownership: string; // Type of ownership (e.g., government, private, etc.)
  landSize: string; // Size of the land in acres
  ownerNic: string; // Name of the owner
  landDetails: string; // Details of the land (name, lot number, or deed number)
  governorsArea: string; // Grama Niladhari division
  cropGrown: string; // Crops grown on the land
  monthlyIncome: number; // Monthly income from the land
}
