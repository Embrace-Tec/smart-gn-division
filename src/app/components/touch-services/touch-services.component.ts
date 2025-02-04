import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-touch-services',
  templateUrl: './touch-services.component.html',
  styleUrls: ['./touch-services.component.css']
})
export class TouchServicesComponent implements OnInit {
  currentYear: string = '';
  currentDate: string = '';
  currentDay: string = '';
  showHeader: boolean = true;  // Controls visibility of the header

  constructor(private router: Router) { }

  ngOnInit() {
    this.setSinhalaDate();
    setTimeout(() => {
      this.showHeader = false;
    }, 3000);
  }

  firstNewWindow() {
    // Open the new component route in a new window
    this.router.navigate(['/first']);
  }

  secondNewWindow() {
    // Open the new component route in a new window
    this.router.navigate(['/second']);
  }

  thirdNewWindow() {
    // Open the new component route in a new window
    this.router.navigate(['/third']);
  }

  fourthNewWindow() {
    // Open the new component route in a new window
    this.router.navigate(['/fourth']);
  }

  fifthNewWindow() {
    // Open the new component route in a new window
    this.router.navigate(['/fifth']);
  }

  sixthNewWindow() {
    // Open the new component route in a new window
    this.router.navigate(['/sixth']);
  }

  seventhNewWindow() {
    // Open the new component route in a new window
    this.router.navigate(['/seventh']);
  }

  setSinhalaDate() {
    const date = new Date();

    // Sinhala month names
    const sinhalaMonths = [
      'ජනවාරි', 'පෙබරවාරි', 'මාර්තු', 'අප්‍රේල්', 'මැයි', 'ජූනි',
      'ජූලි', 'අගෝස්තු', 'සැප්තැම්බර්', 'ඔක්තෝබර්', 'නොවැම්බර්', 'දෙසැම්බර්'
    ];

    // Sinhala week day names
    const sinhalaDays = [
      'ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'
    ];

    this.currentYear = date.getFullYear().toString(); // Get year
    this.currentDate = `${sinhalaMonths[date.getMonth()]} ${date.getDate()}`; // Format: ජනවාරි 30
    this.currentDay = sinhalaDays[date.getDay()]; // Get day name
  }
}
