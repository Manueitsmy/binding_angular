import { Component, Injectable, Input, OnInit } from "@angular/core";
import { users } from "../users-data";

@Injectable({
  providedIn: 'root',
})

export class DataService implements OnInit{
 @Input() users = users;
  constructor() {}

  getUsersData() {
    // requete API 
    return this.users;
   }

  ngOnInit(){
    this.users = this.getUsersData();
  }
}
