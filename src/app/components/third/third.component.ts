import {Component} from '@angular/core';
import {Router} from "@angular/router";
import emailjs from "@emailjs/browser";
import {emailJSConfig} from "../../../environments/environment";

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
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
      message: "Service : වැලි ගොඩ දැමීම සඳහා අවසරයක් ලබාගැනීම requested by NIC : " + nic + " Phone number : " + phone
    }, emailJSConfig.publicKey)
      .then(response => console.log("Email sent!", response))
      .catch(error => console.error("Error:", error));
  }
}
