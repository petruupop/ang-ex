import {Component, EventEmitter, Output} from '@angular/core';
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
  @Output() onEditEvent: EventEmitter<any> = new EventEmitter<any>(); //event emitter ne ajuta sa trimitem obiecte/evenimente in exteriorul componentei curente
//pentru a emite un eveniment foolosim metoda emit()

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
  onEditItem(item:any){
    console.log("List items onEditItem"+ item);
    this.onEditEvent.emit(item);
  }
}
