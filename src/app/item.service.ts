import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {response} from "express";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl: string = "https://api.codebyte-software.com:2323/api/items";
  private itemsList: Array<any> = [];
  private itemSubject = new BehaviorSubject <Array<any>>([]);
  constructor(private httpClient: HttpClient) {
    this.readItems()
  }
  displayInfo(): void {
    console.log("Acesta este un mesaj")
  }

  createItem(item: any) {
    let body={
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl
    }
    this.httpClient
      .post(this.apiUrl,body)
      .subscribe((response:any)=> {
        this.readItems();
    })
  }

  readItems() {
    this.httpClient.get(this.apiUrl).subscribe((response:any) => {
      console.log(response.data);
      this.itemsList = response.data;
      this.itemSubject.next(response.data);
    })
  }

  // this.apiUrl+"/"+id cncatenasre ca in java

  deleteItem(id:string) {
    this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe((response:any) => {
      console.log(response);
      this.readItems();
    })
  }

  getItemsList(){
    return this.itemSubject.asObservable(); //as observable ne permite sa dam subscribe si sa fim la zi cu toate modificarile
  }

  updateItem(item:any) {
    let body={
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl
    };
    this.httpClient.put(this.apiUrl,body).subscribe((response:any) => {
      console.log(response);
      this.readItems();
    })
  }
}
