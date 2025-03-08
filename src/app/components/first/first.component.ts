import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { emailJSConfig } from '../../../environments/environment';
import { PersonService } from '@app/services/person.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  activeInput: HTMLInputElement | null = null;

  showKeyboard(inputId: string): void {
    this.activeInput = document.getElementById(inputId) as HTMLInputElement | null;
    const keyboard = document.getElementById('keyboard');
    if (keyboard) {
      keyboard.classList.remove('hidden');
      keyboard.style.display = 'block';
    }
  }

  hideKeyboard(): void {
    const keyboard = document.getElementById('keyboard');
    if (keyboard) {
      keyboard.classList.add('hidden');
      keyboard.style.display = 'none';
    }
  }

  addToInput(value: string): void {
    if (this.activeInput) {
      this.activeInput.value += value;
    }
  }

  deleteLast(): void {
    if (this.activeInput) {
      this.activeInput.value = this.activeInput.value.slice(0, -1);
    }
  }

  clearInput(): void {
    if (this.activeInput) {
      this.activeInput.value = '';
    }
  }

  constructor(private router: Router, private personService: PersonService) {}

  openNewWindow() {
    if (this.validateInputs()) {
      this.sendEmail();
      this.router.navigate(['/last']);
    }
  }

  backHomeWindow() {
    this.router.navigate(['/']);
  }

  validateInputs(): boolean {
    let nic = (document.getElementById('nicText') as HTMLInputElement).value;
    let phone = (document.getElementById('phoneText') as HTMLInputElement).value;

    const nicPattern = /^\d{9}[VvXx]$|^\d{12}$/; // Sri Lankan NIC format
    const fourNPattern = /^4N\d{4,8}$/; // 4N number format
    const phonePattern = /^\d{10}$/; // Sri Lankan phone number format (10 digits)

    if (!(nicPattern.test(nic) || fourNPattern.test(nic))) {
      alert('කරුණාකර වලංගු හැදුනුම්පත් අංකය හෝ  වලංගු දුරකථන අංකය ඇතුලත් කරන්න.');
      return false;
    }
    if (!phonePattern.test(phone)) {
      alert('කරුණාකර වලංගු දුරකථන අංකයක් ඇතුලත් කරන්න.');
      return false;
    }
    return true;
  }

  checkNicExist() {
    let nic = (document.getElementById('nicText') as HTMLInputElement).value;
    let exist = false;
    this.personService.getPersonByNic(nic.toUpperCase()).subscribe(person => {
      if (person) {
        console.log('Person found:', person);
        exist = true;
      } else {
        console.log('No person found.');
        alert('NIC not found!!');
      }
    });
    return exist;
  }

  sendEmail() {
    let nic = (document.getElementById('nicText') as HTMLInputElement).value;
    let phone = (document.getElementById('phoneText') as HTMLInputElement).value;

    emailjs.send(emailJSConfig.serviceId, emailJSConfig.templateId, {
      from_nic: nic,
      message: 'Service : පදිංචි සහතිකය requested by NIC : ' + nic + ' Phone number : ' + phone
    }, emailJSConfig.publicKey)
      .then(response => console.log('Email sent!', response))
      .catch(error => console.error('Error:', error));
  }
}
