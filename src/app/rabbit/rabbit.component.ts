import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rabbit',
  templateUrl: './rabbit.component.html',
  styleUrls: ['./rabbit.component.css']
})
export class RabbitComponent implements OnInit {
  rabbits = [
    { breed: { name: "One", origin: "England"}, children: ["Gustav", "Miina", "Milvi"] },
    { breed: { name: "Two", origin: "Sweden"}, children: ["Karl", "Aron"] },
    { breed: { name: "Three", origin: "Denmark"}, children: ["Anne", "Meelis", "Peeter"] },
    { breed: { name: "Four", origin: "Finland"}, children: [] },
    { breed: { name: "Five", origin: "France"}, children: ["Laps"] },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
