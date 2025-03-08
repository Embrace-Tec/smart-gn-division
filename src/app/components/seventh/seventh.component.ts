import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { emailJSConfig } from '../../../environments/environment';
import { PersonService } from '@app/services/person.service';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent {
  constructor(private router: Router, private personService: PersonService) {}

  activeInput: HTMLInputElement | null = null;
  userId: string = '';
  phoneNumber: string = '';
  idError: boolean = false;
  phoneError: boolean = false;

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

  validateAndSendEmail() {
    if (!this.isValidIdOr4N(this.userId)) {
      this.idError = true;
      alert('කරුණාකර වලංගු හැදුනුම්පත් අංකය හෝ  වලංගු දුරකථන අංකයක් ඇතුලත් කරන්න.');
      return;
    }
    this.idError = false;

    if (!this.isValidPhoneNumber(this.phoneNumber)) {
      this.phoneError = true;
      alert('කරුණාකර වලංගු දුරකථන අංකයක් ඇතුලත් කරන්න.');
      return;
    }
    this.phoneError = false;

    this.sendEmail();
  }

  isValidIdOr4N(value: string): boolean {
    const nicPattern = /^\d{9}[VvXx]$|^\d{12}$/;  // Sri Lankan NIC format
    const fourNPattern = /^4N\d{4,8}$/;           // 4N number format
    return nicPattern.test(value) || fourNPattern.test(value);
  }

  isValidPhoneNumber(value: string): boolean {
    const phonePattern = /^\d{10}$/; // Sri Lankan phone number format (10 digits)
    return phonePattern.test(value);
  }

  sendEmail() {
    emailjs.send(emailJSConfig.serviceId, emailJSConfig.templateId, {
      from_nic: this.userId,
      message: 'Service : වෙනත් හදසි පණිවිඩයක් දැනුම්දීම requested by NIC : ' + this.userId + ' Phone number : ' + this.phoneNumber
    }, emailJSConfig.publicKey)
      .then(response => console.log('Email sent!', response))
      .catch(error => console.error('Error:', error));
  }

  openNewWindow() {
    this.validateAndSendEmail();
    if (!this.idError && !this.phoneError) {
      this.router.navigate(['/last']);
    }
  }

  backHomeWindow() {
    this.router.navigate(['/']);
  }
}
