import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-add-edit-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormField,
    FormsModule,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './add-edit-item.component.html',
  styleUrl: './add-edit-item.component.css'
})
export class AddEditItemComponent {
  title:string="";
  description:string="";
  price:number=0;
  imageUrl:string ="";

  showValue() {
    console.log(this.title);
    console.log(this.description);
    console.log(this.price);
    console.log(this.imageUrl);
  }
}
