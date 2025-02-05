import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrl: './last.component.css'
})
export class LastComponent {
  constructor(private router: Router) {
  }
  backHomeWindow() {
    this.router.navigate(['/']);
  }
}
