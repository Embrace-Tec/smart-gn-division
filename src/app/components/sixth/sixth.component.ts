import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrl: './sixth.component.css'
})
export class SixthComponent {
  constructor(private router: Router) { }
  openNewWindow() {

    this.router.navigate(['/last']);

  }

  backHomeWindow() {
    this.router.navigate(['/']);
  }
}
