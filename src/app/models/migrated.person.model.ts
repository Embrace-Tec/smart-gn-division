export interface MigratedPerson {
  id: string;
  nic: string; // National ID of the recipient or donor
  country: string;
  reason: string;
  remark: string;
}

export interface MigratedPersonDTO {
  nic: string; // National ID of the recipient or donor
  country: string;
  reason: string;
  remark: string;
}

