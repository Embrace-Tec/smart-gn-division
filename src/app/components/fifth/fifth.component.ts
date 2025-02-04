import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrl: './fifth.component.css'
})
export class FifthComponent {
  constructor(private router: Router) { }
  openNewWindow() {

    this.router.navigate(['/last']);

  }

  backHomeWindow() {
    this.router.navigate(['/']);
  }
}
