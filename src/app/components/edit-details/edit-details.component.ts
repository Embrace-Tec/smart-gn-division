import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrl: './edit-details.component.css'
})
export class EditDetailsComponent {
  constructor(private router: Router) {}

  navigateToDetails() {
    const nic = (document.getElementById('nic') as HTMLInputElement).value;
    const details = (document.getElementById('details') as HTMLSelectElement).value;

    if (!nic) {
      alert('කරුණාකර ජා.හැ.අංකය ඇතුළත් කරන්න.');
      return;
    }

    switch (details) {
      case '1':
        this.router.navigate(['/basic-info']);
        break;
      case '2':
        this.router.navigate(['/personal-info']);
        break;
      case '3':
        this.router.navigate(['/house-info']);
        break;
      case '4':
        this.router.navigate(['/government-benefits']);
        break;
      case '5':
        this.router.navigate(['/overseas-persons']);
        break;
      case '6':
        this.router.navigate(['/land-info']);
        break;
      case '7':
        this.router.navigate(['/vehicles']);
        break;
      case '8':
        this.router.navigate(['/practical-assets']);
        break;
      case '9':
        this.router.navigate(['/self-employment']);
        break;
      case '10':
        this.router.navigate(['/skills']);
        break;
      case '11':
        this.router.navigate(['/special-notes']);
        break;
      default:
        alert('කරුණාකර වලංගු තොරතුරු වර්ගයක් තෝරන්න.');
    }
  }
}
