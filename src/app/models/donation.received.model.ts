export interface DonationReceived {
  // donation_id: string; // ID referencing the donation
  // nic: string; // National ID of the recipient or donor
  nic: string; // receiver's nic
  aswesumaValue?: number; // අස්වැසුම
  samurdhiValue?: number; // සමෘද්ධි
  elderlyValue?: number; // වැඩිහිටි ආධාර
  cancerValue?: number; // පිළිකා ආධාර
  disabledValue?: number; // අබොධිත
  kidneyAssistanceValue?: number; // වකුගඩු ආධාර
  publicAssistanceValue?: number; // මහජනාධාර
  medicalAssistanceValue?: number; // රෝගාධාර
  educationSupportValue?: number; // ආධ්‍යාපන ආධාර
}
