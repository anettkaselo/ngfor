import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
 dogs = [
   { name: "Muri", age: 10, owner: "Mati" },
   { name: "Muki", age: 5, owner: "Kati" },
   { name: "Auh", age: 1, owner: "Linda" },
   { name: "Pontu", age: 7, owner: "Meelis" },
   { name: "Lontu", age: 14, owner : "Kai" },
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
