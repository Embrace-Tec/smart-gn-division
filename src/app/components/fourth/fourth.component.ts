import {Component} from '@angular/core';
import {Router} from "@angular/router";
import emailjs from "@emailjs/browser";
import {emailJSConfig} from "../../../environments/environment";

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrl: './fourth.component.css'
})
export class FourthComponent {
  constructor(private router: Router) {
  }

  openNewWindow() {
    this.sendEmail();
    this.router.navigate(['/last']);

  }

  backHomeWindow() {
    this.router.navigate(['/']);
  }

  sendEmail() {
    let nic = (document.getElementById("nicText") as HTMLInputElement).value;
    let phone = (document.getElementById("phoneText") as HTMLInputElement).value;

    emailjs.send(emailJSConfig.serviceId, emailJSConfig.templateId, {
      from_nic: nic,
      message: "Service : ගසක් කැපීම සඳහා බලපත්‍රයක් ලබාගැනීම requested by NIC : " + nic + " Phone number : " + phone
    }, emailJSConfig.publicKey)
      .then(response => console.log("Email sent!", response))
      .catch(error => console.error("Error:", error));
  }
}
