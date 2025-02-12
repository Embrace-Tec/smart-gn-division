import {Component} from '@angular/core';
import {Router} from "@angular/router";
import emailjs from "@emailjs/browser";
import {emailJSConfig} from "../../../environments/environment";
import {PersonService} from "@app/services/person.service";

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrl: './seventh.component.css'
})
export class SeventhComponent {

  activeInput: HTMLInputElement | null = null;

  showKeyboard(inputId: string): void {
    this.activeInput = document.getElementById(inputId) as HTMLInputElement | null;
    const keyboard = document.getElementById("keyboard");
    if (keyboard) {
      keyboard.classList.remove("hidden");
      keyboard.style.display = "block";
    }
  }

  hideKeyboard(): void {
    const keyboard = document.getElementById("keyboard");
    if (keyboard) {
      keyboard.classList.add("hidden");
      keyboard.style.display = "none";
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

  constructor(private router: Router, private personService: PersonService) {
  }

  openNewWindow() {
    if (this.checkNicExist()) {
      this.sendEmail();
      this.router.navigate(['/last']);
    } else {
      alert("NIC not found");
    }

  }

  backHomeWindow() {
    this.router.navigate(['/']);
  }

  checkNicExist() {
    let nic = (document.getElementById("nicText") as HTMLInputElement).value;
    let exist = false;
    this.personService.getPersonByNic(nic.toUpperCase()).subscribe(person => {
      if (person) {
        console.log("Person found:", person);
        exist = true;
      } else {
        console.log("No person found.");
        alert("NIC not found!!");
      }
    });
    return exist;
  }

  sendEmail() {
    let nic = (document.getElementById("nicText") as HTMLInputElement).value;
    let phone = (document.getElementById("phoneText") as HTMLInputElement).value;

    emailjs.send(emailJSConfig.serviceId, emailJSConfig.templateId, {
      from_nic: nic,
      message: "Service : වෙනත් හදසි පණිවිඩෙක් දැනුම්දීම requested by NIC : " + nic + " Phone number : " + phone
    }, emailJSConfig.publicKey)
      .then(response => console.log("Email sent!", response))
      .catch(error => console.error("Error:", error));
  }
}
