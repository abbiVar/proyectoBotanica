import { Component, OnInit } from '@angular/core';
import { Planta } from '../modelos/planta';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  plantas:Planta[]=[]
  constructor() { 
    this.plantas = [
      {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"pincha"
    },
    {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"pincha"
    },
    {
      nombre:"cactus",
      precio:500,
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK57tcS_2XHieged9pHLbSm38Or1I97Kykpg&usqp=CAU",
      descripcion:"pincha"
    }
  ]
  }

  ngOnInit(): void {
  }

}
