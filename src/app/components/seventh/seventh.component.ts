import { Component } from '@angular/core';
import { Router } from '@angular/router';
import emailjs from '@emailjs/browser';
import { emailJSConfig } from '../../../environments/environment';

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrls: ['./seventh.component.css']
})
export class SeventhComponent {
  activeInput: HTMLInputElement | null = null;
  userId: string = '';
  phoneNumber: string = '';

  constructor(private router: Router) {}

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
      if (this.activeInput.id === 'nicText') {
        this.userId = this.activeInput.value;
      } else if (this.activeInput.id === 'phoneText') {
        this.phoneNumber = this.activeInput.value;
      }
    }
  }

  deleteLast(): void {
    if (this.activeInput) {
      this.activeInput.value = this.activeInput.value.slice(0, -1);
      if (this.activeInput.id === 'nicText') {
        this.userId = this.activeInput.value;
      } else if (this.activeInput.id === 'phoneText') {
        this.phoneNumber = this.activeInput.value;
      }
    }
  }

  validateInputs(): boolean {
    // Validate NIC
    if (!this.isValidNIC(this.userId)) {
      alert('⚠️ කරුණාකර වලංගු හැදුනුම්පත් අංකය ඇතුලත් කරන්න.');
      return false;
    }

    // Validate Phone Number
    if (!this.isValidPhoneNumber(this.phoneNumber)) {
      alert('⚠️ කරුණාකර වලංගු දුරකථන අංකයක් ඇතුලත් කරන්න.');
      return false;
    }

    return true;
  }

  isValidNIC(value: string): boolean {
    const nicPattern = /^\d{9}[VvXx]$|^\d{12}$/; // Sri Lankan NIC format
    return nicPattern.test(value.trim());
  }

  isValidPhoneNumber(value: string): boolean {
    const phonePattern = /^\d{10}$/; // Sri Lankan phone number format (10 digits)
    return phonePattern.test(value.trim());
  }

  sendEmail() {
    emailjs.send(emailJSConfig.serviceId, emailJSConfig.templateId, {
      from_nic: this.userId,
      message: `Service: වෙනත් හදිසි පණිවිඩයක් දැනුම්දීම requested by NIC: ${this.userId}, Phone number: ${this.phoneNumber}`
    }, emailJSConfig.publicKey)
      .then(response => console.log('✅ Email sent!', response))
      .catch(error => console.error('❌ Error:', error));
  }

  openNewWindow() {
    if (this.validateInputs()) {
      this.sendEmail();
      this.router.navigate(['/last']);
    }
  }

  backHomeWindow() {
    this.router.navigate(['/']);
  }
}
