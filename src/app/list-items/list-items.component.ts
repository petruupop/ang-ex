import { Component } from '@angular/core';
import {ItemService} from "../item.service";
import {NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  itemsList: Array<any> = [];

  constructor(private itemService: ItemService) {
    this.itemService.getItemsList().subscribe(
      (items:Array<any>) => {
        console.log("aici?")
        this.itemsList = items;
      }
    );
  }

  onDeleteItem(id:string) {
    // alert("attentuinb" + id);
    this.itemService.deleteItem(id);
  }
}
