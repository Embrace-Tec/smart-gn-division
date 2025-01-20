export interface Business {
  id: string;
  nic: string; //owner's nic
  address: string;
  category: string;
  name: string;
  revenue: number;
  noOfEmployees: number;
  remarks: string;
}

export interface BusinessDTO {
  nic: string; //owner's nic
  address: string;
  category: string;
  name: string;
  revenue: number;
  noOfEmployees: number;
  remarks: string;
}
