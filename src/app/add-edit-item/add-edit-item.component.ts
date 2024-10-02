import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatCard, MatCardActions, MatCardHeader, MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {ItemService} from "../item.service";

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
export class AddEditItemComponent implements OnChanges{
  title:string="";
  description:string="";
  price:number=0;
  imageUrl:string ="";
  @Input() item:any;

  constructor(private itemService: ItemService) {

  }

  showValue() {
    console.log(this.title);
    console.log(this.description);
    console.log(this.price);
    console.log(this.imageUrl);

    // this.itemService.displayInfo()
    let item = {
      title: this.title,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl
    };

    this.itemService.createItem(item);
  }

  submitForm() {
    let body = {
      id: this.item !=null? this.item.id : "",
      title: this.title,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl
    };
    if(body.id == "") {
      this.itemService.createItem(body);
    } else {
      this.itemService.updateItem(body);
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    //aceasta metooda se apealeaza atunci cand elementele de la @input se schimba
    console.log("ngOnChanges()")
    console.log(this.item)
    if(this.item != null) {
      this.title = this.item.title;
      this.description = this.item.description;
      this.price = this.item.price;
      this.imageUrl = this.item.imageUrl;
    }
  }
}
