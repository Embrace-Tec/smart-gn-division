export interface Person {
  id: string;
  nic:string;
  houseNo: string;
  dob: string;
  phoneNo: string;
  religion: string;
  race: string;
  educationLevel: string;
  occupation: string;
  income: number;
  illnesses: string;
  disabilities: string;
  relationshipToHouseOwner: string;
}

export interface PersonDTO {
  nic:string;
  houseNo: string;
  dob: string;
  phoneNo: string;
  religion: string;
  race: string;
  educationLevel: string;
  occupation: string;
  income: number;
  illnesses: string;
  disabilities: string;
  relationshipToHouseOwner: string;
}
