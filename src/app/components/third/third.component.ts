import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrl: './third.component.css'
})
export class ThirdComponent {
  constructor(private router: Router) { }
  openNewWindow() {

    this.router.navigate(['/last']);

  }

  backHomeWindow() {
    this.router.navigate(['/']);
  }
}
