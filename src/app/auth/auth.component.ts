import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle
} from "@angular/material/card";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {AuthService} from "../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardSubtitle,
    MatCardTitle,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatSuffix,
    ReactiveFormsModule,
    FormsModule,
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  username:string="";
  email:string="";
  password:string="";
  confirmPassword:string ="";

  constructor(private authService:AuthService, private snackBar:MatSnackBar) {
  }

  submitRegisterForm() {
    let payload = {
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    }
    this.authService.register(payload).subscribe((response:any) => {
      if(response.status == 200) {
        this.snackBar.open('Registration Successfully!', 'Close', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    });
    //FIXME:
    //TODO: implement submit
  }

  submitLoginForm() {
    let payload = {
      email: this.email,
      password: this.password
    };
    this.authService.login(payload).subscribe((response:any) => {
      if(response.status == 200) {
        this.snackBar.open('Registration Successfully!', 'Close', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
      }
    });
  }
}
