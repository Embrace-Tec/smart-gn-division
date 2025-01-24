export interface House {
  id: string;
  houseNo: string;
  address: string;
  wallType: string;
  floorType: string;
  roofType: string;
  power: string;
  drinkingWater: string;
  naturalHazard: string;
  sanitaryFacilities: string;
  whatsapp: string;
  landLine: string;
  specialNotes?:string;
}

export interface HouseDTO {
  houseNo: string;
  address: string;
  wallType: string|undefined;
  floorType: string;
  roofType: string;
  power: string;
  drinkingWater: string;
  naturalHazard: string;
  sanitaryFacilities: string;
  whatsapp: string;
  landLine: string;
  specialNotes?:string;
}
