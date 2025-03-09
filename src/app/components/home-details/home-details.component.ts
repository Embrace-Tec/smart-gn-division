import { Component } from '@angular/core';
import { House } from '@app/models/house.model';
import { Person } from '@app/models/person.model';
import { HouseService } from '@app/services/house.service';
import { PersonService } from '@app/services/person.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrl: './home-details.component.css'
})
export class HomeDetailsComponent {

  personsInHouse: Person[] = [];

  house: House | undefined = {
    id: "",
    houseType: "",
    address: "",
    drinkingWater: "",
    floorType: "",
    houseNo: "",
    landLine: "",
    naturalHazard: "",
    power: "",
    roofType: "",
    sanitaryFacilities: "",
    specialNotes: "",
    wallType: "",
    whatsapp: ""
  }

  constructor(private personService: PersonService, private houseService: HouseService) {

  }

  getHousingType(typeNo: string): string {
    switch (typeNo) {
      case "1":
        return "ස්ථිර"; // Permanent
      case "2":
        return "අර්ධ ස්ථිර"; // Semi-Permanent
      case "3":
        return "තාවකාලික"; // Temporary
      case "4":
        return "පැල්පත්"; // Hut/Slum
      case "5":
        return "ලයිම් කාමර"; // Line Room
      case "6":
        return "නැත"; // None
      default:
        return "අනියත"; // Unknown/Invalid
    }
  }

  getWallType(value: string): string {
    switch (value) {
      case "1":
        return "බ්ලොක් ගල්"; // Block Stones
      case "2":
        return "මැටි ගඩොල්"; // Clay Bricks
      case "3":
        return "වරිච්චි"; // Wattle & Daub
      case "4":
        return "ලෑළි"; // Wooden Planks
      case "5":
        return "ටකරන්"; // Tin Sheets
      case "6":
        return "වෙනත්"; // Other
      default:
        return "අනියත"; // Unknown/Invalid
    }
  }

  getFloorType(value: string): string {
    switch (value) {
      case "1":
        return "ටයිල්"; // Tiles
      case "2":
        return "සිමෙන්ති"; // Cement
      case "3":
        return "කොන්ක්‍රීට්"; // Concrete
      case "4":
        return "මැටි"; // Clay
      case "5":
        return "ගොම"; // Cow Dung
      case "6":
        return "වෙනත්"; // Other
      default:
        return "අනියත"; // Unknown/Invalid
    }
  }

  getRoofType(value: string): string {
    switch (value) {
      case "1":
        return "ඇස්බැස්ටෝස්"; // Asbestos
      case "2":
        return "උළු"; // Tiles
      case "3":
        return "ටකරන්"; // Tin Sheets
      case "4":
        return "කොන්ක්‍රීට්"; // Concrete
      case "5":
        return "පිදුරු/පොල් අතු"; // Straw/Coconut Leaves
      case "6":
        return "වෙනත්"; // Other
      default:
        return "අනියත"; // Unknown/Invalid
    }
  }

  getSanitationType(value: string): string {
    switch (value) {
      case "1":
        return "කොමඩ්"; // Commode
      case "2":
        return "පොච්චි වැසිකිලි"; // Squat Toilet
      case "3":
        return "වල වැසිකිලි"; // Pit Latrine
      case "4":
        return "පොදු වැසිකිලි"; // Public Toilet
      case "5":
        return "වෙනත්"; // Other
      case "6":
        return "නැත"; // None
      default:
        return "අනියත"; // Unknown/Invalid
    }
  }

  getWaterFacility(value: string): string {
    switch (value) {
      case "1":
        return "ජල සම්පාදන ම."; // Water Supply Scheme
      case "2":
        return "ප්‍රජා ජල"; // Community Water
      case "3":
        return "ආරක්ෂිත ළිඳ"; // Protected Well
      case "4":
        return "පොදු ලිඳ"; // Public Well
      case "5":
        return "වෙනත්"; // Other
      case "6":
        return "නැත"; // None
      default:
        return "අනියත"; // Unknown/Invalid
    }
  }

  getPowerSource(value: string): string {
    switch (value) {
      case "1":
        return "ල.න්.වි.ම විදුලිය"; // National Grid Electricity
      case "2":
        return "සූර්යය බලශක්තිය"; // Solar Power
      case "3":
        return "ගෑස් භාවිතා කරයි"; // Uses Gas
      case "4":
        return "ජීව වායු"; // Biogas
      case "5":
        return "වෙනත්"; // Other
      case "6":
        return "නැත"; // None
      default:
        return "අනියත"; // Unknown/Invalid
    }
  }

  getDisasterRisk(value: string): string {
    switch (value) {
      case "1":
        return "නාය යෑම් අවදානම්"; // Landslide Risk
      case "2":
        return "ගංවතුර"; // Flood
      case "3":
        return "පස් කඳු කඩා වැටීම"; // Rockfall
      case "4":
        return "වන සත්ව හානි"; // Wildlife Threat
      case "5":
        return "වෙනත්"; // Other
      case "6":
        return "නැත"; // None
      default:
        return "අනියත"; // Unknown/Invalid
    }
  }

  Data = [
    {
      name: 'John Doe',
      dob: '1985-04-20',
      id: 'F1234567',
      ethnicity: 'Caucasian',
      religion: 'Christian'
    },
    {
      name: 'Maria Gonzalez',
      dob: '1992-09-14',
      id: 'F7654321',
      ethnicity: 'Hispanic',
      religion: 'Catholic'
    },
    {
      name: 'Akira Takahashi',
      dob: '1980-11-03',
      id: 'F9876543',
      ethnicity: 'Asian',
      religion: 'Shinto'
    },
    {
      name: 'Olga Ivanova',
      dob: '1995-02-18',
      id: 'F2468101',
      ethnicity: 'Russian',
      religion: 'Orthodox Christian'
    }
  ];
  houseNo: string = "";

  loadHouseDetails() {

    if (this.houseNo) {
      this.personsInHouse.length = 0;

      this.personService.getPersonsByHouseNo(this.houseNo).subscribe(
        (data) => {
          this.personsInHouse = data;
          console.log('Persons:', this.personsInHouse);
        },
        (error) => {
          console.error('Error fetching persons:', error);
        }
      );
    }

    if (this.houseNo) {

      this.houseService.getHouseByHouseNumber(this.houseNo).subscribe(
        (data) => {
          this.house = data;
          console.log('House:', this.house);

          this.house!.houseType = this.getHousingType(this.house!.houseType);
          this.house!.wallType = this.getWallType(this.house!.wallType);
          this.house!.floorType = this.getFloorType(this.house!.floorType);
          this.house!.roofType = this.getRoofType(this.house!.roofType);
          this.house!.sanitaryFacilities = this.getSanitationType(this.house!.sanitaryFacilities);
          this.house!.drinkingWater = this.getWaterFacility(this.house!.drinkingWater);
          this.house!.power = this.getPowerSource(this.house!.power);
          this.house!.naturalHazard = this.getDisasterRisk(this.house!.naturalHazard);
        },
        (error) => {
          console.error('Error fetching persons:', error);
        }
      );
    }


  }
}
