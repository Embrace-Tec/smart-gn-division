import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent {
  email: string = '';
  password: string = '';

  constructor(private dialogRef: MatDialogRef<LoginModalComponent>, private router: Router) {}

  login() {
    if (this.email === 'admin' && this.password === 'admin') {
      this.dialogRef.close();  // Close modal
      this.router.navigate(['/admin-dashboard']);  // Navigate to stepper form
    } else {
      alert('Invalid email or password!');
    }
  }

  closeDialog() {
    this.dialogRef.close();  // Close modal on cancel
  }


}
