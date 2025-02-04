import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  constructor(private router: Router) { }
  openNewWindow() {

    this.router.navigate(['/last']);

  }

  backHomeWindow() {
    this.router.navigate(['/']);
  }
}
