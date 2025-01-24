export interface Person {
  id: string;
  nic:string;
  name:string;
  houseNo: string;
  dob: Date;
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
  name:string;
  dob: Date;
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
