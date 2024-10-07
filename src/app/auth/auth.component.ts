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
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

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
    MatButtonToggle,
    NgIf
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  authType: string = "login";
  username:string="";
  email:string="";
  password:string="";
  confirmPassword:string ="";

  constructor(private authService:AuthService,
              private snackBar:MatSnackBar,
              private router:Router) {
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
        this.snackBar.open(`Register with success.`, 'Close', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        this.onAuthTypeChange('login');
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
        this.snackBar.open(`Welcome back, ${response.data.username}`, 'Close', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'right'
        });
        this.router.navigateByUrl("/dashboard")
      }
    }, (errorResponse: any) => {
      this.snackBar.open(`${errorResponse.error.message}`, 'Close', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'right'
      });
    });
  }

  onAuthTypeChange(authType: string) {
  this.authType=authType;
  }
}
