import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.component.html',
  styleUrl: './seventh.component.css'
})
export class SeventhComponent {
  constructor(private router: Router) { }
  openNewWindow() {

    this.router.navigate(['/last']);

  }

  backHomeWindow() {
    this.router.navigate(['/']);
  }
}
