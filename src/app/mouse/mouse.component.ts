import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent implements OnInit {
  mice = [
    { name: "Miki", home: "DisneyLand", image: "https://akns-images.eonline.com/eol_images/Entire_Site/20121016/634.mm.cm.111612.jpg?fit=around%7C634:auto&output-quality=90&crop=634:auto;center,top"},
    { name: "Hiir", age: 5, owner: "Kalle" },
    { name: "Minni", age: 7, image: "https://i.pinimg.com/originals/46/f1/41/46f14194e2500a1fd0545f5e33e4003e.jpg"},
    { name: "Koduhiir", owner: "Sille", children: 1 },
    { name: "Õuehiir", age: 14, owner : "Malle"},
  ]
S
  constructor() { }

  ngOnInit(): void {
  }

}
