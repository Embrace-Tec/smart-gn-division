import { Component } from '@angular/core';

@Component({
  selector: 'app-deemana-details',
  templateUrl: './deemana-details.component.html',
  styleUrl: './deemana-details.component.css'
})
export class DeemanaDetailsComponent {
  // Deemana (Welfare) options in Sinhala
  deemanaOptions = [
    { id: 1, name: 'අස්වැසුම' },
    { id: 2, name: 'සමෘද්ධි' },
    { id: 3, name: 'වැඩිහිටි ආධාර' },
    { id: 4, name: 'පිළිකා ආධාර' },
    { id: 5, name: 'අබොධිත' },
    { id: 6, name: 'වකුගඩු ආධාර' },
    { id: 7, name: 'මහජනාධාර' },
    { id: 8, name: 'රෝගාධාර' },
    { id: 9, name: 'ආධ්‍යාපන ආධාර' }
  ];

  // Selected Deemana type
  selectedDeemana: string | null = null;

  // Example data for table
  tableData = [
    {
      value: 'අස්වැසුම',
      name: 'සුමිත් පෙරේරා',
      dob: '1980-05-12',
      id: '123456789',
      ethnicity: 'සිංහල',
      religion: 'බUDAධි'
    },
    {
      value: 'සමෘද්ධි',
      name: 'අසල්වී',
      dob: '1985-08-24',
      id: '987654321',
      ethnicity: 'මූලික',
      religion: 'කතෝලික'
    },
    {
      value: 'අස්වැසුම',
      name: 'අයෂා නගිල්',
      dob: '1992-02-15',
      id: '1122334455',
      ethnicity: 'සිංහල',
      religion: 'විශිෂ්ට'
    }
  ];

  // Filter table data based on selected Deemana
  get filteredTableData() {
    if (this.selectedDeemana) {
      return this.tableData.filter(row => row.value === this.selectedDeemana);
    }
    return [];
  }
}
