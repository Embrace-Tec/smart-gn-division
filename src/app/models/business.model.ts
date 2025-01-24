export interface Business {
  id: string;
  ownerNic:string;
  businessNature: string; // Nature of the business (e.g., Large Scale, Medium Scale, Self-Employment, etc.)
  businessName: string; // Business name or department
  employeeCount: string; // Number of employees
  businessAddress: string; // Address of the business
  monthlyIncome: string; // Monthly income from the business
  businessOtherDetails: string; // Other business details (optional)
}

export interface BusinessModelDTO {
  ownerNic:string;
  businessNature: string; // Nature of the business (e.g., Large Scale, Medium Scale, Self-Employment, etc.)
  businessName: string; // Business name or department
  employeeCount: string; // Number of employees
  businessAddress: string; // Address of the business
  monthlyIncome: string; // Monthly income from the business
  businessOtherDetails: string; // Other business details (optional)
}
