export interface DonationReceived {
  // donation_id: string; // ID referencing the donation
  // nic: string; // National ID of the recipient or donor
  nic: string; // receiver's nic
  aswesumaValue?: string; // අස්වැසුම
  samurdhiValue?: string; // සමෘද්ධි
  elderlyValue?: string; // වැඩිහිටි ආධාර
  cancerValue?: string; // පිළිකා ආධාර
  disabledValue?: string; // අබොධිත
  kidneyAssistanceValue?: string; // වකුගඩු ආධාර
  publicAssistanceValue?: string; // මහජනාධාර
  medicalAssistanceValue?: string; // රෝගාධාර
  educationSupportValue?: string; // ආධ්‍යාපන ආධාර
}
